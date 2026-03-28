import React from 'react';
import { Scale } from 'lucide-react';

function InsightPanel({ results }) {
  if (!results || !results.explanation) return null;

  return (
    <div className="glass-card rounded-2xl p-6 border-primary/30" style={{ animation: 'fadeIn 600ms ease-out' }}>
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Scale className="w-6 h-6 text-primary" />
        Ethical Reasoning
      </h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-primary mb-2">Why This Option Is Better</h3>
          <p className="text-sm leading-relaxed text-foreground/90">
            {results.explanation}
          </p>
        </div>

        <div className="pt-4 border-t border-border/50">
          <h3 className="text-sm font-medium text-secondary mb-2">Dharma-Based Principles</h3>
          <ul className="space-y-2 text-sm text-foreground/90">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Maximizes collective well-being and minimizes harm</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Aligns with long-term sustainable outcomes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Upholds ethical integrity and social responsibility</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InsightPanel;