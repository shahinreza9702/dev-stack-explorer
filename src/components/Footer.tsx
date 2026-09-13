import Logo from "../../public/images/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-4 gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <img src={Logo} alt="DevStack Logo" className="w-32" />

            <p>
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex justify-left gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Github
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden sm:flex flex-col gap-6">
            <h3 className="text-lg font-semibold">PRODUCT</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="hidden sm:flex flex-col gap-6">
            <h3 className="text-lg font-semibold">COMPANY</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden sm:flex flex-col gap-6">
            <h3 className="text-lg font-semibold">LEGAL</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <p>&copy; 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
