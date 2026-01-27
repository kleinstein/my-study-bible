'use client';

import { useState, useCallback } from 'react';
import WordGraph from '@/components/WordGraph';
import WordDefinition from '@/components/WordDefinition';
import FilterOptions from '@/components/FilterOptions';
import SettingsModal from '@/components/SettingsModal';
import { useLLMConfig } from '@/hooks/useLLMConfig';
import { fetchWordData } from '@/lib/llm';
import { WordData, WordFilter, RelatedWord } from '@/types';

export default function Home() {
  const { config, isLoaded, isConfigValid, updateConfig } = useLLMConfig();

  const [inputWord, setInputWord] = useState('');
  const [centerWord, setCenterWord] = useState('');
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedWordData, setSelectedWordData] = useState<WordData | null>(null);
  const [filter, setFilter] = useState<WordFilter>('mixed');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [unknownWords, setUnknownWords] = useState<Set<string>>(new Set());

  // Search for a word
  const handleSearch = useCallback(async (word: string) => {
    if (!word.trim()) return;
    if (!isConfigValid()) {
      setError('LLM 설정을 먼저 완료해주세요.');
      setIsSettingsOpen(true);
      return;
    }

    setIsLoading(true);
    setError(null);
    setSelectedWord(null);
    setSelectedWordData(null);

    try {
      const data = await fetchWordData(word.trim().toLowerCase(), config, filter);
      setWordData(data);
      setCenterWord(word.trim().toLowerCase());
      setInputWord('');
    } catch (err) {
      setError(err instanceof Error ? err.message : '단어를 가져오는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, [config, filter, isConfigValid]);

  // Handle word selection in graph
  const handleWordSelect = useCallback(async (word: string) => {
    setSelectedWord(word);

    if (word === centerWord && wordData) {
      setSelectedWordData(wordData);
      return;
    }

    // Find related word info
    const relatedWord = wordData?.relatedWords.find(rw => rw.word === word);
    if (relatedWord) {
      // For related words, we might want to fetch full data or use brief info
      setSelectedWordData({
        word: relatedWord.word,
        definitions: [{
          partOfSpeech: relatedWord.partOfSpeech,
          meaning: relatedWord.briefMeaning,
          examples: [],
        }],
        relatedWords: [],
      });
    }
  }, [centerWord, wordData]);

  // Set selected word as center
  const handleSetAsCenter = useCallback(() => {
    if (selectedWord && selectedWord !== centerWord) {
      handleSearch(selectedWord);
    }
  }, [selectedWord, centerWord, handleSearch]);

  // Toggle unknown word
  const handleToggleUnknown = useCallback((word: string) => {
    setUnknownWords(prev => {
      const next = new Set(prev);
      if (next.has(word)) {
        next.delete(word);
      } else {
        next.add(word);
      }
      return next;
    });
  }, []);

  // Handle filter change
  const handleFilterChange = useCallback((newFilter: WordFilter) => {
    setFilter(newFilter);
    if (centerWord) {
      handleSearch(centerWord);
    }
  }, [centerWord, handleSearch]);

  // Get current display data
  const displayWord = selectedWord || centerWord;
  const displayData = selectedWord === centerWord ? wordData : selectedWordData;
  const isDisplayCenter = displayWord === centerWord;
  const selectedRelatedWord = wordData?.relatedWords.find(rw => rw.word === selectedWord);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Word Association
          </h1>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            title="설정"
          >
            <SettingsIcon />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Upper Section - Graph */}
        <div className="flex-1 min-h-[50vh] bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="h-full flex flex-col p-4">
            {/* Search Input */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  value={inputWord}
                  onChange={(e) => setInputWord(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(inputWord)}
                  placeholder="영어 단어를 입력하세요..."
                  disabled={isLoading}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                />
              </div>
              <button
                onClick={() => handleSearch(inputWord)}
                disabled={isLoading || !inputWord.trim()}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '검색 중...' : '검색'}
              </button>
            </div>

            {/* Filter and Set as Center Button */}
            <div className="flex items-center justify-between mb-4">
              <FilterOptions filter={filter} onFilterChange={handleFilterChange} />

              {selectedWord && selectedWord !== centerWord && (
                <button
                  onClick={handleSetAsCenter}
                  className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                >
                  중심단어로 지정
                </button>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Graph */}
            <div className="flex-1 min-h-[300px]">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <WordGraph
                  centerWord={centerWord}
                  relatedWords={wordData?.relatedWords || []}
                  onWordSelect={handleWordSelect}
                  selectedWord={selectedWord}
                />
              )}
            </div>
          </div>
        </div>

        {/* Lower Section - Definition */}
        <div className="h-[40vh] bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <WordDefinition
            word={displayWord}
            definitions={displayData?.definitions || []}
            relatedWord={selectedRelatedWord}
            isCenter={isDisplayCenter}
            onMarkUnknown={handleToggleUnknown}
            isUnknown={unknownWords.has(displayWord)}
          />
        </div>
      </main>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onUpdateConfig={updateConfig}
      />
    </div>
  );
}

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-600 dark:text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
