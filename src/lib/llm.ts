import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';
import { LLMConfig, WordData, WordFilter } from '@/types';

const WORD_PROMPT = (word: string, filter: WordFilter) => {
  const filterInstruction = filter === 'verb'
    ? '동사만 10개'
    : filter === 'noun'
    ? '명사만 10개'
    : filter === 'mixed'
    ? '동사 5개와 명사 5개'
    : '품사 상관없이 연관도가 높은 단어 10개';

  return `영어 단어 "${word}"에 대해 다음 정보를 JSON 형식으로 제공해주세요:

1. definitions: 이 단어의 뜻을 한국어로 설명 (품사별로 구분, 각 뜻에 영어 예문 2개씩)
2. relatedWords: 이 단어와 연관된 영어 단어 (${filterInstruction})

다음 JSON 형식으로만 응답해주세요 (다른 텍스트 없이):
{
  "word": "${word}",
  "definitions": [
    {
      "partOfSpeech": "품사 (영어로)",
      "meaning": "한국어 뜻 설명",
      "examples": ["영어 예문 1", "영어 예문 2"]
    }
  ],
  "relatedWords": [
    {
      "word": "연관 단어",
      "partOfSpeech": "verb 또는 noun 또는 adjective 또는 adverb",
      "briefMeaning": "간단한 한국어 뜻"
    }
  ]
}`;
};

export async function fetchWordData(
  word: string,
  config: LLMConfig,
  filter: WordFilter = 'mixed'
): Promise<WordData> {
  const prompt = WORD_PROMPT(word, filter);

  switch (config.provider) {
    case 'gemini':
      return fetchFromGemini(prompt, config.geminiApiKey!);
    case 'lmstudio':
    case 'ollama':
      return fetchFromLocalLLM(prompt, config);
    default:
      throw new Error('Unknown LLM provider');
  }
}

async function fetchFromGemini(prompt: string, apiKey: string): Promise<WordData> {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Failed to parse LLM response');
  }

  return JSON.parse(jsonMatch[0]) as WordData;
}

async function fetchFromLocalLLM(prompt: string, config: LLMConfig): Promise<WordData> {
  const baseUrl = config.localUrl || (config.provider === 'lmstudio'
    ? 'http://localhost:1234'
    : 'http://localhost:11434');

  const openai = new OpenAI({
    baseURL: `${baseUrl}/v1`,
    apiKey: 'not-needed',
    dangerouslyAllowBrowser: true, // Required for browser-side calls
  });

  const completion = await openai.chat.completions.create({
    model: config.modelName || 'local-model',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant that provides word definitions and related words in JSON format.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  const text = completion.choices[0]?.message?.content || '';

  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Failed to parse LLM response');
  }

  return JSON.parse(jsonMatch[0]) as WordData;
}

// Test connection to local LLM
export async function testLocalLLMConnection(config: LLMConfig): Promise<boolean> {
  try {
    const baseUrl = config.localUrl || (config.provider === 'lmstudio'
      ? 'http://localhost:1234'
      : 'http://localhost:11434');

    const response = await fetch(`${baseUrl}/v1/models`, {
      method: 'GET',
    });

    return response.ok;
  } catch {
    return false;
  }
}
