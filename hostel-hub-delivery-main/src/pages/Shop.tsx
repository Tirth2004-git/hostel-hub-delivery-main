
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Grid, List } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products = [
    {
      id: 1,
      name: 'Premium Notebook Set',
      price: 15.99,
      category: 'notebooks',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCia2WKg7D4LQzDHl4ohyZKTrqeNJMovYF4UT3R7Kv_hu2EeVHRmK0e3CtACuwpeMpRI5QeYaMFL8tSKSXljjTE5x7lERJbTi220n4WSRxNQn_m4TpuHQT8FcsKGa_u20uLOBj0tscp0qKwg3Wz25eKCKiJ_XFfhazcAf60lUO0HqPvrlvhE7nDwapJDlX6gWLUgpsKHepGBLan0I6VsSOZ5mzl6SfSTcQQnqjOp1Qx9lPyQrE3VsqzKMMBqPqX1dQL2fZOzMUNMjnA',
      description: 'High-quality notebook set for all your academic needs'
    },
    {
      id: 2,
      name: 'Professional Pen Collection',
      price: 24.99,
      category: 'writing',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIBFCXqky42PUR0t_sFK-fcicJhTPVJmg0_MynRlfFcqtJ3CY8pdaE0_8qcgPn04vhLU1mOcJXcKbuGUgToTQld9Nbfrp3eDWmYMiel1Rx_04KhNADJ6Z_r-QzmrrGriDuL6BAsXEhqSLnxDyw5iKnJ4OCBSOFRlbABBc-XsJa5C2G5eW9wQL1wkksWkDF3iB1ibHQMMWrv3w4HqpJti3uEKj8kMvfJ4PB7TiA98snRy0Zl7uDPajksJGLnaO2s0ScBO5QQSYGJzVs',
      description: 'Complete set of professional writing instruments'
    },
    {
      id: 3,
      name: 'Study Textbook Bundle',
      price: 89.99,
      category: 'books',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTxvlHjPivrZnyYiNf14NgVy1ICzJrZ43egqI9yHYX3NdKoZhFRZs8ovT9T4P_XF6eX8r2dluqETAdB2dYdxmIV4Yy0j8f3_75pih0eroTue63dftCq7N8ajMJdJZ4_ZXVA2MK_UXedUFyr5hx2Dp_hU4dXzwbl-wYBOJmEjA9SgoEoFSWLF_2Je2WM0gyMdSJ6vVj6Wim4ISE7lOi-ayKGq65BiceVTgFFHg1teR3O54fCXFue1KRJR6nu_Q1_LtgbLHmmteRPSLb',
      description: 'Essential textbooks for your academic journey'
    },
    {
      id: 4,
      name: 'Scientific Calculator',
      price: 45.99,
      category: 'tech',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5bt5cGzR5m8k3XTNFEhto50o73QCAQHar7chDSRm6IIxhnI8wKUJK7Ys-AwZiRlV8gzuEpZ0yutcQYFXGFyr5hGqxQXRXKqp_ZYefwuprmr1tRwFjVcPqPlC5bLZe24XFUeyQNCw9vpsqwJaXUtpY28oAshT7Dedzz_-NEN6VVSpn6qdZWsMVTdfjOkDnv55oBartwEGsCWJebBtnIJdRPRtQSpItR6RpRzBDjAmJvvefI4A0wqc4U5jtNf2T22uXLlzcXQn9S_81',
      description: 'Advanced scientific calculator for complex calculations'
    },
    {
      id: 5,
      name: 'Student Backpack',
      price: 59.99,
      category: 'accessories',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXZtcLJg3NMnc50BzA9-VC9NvU-w7zc61GHhJBwppDT9fUL7TeKU8LT6rkmzE7WUhozJxfcm6ar48K13lB7foxcn7tHgjFz6W2ReuZE_Od8iinpZbFtIGKHzjtHDpKlwxS4Ux20RmoBZuj5effJ_KxYIQhLpna8-DXC7Oh8H2Xm0tPKsEn7qLQck0p4K6WmMSMtIhTLhfMOnYEWxM42s3GSMULurv55oAE_UJLEOAwPvFqcY_V-MfV4dTds8UVlScEULStAP7iCgzB',
      description: 'Spacious and durable backpack for students'
    },
    {
      id: 6,
      name: 'Desk Organizer Set',
      price: 29.99,
      category: 'organization',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQDLnFCpTrciix51HI8pyOp1G-mKdZdEZauMU5OH-6-otH7ipzFoo6Crr8K-qn3qj4I_n83ZJRf7KNk3-8mmUmtVadIUFuYJCFYDXsylDEALDuYC8-05jT96fVMTALrU_Vri04YQcvZbNw4i1UW-_qLO3EkWh0BdFvAt9_c1p1sY1_wO4zIZCfxsHST4ZNISTY3SEZC-Egb97IxAyqu0CGcInwuv_XwkQ50zmsCw-4Ckzyb7mN3VGe6kT7OE_k_saioSxPAhnfKd2K',
      description: 'Complete desk organization solution'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'notebooks', name: 'Notebooks' },
    { id: 'writing', name: 'Writing Supplies' },
    { id: 'books', name: 'Books' },
    { id: 'tech', name: 'Tech Accessories' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'organization', name: 'Organization' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop</h1>
          <p className="text-gray-600">Discover our complete range of student essentials</p>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="text-xs sm:text-sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'w-full'}`}>
                  <div
                    className={`bg-center bg-no-repeat bg-cover ${
                      viewMode === 'list' ? 'h-48' : 'aspect-square'
                    }`}
                    style={{ backgroundImage: `url("${product.image}")` }}
                  />
                </div>
                <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{product.name}</h3>
                    <Badge variant="secondary" className="ml-2">
                      ${product.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Button className="w-full" size="sm">
                    Add to Cart
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Results count */}
        <div className="mt-8 text-center text-gray-600">
          Showing {filteredProducts.length} products
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
