'use client';

import { WordDefinition as WordDefinitionType, RelatedWord } from '@/types';

interface WordDefinitionProps {
  word: string;
  definitions: WordDefinitionType[];
  relatedWord?: RelatedWord;
  isCenter: boolean;
  onMarkUnknown?: (word: string) => void;
  isUnknown?: boolean;
}

export default function WordDefinition({
  word,
  definitions,
  relatedWord,
  isCenter,
  onMarkUnknown,
  isUnknown = false,
}: WordDefinitionProps) {
  if (!word) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        단어를 선택하면 뜻이 여기에 표시됩니다
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      {/* Word Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {word}
          </h2>
          {relatedWord && !isCenter && (
            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              {relatedWord.partOfSpeech} - {relatedWord.briefMeaning}
            </span>
          )}
        </div>

        {/* Mark as Unknown Button */}
        {onMarkUnknown && (
          <button
            onClick={() => onMarkUnknown(word)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              isUnknown
                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {isUnknown ? (
              <>
                <CheckIcon />
                모르는 단어
              </>
            ) : (
              <>
                <PlusIcon />
                모르는 단어로 표시
              </>
            )}
          </button>
        )}
      </div>

      {/* Definitions */}
      <div className="space-y-4">
        {definitions.map((def, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-400 pl-4 py-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 text-xs font-semibold rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                {def.partOfSpeech}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-200 mb-3">
              {def.meaning}
            </p>

            {/* Examples */}
            {def.examples && def.examples.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  예문
                </p>
                {def.examples.map((example, exIndex) => (
                  <p
                    key={exIndex}
                    className="text-sm text-gray-600 dark:text-gray-300 italic pl-2 border-l-2 border-gray-200 dark:border-gray-600"
                  >
                    &ldquo;{example}&rdquo;
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Icons
function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
