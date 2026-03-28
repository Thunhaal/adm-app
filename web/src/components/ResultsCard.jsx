import React from 'react';

function ResultsCard({ results, bestOption, dharmaScore }) {
  if (!results) return null;

  const { option1Score, option2Score } = results;

  return (
    <div className="glass-card rounded-2xl p-6 border-primary/30" style={{ animation: 'fadeIn 600ms ease-out' }}>
      <h2 className="text-xl font-semibold mb-6">Analysis Results</h2>

      <div className="space-y-6">
        <div style={{ animation: 'fadeIn 600ms ease-out 150ms backwards' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Option 1 Score</span>
            <span className="text-sm font-bold">{option1Score}%</span>
          </div>
          <div className="h-3 bg-background/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full"
              style={{
                width: `${option1Score}%`,
                animation: 'progressFill 1s ease-out'
              }}
            />
          </div>
        </div>

        <div style={{ animation: 'fadeIn 600ms ease-out 300ms backwards' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Option 2 Score</span>
            <span className="text-sm font-bold">{option2Score}%</span>
          </div>
          <div className="h-3 bg-background/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-secondary rounded-full"
              style={{
                width: `${option2Score}%`,
                animation: 'progressFill 1s ease-out'
              }}
            />
          </div>
        </div>

        <div 
          className={`mt-8 p-6 rounded-xl ${
            bestOption === 1 ? 'border-2 border-primary neon-glow-blue' : 'border-2 border-secondary neon-glow-purple'
          }`}
          style={{ animation: 'fadeIn 600ms ease-out 450ms backwards' }}
        >
          <p className="text-sm text-muted-foreground mb-2">Dharma Score</p>
          <p className="text-4xl font-bold gradient-text-neon">{dharmaScore}%</p>
          <p className="text-sm mt-2">
            <span className="font-medium">Best Option:</span> Option {bestOption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultsCard;