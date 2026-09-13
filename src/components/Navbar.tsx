import Logo from "/images/logo-text.png";
const Navbar = () => {
  return(
  <nav className="bg-base-100 shadow-md">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#"
              className="text-sm font-medium text-pink-600 hover:text-pink-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-slate-600 hover:text-pink-700"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-slate-600 hover:text-pink-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-slate-600 hover:text-pink-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-slate-600 hover:text-pink-700"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-pink-700"
          >
            SignIn
          </a>
          <button className="ml-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700">
            SignUp
          </button>
        </div>
      </div>
    </div>
  </nav>);
};

export default Navbar;
