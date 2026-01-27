// LLM Provider Types
export type LLMProvider = 'gemini' | 'lmstudio' | 'ollama';

export interface LLMConfig {
  provider: LLMProvider;
  geminiApiKey?: string;
  localUrl?: string;
  modelName?: string;
}

// Word Data Types
export interface WordDefinition {
  partOfSpeech: string;
  meaning: string;
  examples: string[];
}

export interface RelatedWord {
  word: string;
  partOfSpeech: 'verb' | 'noun' | 'adjective' | 'adverb';
  briefMeaning: string;
}

export interface WordData {
  word: string;
  definitions: WordDefinition[];
  relatedWords: RelatedWord[];
}

// Graph Types
export interface GraphNode {
  id: string;
  word: string;
  isCenter: boolean;
  partOfSpeech?: string;
  // Added by react-force-graph at runtime
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

// Filter Types
export type WordFilter = 'all' | 'verb' | 'noun' | 'mixed';

// User Data Types
export interface UnknownWord {
  word: string;
  addedAt: Date;
  userId: string;
}
