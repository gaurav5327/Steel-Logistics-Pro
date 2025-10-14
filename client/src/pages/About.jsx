import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-12 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                            About
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Steel Logistics Pro
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                            Revolutionizing steel industry logistics through AI-powered optimization, intelligent decision support,
                            and comprehensive supply chain management across eastern India's steel corridor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Steel Logistics Pro is transforming the steel industry's supply chain management by providing an integrated,
                                AI-powered platform that optimizes the entire logistics ecosystem from international procurement to steel plant delivery.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our system addresses the complex challenges of managing coking coal and limestone transportation across
                                eastern India's steel corridor, serving five major integrated steel plants through 15+ east coast ports
                                and extensive railway networks.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                By leveraging advanced algorithms, machine learning, and real-time data integration, we help steel companies
                                minimize transportation costs, reduce delays, and make data-driven decisions that improve operational efficiency
                                and profitability.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Impact Metrics</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">₹425L+</div>
                                    <div className="text-gray-600 text-sm">Average Annual Cost Savings</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">89%</div>
                                    <div className="text-gray-600 text-sm">AI Prediction Accuracy</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
                                    <div className="text-gray-600 text-sm">Operational Efficiency Gain</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
                                    <div className="text-gray-600 text-sm">System Availability</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Core Platform Features
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Comprehensive suite of tools designed specifically for steel industry logistics optimization
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Optimization Engine */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300">
                            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Optimization Engine</h3>
                            <p className="text-gray-600 mb-4">
                                Advanced GLPK-based linear programming solver for least-cost dispatch planning with multi-constraint optimization.
                            </p>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li>• Vessel capacity optimization</li>
                                <li>• Port stock limit management</li>
                                <li>• Railway rake availability</li>
                                <li>• Sequential discharge constraints</li>
                                <li>• Quality-specific routing</li>
                            </ul>
                        </div>

                        {/* AI Predictions */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300">
                            <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Predictions</h3>
                            <p className="text-gray-600 mb-4">
                                Machine learning models for accurate vessel delay predictions and demurrage cost forecasting.
                            </p>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li>• Pre-berthing delay prediction</li>
                                <li>• Confidence scoring system</li>
                                <li>• Risk level assessment</li>
                                <li>• Demurrage cost calculation</li>
                                <li>• Historical accuracy tracking</li>
                            </ul>
                        </div>

                        {/* Real-time Analytics */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300">
                            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Real-time Analytics</h3>
                            <p className="text-gray-600 mb-4">
                                Comprehensive dashboards with interactive charts and KPI monitoring for operational visibility.
                            </p>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li>• Interactive data visualization</li>
                                <li>• Port stock level monitoring</li>
                                <li>• Vessel tracking dashboard</li>
                                <li>• Performance metrics</li>
                                <li>• Operational alerts system</li>
                            </ul>
                        </div>

                        {/* SAP Integration */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300">
                            <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">SAP Integration</h3>
                            <p className="text-gray-600 mb-4">
                                Seamless integration with existing SAP systems and Excel workflows for unified data management.
                            </p>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li>• STEM data processing</li>
                                <li>• Vessel schedule imports</li>
                                <li>• Port stock data sync</li>
                                <li>• Plant demand integration</li>
                                <li>• Excel template support</li>
                            </ul>
                        </div>

                        {/* What-If Analysis */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300">
                            <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">What-If Analysis</h3>
                            <p className="text-gray-600 mb-4">
                                Advanced scenario simulation and sensitivity analysis for strategic decision making and risk assessment.
                            </p>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li>• Scenario simulation engine</li>
                                <li>• Cost impact analysis</li>
                                <li>• Sensitivity testing</li>
                                <li>• Risk evaluation tools</li>
                                <li>• Strategic recommendations</li>
                            </ul>
                        </div>

                        {/* Data Management */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300">
                            <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Data Management</h3>
                            <p className="text-gray-600 mb-4">
                                Comprehensive data upload and management system with validation, error handling, and template support.
                            </p>
                            <ul className="text-gray-600 text-sm space-y-2">
                                <li>• Multi-format file support</li>
                                <li>• Data validation engine</li>
                                <li>• Error reporting system</li>
                                <li>• Template downloads</li>
                                <li>• Batch processing capability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Architecture */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Technical Architecture
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Built on modern, scalable technologies for enterprise-grade performance and reliability
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Frontend */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Frontend Technologies</h3>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                    React.js with modern hooks
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                    Tailwind CSS for styling
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                    Recharts for data visualization
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                    React Router for navigation
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                    Responsive design principles
                                </li>
                            </ul>
                        </div>

                        {/* Backend */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Backend Infrastructure</h3>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                    Node.js with Express framework
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                    MongoDB for data storage
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                    RESTful API architecture
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                    JWT authentication system
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                    Middleware for security
                                </li>
                            </ul>
                        </div>

                        {/* AI/ML Engine */}
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
                            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">AI/ML Components</h3>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                                    GLPK optimization solver
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                                    TensorFlow.js for predictions
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                                    Linear programming algorithms
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                                    Machine learning models
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                                    Statistical analysis tools
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            How Steel Logistics Pro Works
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            A comprehensive workflow from data input to optimized logistics decisions
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Data Integration</h3>
                                    <p className="text-gray-600">
                                        Import STEM data, vessel schedules, port stock information, and plant demands from SAP systems
                                        or Excel files through our secure upload interface.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">AI Analysis</h3>
                                    <p className="text-gray-600">
                                        Our machine learning models analyze historical data to predict vessel delays, assess risks,
                                        and calculate potential demurrage costs with confidence scoring.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Optimization Engine</h3>
                                    <p className="text-gray-600">
                                        Advanced algorithms process all constraints and variables to generate least-cost dispatch plans
                                        while respecting operational limitations and quality requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">4</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Decision Support</h3>
                                    <p className="text-gray-600">
                                        Interactive dashboards present optimized plans, what-if scenarios, and real-time analytics
                                        to support strategic decision making and operational execution.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Reduce transportation costs by up to 15%</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Minimize demurrage costs through accurate predictions</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Improve operational efficiency and planning</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Enable data-driven strategic decisions</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Integrate seamlessly with existing systems</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Coverage */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Industry Coverage & Scale
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Comprehensive logistics optimization across eastern India's steel corridor
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                            <div className="text-gray-800 font-semibold mb-1">Integrated Steel Plants</div>
                            <div className="text-gray-600 text-sm">Across Eastern India</div>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-green-600 to-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                </svg>
                            </div>
                            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                            <div className="text-gray-800 font-semibold mb-1">East Coast Ports</div>
                            <div className="text-gray-600 text-sm">Major Discharge Points</div>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-4xl font-bold text-purple-600 mb-2">500K+</div>
                            <div className="text-gray-800 font-semibold mb-1">Tons Per Month</div>
                            <div className="text-gray-600 text-sm">Material Throughput</div>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
                            <div className="text-gray-800 font-semibold mb-1">Operations</div>
                            <div className="text-gray-600 text-sm">Continuous Monitoring</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Materials Handled</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Coking Coal</h4>
                                <p className="text-gray-600 text-sm">Primary raw material for steel production, imported from international suppliers</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Limestone</h4>
                                <p className="text-gray-600 text-sm">Essential flux material for steel manufacturing processes and quality control</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Iron Ore</h4>
                                <p className="text-gray-600 text-sm">Base material for iron and steel production with specific quality requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Optimize Your Steel Logistics?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Join the digital transformation of steel industry logistics. Experience the power of AI-driven
                            optimization and make data-driven decisions that drive profitability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/login"
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Start Optimizing Now
                            </Link>
                            <Link
                                to="/register"
                                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;