export interface XMLAttribute {
  name: string;
  value: string;
}

export interface XMLNode {
  id: string;
  name: string;
  attributes: XMLAttribute[];
  children: XMLNode[];
  content: string | null;
}

export interface ParseResult {
  root: XMLNode | null;
  error: string | null;
}