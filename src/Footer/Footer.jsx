const Footer = () => {
  return (
    <footer className="rounded-lg shadow-lg text-black text-lg p-2 font-medium">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            hmsmiraz
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
