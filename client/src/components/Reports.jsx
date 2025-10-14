import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import Navbar from './Navbar';

const Reports = () => {
    const [selectedReport, setSelectedReport] = useState('cost-analysis');
    const [dateRange, setDateRange] = useState('last-30-days');

    // Sample data for different reports
    const costAnalysisData = [
        { month: 'Jan', oceanFreight: 2500000, portHandling: 800000, railway: 1200000, demurrage: 300000 },
        { month: 'Feb', oceanFreight: 2800000, portHandling: 750000, railway: 1100000, demurrage: 450000 },
        { month: 'Mar', oceanFreight: 2600000, portHandling: 900000, railway: 1300000, demurrage: 200000 },
        { month: 'Apr', oceanFreight: 2900000, portHandling: 850000, railway: 1250000, demurrage: 350000 },
        { month: 'May', oceanFreight: 2700000, portHandling: 800000, railway: 1150000, demurrage: 400000 },
        { month: 'Jun', oceanFreight: 3100000, portHandling: 950000, railway: 1400000, demurrage: 250000 }
    ];

    const efficiencyData = [
        { month: 'Jan', planned: 95, actual: 87, savings: 12 },
        { month: 'Feb', planned: 92, actual: 89, savings: 15 },
        { month: 'Mar', planned: 96, actual: 94, savings: 18 },
        { month: 'Apr', planned: 94, actual: 91, savings: 14 },
        { month: 'May', planned: 97, actual: 93, savings: 20 },
        { month: 'Jun', planned: 95, actual: 92, savings: 16 }
    ];

    const portPerformanceData = [
        { name: 'Haldia', value: 35, cost: 2800000, efficiency: 92 },
        { name: 'Paradip', value: 28, cost: 2200000, efficiency: 95 },
        { name: 'Visakhapatnam', value: 20, cost: 1800000, efficiency: 88 },
        { name: 'Chennai', value: 12, cost: 1200000, efficiency: 90 },
        { name: 'Ennore', value: 5, cost: 600000, efficiency: 85 }
    ];

    const materialCostData = [
        { material: 'Coking Coal', jan: 1800000, feb: 2000000, mar: 1900000, apr: 2100000, may: 1950000, jun: 2200000 },
        { material: 'Iron Ore', jan: 800000, feb: 850000, mar: 900000, apr: 920000, may: 880000, jun: 950000 },
        { material: 'Limestone', jan: 400000, feb: 420000, mar: 450000, apr: 480000, may: 460000, jun: 500000 }
    ];

    const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

    const generateReport = () => {
        toast.success('Report generated successfully!');
        // Simulate report generation
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '#';
            link.download = `${selectedReport}-${dateRange}.pdf`;
            toast.success('Report downloaded!');
        }, 1000);
    };

    const reportTypes = [
        { id: 'cost-analysis', name: 'Cost Analysis', icon: '💰' },
        { id: 'efficiency', name: 'Efficiency Report', icon: '📊' },
        { id: 'port-performance', name: 'Port Performance', icon: '🚢' },
        { id: 'material-costs', name: 'Material Costs', icon: '📦' }
    ];

    const renderReportContent = () => {
        switch (selectedReport) {
            case 'cost-analysis':
                return (
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Cost Breakdown</h3>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={costAnalysisData}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => [`₹${(value / 100000).toFixed(1)}L`, '']} />
                                    <Bar dataKey="oceanFreight" stackId="a" fill="#3b82f6" name="Ocean Freight" />
                                    <Bar dataKey="portHandling" stackId="a" fill="#10b981" name="Port Handling" />
                                    <Bar dataKey="railway" stackId="a" fill="#f59e0b" name="Railway" />
                                    <Bar dataKey="demurrage" stackId="a" fill="#ef4444" name="Demurrage" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Cost Summary</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total Ocean Freight</span>
                                        <span className="font-semibold">₹16.6Cr</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total Port Handling</span>
                                        <span className="font-semibold">₹5.05Cr</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total Railway</span>
                                        <span className="font-semibold">₹7.4Cr</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total Demurrage</span>
                                        <span className="font-semibold text-red-600">₹1.95Cr</span>
                                    </div>
                                    <div className="pt-3 border-t">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Grand Total</span>
                                            <span className="font-bold text-lg">₹31Cr</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Cost Trends</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={costAnalysisData}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip formatter={(value) => [`₹${(value / 100000).toFixed(1)}L`, '']} />
                                        <Line type="monotone" dataKey="demurrage" stroke="#ef4444" strokeWidth={3} name="Demurrage" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                );

            case 'efficiency':
                return (
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Operational Efficiency Trends</h3>
                            <ResponsiveContainer width="100%" height={400}>
                                <AreaChart data={efficiencyData}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="planned" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Planned %" />
                                    <Area type="monotone" dataKey="actual" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Actual %" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white">
                                <h3 className="text-lg font-semibold mb-2">Average Efficiency</h3>
                                <p className="text-3xl font-bold">91.2%</p>
                                <p className="text-blue-100 text-sm">vs 94.8% planned</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl text-white">
                                <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
                                <p className="text-3xl font-bold">₹4.2Cr</p>
                                <p className="text-green-100 text-sm">This quarter</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-2xl text-white">
                                <h3 className="text-lg font-semibold mb-2">Optimization Rate</h3>
                                <p className="text-3xl font-bold">16.5%</p>
                                <p className="text-purple-100 text-sm">Average improvement</p>
                            </div>
                        </div>
                    </div>
                );

            case 'port-performance':
                return (
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Port Usage Distribution</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={portPerformanceData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={120}
                                            dataKey="value"
                                            label={({ name, value }) => `${name}: ${value}%`}
                                        >
                                            {portPerformanceData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Port Efficiency Comparison</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={portPerformanceData} layout="horizontal">
                                        <XAxis type="number" />
                                        <YAxis dataKey="name" type="category" />
                                        <Tooltip />
                                        <Bar dataKey="efficiency" fill="#10b981" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Port Analysis</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Port</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Usage %</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Total Cost</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Efficiency</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {portPerformanceData.map((port, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">{port.name}</td>
                                                <td className="px-4 py-3 text-sm text-gray-900">{port.value}%</td>
                                                <td className="px-4 py-3 text-sm text-gray-900">₹{(port.cost / 100000).toFixed(1)}L</td>
                                                <td className="px-4 py-3 text-sm text-gray-900">{port.efficiency}%</td>
                                                <td className="px-4 py-3 text-sm">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${port.efficiency >= 90 ? 'bg-green-100 text-green-800' :
                                                            port.efficiency >= 85 ? 'bg-yellow-100 text-yellow-800' :
                                                                'bg-red-100 text-red-800'
                                                        }`}>
                                                        {port.efficiency >= 90 ? 'Excellent' : port.efficiency >= 85 ? 'Good' : 'Needs Improvement'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );

            case 'material-costs':
                return (
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Material Cost Trends</h3>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={[
                                    { month: 'Jan', 'Coking Coal': 1800000, 'Iron Ore': 800000, 'Limestone': 400000 },
                                    { month: 'Feb', 'Coking Coal': 2000000, 'Iron Ore': 850000, 'Limestone': 420000 },
                                    { month: 'Mar', 'Coking Coal': 1900000, 'Iron Ore': 900000, 'Limestone': 450000 },
                                    { month: 'Apr', 'Coking Coal': 2100000, 'Iron Ore': 920000, 'Limestone': 480000 },
                                    { month: 'May', 'Coking Coal': 1950000, 'Iron Ore': 880000, 'Limestone': 460000 },
                                    { month: 'Jun', 'Coking Coal': 2200000, 'Iron Ore': 950000, 'Limestone': 500000 }
                                ]}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => [`₹${(value / 100000).toFixed(1)}L`, '']} />
                                    <Line type="monotone" dataKey="Coking Coal" stroke="#3b82f6" strokeWidth={3} />
                                    <Line type="monotone" dataKey="Iron Ore" stroke="#10b981" strokeWidth={3} />
                                    <Line type="monotone" dataKey="Limestone" stroke="#f59e0b" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {materialCostData.map((material, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{material.material}</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Total Cost (6 months)</span>
                                            <span className="font-semibold">
                                                ₹{((material.jan + material.feb + material.mar + material.apr + material.may + material.jun) / 100000).toFixed(1)}L
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Average Monthly</span>
                                            <span className="font-semibold">
                                                ₹{(((material.jan + material.feb + material.mar + material.apr + material.may + material.jun) / 6) / 100000).toFixed(1)}L
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Trend</span>
                                            <span className={`font-semibold ${material.jun > material.jan ? 'text-red-600' : 'text-green-600'}`}>
                                                {material.jun > material.jan ? '↗ Increasing' : '↘ Decreasing'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
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
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                    Analytics & Reports
                                </h1>
                                <p className="text-gray-600">
                                    Comprehensive cost analysis and performance reporting for steel logistics operations
                                </p>
                            </div>
                            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                                <select
                                    value={dateRange}
                                    onChange={(e) => setDateRange(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="last-7-days">Last 7 Days</option>
                                    <option value="last-30-days">Last 30 Days</option>
                                    <option value="last-3-months">Last 3 Months</option>
                                    <option value="last-6-months">Last 6 Months</option>
                                    <option value="last-year">Last Year</option>
                                </select>
                                <button
                                    onClick={generateReport}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Export Report</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
                        {/* Report Type Selector */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="p-6 border-b">
                                    <h2 className="text-xl font-bold text-gray-800">Report Types</h2>
                                </div>
                                <div className="p-2">
                                    {reportTypes.map((report) => (
                                        <button
                                            key={report.id}
                                            onClick={() => setSelectedReport(report.id)}
                                            className={`w-full text-left p-4 rounded-lg transition duration-200 mb-2 ${selectedReport === report.id
                                                    ? 'bg-blue-50 border-2 border-blue-500 text-blue-700'
                                                    : 'hover:bg-gray-50 border-2 border-transparent'
                                                }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-2xl">{report.icon}</span>
                                                <span className="font-medium">{report.name}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Report Content */}
                        <div className="lg:col-span-3">
                            {renderReportContent()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reports;