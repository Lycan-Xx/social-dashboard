import React from 'react';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';

const Overview: React.FC = () => {
  const metrics = [
    {
      title: 'Total Followers',
      value: '23.4k',
      change: '+28.1%',
      changeType: 'positive' as const,
      subtitle: 'vs last month'
    },
    {
      title: 'Users',
      value: '21,230',
      subtitle: 'Active users'
    },
    {
      title: 'Page Views',
      value: '30,230',
      subtitle: 'Total views'
    },
    {
      title: 'Session Duration',
      value: '11m 02s',
      change: '3.4%',
      changeType: 'positive' as const,
      subtitle: 'Average duration'
    },
    {
      title: 'Page Views',
      value: '120,009',
      change: '2.8%',
      changeType: 'positive' as const,
      subtitle: 'Total page views'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">{metric.title}</p>
              <p className="text-white text-2xl font-bold">{metric.value}</p>
            </div>
            {metric.change && (
              <div className={`flex items-center space-x-1 ${
                metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            )}
          </div>
          <p className="text-gray-400 text-sm">{metric.subtitle}</p>
          
          {index === 0 && (
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Progress</span>
                <span className="text-white">72%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Overview;