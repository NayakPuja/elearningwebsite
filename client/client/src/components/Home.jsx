import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://preview.colorlib.com/theme/fox/images/xbg_2.jpg.pagespeed.ic.ahw9ATggoE.webp" className="d-block" width="100%" height="700px" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p className="justify-content-top">Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://skyeducations.co.in/assets/user/images/slider/s5.png" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://preview.colorlib.com/theme/fox/images/xbg_1.jpg.pagespeed.ic._C6ebyFa8h.webp" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-4 bg-thumbnail">
                        <div className="thumbnail text-center mt-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/3750/3750106.png" width="20%" className="bg-white" alt=""></img>
                            <div className="p-2 mt-4">
                                <h3 className="heading">Certified Teachers</h3>
                                <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>

                            </div>
                        </div>
                    </div>


                    <div className="col-sm-6 col-md-4 bg-thumbnail2">
                        <div className="thumbnail text-center mt-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/3204/3204243.png" width="20%" alt="..." className="bg-white" />
                            <div className="p-2 mt-4">
                                <h3 className="heading">Library</h3>
                                <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 bg-thumbnail ">
                        <div className="thumbnail text-center mt-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/2946/2946308.png" width="20%" alt="..." className="bg-white " />
                            <div className="p-2 mt-4">
                                <h3 className="heading">Sports</h3>
                                <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-sm-6">
                        <h1 className="wraph1">What we offer</h1>
                        <p className="mt-3">University is an astonishing, modern, and sophisticated university and college website template. It is all neatly packed and designed into one tool for you to use right away. It is just a click away, so take action now and have a fully functional page ready for your school shortly after. Of course, you can also use University for online-only education projects since the template is fully ready and equipped for that.</p>
                    </div>
                    <div className="col-sm-6">
                        <img src="https://preview.colorlib.com/theme/university/images/ximg_1.jpg.pagespeed.ic.dE5c0F7qMR.webp" alt="" width="100%" />
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className="heading1 my-4"> Our Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui neque sint eveniet tempore sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui neque sint eveniet tempore sapiente.</p>
            </div>
        </>
    )
}

export default Home;