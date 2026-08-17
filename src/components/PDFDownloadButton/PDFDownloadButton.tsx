'use client';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import React, { useState } from 'react';

import { registerFonts } from '@/lib/pdf/fonts';

// Ensure fonts are registered before rendering
if (typeof window !== 'undefined') {
  registerFonts();
}

interface PDFDownloadButtonProps {
  document: React.ReactElement<any>;
  fileName: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ 
  document, 
  fileName, 
  label = 'PDF डाउनलोड करें',
  className,
  style
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleDownload = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const { pdf } = await import('@react-pdf/renderer');
      const blob = await pdf(document).toBlob();
      const url = URL.createObjectURL(blob);
      const link = window.document.createElement('a');
      link.href = url;
      link.download = fileName;
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('PDF Generation Error:', err);
      setError(t('common.calcError', 'PDF तैयार नहीं हो सकी। कृपया दोबारा प्रयास करें।'));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <button 
        onClick={handleDownload} 
        disabled={isGenerating}
        className={className}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: isGenerating ? '#9ca3af' : '#d97706',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isGenerating ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'background-color 0.2s',
          ...style
        }}
      >
        {isGenerating ? 'PDF तैयार हो रही है...' : label}
      </button>
      {error && <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>{error}</span>}
    </div>
  );
};
