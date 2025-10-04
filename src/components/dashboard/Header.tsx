import React from 'react';
import { Search, Calendar, Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span>Today</span>
            <span>Week</span>
            <span>Month</span>
            <span className="text-white font-medium">Year</span>
          </div>
          
          <div className="flex items-center space-x-1 bg-gray-700 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-white text-sm">May 12 - Jun 12, 2025</span>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button 
              onClick={logout}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              <img
                src={user?.avatar || '/api/placeholder/32/32'}
                alt={user?.name}
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;