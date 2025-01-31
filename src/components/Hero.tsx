import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Award, Globe, Target, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl font-bold mb-6">
              SEO & Digital Marketing Expert
            </h1>
            <h2 className="text-2xl text-gray-600 mb-8">
              Sagar Singh Rajpurohit
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 8003989950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>sagarpurohit2222@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>Udaipur, Rajasthan, India</span>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md mb-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Career Objective</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To excel as an SEO and Digital Marketing professional by leveraging my skills, leadership capabilities, and hands-on expertise to enhance online presence, drive user engagement, and deliver measurable results for global and local organizations.
              </p>
            </motion.div>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg"
              >
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-12 md:mt-0 space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Key Highlights</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold">3+ Years of SEO Experience:</span>
                    <p className="text-gray-600">Expertise in global and regional SEO, PPC campaigns, and digital strategies.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold">International Projects:</span>
                    <p className="text-gray-600">Successfully managed SEO for platforms in USA, UK, Dubai, Australia, and India.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold">Leadership Role:</span>
                    <p className="text-gray-600">Team Lead at Matrix Web Infotech, handling diverse teams and strategies.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Current Role</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Search Engine Optimization Team Lead</h4>
                <p className="text-gray-600">Matrix Web Infotech</p>
                <p className="text-sm text-gray-500">Dec 2024 – Present | Udaipur, Rajasthan</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>PPC Bid Management</li>
                  <li>Pay-Per-Click (PPC) Advertising</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Campaign Strategy and Execution</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;