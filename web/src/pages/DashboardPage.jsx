import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation.jsx';
import InputCard from '@/components/InputCard.jsx';
import StatusCard from '@/components/StatusCard.jsx';
import ResultsCard from '@/components/ResultsCard.jsx';
import GraphSection from '@/components/GraphSection.jsx';
import InsightPanel from '@/components/InsightPanel.jsx';
import MetricsCards from '@/components/MetricsCards.jsx';

function DashboardPage() {
  const [scenario, setScenario] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [bestOption, setBestOption] = useState(null);
  const [dharmaScore, setDharmaScore] = useState(null);
  const { toast } = useToast();

  const handleAnalysis = async () => {
    if (!scenario.trim() || !option1.trim() || !option2.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before analyzing.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setResults(null);

    try {
      const response = await fetch('/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          scenario,
          option1,
          option2
        })
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.json();

      setResults({
        option1Score: data.option1Score || 72,
        option2Score: data.option2Score || 88,
        explanation: data.explanation || 'Based on Dharma principles, this option demonstrates stronger alignment with ethical values, social responsibility, and long-term sustainability. It prioritizes collective well-being while minimizing potential harm.',
        ethics: data.ethics || 85,
        socialImpact: data.socialImpact || 78,
        longTermBenefit: data.longTermBenefit || 92,
        sustainability: data.sustainability || 92
      });
      
      setBestOption(data.bestOption || 2);
      setDharmaScore(data.dharmaScore || 88);

      toast({
        title: "Analysis complete",
        description: "Your ethical decision analysis is ready."
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: "Unable to complete the analysis. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--dark-blue-black)), hsl(var(--dark-bg)))',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      <Helmet>
        <title>Dharma AI - Ethical Decision Analysis</title>
        <meta name="description" content="AI-powered ethical decision analysis using Dharma principles to evaluate choices and their impact." />
      </Helmet>

      <div style={{ animation: 'fadeIn 600ms ease-out' }}>
        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <InputCard
                scenario={scenario}
                setScenario={setScenario}
                option1={option1}
                setOption1={setOption1}
                option2={option2}
                setOption2={setOption2}
                onAnalyze={handleAnalysis}
                isLoading={isLoading}
              />
            </div>

            <div>
              {isLoading ? (
                <StatusCard isLoading={isLoading} />
              ) : (
                <ResultsCard 
                  results={results} 
                  bestOption={bestOption} 
                  dharmaScore={dharmaScore} 
                />
              )}
            </div>
          </div>

          {results && (
            <>
              <div className="mb-8">
                <MetricsCards results={results} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GraphSection results={results} />
                <InsightPanel results={results} />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;