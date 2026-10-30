import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavMenu from './nav-menu';
import Sidebar from './sidebar';
// import Sidebar from './sidebar';

const HeaderOne = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHide, setIsHide] = useState(false)
    const [isToggleSearch, setToggleSearch] = useState(false);

    const offerHadle = () => {
      setIsHide(true)
    }

    return (
        <>
         <header>
            


<div
  className={`inet-top-bar ${isHide ? "d-none" : ""}`}
>
  <div className="container-fluid inet-top-container">
    <div className="inet-top-content">

      <p>Smart CCTV Solutions for Every Industry</p>

      <a href="#" className="inet-top-link">
        Explore Products <span>→</span>
      </a>

      <button
        type="button"
        className="inet-top-close"
        onClick={offerHadle}
        aria-label="Close notification"
      >
        ×
      </button>

    </div>
  </div>
</div>


       

            <div className="header-area header-1-space pl-60 pr-60">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xl-2 col-lg-6 col-md-5 col-7">
                        <div className="logo">
                           <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-7 d-none d-xl-block text-end">
                        <div className="tp-main-menu text-center">
                           <nav id="mobile-menu">
                           <NavMenu /> 
                           </nav>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-7 col-5">
                        <div className="search-main p-relative">
                              <div className="tp-header-right">
                                 
                                
<Link href="/contact" className="inet-header-btn">
  Get In Touch
  <span>→</span>
</Link>

                                 <button onClick={() => setIsOpen(true)} className="tp-menu-toggle tp-header-icon ml-20 d-xl-none">
                                    <i className="far fa-bars"></i>
                                 </button>
                              </div>
                              {isToggleSearch && 
                                 <div className={`search-form ${isToggleSearch ? "header_search-open" : ""}`}>
                                    <form onSubmit={e => e.preventDefault()}>
                                       <input type="text" placeholder="Search here..." />
                                       <button type="submit"><i className="fal fa-search"></i></button>
                                    </form>
                                 </div> 
                              }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default HeaderOne;