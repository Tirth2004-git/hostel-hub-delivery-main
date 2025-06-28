
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  FileText, 
  BookOpen, 
  ShoppingCart, 
  Package, 
  Clock, 
  Star, 
  MapPin, 
  Heart,
  Zap,
  Users,
  Award,
  ArrowRight,
  Upload,
  Plus,
  CheckCircle,
  Eye,
  Trash2,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import PaymentSuccess from '@/components/PaymentSuccess';

const Index = () => {
  // State for different views
  const [currentView, setCurrentView] = useState('home'); // 'home', 'xerox', 'payment', 'success'
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  // Xerox order state
  const [files, setFiles] = useState([
    { id: 1, name: 'Assignment_1.pdf', pages: 5, status: 'uploaded', size: '2.3 MB' },
    { id: 2, name: 'Notes_Chapter_3.pdf', pages: 12, status: 'uploaded', size: '4.1 MB' },
  ]);

  const [orderDetails, setOrderDetails] = useState({
    copies: 1,
    colorType: 'bw',
    paperSize: 'a4',
    notes: ''
  });

  // Calculate order data
  const orderData = {
    files: files,
    copies: orderDetails.copies,
    colorType: orderDetails.colorType,
    paperSize: orderDetails.paperSize,
    totalPages: files.reduce((acc, file) => acc + file.pages, 0) * orderDetails.copies,
    amount: files.reduce((acc, file) => acc + file.pages, 0) * orderDetails.copies * (orderDetails.colorType === 'bw' ? 1 : 5)
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setCurrentView('success');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    // Reset form data if needed
    setFiles([
      { id: 1, name: 'Assignment_1.pdf', pages: 5, status: 'uploaded', size: '2.3 MB' },
      { id: 2, name: 'Notes_Chapter_3.pdf', pages: 12, status: 'uploaded', size: '4.1 MB' },
    ]);
    setOrderDetails({
      copies: 1,
      colorType: 'bw',
      paperSize: 'a4',
      notes: ''
    });
  };

  const services = [
    {
      icon: FileText,
      title: 'Xerox & Print',
      description: 'Upload PDFs, get instant printing',
      color: 'bg-blue-500',
      features: ['PDF Upload', 'Same Day Delivery', 'B&W & Color Print'],
      action: () => setCurrentView('xerox')
    },
    {
      icon: BookOpen,
      title: 'Books',
      description: 'New & second-hand books',
      color: 'bg-green-500',
      features: ['New Books', 'Second-hand', 'All Subjects'],
      action: () => alert('Books service coming soon!')
    },
    {
      icon: ShoppingCart,
      title: 'Snacks & Essentials',
      description: 'Daily use items delivered fast',
      color: 'bg-orange-500',
      features: ['Maggi & Snacks', 'Stationery', 'Personal Care'],
      action: () => alert('Snacks service coming soon!')
    },
    {
      icon: Package,
      title: 'Custom Requests',
      description: 'Need something special?',
      color: 'bg-purple-500',
      features: ['Custom Orders', 'Bulk Items', 'Special Requests'],
      action: () => alert('Custom requests service coming soon!')
    }
  ];

  const features = [
    { icon: Clock, title: 'Fast Delivery', desc: 'Same day delivery to your hostel' },
    { icon: MapPin, title: 'Hostel Delivery', desc: 'Direct to your room' },
    { icon: Heart, title: 'Student Friendly', desc: 'Made by students, for students' },
    { icon: Star, title: 'Quality Service', desc: 'Trusted by 500+ students' },
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      hostel: 'Hostel A',
      text: 'Amazing service! Got my assignment printed in 2 hours.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      hostel: 'PG Elite',
      text: 'Books delivered right to my room. Super convenient!',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      hostel: 'Hostel B',
      text: 'Late night Maggi orders saved my life during exams 😂',
      rating: 5
    }
  ];

  // Success view
  if (currentView === 'success') {
    return <PaymentSuccess onBackToHome={handleBackToHome} orderData={orderData} />;
  }

  // Payment view
  if (currentView === 'payment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-4">
        <Navbar />
        <div className="max-w-4xl mx-auto pt-8">
          {/* Header */}
          <div className="mb-6">
            <button 
              onClick={() => setCurrentView('xerox')}
              className="text-blue-600 hover:text-blue-800 mb-4 flex items-center space-x-2 transition-colors"
            >
              <span>←</span>
              <span>Back to Orders</span>
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Complete Payment 💳
            </h1>
            <p className="text-gray-600">Review your order and proceed with payment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {orderData.files.map((file) => (
                      <div key={file.id} className="flex items-center justify-between p-2 bg-blue-50/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium truncate max-w-[150px]">{file.name}</p>
                            <p className="text-xs text-gray-500">{file.pages} pages</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Copies:</span>
                      <span>{orderData.copies}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Print Type:</span>
                      <Badge variant="secondary">{orderData.colorType === 'bw' ? 'B&W' : 'Color'}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Paper Size:</span>
                      <span className="uppercase">{orderData.paperSize}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Pages:</span>
                      <span>{orderData.totalPages}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Amount</span>
                      <span className="text-2xl font-bold">₹{orderData.amount}</span>
                    </div>
                    <div className="flex items-center mt-2 text-blue-100">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">Delivery in 2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Payment Methods */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Choose Payment Method
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <button
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          paymentMethod === 'upi' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">📱</div>
                          <div className="font-medium">UPI</div>
                          <div className="text-xs text-gray-500">GPay, PhonePe, Paytm</div>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          paymentMethod === 'card' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">💳</div>
                          <div className="font-medium">Card</div>
                          <div className="text-xs text-gray-500">Debit/Credit</div>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => setPaymentMethod('netbanking')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          paymentMethod === 'netbanking' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">🏦</div>
                          <div className="font-medium">Net Banking</div>
                          <div className="text-xs text-gray-500">All Banks</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Payment Form Fields */}
                  <div className="space-y-4">
                    {paymentMethod === 'upi' && (
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          UPI ID
                        </label>
                        <Input 
                          placeholder="yourname@paytm"
                          className="bg-white/70"
                        />
                      </div>
                    )}

                    {paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Card Number
                          </label>
                          <Input 
                            placeholder="1234 5678 9012 3456"
                            className="bg-white/70"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              Expiry Date
                            </label>
                            <Input 
                              placeholder="MM/YY"
                              className="bg-white/70"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              CVV
                            </label>
                            <Input 
                              placeholder="123"
                              className="bg-white/70"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Cardholder Name
                          </label>
                          <Input 
                            placeholder="John Doe"
                            className="bg-white/70"
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'netbanking' && (
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          Select Bank
                        </label>
                        <select className="w-full p-3 rounded-lg border border-gray-300 bg-white/70 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>State Bank of India</option>
                          <option>HDFC Bank</option>
                          <option>ICICI Bank</option>
                          <option>Axis Bank</option>
                          <option>Kotak Mahindra Bank</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Terms and Pay Button */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" className="mt-1" />
                      <p className="text-sm text-gray-600">
                        I agree to the <span className="text-blue-600 cursor-pointer">Terms & Conditions</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
                      </p>
                    </div>

                    <Button 
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Processing Payment...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>Pay ₹{orderData.amount}</span>
                          <CheckCircle className="h-5 w-5" />
                        </div>
                      )}
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      🔒 Your payment is secured with 256-bit SSL encryption
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Xerox view
  if (currentView === 'xerox') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <Navbar />
        <div className="max-w-4xl mx-auto pt-8">
          <div className="mb-8">
            <button 
              onClick={() => setCurrentView('home')}
              className="text-blue-600 hover:text-blue-800 mb-4 flex items-center space-x-2 transition-colors"
            >
              <span>←</span>
              <span>Back to Home</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Xerox & Print Orders 📄
            </h1>
            <p className="text-gray-600">Upload your documents and get them printed instantly</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upload Section */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Upload Documents</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drop files here or click to upload</p>
                  <p className="text-sm text-gray-500">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                  <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Choose Files
                  </Button>
                </div>

                {/* Uploaded Files */}
                <div className="space-y-2">
                  {files.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-medium text-sm">{file.name}</p>
                          <p className="text-xs text-gray-500">{file.pages} pages • {file.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Uploaded
                        </Badge>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Configuration */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Print Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Number of Copies
                  </label>
                  <Input 
                    type="number" 
                    min="1" 
                    value={orderDetails.copies}
                    onChange={(e) => setOrderDetails({...orderDetails, copies: parseInt(e.target.value)})}
                    className="bg-white/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Print Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant={orderDetails.colorType === 'bw' ? 'default' : 'outline'}
                      onClick={() => setOrderDetails({...orderDetails, colorType: 'bw'})}
                      className="bg-white/50"
                    >
                      B&W (₹1/page)
                    </Button>
                    <Button 
                      variant={orderDetails.colorType === 'color' ? 'default' : 'outline'}
                      onClick={() => setOrderDetails({...orderDetails, colorType: 'color'})}
                      className="bg-white/50"
                    >
                      Color (₹5/page)
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Paper Size
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant={orderDetails.paperSize === 'a4' ? 'default' : 'outline'}
                      onClick={() => setOrderDetails({...orderDetails, paperSize: 'a4'})}
                      className="bg-white/50"
                    >
                      A4
                    </Button>
                    <Button 
                      variant={orderDetails.paperSize === 'a3' ? 'default' : 'outline'}
                      onClick={() => setOrderDetails({...orderDetails, paperSize: 'a3'})}
                      className="bg-white/50"
                    >
                      A3
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Special Instructions
                  </label>
                  <Textarea 
                    placeholder="Any special requirements..."
                    value={orderDetails.notes}
                    onChange={(e) => setOrderDetails({...orderDetails, notes: e.target.value})}
                    className="bg-white/50"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Total Pages:</span>
                    <span className="font-bold">{orderData.totalPages}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Rate:</span>
                    <span className="font-bold">₹{orderDetails.colorType === 'bw' ? '1' : '5'}/page</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">₹{orderData.amount}</span>
                  </div>
                </div>

                <Button 
                  onClick={() => setCurrentView('payment')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Place Order (Delivery in 2 hours)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Home view (default)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Zap className="h-4 w-4 mr-1" />
            Now serving 3 hostels & 5 PGs
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
            Your Campus,
            <br />
            Delivered Fast! 🚀
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From xerox to snacks, books to stationery - get everything delivered to your hostel room. 
            Made by a student, for students! ❤️
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => setCurrentView('xerox')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Start Ordering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setCurrentView('xerox')}
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Upload & Print
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Students</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-600">2h</div>
              <div className="text-sm text-gray-600">Avg Delivery</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-orange-600">1000+</div>
              <div className="text-sm text-gray-600">Orders Delivered</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-purple-600">4.9</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Everything You Need 📦
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From assignments to midnight snacks, we've got your campus life covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={service.action}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">{service.title}</CardTitle>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        // ... keep existing code (features section)
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white/30">
        // ... keep existing code (testimonials section)
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started? 🎯
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 500+ students who trust us for their daily needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setCurrentView('xerox')}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  Start Your Order
                </Button>
                <Link to="/admin">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                    Admin Login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        // ... keep existing code (footer section)
      </footer>
    </div>
  );
};

export default Index;