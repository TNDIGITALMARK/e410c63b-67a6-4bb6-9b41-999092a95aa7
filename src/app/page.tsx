import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { ProductCard } from '@/components/products/ProductCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gift, Cake, Heart, Sparkles, TrendingUp, Calendar } from 'lucide-react';
import { featuredGifts, birthdayGifts } from '@/lib/data/products';

const occasions = [
  {
    id: 'birthday',
    name: 'Birthdays',
    description: 'Make their special day unforgettable',
    icon: Cake,
    color: 'from-amber-400 to-orange-400',
    href: '/occasions/birthday',
  },
  {
    id: 'wedding',
    name: 'Weddings',
    description: 'Celebrate love with perfect gifts',
    icon: Heart,
    color: 'from-pink-400 to-rose-400',
    href: '/occasions/wedding',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional gifts that impress',
    icon: TrendingUp,
    color: 'from-blue-400 to-indigo-400',
    href: '/occasions/corporate',
  },
  {
    id: 'anniversary',
    name: 'Anniversaries',
    description: 'Honor love and commitment',
    icon: Sparkles,
    color: 'from-purple-400 to-pink-400',
    href: '/occasions/anniversary',
  },
];

export default function HomePage() {
  return (
    <>
      <EcommerceHeader />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-soft-pink overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/celebration-pattern.svg')] opacity-5" />
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Make Every
                <span className="block text-transparent bg-clip-text bg-gradient-celebration font-handwriting text-6xl md:text-7xl lg:text-8xl">
                  Celebration
                </span>
                Unforgettable
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover curated gifts and custom cakes for birthdays, weddings, anniversaries, and every special moment worth celebrating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/gifts">
                    <Gift className="h-5 w-5 mr-2" />
                    Browse Gifts
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link href="/cake-builder">
                    <Cake className="h-5 w-5 mr-2" />
                    Build Your Cake
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        </section>

        {/* Shop by Occasion Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Shop by Occasion
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect gift for every celebration
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {occasions.map((occasion) => {
                const Icon = occasion.icon;
                return (
                  <Link
                    key={occasion.id}
                    href={occasion.href}
                    className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br hover:shadow-product-hover transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                    }}
                  >
                    <div className={`bg-gradient-to-br ${occasion.color} absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity`} />
                    <div className="relative z-10 space-y-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${occasion.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{occasion.name}</h3>
                      <p className="text-sm text-muted-foreground">{occasion.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                <Sparkles className="h-4 w-4" />
                Featured
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Bestselling Gifts
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our most loved gifts, perfect for any celebration
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredGifts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg" variant="outline">
                <Link href="/gifts">View All Gifts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Custom Cake CTA Section */}
        <section className="py-20 bg-gradient-celebration text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/cake-pattern.svg')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm font-semibold text-sm mb-6">
              <Cake className="h-4 w-4" />
              Custom Cake Builder
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Design Your Dream Cake
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Create a one-of-a-kind cake that's perfect for your celebration. Choose from 12 flavors, 4 sizes, and 10 beautiful themes. Add a custom message and watch your vision come to life!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 font-semibold"
            >
              <Link href="/cake-builder">Start Building Your Cake</Link>
            </Button>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Why Shop With Us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We make celebrations effortless and memorable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Curated gifts and handcrafted cakes made with love and attention to detail
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">On-Time Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Same-day and scheduled delivery options to ensure your gifts arrive perfectly timed
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-2">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">100% Satisfaction</h3>
                <p className="text-sm text-muted-foreground">
                  We guarantee you'll love every gift and cake, or we'll make it right
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EcommerceFooter />
    </>
  );
}