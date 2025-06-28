
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Notebook Set',
      price: 15.99,
      quantity: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCia2WKg7D4LQzDHl4ohyZKTrqeNJMovYF4UT3R7Kv_hu2EeVHRmK0e3CtACuwpeMpRI5QeYaMFL8tSKSXljjTE5x7lERJbTi220n4WSRxNQn_m4TpuHQT8FcsKGa_u20uLOBj0tscp0qKwg3Wz25eKCKiJ_XFfhazcAf60lUO0HqPvrlvhE7nDwapJDlX6gWLUgpsKHepGBLan0I6VsSOZ5mzl6SfSTcQQnqjOp1Qx9lPyQrE3VsqzKMMBqPqX1dQL2fZOzMUNMjnA'
    },
    {
      id: 2,
      name: 'Professional Pen Collection',
      price: 24.99,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIBFCXqky42PUR0t_sFK-fcicJhTPVJmg0_MynRlfFcqtJ3CY8pdaE0_8qcgPn04vhLU1mOcJXcKbuGUgToTQld9Nbfrp3eDWmYMiel1Rx_04KhNADJ6Z_r-QzmrrGriDuL6BAsXEhqSLnxDyw5iKnJ4OCBSOFRlbABBc-XsJa5C2G5eW9wQL1wkksWkDF3iB1ibHQMMWrv3w4HqpJti3uEKj8kMvfJ4PB7TiA98snRy0Zl7uDPajksJGLnaO2s0ScBO5QQSYGJzVs'
    },
    {
      id: 3,
      name: 'Scientific Calculator',
      price: 45.99,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5bt5cGzR5m8k3XTNFEhto50o73QCAQHar7chDSRm6IIxhnI8wKUJK7Ys-AwZiRlV8gzuEpZ0yutcQYFXGFyr5hGqxQXRXKqp_ZYefwuprmr1tRwFjVcPqPlC5bLZe24XFUeyQNCw9vpsqwJaXUtpY28oAshT7Dedzz_-NEN6VVSpn6qdZWsMVTdfjOkDnv55oBartwEGsCWJebBtnIJdRPRtQSpItR6RpRzBDjAmJvvefI4A0wqc4U5jtNf2T22uXLlzcXQn9S_81'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over $50
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to get started!</p>
            <Link to="/shop">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-24 h-24 flex-shrink-0">
                      <div
                        className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="mx-2 min-w-[2rem] text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-4">
                          <Badge variant="secondary" className="text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="flex justify-between">
              <Link to="/shop">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setCartItems([])}
                className="text-red-500 hover:text-red-700"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {subtotal > 50 && (
                  <div className="text-sm text-green-600">
                    🎉 You qualify for free shipping!
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Secure checkout with SSL encryption
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
