'use client';

import { useState, useEffect } from 'react';
import { LLMConfig, LLMProvider } from '@/types';

const STORAGE_KEY = 'word-association-llm-config';

const defaultConfig: LLMConfig = {
  provider: 'gemini',
  geminiApiKey: '',
  localUrl: '',
  modelName: '',
};

export function useLLMConfig() {
  const [config, setConfig] = useState<LLMConfig>(defaultConfig);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load config from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch {
        console.error('Failed to parse saved LLM config');
      }
    }
    setIsLoaded(true);
  }, []);

  // Save config to localStorage when it changes
  const updateConfig = (newConfig: Partial<LLMConfig>) => {
    const updated = { ...config, ...newConfig };
    setConfig(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const setProvider = (provider: LLMProvider) => {
    updateConfig({ provider });
  };

  const setGeminiApiKey = (apiKey: string) => {
    updateConfig({ geminiApiKey: apiKey });
  };

  const setLocalUrl = (url: string) => {
    updateConfig({ localUrl: url });
  };

  const setModelName = (name: string) => {
    updateConfig({ modelName: name });
  };

  const isConfigValid = (): boolean => {
    switch (config.provider) {
      case 'gemini':
        return !!config.geminiApiKey;
      case 'lmstudio':
      case 'ollama':
        return true; // Local URL has defaults
      default:
        return false;
    }
  };

  return {
    config,
    isLoaded,
    isConfigValid,
    setProvider,
    setGeminiApiKey,
    setLocalUrl,
    setModelName,
    updateConfig,
  };
}
