import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  FileText, 
  Download, 
  Eye, 
  Trash2,
  Plus,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const XeroxOrders = () => {
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

  const navigate = useNavigate();

  const handlePaymentRedirect = () => {
    navigate('/payment');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Back Button */}
          <div className="mb-8 flex items-center gap-4">
            
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Xerox & Print Orders 📄
              </h1>
              <p className="text-gray-600">Upload your documents and get them printed instantly</p>
            </div>
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

                {files.length > 0 && (
                  <Link to="/upload">
                    <Button variant="outline" className="w-full">
                      View All Uploaded Files
                    </Button>
                  </Link>
                )}
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
                    <span className="font-bold">{files.reduce((acc, file) => acc + file.pages, 0) * orderDetails.copies}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Rate:</span>
                    <span className="font-bold">₹{orderDetails.colorType === 'bw' ? '1' : '5'}/page</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">
                      ₹{files.reduce((acc, file) => acc + file.pages, 0) * orderDetails.copies * (orderDetails.colorType === 'bw' ? 1 : 5)}
                    </span>
                  </div>
                </div>

                <Link to="/payment">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    <Clock className="h-4 w-4 mr-2" />
                    Place Order (Delivery in 2 hours)
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XeroxOrders;