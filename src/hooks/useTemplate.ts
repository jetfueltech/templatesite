import { useState, useEffect } from 'react';
import { templates } from '../data/templates';
import type { Template } from '../types';

export function useTemplate(id: string | undefined) {
  const [template, setTemplate] = useState<Template | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const currentTemplate = templates.find(t => t.id === id);
    setTemplate(currentTemplate || null);
    setLoading(false);
  }, [id]);

  return { template, loading };
}