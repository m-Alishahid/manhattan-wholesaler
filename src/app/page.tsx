'use client';

import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ShieldCheck, Globe2, Zap, ArrowRight, Star, Stethoscope, Scissors, Syringe, Microscope } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];

  // Get products by category
  const getProductsByCategory = (category: string, limit: number = 4) => {
    return products.filter(product => product.category === category).slice(0, limit);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/dental3.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      >
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Professional Medical Imports
          </div>
          
          <h1 className="max-w-4xl mx-auto mb-6 font-black leading-tight text-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            The Gold Standard in <br />
            <span className="text-primary italic">Medical Accessories.</span>
          </h1>
          
          {/* Trusted Global Partners line - Set to Pure Black */}
          <p className="text-black font-medium max-w-2xl mx-auto text-lg md:text-xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Trusted global partners for premium dental and medical supplies. Elevating healthcare standards through quality and precision for over 20 years.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/products" className="btn-primary flex items-center justify-center gap-2 text-lg">
              Explore Products <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              Request Wholesale Price
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="mb-4">Featured Collection</h2>
              <p>Discover our most popular instruments, engineered for performance and durability.</p>
            </div>
            <Link href="/products" className="text-primary font-bold flex items-center gap-1 group">
              View All Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      {categories.filter(category => getProductsByCategory(category).length >= 3).slice(0, 4).map((category, categoryIndex) => {
        const categoryProducts = getProductsByCategory(category, 3);
        const categoryIcons = {
          'Examination Instruments': <Stethoscope size={32} />,
          'Scaling Instruments': <Scissors size={32} />,
          'Extraction Instruments': <Syringe size={32} />,
          'Restorative Instruments': <Microscope size={32} />,
          'Rotary Instruments': <Zap size={32} />,
          'Sterilization Equipment': <ShieldCheck size={32} />,
          'Suction & Irrigation': <Globe2 size={32} />,
          'Diagnostic Equipment': <Star size={32} />
        };

        return (
          <section key={category} className={`py-24 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-secondary'}`}>
            <div className="container">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-primary">{categoryIcons[category as keyof typeof categoryIcons] || <Star size={32} />}</div>
                    <h2 className="text-3xl md:text-4xl font-bold">{category}</h2>
                  </div>
                  <p>Professional-grade {category.toLowerCase()} for optimal performance and reliability.</p>
                </div>
                <Link href={`/products?category=${encodeURIComponent(category)}`} className="text-primary font-bold flex items-center gap-1 group">
                  View All {category} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product, idx) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container text-center mb-16">
          <h2 className="mb-4">Why Professionals Choose Us</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck size={32} />, title: "Quality Assured", desc: "All products meet international medical safety standards and certifications." },
            { icon: <Globe2 size={32} />, title: "Global Shipping", desc: "Fast and reliable shipping to clinics and hospitals across 15+ countries." },
            { icon: <Zap size={32} />, title: "Wholesale Value", desc: "Direct importer pricing ensures you get premium quality at wholesale rates." }
          ].map((item, i) => (
            <div key={i} className="card p-10 text-center flex flex-col items-center">
              <div className="text-primary mb-6">{item.icon}</div>
              <h3 className="text-xl mb-4 font-bold text-foreground">{item.title}</h3>
              <p className="text-foreground-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-foreground text-white rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Star size={150} fill="white" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#eb2f3d" stroke="none" />)}
              </div>
              <p className="text-2xl md:text-3xl font-medium italic leading-relaxed mb-8">
                "The precision of Manhattan instruments is exceptional. Their wholesale pricing has allowed our clinic to maintain the highest standards without compromising our budget."
              </p>
              <div>
                <h4 className="text-xl font-bold text-white">Dr. Sarah Johnson</h4>
                <p className="text-primary font-medium tracking-wide">Chief Dental Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto bg-primary-light rounded-[3rem] p-12 md:p-20 border border-primary/10">
            <h2 className="mb-6">Ready to Scale Your Supply?</h2>
            <p className="text-xl text-foreground-light mb-10 max-w-2xl mx-auto">
              Join hundreds of medical professionals who trust Manhattan for their daily clinical needs.
            </p>
            <Link href="/contact" className="btn-primary !px-12 !py-5 text-xl">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}