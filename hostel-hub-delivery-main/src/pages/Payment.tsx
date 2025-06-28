
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  Clock,
  FileText,
  Eye,
  Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PaymentSuccess from '../components/PaymentSuccess';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  // Mock order data - in real app this would come from state/props
  const orderData = {
    files: [
      { id: 1, name: 'Assignment_1.pdf', pages: 5 },
      { id: 2, name: 'Notes_Chapter_3.pdf', pages: 12 }
    ],
    copies: 2,
    colorType: 'bw',
    paperSize: 'a4',
    totalPages: 34,
    amount: 34
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setShowSuccess(true);
  };

  const handleBackToHome = () => {
    setShowSuccess(false);
    navigate('/');
  };

  if (showSuccess) {
    return <PaymentSuccess onBackToHome={handleBackToHome} orderData={orderData} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button 
            onClick={() => navigate('/')}
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
};

export default Payment;