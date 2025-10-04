import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
    { id: 'audiences', label: 'Audiences', icon: Users },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  const platforms = [
    { id: 'facebook', label: 'Facebook', icon: Facebook, color: 'text-blue-500' },
    { id: 'instagram', label: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { id: 'twitter', label: 'Twitter', icon: Twitter, color: 'text-blue-400' },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, color: 'text-blue-600' },
  ];

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SM</span>
          </div>
          <span className="text-white font-semibold">Social Dashboard</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-8">
          <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">
            Connected Platforms
          </h3>
          <div className="space-y-2">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.id}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                >
                  <Icon className={`w-5 h-5 ${platform.color}`} />
                  <span>{platform.label}</span>
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;