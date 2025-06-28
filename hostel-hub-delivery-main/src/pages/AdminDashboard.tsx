
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Package, 
  Users, 
  TrendingUp, 
  Clock, 
  FileText,
  Eye,
  MessageCircle,
  CheckCircle,
  MapPin,
  DollarSign
} from 'lucide-react';

const AdminDashboard = () => {
  const [orders] = useState([
    {
      id: 'XRX001',
      student: 'Rahul Sharma',
      hostel: 'Hostel A, Room 204',
      type: 'Xerox',
      items: 'Assignment 1 (5 pages)',
      amount: 25,
      status: 'received',
      time: '10 mins ago',
      delivery: 'Today Evening'
    },
    {
      id: 'BK002',
      student: 'Priya Patel',
      hostel: 'PG Elite, Room 15',
      type: 'Books',
      items: 'Engineering Mathematics by RD Sharma',
      amount: 450,
      status: 'packed',
      time: '1 hour ago',
      delivery: 'Today Evening'
    },
    {
      id: 'SN003',
      student: 'Amit Kumar',
      hostel: 'Hostel B, Room 112',
      type: 'Snacks',
      items: 'Maggi x3, Kurkure, Biscuits',
      amount: 85,
      status: 'delivered',
      time: '2 hours ago',
      delivery: 'Completed'
    },
  ]);

  const stats = [
    { title: 'Total Orders', value: '47', change: '+12%', icon: Package, color: 'bg-blue-500' },
    { title: 'Active Students', value: '128', change: '+8%', icon: Users, color: 'bg-green-500' },
    { title: 'Revenue Today', value: '₹2,340', change: '+15%', icon: DollarSign, color: 'bg-orange-500' },
    { title: 'Avg Delivery', value: '1.8h', change: '-5%', icon: Clock, color: 'bg-purple-500' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'received': return 'bg-orange-100 text-orange-800';
      case 'packed': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    // Update order status logic here
    console.log(`Updating order ${orderId} to ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Admin Dashboard 👑
          </h1>
          <p className="text-gray-600">Manage your college delivery business</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from yesterday
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="route">Delivery Route</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Orders</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {orders.length} Active
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="p-4 bg-white/50 rounded-lg border">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="outline" className="bg-gray-100">
                              #{order.id}
                            </Badge>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-gray-900">{order.student}</h3>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {order.hostel}
                          </p>
                          <p className="text-sm text-gray-700 mt-2">{order.items}</p>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                            <span>{order.time}</span>
                            <span>•</span>
                            <span>{order.delivery}</span>
                            <span>•</span>
                            <span className="font-semibold text-green-600">₹{order.amount}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                          {order.status !== 'delivered' && (
                            <Button 
                              size="sm" 
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => updateOrderStatus(order.id, 'delivered')}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="route">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Delivery Route Optimizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Today's Route</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">1. Hostel A (3 orders)</span>
                        <span className="text-sm text-gray-500">2:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">2. PG Elite (2 orders)</span>
                        <span className="text-sm text-gray-500">2:30 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">3. Hostel B (1 order)</span>
                        <span className="text-sm text-gray-500">3:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Optimize Route
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Manage your stock of books, snacks, and stationery items.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">View detailed analytics about your business performance.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
