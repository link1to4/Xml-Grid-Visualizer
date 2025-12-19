import React, { useState, useCallback, useEffect, useMemo, useContext, useRef } from 'react';
import { 
  FileCode, 
  Play, 
  Copy, 
  Trash2, 
  AlignLeft, 
  ChevronRight, 
  ChevronDown, 
  AlertCircle,
  Code,
  Upload,
  Maximize2,
  Minimize2,
  CheckCircle2,
  GripHorizontal,
  ChevronsDown
} from 'lucide-react';
import { parseXML, prettifyXML, SAMPLE_XML } from './utils';
import { XMLNode, XMLAttribute } from './types';

// --- Context for Global Actions ---
// Updated to support path-specific expansion
type ViewAction = 
  | { type: 'EXPAND_ALL'; id: number } 
  | { type: 'COLLAPSE_ALL'; id: number }
  | { type: 'EXPAND_PATH'; path: string; id: number };

const GridContext = React.createContext<{
  viewAction: ViewAction | null;
  onCopyXPath: (path: string) => void;
  onExpandPath: (path: string) => void;
}>({
  viewAction: null,
  onCopyXPath: () => {},
  onExpandPath: () => {},
});

// --- Helper Types for Grouping ---
interface GroupedNodes {
  [tagName: string]: XMLNode[];
}

// --- Helper for XPath Indexing ---
const getIndexedPath = (basePath: string, tagName: string, index: number, total: number) => {
  if (total > 1) {
    return `${basePath}/${tagName}[${index + 1}]`;
  }
  return `${basePath}/${tagName}`;
};

// --- Table View Component for Repeated Nodes ---
interface NodeTableProps {
  nodes: XMLNode[];
  tagName: string;
  parentPath: string;
  depth: number;
}

const NodeTable: React.FC<NodeTableProps> = ({ nodes, tagName, parentPath, depth }) => {
  const { viewAction, onCopyXPath } = useContext(GridContext);
  
  const [isExpanded, setIsExpanded] = useState(() => {
    if (viewAction?.type === 'COLLAPSE_ALL') return false;
    if (viewAction?.type === 'EXPAND_ALL') return true;
    return depth < 1; 
  });

  useEffect(() => {
    if (!viewAction) return;
    if (viewAction.type === 'EXPAND_ALL') setIsExpanded(true);
    if (viewAction.type === 'COLLAPSE_ALL') setIsExpanded(false);
    
    // Check if this table is inside the target path being expanded recursively
    // A table logically belongs to the parent path.
    if (viewAction.type === 'EXPAND_PATH') {
      // If the parent path starts with the expanded path, we are inside the subtree
      if (parentPath.startsWith(viewAction.path)) {
        setIsExpanded(true);
      }
    }
  }, [viewAction, parentPath]);

  const columns = useMemo(() => {
    const attrKeys = new Set<string>();
    const childKeys = new Set<string>();

    nodes.forEach(node => {
      node.attributes.forEach(attr => attrKeys.add(attr.name));
      node.children.forEach(child => childKeys.add(child.name));
    });

    return {
      attributes: Array.from(attrKeys).sort(),
      children: Array.from(childKeys).sort(),
    };
  }, [nodes]);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleValueDoubleClick = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    onCopyXPath(path);
  };

  return (
    <div className="border border-gray-300 shadow-sm m-1 bg-white flex flex-col overflow-hidden">
      {/* Table Header */}
      <div 
        onClick={toggleExpand}
        className="bg-gray-100 border-b border-gray-300 px-2 py-1 flex items-center cursor-pointer select-none text-sm hover:bg-gray-200"
      >
        <span className="mr-1 text-gray-600">
          {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </span>
        <span className="font-bold text-gray-900 tracking-wide">
          {tagName} <span className="text-gray-500 font-normal">({nodes.length})</span>
        </span>
      </div>

      {/* Table Body */}
      {isExpanded && (
        <div className="overflow-x-auto custom-scrollbar bg-white">
          <table className="border-collapse w-full text-xs text-left">
            <thead>
              <tr className="bg-white border-b border-gray-200">
                {columns.attributes.map(attr => (
                  <th key={`head-attr-${attr}`} className="p-2 border-r border-gray-200 font-bold text-amber-800 whitespace-nowrap bg-amber-50">
                    @{attr}
                  </th>
                ))}
                {columns.children.map(child => (
                  <th key={`head-child-${child}`} className="p-2 border-r border-gray-200 font-bold text-green-800 whitespace-nowrap">
                    {child}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nodes.map((node, nodeIndex) => {
                const rowPath = `${parentPath}/${tagName}[${nodeIndex + 1}]`;

                return (
                  <tr key={node.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    {columns.attributes.map(attrKey => {
                      const attr = node.attributes.find(a => a.name === attrKey);
                      const attrPath = `${rowPath}/@${attrKey}`;
                      return (
                        <td 
                          key={`${node.id}-attr-${attrKey}`} 
                          className="p-2 border-r border-gray-100 align-top text-gray-900 whitespace-nowrap hover:bg-blue-50 cursor-copy"
                          title={attr ? `XPath: ${attrPath} (Double-click to copy)` : ''}
                          onDoubleClick={(e) => attr && handleValueDoubleClick(e, attrPath)}
                        >
                          {attr ? attr.value : ''}
                        </td>
                      );
                    })}
                    
                    {columns.children.map(childKey => {
                      const matches = node.children.filter(c => c.name === childKey);
                      
                      return (
                        <td key={`${node.id}-child-${childKey}`} className="p-1 border-r border-gray-100 align-top min-w-[80px]">
                          {matches.length === 0 ? (
                            <span className="text-gray-300">-</span>
                          ) : (
                            <div className="flex flex-col gap-1">
                              {matches.map((match, matchIdx) => {
                                  const isLeaf = match.children.length === 0 && match.attributes.length === 0 && match.content !== null;
                                  
                                  const childPath = matches.length > 1 
                                    ? `${rowPath}/${childKey}[${matchIdx + 1}]` 
                                    : `${rowPath}/${childKey}`;

                                  if (isLeaf) {
                                    return (
                                      <div 
                                        key={match.id} 
                                        className="truncate max-w-[200px] text-gray-900 font-medium hover:bg-blue-50 cursor-copy p-0.5 rounded" 
                                        title={`XPath: ${childPath} (Double-click to copy)\nValue: ${match.content}`}
                                        onDoubleClick={(e) => handleValueDoubleClick(e, childPath)}
                                      >
                                        {match.content}
                                      </div>
                                    );
                                  } else {
                                    return <GridNode key={match.id} node={match} depth={0} path={childPath} />;
                                  }
                              })}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// --- Recursive Grid Node Component ---
interface GridNodeProps {
  node: XMLNode;
  depth: number;
  path?: string;
}

const GridNode: React.FC<GridNodeProps> = ({ node, depth, path }) => {
  const { viewAction, onCopyXPath, onExpandPath } = useContext(GridContext);
  
  const currentPath = path || `/${node.name}`;

  const [isExpanded, setIsExpanded] = useState(() => {
    if (viewAction?.type === 'COLLAPSE_ALL') return false;
    if (viewAction?.type === 'EXPAND_ALL') return true;
    return depth < 1;
  });

  useEffect(() => {
    if (!viewAction) return;
    if (viewAction.type === 'EXPAND_ALL') setIsExpanded(true);
    if (viewAction.type === 'COLLAPSE_ALL') setIsExpanded(false);
    
    // If the view action is EXPAND_PATH, check if this node is part of that subtree
    // We expand if our path starts with the target path
    if (viewAction.type === 'EXPAND_PATH') {
      if (currentPath.startsWith(viewAction.path)) {
        setIsExpanded(true);
      }
    }
  }, [viewAction, currentPath]);

  const headerColors = [
    'bg-blue-600',
    'bg-emerald-600',
    'bg-indigo-600',
    'bg-pink-600',
    'bg-amber-600',
    'bg-slate-600'
  ];
  const headerColor = headerColors[depth % headerColors.length];

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleRecursiveExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    onExpandPath(currentPath);
  };

  const handleValueDoubleClick = (e: React.MouseEvent, targetPath: string) => {
    e.stopPropagation();
    onCopyXPath(targetPath);
  };

  const groupedChildren: GroupedNodes = useMemo(() => {
    const groups: GroupedNodes = {};
    node.children.forEach(child => {
      if (!groups[child.name]) {
        groups[child.name] = [];
      }
      groups[child.name].push(child);
    });
    return groups;
  }, [node.children]);

  const hasAttributes = node.attributes.length > 0;
  const hasChildren = node.children.length > 0;
  const hasContent = node.content !== null && node.content !== '';

  return (
    <div className="border border-gray-300 shadow-sm m-1 min-w-[120px] bg-white text-sm overflow-hidden flex flex-col">
      {/* Node Header */}
      <div 
        onClick={toggleExpand}
        className={`${headerColor} text-white px-2 py-1 flex items-center cursor-pointer select-none overflow-hidden group`}
        title={`XPath: ${currentPath}`}
      >
        <div className="flex items-center whitespace-nowrap overflow-hidden">
          <span className="mr-1">
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
          <span className="font-bold tracking-wide">{node.name}</span>
          
          {/* Recursive Expand Button - Only show if has children */}
          {hasChildren && (
            <button 
              onClick={handleRecursiveExpand}
              className="ml-2 p-0.5 rounded hover:bg-white/20 text-white/70 hover:text-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 shrink-0"
              title="Expand all children recursively"
            >
              <ChevronsDown size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Node Body */}
      {isExpanded && (
        <div className="flex flex-col">
          
          {/* Attributes Section */}
          {hasAttributes && (
            <div className="bg-amber-50 border-b border-gray-200 p-1 overflow-x-auto custom-scrollbar">
              <table className="text-xs">
                <tbody>
                  {node.attributes.map((attr, idx) => {
                    const attrPath = `${currentPath}/@${attr.name}`;
                    return (
                      <tr key={idx}>
                        <td className="font-semibold text-amber-800 pr-2 whitespace-nowrap">@{attr.name}:</td>
                        <td 
                          className="text-gray-900 whitespace-nowrap hover:bg-amber-100 cursor-copy px-1 rounded transition-colors"
                          title={`XPath: ${attrPath} (Double-click to copy)`}
                          onDoubleClick={(e) => handleValueDoubleClick(e, attrPath)}
                        >
                          {attr.value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Children & Content Section */}
          <div className="p-1 overflow-x-auto custom-scrollbar">
            <div className="flex flex-col gap-1 w-full items-start">
              
              {/* Text Content */}
              {hasContent && (
                <div 
                  className="p-2 text-gray-900 font-mono whitespace-nowrap bg-gray-50 border border-gray-100 m-1 min-w-[50px] hover:bg-blue-50 cursor-copy transition-colors"
                  title={`XPath: ${currentPath} (Double-click to copy)`}
                  onDoubleClick={(e) => handleValueDoubleClick(e, currentPath)}
                >
                  {node.content}
                </div>
              )}

              {/* Render Grouped Children */}
              {hasChildren && (
                <div className="flex flex-col gap-1 w-full">
                  {Object.keys(groupedChildren).map(tagName => {
                    const group = groupedChildren[tagName];
                    
                    if (group.length > 1) {
                      return (
                        <NodeTable 
                          key={`group-${tagName}`} 
                          nodes={group} 
                          tagName={tagName} 
                          parentPath={currentPath}
                          depth={depth + 1}
                        />
                      );
                    }
                    
                    return (
                      <GridNode 
                        key={group[0].id} 
                        node={group[0]} 
                        depth={depth + 1} 
                        path={`${currentPath}/${tagName}`} 
                      />
                    );
                  })}
                </div>
              )}

              {!hasContent && !hasChildren && !hasAttributes && (
                <div className="text-gray-400 italic text-xs p-1 px-2 whitespace-nowrap">
                  (empty)
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---
const App: React.FC = () => {
  const [inputXml, setInputXml] = useState<string>('');
  const [parsedData, setParsedData] = useState<XMLNode | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [viewAction, setViewAction] = useState<ViewAction | null>(null);

  // --- Resizable Panel State ---
  const [topPanelHeight, setTopPanelHeight] = useState(35); // Percentage
  const isResizing = useRef(false);

  // --- Resizing Logic ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      
      // Calculate percentage based on window height
      // Subtract header height approximation (e.g. 50px) if strictly needed, but simple ratio works fine here
      const newHeight = (e.clientY / window.innerHeight) * 100;
      
      // Limit min/max size (e.g., 10% to 90%)
      if (newHeight > 10 && newHeight < 90) {
        setTopPanelHeight(newHeight);
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const startResizing = () => {
    isResizing.current = true;
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputXml(e.target.value);
    if (error) setError(null);
  };

  const handleParse = useCallback(() => {
    setError(null);
    const { root, error: parseError } = parseXML(inputXml);
    if (parseError) {
      setError(parseError);
      setParsedData(null);
    } else {
      setParsedData(root);
      setViewAction(null);
    }
  }, [inputXml]);

  const handlePrettify = () => {
    try {
      const formatted = prettifyXML(inputXml);
      setInputXml(formatted);
    } catch (e) {
      handleParse();
    }
  };

  const handleClear = () => {
    setInputXml('');
    setParsedData(null);
    setError(null);
    setViewAction(null);
  };

  const handleCopySource = () => {
    navigator.clipboard.writeText(inputXml).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleCopyXPath = useCallback((path: string) => {
    navigator.clipboard.writeText(path).then(() => {
      setToastMessage(`XPath copied: ${path}`);
      setTimeout(() => setToastMessage(null), 3000);
    });
  }, []);
  
  const handleExpandPath = useCallback((path: string) => {
    setViewAction({ type: 'EXPAND_PATH', path, id: Date.now() });
  }, []);

  const handleLoadSample = () => {
    setInputXml(SAMPLE_XML);
    const { root } = parseXML(SAMPLE_XML);
    setParsedData(root);
    setError(null);
    setViewAction(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && (file.type === "text/xml" || file.name.endsWith(".xml") || file.type === "text/plain")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setInputXml(event.target.result as string);
        }
      };
      reader.readAsText(file);
    } else {
      setError("Please drop a valid XML file.");
    }
  };

  const handleExpandAll = () => setViewAction({ type: 'EXPAND_ALL', id: Date.now() });
  const handleCollapseAll = () => setViewAction({ type: 'COLLAPSE_ALL', id: Date.now() });

  return (
    <GridContext.Provider value={{ viewAction, onCopyXPath: handleCopyXPath, onExpandPath: handleExpandPath }}>
      <div className="flex flex-col h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden">
        
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm flex items-center justify-between shrink-0 z-10 h-[50px]">
          <div className="flex items-center space-x-2 text-blue-700">
            <Code className="w-6 h-6" />
            <h1 className="text-xl font-bold tracking-tight">XML Grid Visualizer</h1>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            Inspired by xmlgrid.net
          </div>
        </header>

        {/* Main Content Split */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          
          {/* Source Editor - Resizable */}
          <section 
            style={{ height: `${topPanelHeight}%` }}
            className="w-full flex flex-col border-b border-gray-300 bg-white shrink-0 relative min-h-[50px]"
          >
            <div className="bg-gray-100 border-b border-gray-200 p-2 flex flex-wrap gap-2 items-center justify-between shrink-0">
              <div className="flex gap-2">
                <button 
                  onClick={handleParse}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded shadow-sm transition-colors"
                >
                  <Play size={14} /> Submit
                </button>
                <button 
                  onClick={handlePrettify}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-medium rounded shadow-sm transition-colors"
                >
                  <AlignLeft size={14} /> Prettify
                </button>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={handleLoadSample}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 text-xs font-medium rounded transition-colors"
                >
                  <FileCode size={14} /> Sample
                </button>
                <button 
                  onClick={handleCopySource}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-200 text-xs font-medium rounded transition-colors"
                  title="Copy to Clipboard"
                >
                  <Copy size={14} /> {isCopied ? 'Copied!' : 'Copy'}
                </button>
                <button 
                  onClick={handleClear}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 text-xs font-medium rounded transition-colors"
                  title="Clear Input"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            <div 
              className="flex-1 relative overflow-hidden"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <textarea
                className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none bg-slate-900 text-gray-100 selection:bg-blue-700"
                placeholder="Paste your XML here or drop a file..."
                value={inputXml}
                onChange={handleInputChange}
                spellCheck={false}
              />
              
              {isDragging && (
                <div className="absolute inset-0 bg-blue-500/20 border-2 border-blue-500 border-dashed flex items-center justify-center pointer-events-none z-20 backdrop-blur-sm">
                  <div className="bg-white p-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce">
                    <Upload className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-blue-700">Drop XML File Here</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="absolute bottom-4 left-4 right-4 bg-red-900/90 border border-red-700 text-white rounded-lg p-3 flex items-start gap-2 shadow-lg animate-fade-in-up z-10 backdrop-blur">
                  <AlertCircle className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold block text-red-200">Parsing Error</span>
                    {error}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Resizer Handle */}
          <div 
            className="h-2 bg-gray-100 hover:bg-blue-500 cursor-row-resize flex items-center justify-center transition-colors z-20 shrink-0 border-y border-gray-300"
            onMouseDown={startResizing}
            title="Drag to resize"
          >
             <GripHorizontal className="w-8 h-4 text-gray-400 opacity-50 pointer-events-none" />
          </div>

          {/* Grid View - Takes remaining space */}
          <section className="flex-1 bg-gray-100 overflow-hidden flex flex-col relative min-h-[50px]">
            
            <div className="bg-gray-50 border-b border-gray-200 p-2 px-4 flex items-center justify-between shrink-0">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Grid View
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={handleExpandAll}
                  className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 text-xs rounded shadow-sm transition-colors"
                  title="Expand All Nodes"
                >
                  <Maximize2 size={12} /> Expand All
                </button>
                <button 
                  onClick={handleCollapseAll}
                  className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 text-xs rounded shadow-sm transition-colors"
                  title="Collapse All Nodes"
                >
                  <Minimize2 size={12} /> Collapse All
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 custom-scrollbar relative">
              {parsedData ? (
                <div className="inline-block min-w-full pb-10">
                  <GridNode node={parsedData} depth={0} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <Code className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-sm font-medium">No valid XML data to display</p>
                  <p className="text-xs mt-1">Paste XML above, drag & drop a file, or click "Sample"</p>
                </div>
              )}

              {/* Toast Notification for XPath Copy */}
              {toastMessage && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 z-50 animate-fade-in-up text-sm">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span>{toastMessage}</span>
                </div>
              )}
            </div>
          </section>

        </main>
      </div>
    </GridContext.Provider>
  );
};

export default App;