import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Steel Logistics
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Optimization Platform
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              AI-powered logistics optimization for integrated steel plants. Minimize transportation costs, 
              predict vessel delays, and optimize port-plant dispatch planning across eastern India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link 
                to="/login" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Access Platform
              </Link>
              <Link 
                to="/register" 
                className="border-2 border-blue-400 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-300 text-center"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              From coking coal imports to steel plant delivery - optimize every step of your supply chain
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Cost Optimization</h3>
              <p className="text-gray-600">
                Minimize ocean freight, port handling, railway freight, and demurrage costs through intelligent planning.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">AI Predictions</h3>
              <p className="text-gray-600">
                Predict pre-berthing delays at load and discharge ports using advanced ML models for better planning.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition duration-300">
              <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">SAP Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with existing SAP systems and Excel workflows for unified data management.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition duration-300">
              <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">What-If Analysis</h3>
              <p className="text-gray-600">
                Simulate alternative scenarios and perform sensitivity analysis for strategic decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Plants Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Five Integrated Steel Plants
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto px-4">
              Optimizing logistics across eastern India's steel corridor with intelligent port-plant dispatch planning
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2 text-blue-400">5</div>
              <div className="text-gray-300">Steel Plants</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2 text-green-400">500K+</div>
              <div className="text-gray-300">Tons/Month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2 text-purple-400">15+</div>
              <div className="text-gray-300">East Coast Ports</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2 text-orange-400">24/7</div>
              <div className="text-gray-300">Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Optimized Logistics Flow
            </h2>
            <p className="text-gray-600 px-4">
              From international suppliers to steel plants - every step optimized
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4 xl:space-x-8">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">International Procurement</h3>
              <p className="text-gray-600 text-sm">Coking coal & limestone from global suppliers</p>
            </div>
            
            <div className="hidden lg:block text-gray-400">→</div>
            
            <div className="text-center">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Sea Transportation</h3>
              <p className="text-gray-600 text-sm">Bulk carriers to east coast ports</p>
            </div>
            
            <div className="hidden lg:block text-gray-400">→</div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Port Operations</h3>
              <p className="text-gray-600 text-sm">Discharge, handling & storage</p>
            </div>
            
            <div className="hidden lg:block text-gray-400">→</div>
            
            <div className="text-center">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Rail Transport</h3>
              <p className="text-gray-600 text-sm">Optimized dispatch to steel plants</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
