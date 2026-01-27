'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { RelatedWord } from '@/types';

// Dynamically import ForceGraph2D to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph').then(mod => mod.ForceGraph2D), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  ),
});

interface WordGraphProps {
  centerWord: string;
  relatedWords: RelatedWord[];
  onWordSelect: (word: string) => void;
  selectedWord: string | null;
}

interface NodeObject {
  id: string;
  word: string;
  isCenter: boolean;
  partOfSpeech?: string;
  x?: number;
  y?: number;
}

interface LinkObject {
  source: string | NodeObject;
  target: string | NodeObject;
}

interface GraphDataType {
  nodes: NodeObject[];
  links: LinkObject[];
}

export default function WordGraph({
  centerWord,
  relatedWords,
  onWordSelect,
  selectedWord,
}: WordGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Build graph data
  const graphData: GraphDataType = {
    nodes: [
      { id: centerWord, word: centerWord, isCenter: true },
      ...relatedWords.map((rw) => ({
        id: rw.word,
        word: rw.word,
        isCenter: false,
        partOfSpeech: rw.partOfSpeech,
      })),
    ],
    links: relatedWords.map((rw) => ({
      source: centerWord,
      target: rw.word,
    })),
  };

  const handleNodeClick = useCallback(
    (node: NodeObject) => {
      onWordSelect(node.word);
    },
    [onWordSelect]
  );

  const getNodeColor = useCallback((node: NodeObject) => {
    if (node.isCenter) return '#3b82f6'; // blue-500
    if (node.word === selectedWord) return '#22c55e'; // green-500

    // Color by part of speech
    switch (node.partOfSpeech) {
      case 'verb':
        return '#f97316'; // orange-500
      case 'noun':
        return '#8b5cf6'; // violet-500
      case 'adjective':
        return '#ec4899'; // pink-500
      case 'adverb':
        return '#14b8a6'; // teal-500
      default:
        return '#6b7280'; // gray-500
    }
  }, [selectedWord]);

  const paintNode = useCallback(
    (node: NodeObject, ctx: CanvasRenderingContext2D) => {
      const label = node.word;
      const fontSize = node.isCenter ? 14 : 12;
      const nodeRadius = node.isCenter ? 8 : 6;
      const x = node.x || 0;
      const y = node.y || 0;

      // Draw node circle
      ctx.beginPath();
      ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
      ctx.fillStyle = getNodeColor(node);
      ctx.fill();

      // Draw border for selected node
      if (node.word === selectedWord) {
        ctx.strokeStyle = '#16a34a'; // green-600
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw label
      ctx.font = `${node.isCenter ? 'bold' : ''} ${fontSize}px Sans-Serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = node.isCenter ? '#1e40af' : '#374151';
      ctx.fillText(label, x, y + nodeRadius + 10);
    },
    [selectedWord, getNodeColor]
  );

  const paintNodePointerArea = useCallback(
    (node: NodeObject, color: string, ctx: CanvasRenderingContext2D) => {
      const x = node.x || 0;
      const y = node.y || 0;
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    },
    []
  );

  if (!centerWord) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        단어를 입력하세요
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      <ForceGraph2D
        graphData={graphData}
        width={dimensions.width}
        height={dimensions.height}
        nodeCanvasObject={paintNode as never}
        nodePointerAreaPaint={paintNodePointerArea as never}
        onNodeClick={handleNodeClick as never}
        linkColor={() => '#d1d5db'}
        linkWidth={1.5}
        d3AlphaDecay={0.05}
        d3VelocityDecay={0.3}
        cooldownTicks={100}
      />
    </div>
  );
}
