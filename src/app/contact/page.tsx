'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, Send, Clock, Shield, Globe, Zap } from 'lucide-react';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const productName = searchParams.get('product');
    if (productName) {
      setFormData(prev => ({ ...prev, message: `I am interested in getting a quote for: ${productName}. Please send me pricing and availability.` }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 gradient-hero overflow-hidden">
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Get In Touch
          </div>

          <h1 className="max-w-4xl mx-auto mb-6 font-black leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Ready to Elevate Your <br />
            <span className="text-primary italic">Medical Practice?</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground-light mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Contact our team for personalized wholesale pricing, bulk orders, and expert guidance on medical supplies.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Mail size={32} />, title: "Email Us", desc: "info@manhattanwholesale.com", sub: "We'll respond within 24 hours" },
              { icon: <Phone size={32} />, title: "Call Us", desc: "(123) 456-7890", sub: "Mon-Fri, 9AM-6PM EST" },
              { icon: <MapPin size={32} />, title: "Visit Us", desc: "New York, NY", sub: "By appointment only" }
            ].map((item, i) => (
              <div key={i} className="card p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground font-semibold mb-1">{item.desc}</p>
                <p className="text-foreground-light text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg font-semibold"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Why Choose Manhattan?</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Shield size={20} />, text: "Quality guaranteed medical supplies" },
                    { icon: <Globe size={20} />, text: "Global shipping to 15+ countries" },
                    { icon: <Clock size={20} />, text: "Fast response within 24 hours" },
                    { icon: <Zap size={20} />, text: "Competitive wholesale pricing" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-primary">{item.icon}</div>
                      <span className="text-foreground-light">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-8 bg-secondary">
                <h3 className="text-xl font-bold mb-4 text-primary">Business Hours</h3>
                <div className="space-y-2 text-foreground-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-foreground-light mt-4">
                  Emergency inquiries: Call our 24/7 hotline at (123) 456-7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto bg-primary-light rounded-[3rem] p-12 md:p-20 border border-primary/10">
            <h2 className="mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-foreground-light mb-10 max-w-2xl mx-auto">
              Our team of medical supply experts is ready to help you find the perfect products for your practice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+1234567890" className="btn-primary flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </a>
              <a href="mailto:info@manhattanwholesale.com" className="btn-secondary flex items-center justify-center gap-2">
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
