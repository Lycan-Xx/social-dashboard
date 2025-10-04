import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { MoreHorizontal, ExternalLink, Copy } from 'lucide-react';

const Analytics: React.FC = () => {
  const revenueData = [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 52000 },
    { month: 'Mar', value: 48000 },
    { month: 'Apr', value: 61000 },
    { month: 'May', value: 55000 },
    { month: 'Jun', value: 67000 },
    { month: 'Jul', value: 93012 },
    { month: 'Aug', value: 71000 },
    { month: 'Sep', value: 58000 },
    { month: 'Oct', value: 62000 },
    { month: 'Nov', value: 55000 },
    { month: 'Dec', value: 48000 },
  ];

  const weeklyTrafficData = [
    { day: 'Sun', newOrders: 320, repeatOrders: 280, lostUsers: 150 },
    { day: 'Mon', newOrders: 380, repeatOrders: 320, lostUsers: 180 },
    { day: 'Tue', newOrders: 420, repeatOrders: 380, lostUsers: 200 },
    { day: 'Wed', newOrders: 389, repeatOrders: 350, lostUsers: 170 },
    { day: 'Thu', newOrders: 450, repeatOrders: 400, lostUsers: 190 },
    { day: 'Fri', newOrders: 480, repeatOrders: 420, lostUsers: 210 },
    { day: 'Sat', newOrders: 350, repeatOrders: 300, lostUsers: 160 },
  ];

  const heatmapData = [
    [1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 10],
    [5, 6, 7, 8, 9, 10, 11],
    [6, 7, 8, 9, 10, 11, 12],
  ];

  const campaigns = [
    {
      name: 'Arief Muh',
      role: 'Campaign Provider',
      sales: '$860',
      goal: '$880',
      status: 'Achieved',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Pamela Puls',
      role: 'Influencer',
      sales: '$1,560',
      goal: '$1,722',
      status: 'On Process',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Monoklino',
      role: 'Content Creator',
      sales: '$2,490',
      goal: '$2,350',
      status: 'Achieved',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Prat Teguh',
      role: 'Marketer',
      sales: '$3,700',
      goal: '$2,722',
      status: 'Achieved',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Adamjero',
      role: 'Influencer',
      sales: '$820',
      goal: '$1,020',
      status: 'On Process',
      avatar: '/api/placeholder/32/32'
    },
    {
      name: 'Intania Raya',
      role: 'Content Creator',
      sales: '$780',
      goal: '$722',
      status: 'Achieved',
      avatar: '/api/placeholder/32/32'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Revenue Chart */}
      <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white text-lg font-semibold mb-1">Revenue</h3>
            <div className="flex items-center space-x-4">
              <span className="text-white text-2xl font-bold">$93,012.02</span>
              <span className="text-white text-lg">$12,002.00</span>
              <span className="text-white text-lg">$16.50</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white">
              <ExternalLink className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <YAxis hide />
              <Bar 
                dataKey="value" 
                fill="#8B5CF6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Traffic */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white text-lg font-semibold mb-1">Weekly Traffic</h3>
            <div className="text-white text-2xl font-bold">3,002</div>
            <div className="text-gray-400 text-sm">Orders</div>
            <div className="text-gray-400 text-sm">vs last week</div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">New Orders</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">Repeat Orders</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">Lost Users</span>
          </div>
        </div>

        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyTrafficData}>
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 10 }}
              />
              <YAxis hide />
              <Line 
                type="monotone" 
                dataKey="newOrders" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="repeatOrders" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="text-center mt-4">
          <div className="text-white text-xl font-bold">389</div>
          <div className="text-purple-400 text-sm">New Orders</div>
        </div>
      </div>

      {/* Customer by Time Heatmap */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-semibold">Customer by Time</h3>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">6pm</span>
            <span className="text-gray-400">12am</span>
            <span className="text-gray-400">6am</span>
            <span className="text-gray-400">12pm</span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-4">
          {heatmapData.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="aspect-square rounded"
                style={{
                  backgroundColor: `rgba(139, 92, 246, ${value / 12})`,
                }}
              />
            ))
          )}
        </div>

        <div className="flex justify-between text-xs text-gray-400">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
      </div>

      {/* Highest Campaign */}
      <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-semibold">Highest Campaign</h3>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white">
              <ExternalLink className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="text-left pb-4">CAMPAIGN PROVIDER</th>
                <th className="text-left pb-4">SALES</th>
                <th className="text-left pb-4">GOAL</th>
                <th className="text-left pb-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={campaign.avatar}
                        alt={campaign.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-white font-medium">{campaign.name}</div>
                        <div className="text-gray-400 text-sm">{campaign.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-white">{campaign.sales}</td>
                  <td className="py-4 text-white">{campaign.goal}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'Achieved' 
                        ? 'bg-green-900 text-green-300' 
                        : 'bg-yellow-900 text-yellow-300'
                    }`}>
                      {campaign.status}
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
};

export default Analytics;