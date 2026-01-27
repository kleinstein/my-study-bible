'use client';

import { WordFilter } from '@/types';

interface FilterOptionsProps {
  filter: WordFilter;
  onFilterChange: (filter: WordFilter) => void;
}

const filterOptions: { value: WordFilter; label: string }[] = [
  { value: 'mixed', label: '동사 5 + 명사 5' },
  { value: 'verb', label: '동사만' },
  { value: 'noun', label: '명사만' },
  { value: 'all', label: '전체' },
];

export default function FilterOptions({ filter, onFilterChange }: FilterOptionsProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">품사 필터:</span>
      <div className="flex gap-1">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onFilterChange(option.value)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              filter === option.value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
