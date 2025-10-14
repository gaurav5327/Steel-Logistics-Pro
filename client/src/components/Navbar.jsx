import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">
              Steel Logistics Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link to="/" className="text-white hover:text-white transition duration-300 font-medium relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-white hover:text-white transition duration-300 font-medium relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {isAuthenticated && (
              <>
                <Link to="/dashboard" className="text-white hover:text-blue-300 transition duration-300 font-medium">
                  Dashboard
                </Link>
                <Link to="/optimization" className="text-white hover:text-blue-300 transition duration-300 font-medium">
                  Optimization
                </Link>
                <Link to="/predictions" className="text-white hover:text-blue-300 transition duration-300 font-medium">
                  Predictions
                </Link>
                <Link to="/what-if-analysis" className="text-white hover:text-blue-300 transition duration-300 font-medium">
                  What-If Analysis
                </Link>
                <Link to="/data-upload" className="text-white hover:text-blue-300 transition duration-300 font-medium">
                  Data Upload
                </Link>
              </>
            )}

            <div className="flex items-center space-x-4 ml-8">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                        </span>
                      </div>
                      <span className="text-white text-sm hidden lg:block font-medium">
                        {user?.name || 'User'}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-white transition duration-300 font-medium relative group"
                  >
                    Login
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition duration-300 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-slate-800/95 rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-blue-300 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-300 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              {isAuthenticated && (
                <>
                  <Link to="/dashboard" className="text-white hover:text-blue-300 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
                    Dashboard
                  </Link>
                  <Link to="/optimization" className="text-white hover:text-blue-300 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
                    Optimization
                  </Link>
                  <Link to="/predictions" className="text-white hover:text-blue-300 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
                    Predictions
                  </Link>
                  <Link to="/what-if-analysis" className="text-white hover:text-blue-300 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
                    What-If Analysis
                  </Link>
                  <Link to="/data-upload" className="text-white hover:text-blue-300 transition duration-300 font-medium" onClick={() => setIsOpen(false)}>
                    Data Upload
                  </Link>
                </>
              )}

              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-2 py-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                        </span>
                      </div>
                      <span className="text-white text-sm font-medium">
                        {user?.name || 'User'}
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-white hover:text-blue-300 transition duration-300 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
