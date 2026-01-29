import Link from 'next/link';
import { ShieldCheck, Globe2, Zap, Award, Users, Clock, ArrowRight, Star, Stethoscope } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 gradient-hero overflow-hidden">
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            About Manhattan
          </div>

          <h1 className="max-w-4xl mx-auto mb-6 font-black leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            20+ Years of <br />
            <span className="text-primary italic">Medical Excellence</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground-light mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your trusted global partner for premium medical and dental supplies, delivering quality and innovation since 2003.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Our Story</h2>
              <div className="space-y-6 text-foreground-light leading-relaxed">
                <p>
                  Founded in 2003, Manhattan Wholesales Importers Inc. began with a simple mission: to bridge the gap between manufacturers and healthcare professionals worldwide. What started as a small import business has grown into a trusted name in medical supplies.
                </p>
                <p>
                  Over two decades, we've built lasting relationships with clinics, hospitals, and dental practices across 15+ countries, earning their trust through consistent quality, competitive pricing, and unparalleled service.
                </p>
                <p>
                  Today, we continue to innovate and expand our product range, always prioritizing the needs of healthcare professionals and the well-being of their patients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    <Stethoscope size={64} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">20+ Years</h3>
                  <p className="text-foreground-light">Serving Healthcare Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container text-center mb-16">
          <h2 className="mb-4">Why Professionals Choose Us</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck size={32} />, title: "Quality Assured", desc: "All products meet international medical safety standards and certifications." },
            { icon: <Globe2 size={32} />, title: "Global Reach", desc: "Fast and reliable shipping to clinics and hospitals across 15+ countries." },
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

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "15+", label: "Countries Served" },
              { number: "1000+", label: "Happy Clients" },
              { number: "500+", label: "Products Available" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.number}</div>
                <div className="text-foreground-light font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award size={40} />, title: "Excellence", desc: "We strive for perfection in every product and service we provide." },
              { icon: <Users size={40} />, title: "Partnership", desc: "Building long-term relationships based on trust and mutual success." },
              { icon: <Clock size={40} />, title: "Reliability", desc: "Consistent delivery and dependable service you can count on." }
            ].map((value, i) => (
              <div key={i} className="card p-8 text-center">
                <div className="text-primary mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-foreground-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto bg-primary-light rounded-[3rem] p-12 md:p-20 border border-primary/10">
            <h2 className="mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-foreground-light mb-10 max-w-2xl mx-auto">
              Join hundreds of medical professionals who trust Manhattan for their supply needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products" className="btn-primary flex items-center justify-center gap-2">
                Browse Products <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
