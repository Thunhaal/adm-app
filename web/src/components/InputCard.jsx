import React from 'react';
import { Brain } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

function InputCard({ scenario, setScenario, option1, setOption1, option2, setOption2, onAnalyze, isLoading }) {
  return (
    <div className="glass-card rounded-2xl p-6 border-primary/30 hover:border-primary/50 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Brain className="w-6 h-6 text-primary" />
        Ethical Decision Analysis
      </h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="scenario" className="text-sm font-medium mb-2 block">
            Describe Your Scenario
          </Label>
          <Textarea
            id="scenario"
            placeholder="Enter the ethical dilemma or decision you're facing..."
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            disabled={isLoading}
            className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
          />
        </div>

        <div>
          <Label htmlFor="option1" className="text-sm font-medium mb-2 block">
            Option 1
          </Label>
          <Input
            id="option1"
            placeholder="First possible action..."
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            disabled={isLoading}
            className="bg-background/50 border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <Label htmlFor="option2" className="text-sm font-medium mb-2 block">
            Option 2
          </Label>
          <Input
            id="option2"
            placeholder="Second possible action..."
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            disabled={isLoading}
            className="bg-background/50 border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <Button
          onClick={onAnalyze}
          disabled={isLoading || !scenario || !option1 || !option2}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 hover:neon-glow-blue transition-all duration-200 active:scale-[0.98]"
        >
          <Brain className="w-5 h-5 mr-2" />
          Run Dharma Analysis
        </Button>
      </div>
    </div>
  );
}

export default InputCard;