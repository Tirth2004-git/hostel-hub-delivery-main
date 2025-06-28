
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Printer, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const UploadFiles = () => {
  const [uploadedFiles] = useState([
    { id: 1, name: 'Document 1', pages: 10, color: 'bg-gray-100' },
    { id: 2, name: 'Document 2', pages: 15, color: 'bg-orange-200' },
    { id: 3, name: 'Document 3', pages: 20, color: 'bg-orange-300' },
    { id: 4, name: 'Document 4', pages: 12, color: 'bg-orange-100' },
    { id: 5, name: 'Document 5', pages: 18, color: 'bg-yellow-200' },
    { id: 6, name: 'Document 6', pages: 25, color: 'bg-pink-200' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Link to="/xerox" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Uploaded Files</h1>
        </div>

        {/* Files Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Files</h2>
          <div className="grid grid-cols-2 gap-4">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="text-center">
                <div className={`${file.color} rounded-2xl p-6 mb-2 aspect-square flex items-center justify-center`}>
                  <div className="bg-white rounded-lg p-4 shadow-sm w-20 h-24 flex items-center justify-center relative">
                    <div className="w-full h-full bg-gray-100 rounded flex flex-col justify-between p-2">
                      <div className="space-y-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-0.5 bg-gray-400 rounded"></div>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="h-0.5 bg-gray-400 rounded"></div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 bg-orange-400 rounded-full transform rotate-12"></div>
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 text-sm">{file.name}</h3>
                <p className="text-sm text-gray-500">{file.pages} pages</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Actions</h2>
          <div className="space-y-3">
            <Button variant="ghost" className="w-full justify-start h-12 text-left">
              <Download className="h-5 w-5 mr-3 text-gray-600" />
              <span className="text-gray-900">Download</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start h-12 text-left">
              <Printer className="h-5 w-5 mr-3 text-gray-600" />
              <span className="text-gray-900">Mark as Printed</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start h-12 text-left">
              <FileText className="h-5 w-5 mr-3 text-gray-600" />
              <span className="text-gray-900">Add Notes</span>
            </Button>
          </div>
        </div>

        {/* Delivery Slot Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Delivery Slot</h2>
          <div className="flex items-center p-4 bg-white rounded-lg border">
            <Calendar className="h-5 w-5 mr-3 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">Today</p>
              <p className="text-sm text-gray-500">10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <Button className="w-full h-12 bg-pink-300 hover:bg-pink-400 text-gray-900 rounded-full">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default UploadFiles;
