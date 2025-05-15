
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-gray-300">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-portfolio-purple/20 p-3 rounded-full">
                  <Mail size={20} className="text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Mail</h4>
                  <p className="text-white">vimal1703t@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-portfolio-blue/20 p-3 rounded-full">
                  <MapPin size={20} className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Location</h4>
                  <p className="text-white">Nagercoil, Tamil nadu</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-portfolio-pink/20 p-3 rounded-full">
                  <Phone size={20} className="text-portfolio-pink" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Phone</h4>
                  <p className="text-white">+91 94864 05865</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8 animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-portfolio-darker border border-gray-700 rounded-lg w-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50 focus:border-portfolio-purple/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-portfolio-darker border border-gray-700 rounded-lg w-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50 focus:border-portfolio-purple/50"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-portfolio-darker border border-gray-700 rounded-lg w-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50 focus:border-portfolio-purple/50"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-portfolio-darker border border-gray-700 rounded-lg w-full p-3 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50 focus:border-portfolio-purple/50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
