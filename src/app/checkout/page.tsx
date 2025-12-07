"use client";

import { useState } from 'react';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingCart, CreditCard, Truck, Calendar } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const [deliveryMethod, setDeliveryMethod] = useState<'same-day' | 'scheduled'>('same-day');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [giftMessage, setGiftMessage] = useState('');

  const subtotal = getTotalPrice();
  const deliveryFee = deliveryMethod === 'same-day' ? 10 : 5;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    // In a real app, this would process payment and create order
    toast.success('Order placed successfully!', {
      description: `Total: $${total} • ${items.length} items`,
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <>
        <EcommerceHeader />
        <main className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
              <p className="text-muted-foreground">
                Start adding some amazing gifts and custom cakes to your cart!
              </p>
              <Button asChild size="lg">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
        <EcommerceFooter />
      </>
    );
  }

  return (
    <>
      <EcommerceHeader />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Checkout</h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Cart Items */}
                <div className="bg-card border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-6">Your Items</h2>

                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 rounded-lg border bg-background"
                      >
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="font-semibold">{item.name}</h3>
                              {item.type === 'custom-cake' && item.customization && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  <Badge variant="secondary" className="text-xs">
                                    {item.customization.flavor}
                                  </Badge>
                                  <Badge variant="secondary" className="text-xs">
                                    {item.customization.size}
                                  </Badge>
                                  {item.customization.theme && (
                                    <Badge variant="secondary" className="text-xs">
                                      {item.customization.theme}
                                    </Badge>
                                  )}
                                </div>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="h-8 w-8"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          {item.customization?.message && (
                            <p className="text-sm text-muted-foreground italic">
                              &quot;{item.customization.message}&quot;
                            </p>
                          )}

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-12 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <div className="font-bold">${item.price * item.quantity}</div>
                              <div className="text-xs text-muted-foreground">
                                ${item.price} each
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Truck className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Delivery Options</h2>
                  </div>

                  <RadioGroup value={deliveryMethod} onValueChange={(v) => setDeliveryMethod(v as any)}>
                    <div className="space-y-3">
                      <div>
                        <RadioGroupItem
                          value="same-day"
                          id="same-day"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="same-day"
                          className="flex items-center justify-between p-4 rounded-lg border-2 border-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer"
                        >
                          <div>
                            <div className="font-semibold">Same-Day Delivery</div>
                            <div className="text-sm text-muted-foreground">
                              Order before 2 PM, delivered today
                            </div>
                          </div>
                          <div className="font-bold">$10</div>
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="scheduled"
                          id="scheduled"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="scheduled"
                          className="flex items-center justify-between p-4 rounded-lg border-2 border-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer"
                        >
                          <div>
                            <div className="font-semibold">Scheduled Delivery</div>
                            <div className="text-sm text-muted-foreground">
                              Choose your delivery date (up to 30 days)
                            </div>
                          </div>
                          <div className="font-bold">$5</div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {deliveryMethod === 'scheduled' && (
                    <div className="mt-4">
                      <Label htmlFor="delivery-date">Delivery Date</Label>
                      <Input
                        type="date"
                        id="delivery-date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>

                {/* Gift Message */}
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Gift Message (Optional)</h2>
                  </div>

                  <div>
                    <Label htmlFor="gift-message">Your Message</Label>
                    <Textarea
                      id="gift-message"
                      placeholder="Add a special message to your gift..."
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      maxLength={200}
                      rows={4}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      {giftMessage.length}/200 characters
                    </p>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="bg-card border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-6">Delivery Address</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" className="mt-2" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input type="tel" id="phone" className="mt-2" />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">Payment Method</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card border rounded-xl p-6 space-y-6 shadow-product">
                  <h2 className="text-xl font-bold">Order Summary</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                      <span className="font-medium">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span className="font-medium">${deliveryFee}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total}</span>
                    </div>
                  </div>

                  <Button onClick={handleCheckout} className="w-full" size="lg">
                    Place Order • ${total}
                  </Button>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>✓ 100% Satisfaction Guaranteed</p>
                    <p>✓ Secure Payment Processing</p>
                    <p>✓ Free Returns within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <EcommerceFooter />
    </>
  );
}
