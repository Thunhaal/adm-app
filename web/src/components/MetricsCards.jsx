import React from 'react';
import { Heart, Users, Leaf } from 'lucide-react';

function MetricsCards({ results }) {
  const metrics = results ? [
    { 
      label: 'Ethics Score', 
      value: results.ethics || 85, 
      icon: Heart, 
      color: 'primary',
      delay: '0ms'
    },
    { 
      label: 'Social Impact Score', 
      value: results.socialImpact || 78, 
      icon: Users, 
      color: 'secondary',
      delay: '100ms'
    },
    { 
      label: 'Sustainability Score', 
      value: results.sustainability || 92, 
      icon: Leaf, 
      color: 'primary',
      delay: '200ms'
    }
  ] : [
    { 
      label: 'Ethics Score', 
      value: 85, 
      icon: Heart, 
      color: 'primary',
      delay: '0ms'
    },
    { 
      label: 'Social Impact Score', 
      value: 78, 
      icon: Users, 
      color: 'secondary',
      delay: '100ms'
    },
    { 
      label: 'Sustainability Score', 
      value: 92, 
      icon: Leaf, 
      color: 'primary',
      delay: '200ms'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const borderClass = metric.color === 'primary' ? 'border-primary/30' : 'border-secondary/30';
        const iconColorClass = metric.color === 'primary' ? 'text-primary' : 'text-secondary';
        const barColorClass = metric.color === 'primary' ? 'bg-primary' : 'bg-secondary';

        return (
          <div
            key={metric.label}
            className={`glass-card rounded-2xl p-6 ${borderClass}`}
            style={{ animation: `fadeIn 600ms ease-out ${metric.delay} backwards` }}
          >
            <div className="flex items-center justify-between mb-4">
              <Icon className={`w-8 h-8 ${iconColorClass}`} />
              <span className="text-2xl font-bold">{metric.value}%</span>
            </div>
            
            <p className="text-sm font-medium mb-3">{metric.label}</p>
            
            <div className="h-2 bg-background/30 rounded-full overflow-hidden">
              <div 
                className={`h-full ${barColorClass} rounded-full`}
                style={{
                  width: `${metric.value}%`,
                  animation: 'progressFill 1s ease-out'
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MetricsCards;