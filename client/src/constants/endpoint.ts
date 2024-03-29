const ENDPOINT = {
  POST_DOCUMENT: '/document',
  UPDATE_DOCUMENT: '/document',
  GET_DOCUMENT_BY_TITLE: '/document',
  GET_RECENTLY_DOCUMENTS: '/document/recent',
  GET_DOCUMENT_LOGS: (title: string) => `document/${title}/log`,
} as const;

export default ENDPOINT;
