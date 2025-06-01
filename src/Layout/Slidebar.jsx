import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'

const Slidebar = () => {

  return (
    <section className="hidden lg:block bg-white shadow-lg w-[280px] h-screen fixed">
      <div className="container">
        {/* logo */}
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* links */}
        <div>
        </div>
      </div>
    </section>
  );
}

export default Slidebar
