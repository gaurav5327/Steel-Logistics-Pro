import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from './Navbar';

const VesselTracking = () => {
    const [vessels, setVessels] = useState([
        {
            id: 1,
            name: 'MV Steel Carrier',
            status: 'In Transit',
            currentLocation: 'Bay of Bengal',
            destination: 'Haldia Port',
            eta: '2024-01-15 14:30',
            cargo: 'Coking Coal',
            tonnage: 75000,
            speed: 12.5,
            coordinates: { lat: 21.5, lng: 88.2 },
            progress: 65
        },
        {
            id: 2,
            name: 'MV Iron Duke',
            status: 'At Port',
            currentLocation: 'Paradip Port',
            destination: 'Paradip Port',
            eta: '2024-01-14 09:00',
            cargo: 'Iron Ore',
            tonnage: 82000,
            speed: 0,
            coordinates: { lat: 20.3, lng: 86.6 },
            progress: 100
        },
        {
            id: 3,
            name: 'MV Coal Express',
            status: 'Loading',
            currentLocation: 'Newcastle, Australia',
            destination: 'Visakhapatnam',
            eta: '2024-01-20 08:00',
            cargo: 'Coking Coal',
            tonnage: 68000,
            speed: 0,
            coordinates: { lat: -32.9, lng: 151.8 },
            progress: 15
        },
        {
            id: 4,
            name: 'MV Bulk Master',
            status: 'Delayed',
            currentLocation: 'Arabian Sea',
            destination: 'Chennai Port',
            eta: '2024-01-18 16:45',
            cargo: 'Limestone',
            tonnage: 55000,
            speed: 8.2,
            coordinates: { lat: 15.2, lng: 72.8 },
            progress: 45
        }
    ]);
    const [selectedVessel, setSelectedVessel] = useState(null);
    const [filterStatus, setFilterStatus] = useState('All');

    useEffect(() => {
        // Simulate real-time updates
        const interval = setInterval(() => {
            setVessels(prev => prev.map(vessel => ({
                ...vessel,
                speed: vessel.status === 'In Transit' ?
                    Math.max(8, Math.min(15, vessel.speed + (Math.random() - 0.5) * 2)) : vessel.speed,
                progress: vessel.status === 'In Transit' ?
                    Math.min(100, vessel.progress + Math.random() * 0.5) : vessel.progress
            })));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'In Transit': return 'bg-blue-100 text-blue-800';
            case 'At Port': return 'bg-green-100 text-green-800';
            case 'Loading': return 'bg-yellow-100 text-yellow-800';
            case 'Delayed': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const filteredVessels = filterStatus === 'All' ?
        vessels : vessels.filter(v => v.status === filterStatus);

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
                                    Real-Time Vessel Tracking
                                </h1>
                                <p className="text-gray-600">
                                    Monitor vessel locations, status, and estimated arrival times in real-time
                                </p>
                            </div>
                            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="All">All Vessels</option>
                                    <option value="In Transit">In Transit</option>
                                    <option value="At Port">At Port</option>
                                    <option value="Loading">Loading</option>
                                    <option value="Delayed">Delayed</option>
                                </select>
                                <button
                                    onClick={() => toast.success('Vessel data refreshed')}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Refresh
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Vessel List */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="p-6 border-b">
                                    <h2 className="text-2xl font-bold text-gray-800">Active Vessels ({filteredVessels.length})</h2>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {filteredVessels.map((vessel) => (
                                        <div
                                            key={vessel.id}
                                            className={`p-6 hover:bg-gray-50 cursor-pointer transition duration-200 ${selectedVessel?.id === vessel.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                                                }`}
                                            onClick={() => setSelectedVessel(vessel)}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-gray-900">{vessel.name}</h3>
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vessel.status)}`}>
                                                            {vessel.status}
                                                        </span>
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                                        <div>📍 {vessel.currentLocation}</div>
                                                        <div>🎯 {vessel.destination}</div>
                                                        <div>📦 {vessel.cargo} ({vessel.tonnage.toLocaleString()} MT)</div>
                                                        <div>⏰ ETA: {vessel.eta}</div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 sm:mt-0 sm:ml-6">
                                                    <div className="text-right">
                                                        <div className="text-sm text-gray-500 mb-1">Progress</div>
                                                        <div className="w-24 bg-gray-200 rounded-full h-2">
                                                            <div
                                                                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                                                style={{ width: `${vessel.progress}%` }}
                                                            ></div>
                                                        </div>
                                                        <div className="text-xs text-gray-500 mt-1">{vessel.progress.toFixed(1)}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Vessel Details */}
                        <div className="space-y-6">
                            {selectedVessel ? (
                                <>
                                    {/* Selected Vessel Details */}
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vessel Details</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg">{selectedVessel.name}</h3>
                                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${getStatusColor(selectedVessel.status)}`}>
                                                    {selectedVessel.status}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="text-gray-500">Current Location</span>
                                                    <p className="font-medium">{selectedVessel.currentLocation}</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">Destination</span>
                                                    <p className="font-medium">{selectedVessel.destination}</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">Cargo Type</span>
                                                    <p className="font-medium">{selectedVessel.cargo}</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">Tonnage</span>
                                                    <p className="font-medium">{selectedVessel.tonnage.toLocaleString()} MT</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">Current Speed</span>
                                                    <p className="font-medium">{selectedVessel.speed.toFixed(1)} knots</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">ETA</span>
                                                    <p className="font-medium">{selectedVessel.eta}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="text-gray-500 text-sm">Journey Progress</span>
                                                <div className="mt-2">
                                                    <div className="flex justify-between text-sm mb-1">
                                                        <span>Progress</span>
                                                        <span>{selectedVessel.progress.toFixed(1)}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                                        <div
                                                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                                                            style={{ width: `${selectedVessel.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                                        <div className="space-y-3">
                                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                                View Route Details
                                            </button>
                                            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                                                Contact Vessel
                                            </button>
                                            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
                                                Update ETA
                                            </button>
                                            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300">
                                                Generate Report
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="bg-white p-6 rounded-2xl shadow-lg">
                                    <div className="text-center py-8">
                                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Vessel</h3>
                                        <p className="text-gray-500">Click on a vessel from the list to view detailed information and tracking data.</p>
                                    </div>
                                </div>
                            )}

                            {/* Fleet Summary */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Fleet Summary</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Total Vessels</span>
                                        <span className="font-semibold">{vessels.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">In Transit</span>
                                        <span className="font-semibold text-blue-600">
                                            {vessels.filter(v => v.status === 'In Transit').length}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">At Port</span>
                                        <span className="font-semibold text-green-600">
                                            {vessels.filter(v => v.status === 'At Port').length}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Delayed</span>
                                        <span className="font-semibold text-red-600">
                                            {vessels.filter(v => v.status === 'Delayed').length}
                                        </span>
                                    </div>
                                    <div className="pt-2 border-t">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Total Cargo</span>
                                            <span className="font-semibold">
                                                {vessels.reduce((sum, v) => sum + v.tonnage, 0).toLocaleString()} MT
                                            </span>
                                        </div>
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

export default VesselTracking;