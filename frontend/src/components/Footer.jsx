import Logo from "../components/Logo";
import LogoImage from "../components/LogoImage"

const Footer = () => {
  return (
    <footer className="bg-color_two mt-14">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <LogoImage />
            <Logo />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-color_nine sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-color_four/30 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-color_four sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
