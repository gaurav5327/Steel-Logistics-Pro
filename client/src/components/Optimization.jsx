import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';
import { toast } from 'react-hot-toast';
import Navbar from './Navbar';

const Optimization = () => {
  const [optimizationParams, setOptimizationParams] = useState({
    vesselId: '',
    plantIds: '',
    materialType: 'coking_coal',
    priorityMode: 'cost',
    maxPortCalls: 3,
    haldiaSecond: true,
    railwayConstraints: true
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOptimize = async () => {
    setLoading(true);
    try {
      // Simulate comprehensive optimization
      const mockResult = {
        plan: [
          { plant: 'Durgapur Steel Plant', port: 'Haldia', quantity: 25000, cost: 875000, material: 'Coking Coal', railCost: 250000, portCost: 125000, oceanCost: 500000 },
          { plant: 'Bokaro Steel Plant', port: 'Paradip', quantity: 30000, cost: 1050000, material: 'Coking Coal', railCost: 300000, portCost: 150000, oceanCost: 600000 },
          { plant: 'Rourkela Steel Plant', port: 'Paradip', quantity: 20000, cost: 700000, material: 'Limestone', railCost: 200000, portCost: 100000, oceanCost: 400000 },
          { plant: 'Burnpur Steel Plant', port: 'Haldia', quantity: 15000, cost: 525000, material: 'Coking Coal', railCost: 150000, portCost: 75000, oceanCost: 300000 },
          { plant: 'Durgapur Steel Plant', port: 'Visakhapatnam', quantity: 10000, cost: 400000, material: 'Iron Ore', railCost: 120000, portCost: 80000, oceanCost: 200000 }
        ],
        totalCost: 3550000,
        savings: 425000,
        constraints: {
          vesselCapacityUtilized: 95,
          portCallsOptimized: true,
          haldiaSequenceRespected: true,
          railwayRakesAllocated: 85
        },
        timeline: {
          totalDays: 18,
          portDays: 12,
          transitDays: 6
        }
      };

      setResult(mockResult);
      toast.success('Optimization completed successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Optimization failed');
    } finally {
      setLoading(false);
    }
  };

  const handleParamChange = (field, value) => {
    setOptimizationParams(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="bg-white shadow-sm border-b rounded-2xl p-4 sm:p-6 lg:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  Logistics Optimization Engine
                </h1>
                <p className="text-gray-600">
                  AI-powered least-cost port-plant dispatch optimization with operational constraints
                </p>
              </div>
              <Link 
                to="/what-if-analysis" 
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition duration-300 font-medium mt-4 md:mt-0"
              >
                What-If Analysis
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Optimization Parameters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Optimization Parameters</h2>
                
                <div className="space-y-6">
                  {/* Material Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Material Type
                    </label>
                    <select
                      value={optimizationParams.materialType}
                      onChange={(e) => handleParamChange('materialType', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="coking_coal">Coking Coal</option>
                      <option value="limestone">Limestone</option>
                      <option value="iron_ore">Iron Ore</option>
                      <option value="mixed">Mixed Cargo</option>
                    </select>
                  </div>

                  {/* Priority Mode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Optimization Priority
                    </label>
                    <select
                      value={optimizationParams.priorityMode}
                      onChange={(e) => handleParamChange('priorityMode', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="cost">Minimize Total Cost</option>
                      <option value="time">Minimize Transit Time</option>
                      <option value="balanced">Balanced Cost-Time</option>
                      <option value="quality">Quality Priority</option>
                    </select>
                  </div>

                  {/* Max Port Calls */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Port Calls per Vessel
                    </label>
                    <input
                      type="number"
                      value={optimizationParams.maxPortCalls}
                      onChange={(e) => handleParamChange('maxPortCalls', parseInt(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                      max="5"
                    />
                  </div>

                  {/* Constraints */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Operational Constraints
                    </label>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="haldiaSecond"
                        checked={optimizationParams.haldiaSecond}
                        onChange={(e) => handleParamChange('haldiaSecond', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="haldiaSecond" className="ml-2 text-sm text-gray-700">
                        Haldia always second discharge
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="railwayConstraints"
                        checked={optimizationParams.railwayConstraints}
                        onChange={(e) => handleParamChange('railwayConstraints', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="railwayConstraints" className="ml-2 text-sm text-gray-700">
                        Consider railway rake availability
                      </label>
                    </div>
                  </div>

                  {/* Vessel and Plant Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vessel ID
                    </label>
                    <input
                      type="text"
                      value={optimizationParams.vesselId}
                      onChange={(e) => handleParamChange('vesselId', e.target.value)}
                      placeholder="e.g., MV-STEEL-001"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Plants (comma separated)
                    </label>
                    <input
                      type="text"
                      value={optimizationParams.plantIds}
                      onChange={(e) => handleParamChange('plantIds', e.target.value)}
                      placeholder="e.g., DUR, BOK, ROU"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    onClick={handleOptimize}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-medium disabled:opacity-50"
                  >
                    {loading ? 'Optimizing...' : 'Run Optimization'}
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2">
              {result ? (
                <div className="space-y-8">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 sm:p-6 rounded-2xl text-white">
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Total Cost</h3>
                      <p className="text-2xl sm:text-3xl font-bold">₹{(result.totalCost / 100000).toFixed(1)}L</p>
                      <p className="text-blue-100 text-xs sm:text-sm mt-1">Optimized dispatch cost</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 sm:p-6 rounded-2xl text-white">
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Cost Savings</h3>
                      <p className="text-2xl sm:text-3xl font-bold">₹{(result.savings / 100000).toFixed(1)}L</p>
                      <p className="text-green-100 text-xs sm:text-sm mt-1">vs. baseline plan</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 sm:p-6 rounded-2xl text-white">
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Timeline</h3>
                      <p className="text-2xl sm:text-3xl font-bold">{result.timeline.totalDays} days</p>
                      <p className="text-purple-100 text-xs sm:text-sm mt-1">Total operation time</p>
                    </div>
                  </div>

                  {/* Dispatch Plan */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Optimized Dispatch Plan</h2>
                      <p className="text-xs sm:text-sm text-gray-500 sm:hidden">Swipe to see more columns →</p>
                    </div>
                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                      <table className="min-w-full w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Plant</th>
                            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Port</th>
                            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 hidden md:table-cell">Material</th>
                            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Qty (MT)</th>
                            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 hidden lg:table-cell">Rail Cost</th>
                            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 hidden lg:table-cell">Port Cost</th>
                            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {result.plan.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">{item.plant}</td>
                              <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">{item.port}</td>
                              <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 hidden md:table-cell">{item.material}</td>
                              <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">{item.quantity.toLocaleString()}</td>
                              <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 hidden lg:table-cell">₹{(item.railCost / 1000).toFixed(0)}K</td>
                              <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 hidden lg:table-cell">₹{(item.portCost / 1000).toFixed(0)}K</td>
                              <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium text-gray-900">₹{(item.cost / 1000).toFixed(0)}K</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Constraints Status */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Constraint Compliance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <span className="text-gray-700">Vessel Capacity Utilized</span>
                          <span className="font-medium text-green-600">{result.constraints.vesselCapacityUtilized}%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <span className="text-gray-700">Port Calls Optimized</span>
                          <span className="font-medium text-green-600">
                            {result.constraints.portCallsOptimized ? '✓ Yes' : '✗ No'}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <span className="text-gray-700">Haldia Sequence Respected</span>
                          <span className="font-medium text-green-600">
                            {result.constraints.haldiaSequenceRespected ? '✓ Yes' : '✗ No'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                          <span className="text-gray-700">Railway Rakes Allocated</span>
                          <span className="font-medium text-yellow-600">{result.constraints.railwayRakesAllocated}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Optimize</h3>
                    <p className="text-gray-500">Configure your optimization parameters and run the analysis to generate the optimal dispatch plan.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Optimization;
