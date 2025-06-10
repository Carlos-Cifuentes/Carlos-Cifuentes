import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Texto copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Carlos Cifuentes. All Rights Reserved.
        </p>

        {/* Redes sociales o links */}
        <div className="flex space-x-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">LinkedIn</a>
          <a href="#contacto" className="hover:text-green-400 transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
