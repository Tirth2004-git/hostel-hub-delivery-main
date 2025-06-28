
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  Download,
  Eye,
  Clock,
  FileText
} from 'lucide-react';

interface PaymentSuccessProps {
  onBackToHome: () => void;
  orderData: {
    files: Array<{ id: number; name: string; pages: number }>;
    copies: number;
    colorType: string;
    paperSize: string;
    totalPages: number;
    amount: number;
  };
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onBackToHome, orderData }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Trigger animations in sequence
    setTimeout(() => setShowConfetti(true), 100);
    setTimeout(() => setAnimationPhase(1), 500);
    setTimeout(() => setAnimationPhase(2), 1000);
    setTimeout(() => setAnimationPhase(3), 1500);
  }, []);

  const orderId = `XRX${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 p-4 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className={`w-2 h-2 rounded-full ${
                ['bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'][i % 5]
              }`} />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto pt-8">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mb-6 transform transition-all duration-1000 ${
            animationPhase >= 1 ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <CheckCircle className="h-12 w-12 text-white animate-bounce" />
          </div>
          
          <div className={`transform transition-all duration-500 delay-300 ${
            animationPhase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Payment Successful! 🎉
            </h1>
            <p className="text-gray-600 text-lg">
              Your xerox order has been placed successfully
            </p>
          </div>
        </div>

        {/* Order Details Card */}
        <Card className={`bg-white/90 backdrop-blur-sm border-0 shadow-xl mb-6 transform transition-all duration-700 delay-500 ${
          animationPhase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">Order ID: {orderId}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Order Summary */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-600" />
                  Order Summary
                </h3>
                <div className="space-y-3">
                  {orderData.files.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.pages} pages</p>
                      </div>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment & Delivery Info */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Order Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Copies:</span>
                    <span className="font-medium">{orderData.copies}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Print Type:</span>
                    <Badge variant="secondary">{orderData.colorType === 'bw' ? 'B&W' : 'Color'}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Paper Size:</span>
                    <span className="font-medium uppercase">{orderData.paperSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Pages:</span>
                    <span className="font-medium">{orderData.totalPages}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="font-semibold text-gray-800">Amount Paid:</span>
                    <span className="text-xl font-bold text-green-600">₹{orderData.amount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <div className="flex items-center justify-center space-x-2 text-blue-700">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Expected Delivery: Within 2 hours</span>
              </div>
              <p className="text-center text-sm text-blue-600 mt-2">
                You'll receive an SMS with delivery updates
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Receipt
              </Button>
              <Button onClick={onBackToHome} className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                Place Another Order
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center text-gray-500 text-sm">
          <p>Need help? Contact us at support@xeroxservice.com or call +91-9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;