export interface WikiDocument {
  documentId: number;
  title: string;
  contents: string;
  writer: string;
  generateTime: string;
}

export interface WriteDocumentContent {
  title: string;
  contents: string;
  writer: string;
}
