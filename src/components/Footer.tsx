import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-12">
      <div>
        <h1 className="text-8xl bold">CONNECT WITH US</h1>
      </div>
      <div className="flex justify-evenly items-center w-full">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Logo}
            alt="Karnali Yaks Restaurant and Bar Logo"
            className="w-20"
          />
          <h1 className="text-md">Karnali Yaks Restaurant and Bar</h1>
        </div>
        <div className="flex flex-col">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Dishes</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul>
            <li>
              <a href="#">Kathmandu, Nepal</a>
            </li>
            <li>
              <a href="#">+977-9862478661</a>
            </li>
            <li>
              <a href="#">aviralale@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border border-white w-full" />

      <div className="py-4">
        <h1 className="text-sm">
          &copy;2025 Karnali Yaks Restaurant & Bar | All Rights Reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
