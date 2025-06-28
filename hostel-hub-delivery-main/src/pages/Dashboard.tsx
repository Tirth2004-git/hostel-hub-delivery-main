
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  BookOpen, 
  ShoppingCart, 
  Package, 
  Clock, 
  MapPin,
  Star,
  Plus
} from 'lucide-react';

const Dashboard = () => {
  const recentOrders = [
    { id: 'XRX001', type: 'Xerox', items: 'Assignment 1 (5 pages)', status: 'Delivered', time: '2 hours ago' },
    { id: 'BK002', type: 'Books', items: 'Engineering Mathematics', status: 'Packed', time: '1 day ago' },
    { id: 'SN003', type: 'Snacks', items: 'Maggi x2, Kurkure', status: 'Received', time: '2 days ago' },
  ];

  const quickActions = [
    { icon: FileText, label: 'Xerox/Print', color: 'bg-blue-500', desc: 'Upload & Print' },
    { icon: BookOpen, label: 'Books', color: 'bg-green-500', desc: 'New & Second-hand' },
    { icon: ShoppingCart, label: 'Snacks', color: 'bg-orange-500', desc: 'Daily Essentials' },
    { icon: Package, label: 'Stationery', color: 'bg-purple-500', desc: 'Pens, Notebooks' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, Student! 👋
          </h1>
          <p className="text-gray-600">Ready to order something today?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-800">24</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Saved Items</p>
                  <p className="text-2xl font-bold text-gray-800">8</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Delivery Time</p>
                  <p className="text-2xl font-bold text-gray-800">2h</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-sm font-semibold text-gray-800">Hostel A</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">Quick Order</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-24 flex-col space-y-2 bg-white/50 hover:bg-white/80 border-0 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className={`p-2 rounded-full ${action.color}`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">{action.label}</p>
                    <p className="text-xs text-gray-600">{action.desc}</p>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Package className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">#{order.id}</p>
                      <p className="text-sm text-gray-600">{order.items}</p>
                      <p className="text-xs text-gray-500">{order.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                      className={`${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : order.status === 'Packed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
