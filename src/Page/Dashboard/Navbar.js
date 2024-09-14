import React from 'react'
import "./navbar.css"
import "./bootstrap.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-color py-4 pt-lg-5">
    <div className="container">
        <a className="navbar-brand text-white fw-bold" to="#"> </a>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation"
                className="navbar-toggler"
                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
           
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 t ">
                
                <li className=" nav-item y">
                    <Link className=" nav-link" to="/">Home</Link>
                </li>
                <li className=" nav-item y">
                    <Link className=" nav-link" to="/about">About</Link>
                </li>
                <li className=" nav-item y">
                    <Link className=" nav-link" to="/service">Services</Link>
                </li>
                <li className=" nav-item y">
                    <Link className=" nav-link" to="/contact">Contact</Link>
                </li>


            </ul>

        </div>
    </div>
</nav>


<section class="bg-main bg-color hero-section">
    <div class="container">
        <div class="row mb-5 ">
            <div class="d-flex flex-column align-items-start justify-content-center col-xl-6 xol-lg-6 col-md-12 col-12 order-1 order-lg-0 text-md-start text-center">
                <h2 class=" text-capitalize fw-bolder text-white">
                    We Collect High Quality Leads
                </h2>
                <p class="mt-3 mb-5  para-width text-light-grey ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravi.
                </p>

                <div class="text-center w-100 text-md-start">
                    <button class="btn btn-primary px-5 py-2 " data-bs-offset="0,5" data-bs-placement="top"
                            data-bs-title="Get Best Services" data-bs-toggle="tooltip">Contact Us
                    </button>
                </div>

            </div>

            <div class="col-xl-6 xol-lg-6 col-md-12 col-12 order-0 order-lg-1 hero-image--section ">
                <div class="text-md-end text-center mb-5">

                    <video autoplay class="hero-video--section" loop muted src="./images/hero.mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </div>

    </div>
    <div class="custom-shape-divider-bottom-1684208460">
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path class="shape-fill"
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
    </div>
</section>   






    
    </>
  )
}

export default Navbar
