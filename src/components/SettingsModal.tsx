'use client';

import { useState } from 'react';
import { LLMConfig, LLMProvider } from '@/types';
import { testLocalLLMConnection } from '@/lib/llm';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: LLMConfig;
  onUpdateConfig: (config: Partial<LLMConfig>) => void;
}

export default function SettingsModal({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}: SettingsModalProps) {
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleProviderChange = (provider: LLMProvider) => {
    onUpdateConfig({ provider });
    setTestStatus('idle');
  };

  const handleTestConnection = async () => {
    setTestStatus('testing');
    const success = await testLocalLLMConnection(config);
    setTestStatus(success ? 'success' : 'error');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          LLM 설정
        </h2>

        {/* Provider Selection */}
        <div className="space-y-3 mb-6">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            LLM 제공자 선택
          </label>

          <div className="space-y-2">
            {/* Gemini */}
            <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <input
                type="radio"
                name="provider"
                value="gemini"
                checked={config.provider === 'gemini'}
                onChange={() => handleProviderChange('gemini')}
                className="w-4 h-4 text-blue-600"
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">Gemini (클라우드)</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Google API 키 필요</p>
              </div>
            </label>

            {/* LM Studio */}
            <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <input
                type="radio"
                name="provider"
                value="lmstudio"
                checked={config.provider === 'lmstudio'}
                onChange={() => handleProviderChange('lmstudio')}
                className="w-4 h-4 text-blue-600"
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">LM Studio (로컬)</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">로컬에서 실행 중이어야 함</p>
              </div>
            </label>

            {/* Ollama */}
            <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <input
                type="radio"
                name="provider"
                value="ollama"
                checked={config.provider === 'ollama'}
                onChange={() => handleProviderChange('ollama')}
                className="w-4 h-4 text-blue-600"
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">Ollama (로컬)</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">OLLAMA_ORIGINS=* 설정 필요</p>
              </div>
            </label>
          </div>
        </div>

        {/* Provider-specific Settings */}
        {config.provider === 'gemini' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gemini API 키
            </label>
            <input
              type="password"
              value={config.geminiApiKey || ''}
              onChange={(e) => onUpdateConfig({ geminiApiKey: e.target.value })}
              placeholder="AIza..."
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Google AI Studio
              </a>
              에서 API 키를 발급받을 수 있습니다.
            </p>
          </div>
        )}

        {(config.provider === 'lmstudio' || config.provider === 'ollama') && (
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                서버 URL
              </label>
              <input
                type="text"
                value={config.localUrl || ''}
                onChange={(e) => onUpdateConfig({ localUrl: e.target.value })}
                placeholder={config.provider === 'lmstudio' ? 'http://localhost:1234' : 'http://localhost:11434'}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                모델 이름 (선택)
              </label>
              <input
                type="text"
                value={config.modelName || ''}
                onChange={(e) => onUpdateConfig({ modelName: e.target.value })}
                placeholder="llama3.3"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Connection Test */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleTestConnection}
                disabled={testStatus === 'testing'}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
              >
                {testStatus === 'testing' ? '테스트 중...' : '연결 테스트'}
              </button>

              {testStatus === 'success' && (
                <span className="text-green-600 dark:text-green-400 text-sm">
                  ✓ 연결 성공
                </span>
              )}
              {testStatus === 'error' && (
                <span className="text-red-600 dark:text-red-400 text-sm">
                  ✗ 연결 실패
                </span>
              )}
            </div>

            {/* CORS Warning */}
            <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-sm">
              <p className="font-medium mb-1">⚠️ CORS 설정 필요</p>
              {config.provider === 'lmstudio' ? (
                <p>LM Studio에서 Settings → Server → Enable CORS를 활성화하세요.</p>
              ) : (
                <p>Ollama 실행 시 OLLAMA_ORIGINS=* 환경변수를 설정하세요.</p>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
