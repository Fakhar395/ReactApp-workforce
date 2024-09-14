import React from 'react'
import "./navbar.css"
import "./bootstrap.css"
const Servicess= () => {
  return (

    <>
    <section class=" services-section">
    <div class="container text-center common-title fw-bold">
        <h2 class="common-heading">What We Will Do For <br/> Your Business</h2>
        <hr class="w-25 mx-auto "/>
    </div>

    <div class="container mt-5">
        <div class="row g-5 ">
            <div class="col-xxl-4 col-lg-4 col-12 ">
                <div class=" card-box rounded-2 p-5 text-center">
                    <img alt="GIF Image" class="img-fluid" src="./images/link.gif" width="200px"/>

                    <h5 class="my-3 fw-normal "> Web Development</h5>
                    <p class="pe-3 mb-5">
                       Build web app with latest technology like mern stack make web ui front-end in react and backend in node js 
                    </p>
                    <div class="  d-flex justify-content-center align-items-center ">
                        <a class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                           href="/service.html">
                            <i class="fa-solid fa-arrow-right"> </i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-xxl-4 col-lg-4 col-12  ">
                <div class=" card-box rounded-2 p-5 text-center shadow">
                    <img alt="GIF Image" class="img-fluid" src="./images/speaker.gif" width="200px"/>

                    <h5 class="my-3 fw-normal"> Content marketing </h5>
                    <p class="pe-3 mb-5">
                        Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse!
                    </p>
                    <div class="  d-flex justify-content-center align-items-center ">
                        <a class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                           href="/service.html">
                            <i class="fa-solid fa-arrow-right"> </i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-xxl-4 col-lg-4 col-12 ">
                <div class=" card-box rounded-2 p-5 text-center">
                    <img alt="GIF Image" class="img-fluid" src="./images/seo.gif" width="200px"/>
                    <h5 class="my-3 fw-normal "> On Page SEO </h5>
                    <p class="pe-3 mb-5">
                        Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse!
                    </p>
                    <div class="  d-flex justify-content-center align-items-center ">
                        <a class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                           href="/service.html">
                            <i class="fa-solid fa-arrow-right"> </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
    
    
    </>
  )
}

export default Servicess
