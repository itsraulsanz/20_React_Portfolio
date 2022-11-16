import React, { useEffect, useState } from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const allDetails = document.querySelectorAll("details")
    const menuElements = document.getElementsByClassName('nav-item')

    for (const menuElement of menuElements) {
      menuElement.addEventListener("click", () => {
        allDetails.forEach((detail) => {
          if (detail !== allDetails) {
            detail.removeAttribute("open");
          }
        });
      });
    }
  })
  
  return (
    <div>
      <nav className='desktop'>
        <ul>
          <li className="nav-item">
            <a href="#resume">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav className='mobile'>
        <details className="navigation__hamburger-menu-details" onClick={handleToggle}>
          <summary id="mobile-summary" className="navigation__hamburger-menu-summary" aria-label="Menu" role="button" aria-expanded="false" aria-controls="menu-drawer"><span className="icon-hamburger"><svg alt="Open mobile navigation icon" title="Open mobile navigation" width="25" height="13" viewBox="0 0 37 13" xmlns="http://www.w3.org/2000/svg"><line x1="37" y1="1.5" x2="-1.31134e-07" y2="1.5" strokeWidth="3"></line><line x1="37" y1="11.5" x2="18" y2="11.5" strokeWidth="3"></line></svg></span><span className="icon-close"><svg alt="Close mobile navigation icon icon" title="Close mobile navigation icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.420908 0.420786C0.50509 0.33639 0.605096 0.26943 0.715197 0.223744C0.825297 0.178057 0.94333 0.154541 1.06253 0.154541C1.18174 0.154541 1.29977 0.178057 1.40987 0.223744C1.51997 0.26943 1.61998 0.33639 1.70416 0.420786L6.50003 5.21847L11.2959 0.420786C11.3802 0.336526 11.4802 0.269688 11.5903 0.224087C11.7004 0.178486 11.8184 0.155015 11.9375 0.155015C12.0567 0.155015 12.1747 0.178486 12.2848 0.224087C12.3949 0.269688 12.4949 0.336526 12.5792 0.420786C12.6634 0.505045 12.7303 0.605075 12.7759 0.715165C12.8215 0.825256 12.8449 0.94325 12.8449 1.06241C12.8449 1.18157 12.8215 1.29957 12.7759 1.40966C12.7303 1.51975 12.6634 1.61978 12.5792 1.70404L7.78147 6.49991L12.5792 11.2958C12.6634 11.38 12.7303 11.4801 12.7759 11.5902C12.8215 11.7003 12.8449 11.8183 12.8449 11.9374C12.8449 12.0566 12.8215 12.1746 12.7759 12.2847C12.7303 12.3947 12.6634 12.4948 12.5792 12.579C12.4949 12.6633 12.3949 12.7301 12.2848 12.7757C12.1747 12.8213 12.0567 12.8448 11.9375 12.8448C11.8184 12.8448 11.7004 12.8213 11.5903 12.7757C11.4802 12.7301 11.3802 12.6633 11.2959 12.579L6.50003 7.78135L1.70416 12.579C1.6199 12.6633 1.51987 12.7301 1.40978 12.7757C1.29969 12.8213 1.18169 12.8448 1.06253 12.8448C0.943372 12.8448 0.825378 12.8213 0.715287 12.7757C0.605197 12.7301 0.505167 12.6633 0.420908 12.579C0.336648 12.4948 0.26981 12.3947 0.224209 12.2847C0.178608 12.1746 0.155138 12.0566 0.155138 11.9374C0.155138 11.8183 0.178608 11.7003 0.224209 11.5902C0.26981 11.4801 0.336648 11.38 0.420908 11.2958L5.2186 6.49991L0.420908 1.70404C0.336512 1.61985 0.269553 1.51985 0.223866 1.40975C0.178179 1.29965 0.154663 1.18161 0.154663 1.06241C0.154663 0.943208 0.178179 0.825175 0.223866 0.715075C0.269553 0.604974 0.336512 0.504968 0.420908 0.420786Z"></path></svg></span></summary>
          <ul>
            <li className="nav-item">
              <a
                href="#resume"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>
          {/* <div>
            <li>
              <a href="https://uk.linkedin.com/in/raulsd/en">
                <svg alt="LinkedIn icon" title="LinkedIn" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.01686 13.2508V4.77716H1.12508V13.2508H4.01686ZM2.57135 3.61954C3.57976 3.61954 4.20745 2.96886 4.20745 2.15573C4.18866 1.32427 3.5798 0.69165 2.59048 0.69165C1.60132 0.69165 0.954468 1.32428 0.954468 2.15573C0.954468 2.9689 1.582 3.61954 2.55247 3.61954H2.57126H2.57135ZM5.61745 13.2508H8.50924V8.51871C8.50924 8.26545 8.52802 8.01246 8.60439 7.83142C8.81344 7.32543 9.28925 6.80136 10.0881 6.80136C11.1345 6.80136 11.5531 7.57842 11.5531 8.71753V13.2507H14.4447V8.39204C14.4447 5.78927 13.0181 4.57823 11.1155 4.57823C9.55546 4.57823 8.87051 5.4275 8.49 6.00594H8.5093V4.77699H5.61752C5.65547 5.57211 5.61752 13.2506 5.61752 13.2506L5.61745 13.2508Z"></path></svg>
              </a>
            </li>
          </div>
          */}
        </details>
      </nav>
    </div>
  );
}

export default NavTabs;
