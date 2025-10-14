import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';
import { toast } from 'react-hot-toast';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Navbar from './Navbar';

const Dashboard = () => {
  const [stats, setStats] = useState({ plants: 5, ports: 15, vessels: 45, shipments: 128 });
  const [stockData, setStockData] = useState([
    { port: 'Haldia', stock: 85000, capacity: 120000 },
    { port: 'Paradip', stock: 92000, capacity: 150000 },
    { port: 'Visakhapatnam', stock: 78000, capacity: 100000 },
    { port: 'Chennai', stock: 65000, capacity: 90000 },
    { port: 'Ennore', stock: 45000, capacity: 80000 }
  ]);
  const [vesselData, setVesselData] = useState([
    { month: 'Jan', arrivals: 12, delays: 2 },
    { month: 'Feb', arrivals: 15, delays: 3 },
    { month: 'Mar', arrivals: 18, delays: 1 },
    { month: 'Apr', arrivals: 14, delays: 4 },
    { month: 'May', arrivals: 16, delays: 2 },
    { month: 'Jun', arrivals: 20, delays: 3 }
  ]);
  const [materialData, setMaterialData] = useState([
    { name: 'Coking Coal', value: 65, color: '#3b82f6' },
    { name: 'Limestone', value: 25, color: '#10b981' },
    { name: 'Iron Ore', value: 10, color: '#f59e0b' }
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Uncomment when backend is ready
        // const resStats = await axios.get('/dashboard/stats');
        // setStats(resStats.data);
        // const resStock = await axios.get('/dashboard/stock');
        // setStockData(resStock.data);

        toast.success('Dashboard loaded successfully');
      } catch (error) {
        toast.error('Failed to load dashboard data');
      }
    };
    fetchStats();
  }, []);

  const StatCard = ({ title, value, icon, color, subtitle }) => (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
          {subtitle && <p className="text-white/70 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className="bg-white/20 p-3 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  Steel Logistics Dashboard
                </h1>
                <p className="text-gray-600">
                  Real-time insights into your port-plant logistics operations
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  to="/optimization"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-medium"
                >
                  Run Optimization
                </Link>
                <Link
                  to="/predictions"
                  className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition duration-300 font-medium"
                >
                  View Predictions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <StatCard
              title="Steel Plants"
              value={stats.plants}
              subtitle="Across Eastern India"
              color="from-blue-600 to-blue-700"
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            />
            <StatCard
              title="Active Ports"
              value={stats.ports}
              subtitle="East Coast Ports"
              color="from-green-600 to-green-700"
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg>}
            />
            <StatCard
              title="Vessels Tracked"
              value={stats.vessels}
              subtitle="In Transit & At Port"
              color="from-purple-600 to-purple-700"
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" /></svg>}
            />
            <StatCard
              title="Monthly Shipments"
              value={stats.shipments}
              subtitle="This Month"
              color="from-orange-600 to-orange-700"
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" /></svg>}
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Stock Levels Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Port Stock Levels</h2>
                <div className="text-sm text-gray-500">Tons (000s)</div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stockData}>
                  <XAxis dataKey="port" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value / 1000}K tons`, 'Stock']} />
                  <Bar dataKey="stock" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="capacity" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Vessel Arrivals Trend */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Vessel Arrivals & Delays</h2>
                <div className="text-sm text-gray-500">Monthly Trend</div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={vesselData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="arrivals" stroke="#3b82f6" strokeWidth={3} />
                  <Line type="monotone" dataKey="delays" stroke="#ef4444" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Material Distribution */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Material Distribution</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={materialData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {materialData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {materialData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Link
                  to="/optimization"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300"
                >
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Run Optimization</div>
                      <div className="text-sm text-blue-100">Generate dispatch plans</div>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/predictions"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-xl hover:from-green-700 hover:to-green-800 transition duration-300"
                >
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                      <div className="font-semibold">AI Predictions</div>
                      <div className="text-sm text-green-100">Predict vessel delays</div>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/data-upload"
                  className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition duration-300"
                >
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div>
                      <div className="font-semibold">Upload Data</div>
                      <div className="text-sm text-purple-100">SAP & Excel integration</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Alerts</h2>
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Vessel MV Steel Carrier delayed</p>
                    <p className="text-xs text-yellow-600">ETA: +6 hours at Haldia Port</p>
                  </div>
                </div>

                <div className="flex items-start p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-red-800">Stock capacity exceeded</p>
                    <p className="text-xs text-red-600">Paradip Port: 102% capacity</p>
                  </div>
                </div>

                <div className="flex items-start p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-green-800">Optimization completed</p>
                    <p className="text-xs text-green-600">15% cost reduction achieved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
