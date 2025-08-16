import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">H</span>
            </div>
            <span className="text-gray-900 font-semibold">HireGenAI</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Support
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2024 HireGenAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
