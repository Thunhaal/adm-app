import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function GraphSection({ results }) {
  const data = results ? [
    { name: 'Ethics', value: results.ethics || 85 },
    { name: 'Social Impact', value: results.socialImpact || 78 },
    { name: 'Long-term Benefit', value: results.longTermBenefit || 92 }
  ] : [
    { name: 'Ethics', value: 85 },
    { name: 'Social Impact', value: 78 },
    { name: 'Long-term Benefit', value: 92 }
  ];

  return (
    <div className="glass-card rounded-2xl p-6 border-primary/30" style={{ animation: 'fadeIn 600ms ease-out' }}>
      <h2 className="text-xl font-semibold mb-6">Impact Metrics</h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
          />
          <Bar 
            dataKey="value" 
            fill="url(#colorGradient)"
            radius={[8, 8, 0, 0]}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="100%" stopColor="#B026FF" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphSection;