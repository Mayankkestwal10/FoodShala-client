import React from 'react';
import Navbar from '../utils/navbar';
import cover from '../static/images/foodShala.jpg';
import biryani from '../static/images/biryani.jpg';
import ice from '../static/images/ice.png';
import snack from '../static/images/snack.jpeg';
import Footer from '../utils/footer';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar />

            <div class="container" style={{ marginTop: '100px' }}>

                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={cover} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Where Foodies Thrive!</h1>
                        <p>Explore curated lists of top food items, restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
                        <Link class="btn btn-primary" to="/login">Order Online!</Link>
                    </div>
                </div>

                <div class="card text-white bg-secondary my-5 py-4 text-center">
                    <div class="card-body">
                        <p class="text-white m-0">Vegetarian or Non-Vegetarian, Indian or Italian, everything at your doorstep</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 mb-5">
                        <div class="card h-80">
                            <img class="card-img-top" src={biryani} alt="biryani" />
                            <div class="card-body">
                                <h3 class="card-title">Biryani Blues</h3>
                                <p className="text-muted">MG Road, Gurgaon</p>
                                <div className="d-flex">
                                    <p className="badge badge-danger mr-2">Veg</p>
                                    <p className="badge badge-danger">Non-Veg</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-80">
                            <img class="card-img-top" src={ice} alt="ice pice" />
                            <div class="card-body">
                                <h3 class="card-title">Ice Pice</h3>
                                <p className="text-muted">Dwarka, Delhi</p>
                                <div className="d-flex">
                                    <p className="badge badge-danger mr-2">Veg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src={snack} alt="snack" />
                            <div class="card-body">
                                <h3 class="card-title">DN Snacks</h3>
                                <p className="text-muted">Near Bangla Sahib, Delhi</p>
                                <div className="d-flex">
                                    <p className="badge badge-danger mr-2">Veg</p>
                                    <p className="badge badge-danger">Non-Veg</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Home;