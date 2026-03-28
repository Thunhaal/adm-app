import React from 'react';
import { Loader2 } from 'lucide-react';

function StatusCard({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="glass-card rounded-2xl p-8 border-secondary/30 text-center" style={{ animation: 'fadeIn 600ms ease-out' }}>
      <div className="flex flex-col items-center gap-6">
        <Loader2 className="w-12 h-12 text-secondary" style={{ animation: 'spinSlow 3s linear infinite' }} />
        
        <p className="text-lg font-medium" style={{ animation: 'fadeIn 600ms ease-out 200ms backwards' }}>
          Analyzing Ethical Impact
        </p>

        <div className="w-full max-w-md">
          <div className="h-2 bg-background/30 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00D9FF, #B026FF)',
                animation: 'progressFill 2s ease-out infinite'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;