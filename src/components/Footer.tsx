
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-4">Vimal T</h3>
            <p className="text-gray-400 max-w-md">
              A passionate Full Stack Developer dedicated to creating innovative web solutions.
            </p>
            <div className="mt-4 flex flex-col space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">Nagercoil, Tamil Nadu</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a target="_blank" href="mailto:vimal1703t@gmail.com" className="text-sm hover:text-white transition-colors">vimal1703t@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:+919486405865" className="text-sm hover:text-white transition-colors">+91 94864 05865</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a target="_blank" href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <Github size={20} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/vimal2003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors p-2">
                <Linkedin size={20} />
              </a>
              <a target="_blank" href="mailto:vimal1703t@gmail.com" className="text-gray-400 hover:text-white transition-colors p-2">
                <Mail size={20} />
              </a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {currentYear} Vimal T. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
