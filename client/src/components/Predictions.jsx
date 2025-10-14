import { useEffect, useState } from 'react';
import axios from '../services/api';
import { toast } from 'react-hot-toast';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Navbar from './Navbar';

const Predictions = () => {
  const [predictions, setPredictions] = useState([
    { vessel: 'MV Steel Carrier', port: 'Haldia', predictedDelay: 6.5, confidence: 87, eta: '2024-01-15', demurrageCost: 156000, riskLevel: 'Medium' },
    { vessel: 'MV Iron Duke', port: 'Paradip', predictedDelay: 12.2, confidence: 92, eta: '2024-01-16', demurrageCost: 293000, riskLevel: 'High' },
    { vessel: 'MV Coal Express', port: 'Visakhapatnam', predictedDelay: 2.1, confidence: 78, eta: '2024-01-17', demurrageCost: 50400, riskLevel: 'Low' },
    { vessel: 'MV Bulk Master', port: 'Chennai', predictedDelay: 8.7, confidence: 85, eta: '2024-01-18', demurrageCost: 208800, riskLevel: 'Medium' },
    { vessel: 'MV Cargo King', port: 'Haldia', predictedDelay: 15.3, confidence: 94, eta: '2024-01-19', demurrageCost: 367200, riskLevel: 'High' }
  ]);
  const [selectedVessel, setSelectedVessel] = useState(null);
  const [historicalData, setHistoricalData] = useState([
    { month: 'Jul', actual: 8.2, predicted: 7.8 },
    { month: 'Aug', actual: 6.5, predicted: 6.9 },
    { month: 'Sep', actual: 9.1, predicted: 8.7 },
    { month: 'Oct', actual: 7.3, predicted: 7.1 },
    { month: 'Nov', actual: 5.8, predicted: 6.2 },
    { month: 'Dec', actual: 8.9, predicted: 9.1 }
  ]);
  const [portPerformance, setPortPerformance] = useState([
    { port: 'Haldia', avgDelay: 7.2, accuracy: 89 },
    { port: 'Paradip', avgDelay: 5.8, accuracy: 92 },
    { port: 'Visakhapatnam', avgDelay: 6.1, accuracy: 87 },
    { port: 'Chennai', avgDelay: 8.4, accuracy: 85 },
    { port: 'Ennore', avgDelay: 9.1, accuracy: 83 }
  ]);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        // Uncomment when backend is ready
        // const { data } = await axios.get('/predictions');
        // setPredictions(data);
        toast.success('Predictions loaded successfully');
      } catch (error) {
        toast.error('Failed to load predictions');
      }
    };
    fetchPredictions();
  }, []);

  const runNewPrediction = async () => {
    try {
      toast.success('Running AI prediction models...');
      // Simulate API call
      setTimeout(() => {
        toast.success('Predictions updated with latest data');
      }, 2000);
    } catch (error) {
      toast.error('Failed to run predictions');
    }
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
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
                  AI Delay Predictions
                </h1>
                <p className="text-gray-600">
                  Machine learning powered pre-berthing delay predictions and demurrage cost analysis
                </p>
              </div>
              <button 
                onClick={runNewPrediction}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition duration-300 font-medium mt-4 md:mt-0"
              >
                Refresh Predictions
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white">
              <h3 className="text-lg font-semibold mb-2">Active Vessels</h3>
              <p className="text-3xl font-bold">{predictions.length}</p>
              <p className="text-blue-100 text-sm mt-1">Being tracked</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl text-white">
              <h3 className="text-lg font-semibold mb-2">High Risk</h3>
              <p className="text-3xl font-bold">{predictions.filter(p => p.riskLevel === 'High').length}</p>
              <p className="text-red-100 text-sm mt-1">Vessels at risk</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-6 rounded-2xl text-white">
              <h3 className="text-lg font-semibold mb-2">Avg Delay</h3>
              <p className="text-3xl font-bold">{(predictions.reduce((sum, p) => sum + p.predictedDelay, 0) / predictions.length).toFixed(1)}h</p>
              <p className="text-yellow-100 text-sm mt-1">Predicted average</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-2xl text-white">
              <h3 className="text-lg font-semibold mb-2">Demurrage Risk</h3>
              <p className="text-3xl font-bold">₹{(predictions.reduce((sum, p) => sum + p.demurrageCost, 0) / 100000).toFixed(1)}L</p>
              <p className="text-purple-100 text-sm mt-1">Total exposure</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Predictions Table */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Vessel Delay Predictions</h2>
                  <p className="text-xs sm:text-sm text-gray-500 sm:hidden">Swipe to see more columns →</p>
                </div>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="min-w-full w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Vessel</th>
                        <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Port</th>
                        <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 hidden sm:table-cell">ETA</th>
                        <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Delay</th>
                        <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 hidden md:table-cell">Confidence</th>
                        <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Risk</th>
                        <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 hidden lg:table-cell">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {predictions.map((item, idx) => (
                        <tr 
                          key={idx} 
                          className="hover:bg-gray-50 cursor-pointer"
                          onClick={() => setSelectedVessel(item)}
                        >
                          <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium text-gray-900">{item.vessel}</td>
                          <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">{item.port}</td>
                          <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 hidden sm:table-cell">{item.eta}</td>
                          <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">{item.predictedDelay}h</td>
                          <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 hidden md:table-cell">
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{width: `${item.confidence}%`}}
                                ></div>
                              </div>
                              <span className="text-xs">{item.confidence}%</span>
                            </div>
                          </td>
                          <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">
                            <span className={`px-1 sm:px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(item.riskLevel)}`}>
                              {item.riskLevel}
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium text-gray-900 hidden lg:table-cell">₹{(item.demurrageCost / 1000).toFixed(0)}K</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Historical Accuracy */}
              <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Prediction Accuracy Trend</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={historicalData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}h`, 'Delay']} />
                    <Line type="monotone" dataKey="actual" stroke="#ef4444" strokeWidth={3} name="Actual" />
                    <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={3} name="Predicted" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-8">
              {/* Port Performance */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Port Performance</h2>
                <div className="space-y-4">
                  {portPerformance.map((port, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{port.port}</span>
                        <span className="text-sm text-gray-600">{port.accuracy}% accuracy</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg Delay: {port.avgDelay}h</span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{width: `${port.accuracy}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Model Info */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Model Status</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Model Status</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Last Training</span>
                    <span className="text-blue-600 font-medium">2 days ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-700">Data Points</span>
                    <span className="text-purple-600 font-medium">15,847</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-gray-700">Avg Accuracy</span>
                    <span className="text-yellow-600 font-medium">89.2%</span>
                  </div>
                </div>
              </div>

              {/* Selected Vessel Details */}
              {selectedVessel && (
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Vessel Details</h2>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Vessel Name</span>
                      <p className="font-medium">{selectedVessel.vessel}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Destination Port</span>
                      <p className="font-medium">{selectedVessel.port}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Predicted Delay</span>
                      <p className="font-medium text-red-600">{selectedVessel.predictedDelay} hours</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Confidence Level</span>
                      <p className="font-medium">{selectedVessel.confidence}%</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Estimated Demurrage</span>
                      <p className="font-medium text-red-600">₹{(selectedVessel.demurrageCost / 1000).toFixed(0)}K</p>
                    </div>
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

export default Predictions;
