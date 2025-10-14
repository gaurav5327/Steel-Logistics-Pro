import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from './Navbar';

const WhatIfAnalysis = () => {
  const [scenario, setScenario] = useState({
    vesselDelay: 0,
    portCapacityChange: 0,
    fuelCostChange: 0,
    demurrageRate: 5000,
    railwayAvailability: 100
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScenarioChange = (field, value) => {
    setScenario(prev => ({ ...prev, [field]: parseFloat(value) || 0 }));
  };

  const runWhatIfAnalysis = async () => {
    setLoading(true);
    try {
      // Simulate what-if analysis
      const baselineCost = 2500000; // Base cost in INR
      const delayImpact = scenario.vesselDelay * scenario.demurrageRate * 24; // Per day
      const capacityImpact = (scenario.portCapacityChange / 100) * baselineCost * 0.1;
      const fuelImpact = (scenario.fuelCostChange / 100) * baselineCost * 0.15;
      const railwayImpact = ((100 - scenario.railwayAvailability) / 100) * baselineCost * 0.05;
      
      const totalCostChange = delayImpact + capacityImpact + fuelImpact + railwayImpact;
      const newTotalCost = baselineCost + totalCostChange;
      const percentageChange = ((newTotalCost - baselineCost) / baselineCost) * 100;

      setResults({
        baselineCost,
        newTotalCost,
        costChange: totalCostChange,
        percentageChange,
        breakdown: {
          delayImpact,
          capacityImpact,
          fuelImpact,
          railwayImpact
        }
      });
      
      toast.success('What-if analysis completed!');
    } catch (error) {
      toast.error('Analysis failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="bg-white shadow-sm border-b rounded-2xl p-4 sm:p-6 lg:p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              What-If Analysis & Scenario Planning
            </h1>
            <p className="text-gray-600">
              Simulate different scenarios to understand cost impacts and optimize decision making
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Scenario Configuration */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Scenario Parameters</h2>
              
              <div className="space-y-6">
                {/* Vessel Delay */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vessel Delay (days)
                  </label>
                  <input
                    type="number"
                    value={scenario.vesselDelay}
                    onChange={(e) => handleScenarioChange('vesselDelay', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="0.5"
                    min="0"
                    max="30"
                  />
                  <p className="text-xs text-gray-500 mt-1">Impact on demurrage costs</p>
                </div>

                {/* Port Capacity Change */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Port Capacity Change (%)
                  </label>
                  <input
                    type="number"
                    value={scenario.portCapacityChange}
                    onChange={(e) => handleScenarioChange('portCapacityChange', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="5"
                    min="-50"
                    max="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Positive = capacity increase, Negative = reduction</p>
                </div>

                {/* Fuel Cost Change */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fuel Cost Change (%)
                  </label>
                  <input
                    type="number"
                    value={scenario.fuelCostChange}
                    onChange={(e) => handleScenarioChange('fuelCostChange', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="5"
                    min="-30"
                    max="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Impact on ocean freight costs</p>
                </div>

                {/* Demurrage Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Demurrage Rate (INR/hour)
                  </label>
                  <input
                    type="number"
                    value={scenario.demurrageRate}
                    onChange={(e) => handleScenarioChange('demurrageRate', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="500"
                    min="1000"
                    max="20000"
                  />
                  <p className="text-xs text-gray-500 mt-1">Cost per hour of vessel delay</p>
                </div>

                {/* Railway Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Railway Rake Availability (%)
                  </label>
                  <input
                    type="number"
                    value={scenario.railwayAvailability}
                    onChange={(e) => handleScenarioChange('railwayAvailability', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="5"
                    min="0"
                    max="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Percentage of required rakes available</p>
                </div>

                <button
                  onClick={runWhatIfAnalysis}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-medium disabled:opacity-50"
                >
                  {loading ? 'Analyzing...' : 'Run What-If Analysis'}
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Analysis Results</h2>
              
              {results ? (
                <div className="space-y-6">
                  {/* Cost Summary */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Cost Impact Summary</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-blue-600">Baseline Cost</p>
                        <p className="text-xl font-bold text-blue-800">
                          ₹{(results.baselineCost / 100000).toFixed(1)}L
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-600">New Total Cost</p>
                        <p className="text-xl font-bold text-blue-800">
                          ₹{(results.newTotalCost / 100000).toFixed(1)}L
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-200">
                      <p className="text-sm text-blue-600">Cost Change</p>
                      <p className={`text-2xl font-bold ${results.costChange >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {results.costChange >= 0 ? '+' : ''}₹{(Math.abs(results.costChange) / 100000).toFixed(1)}L
                        <span className="text-lg ml-2">
                          ({results.percentageChange >= 0 ? '+' : ''}{results.percentageChange.toFixed(1)}%)
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Cost Breakdown</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Vessel Delay Impact</span>
                        <span className={`font-medium ${results.breakdown.delayImpact >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {results.breakdown.delayImpact >= 0 ? '+' : ''}₹{(Math.abs(results.breakdown.delayImpact) / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Port Capacity Impact</span>
                        <span className={`font-medium ${results.breakdown.capacityImpact >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {results.breakdown.capacityImpact >= 0 ? '+' : ''}₹{(Math.abs(results.breakdown.capacityImpact) / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Fuel Cost Impact</span>
                        <span className={`font-medium ${results.breakdown.fuelImpact >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {results.breakdown.fuelImpact >= 0 ? '+' : ''}₹{(Math.abs(results.breakdown.fuelImpact) / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Railway Availability Impact</span>
                        <span className={`font-medium ${results.breakdown.railwayImpact >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {results.breakdown.railwayImpact >= 0 ? '+' : ''}₹{(Math.abs(results.breakdown.railwayImpact) / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Recommendations</h3>
                    <ul className="text-sm text-green-700 space-y-2">
                      {results.breakdown.delayImpact > 50000 && (
                        <li>• Consider alternative ports to reduce vessel delays</li>
                      )}
                      {results.breakdown.railwayImpact > 30000 && (
                        <li>• Improve railway rake scheduling and availability</li>
                      )}
                      {results.breakdown.fuelImpact > 40000 && (
                        <li>• Negotiate better fuel contracts or optimize routes</li>
                      )}
                      {results.percentageChange > 10 && (
                        <li>• Review overall logistics strategy for cost optimization</li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-gray-500">Configure scenario parameters and run analysis to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIfAnalysis;