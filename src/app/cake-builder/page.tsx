"use client";

import { useState } from 'react';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Check, ChevronRight, ShoppingCart, Cake } from 'lucide-react';
import {
  cakeFlavors,
  cakeSizes,
  cakeThemes,
  calculateCakePrice,
} from '@/lib/data/products';
import { useCartStore } from '@/lib/store/cart-store';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type Step = 1 | 2 | 3 | 4;

export default function CakeBuilderPage() {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const [step, setStep] = useState<Step>(1);
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [customMessage, setCustomMessage] = useState<string>('');

  const currentFlavor = cakeFlavors.find((f) => f.id === selectedFlavor);
  const currentSize = cakeSizes.find((s) => s.id === selectedSize);
  const currentTheme = cakeThemes.find((t) => t.id === selectedTheme);

  const totalPrice = calculateCakePrice(selectedFlavor, selectedSize, selectedTheme);

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedFlavor !== '';
      case 2:
        return selectedSize !== '';
      case 3:
        return true; // Theme is optional
      case 4:
        return true; // Message is optional
      default:
        return false;
    }
  };

  const handleAddToCart = () => {
    if (!currentFlavor || !currentSize) return;

    addItem({
      name: `Custom ${currentFlavor.name} Cake`,
      price: totalPrice,
      quantity: 1,
      imageUrl: currentTheme?.imageUrl || '/images/cakes/default.jpg',
      type: 'custom-cake',
      customization: {
        flavor: currentFlavor.name,
        size: currentSize.name,
        theme: currentTheme?.name,
        message: customMessage,
      },
    });

    toast.success('Custom cake added to cart!', {
      description: `${currentFlavor.name} • ${currentSize.serves} • $${totalPrice}`,
    });

    router.push('/checkout');
  };

  const steps = [
    { number: 1, title: 'Choose Flavor', completed: selectedFlavor !== '' },
    { number: 2, title: 'Select Size', completed: selectedSize !== '' },
    { number: 3, title: 'Pick Theme', completed: selectedTheme !== '' },
    { number: 4, title: 'Add Message', completed: customMessage !== '' },
  ];

  return (
    <>
      <EcommerceHeader />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-soft-pink border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                <Cake className="h-4 w-4" />
                Custom Cake Builder
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Design Your Dream Cake</h1>
              <p className="text-lg text-muted-foreground">
                Create a personalized cake in 4 easy steps
              </p>
            </div>

            {/* Step Indicator */}
            <div className="max-w-3xl mx-auto mt-12">
              <div className="flex items-center justify-between">
                {steps.map((s, idx) => (
                  <div key={s.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                          s.number === step
                            ? 'bg-primary text-white'
                            : s.completed
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {s.completed && s.number < step ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          s.number
                        )}
                      </div>
                      <span className="text-xs font-medium text-center hidden sm:block">
                        {s.title}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        className={`h-1 flex-1 mx-2 rounded transition-colors ${
                          s.completed ? 'bg-primary/30' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Step 1: Flavor */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Choose Your Flavor</h2>
                      <p className="text-muted-foreground">
                        Select from our delicious handcrafted cake flavors
                      </p>
                    </div>

                    <RadioGroup value={selectedFlavor} onValueChange={setSelectedFlavor}>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {cakeFlavors.map((flavor) => (
                          <div key={flavor.id}>
                            <RadioGroupItem
                              value={flavor.id}
                              id={flavor.id}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={flavor.id}
                              className="flex flex-col gap-3 rounded-lg border-2 border-muted bg-card p-5 hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="font-semibold text-lg">{flavor.name}</div>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {flavor.description}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold text-primary">${flavor.basePrice}</div>
                                  <div className="text-xs text-muted-foreground">base price</div>
                                </div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Step 2: Size */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Select Your Size</h2>
                      <p className="text-muted-foreground">
                        Choose the perfect size for your celebration
                      </p>
                    </div>

                    <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {cakeSizes.map((size) => (
                          <div key={size.id}>
                            <RadioGroupItem
                              value={size.id}
                              id={size.id}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={size.id}
                              className="flex flex-col gap-3 rounded-lg border-2 border-muted bg-card p-6 hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                            >
                              <div className="space-y-1">
                                <div className="font-semibold text-xl">{size.name}</div>
                                <div className="text-sm text-muted-foreground">{size.serves}</div>
                                {currentFlavor && (
                                  <div className="text-lg font-bold text-primary pt-2">
                                    ${Math.round(currentFlavor.basePrice * size.priceMultiplier)}
                                  </div>
                                )}
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Step 3: Theme */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Pick a Theme (Optional)</h2>
                      <p className="text-muted-foreground">
                        Add a beautiful theme or skip for classic decoration
                      </p>
                    </div>

                    <RadioGroup value={selectedTheme} onValueChange={setSelectedTheme}>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {cakeThemes.map((theme) => (
                          <div key={theme.id}>
                            <RadioGroupItem
                              value={theme.id}
                              id={theme.id}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={theme.id}
                              className="flex flex-col gap-3 rounded-lg border-2 border-muted bg-card overflow-hidden hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                            >
                              <div className="aspect-video bg-muted relative">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                  <Cake className="h-12 w-12" />
                                </div>
                              </div>
                              <div className="p-4 space-y-2">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="font-semibold">{theme.name}</div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {theme.description}
                                    </p>
                                  </div>
                                  <Badge variant="secondary">+${theme.additionalCost}</Badge>
                                </div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Step 4: Message */}
                {step === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Add a Personal Message</h2>
                      <p className="text-muted-foreground">
                        Make it extra special with a custom message (optional, max 50 characters)
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Happy Birthday, Sarah!"
                          maxLength={50}
                          value={customMessage}
                          onChange={(e) => setCustomMessage(e.target.value)}
                          className="mt-2 resize-none"
                          rows={3}
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          {customMessage.length}/50 characters
                        </p>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                        <h3 className="font-semibold">Preview</h3>
                        <div className="bg-card rounded-lg p-8 text-center border-2 border-dashed border-border">
                          {customMessage ? (
                            <p className="font-handwriting text-3xl text-primary">
                              {customMessage}
                            </p>
                          ) : (
                            <p className="text-muted-foreground italic">
                              Your message will appear here
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setStep(Math.max(1, step - 1) as Step)}
                    disabled={step === 1}
                  >
                    Back
                  </Button>

                  {step < 4 ? (
                    <Button
                      onClick={() => setStep(Math.min(4, step + 1) as Step)}
                      disabled={!canProceed()}
                    >
                      Continue
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  ) : (
                    <Button onClick={handleAddToCart} size="lg" disabled={!canProceed()}>
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart • ${totalPrice}
                    </Button>
                  )}
                </div>
              </div>

              {/* Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card border rounded-xl p-6 space-y-6 shadow-product">
                  <h3 className="text-xl font-bold">Your Cake</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Flavor</div>
                      <div className="font-semibold">
                        {currentFlavor?.name || 'Not selected'}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Size</div>
                      <div className="font-semibold">
                        {currentSize ? `${currentSize.name} (${currentSize.serves})` : 'Not selected'}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Theme</div>
                      <div className="font-semibold">
                        {currentTheme?.name || 'Classic (no theme)'}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Message</div>
                      <div className="font-semibold">
                        {customMessage || 'No message'}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Base Price</span>
                      <span>${currentFlavor?.basePrice || 0}</span>
                    </div>
                    {currentSize && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Size Multiplier</span>
                        <span>×{currentSize.priceMultiplier}</span>
                      </div>
                    )}
                    {currentTheme && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Theme</span>
                        <span>+${currentTheme.additionalCost}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xl font-bold pt-4 border-t">
                      <span>Total</span>
                      <span className="text-primary">${totalPrice}</span>
                    </div>
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
