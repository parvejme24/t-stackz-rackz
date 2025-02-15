import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function footer() {
  return (
    <div>
      <div className="bg-[#222629]">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 pt-24 pb-16">
          {/* left side  */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="" />
              <h4 className="text-[#B3B3B3] text-2xl font-bold">
                T-Stackz Rackz
              </h4>
            </div>
            <h5 className="text-[#00F5FF] text-xl md:text-2xl font-bold">
              Unleash Your Trading Power
            </h5>
            <ul className="flex gap-4 items-center">
              <li>
                <Link
                  to="/"
                  className="bg-[#00F5FF] hover:bg-transparent border border-[#00F5FF] p-3 text-xl rounded-full text-[#222629] hover:text-[#00F5FF] inline-block duration-300"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="bg-[#00F5FF] hover:bg-transparent border border-[#00F5FF] p-3 text-xl rounded-full text-[#222629] hover:text-[#00F5FF] inline-block duration-300"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="bg-[#00F5FF] hover:bg-transparent border border-[#00F5FF] p-3 text-xl rounded-full text-[#222629] hover:text-[#00F5FF] inline-block duration-300"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>

          {/* right side  */}
          <div className="grid grid-cols-2 gap-10">
            {/* trading section */}
            <div>
              <h3 className="text-[#00F5FF] text-xl font-bold">Trading</h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Stocks & Options
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Crypto Trading
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Live Market
                  </Link>
                </li>
              </ul>
            </div>

            {/* education section  */}
            <div>
              <h3 className="text-[#00F5FF] text-xl font-bold">Education</h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Trading 101
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Video Tutorials
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Masterclass
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#00F5FF] text-xl font-bold">Support</h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* security section  */}
            <div>
              <h3 className="text-[#00F5FF] text-xl font-bold"> Security</h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Privacy & Security
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    2FA Setup Guide
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-[#C0C0C0]">
                    Compliance & Audits
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom  */}
      <div className="bg-[#00F5FF] py-3">
        <div className="container mx-auto max-w-7xl px-6 flex justify-center md:justify-between items-center flex-wrap">
          <p className="text-[#0D0D0D]">
            <small>Terms & Conditions | Privacy Policy</small>
          </p>
          <p className="text-[#0D0D0D]">
            <small>&copy; 2025 T-Stackz Rackz. All Rights Reserved</small>
          </p>
        </div>
      </div>
    </div>
  );
}
