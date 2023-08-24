import { useState } from "react";
import {
  RiEarthLine,
  RiContractLeftRightLine,
  RiVoiceprintLine,
} from "react-icons/ri";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <RiEarthLine className="nav__icon" />
            <span className="nav__title">Spacee</span>
          </a>
          {toggleMenu && (
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="" className="nav__link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="" className="nav__link">
                    Features
                  </a>
                </li>
                <li className="nav__item">
                  <a href="" className="nav__link">
                    Pricing
                  </a>
                </li>
                <li className="nav__item">
                  <a href="" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
              <a href="#" className="nav__button">
                Login
              </a>
              {/* Close Button */}
              <div className="nav__close" onClick={() => setToggleMenu(false)}>
                <RiContractLeftRightLine />
              </div>
            </div>
          )}

          {/* Toggle Button */}
          <div className="nav__toggle" onClick={() => setToggleMenu(true)}>
            <RiVoiceprintLine />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
