import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, Jumbotron, Button, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import Announce from "../components/announce"
import About from "../components/about"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <nav class="navbar navbar-light navbar-expand-md">
        <div class="container-fluid"><a class="navbar-brand" href="#">FM</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Projects</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Blog</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Reading List</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <section id="announce">
        <div id="announce">
            <div class="container" style="padding-left: 50px;padding-right: 50px;padding-top: 100px;">
                <div class="row">
                    <div class="col"><img id="announce_img"></div>
                    <div class="col-lg-7 offset-lg-0 text-left">
                        <h1>Faizaan Madhani</h1>
                        <p>Hi, I'm Faizaan! I'm a 2A Computer Science student at the University of Waterloo. In the past, I've worked at Human_Code and HiRide, and I'm currently seeking Internships for Spring/Winter 2021.<br><br>I'm passionate about Web
                            and Mobile Development, and Software Infastructure. I'm ardent about using tech for social good and volunteer as a Project Developer for UW Blueprint, where the applications I've worked on have helped Not-for-Profit organizations
                            be successful.<br><br>In my free time I spend hours reading, occasionally write, attend hackathons and tech conferences, and rock climb! Feel free to contact me.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="projects-clean">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Projects </h2>
                <p class="text-center">These projects are randomized on page load.<br>(because choosing is hard)<br>You can find the rest of my projects here.</p>
            </div>
            <div class="row projects">
                <div class="col-sm-6 col-lg-4 item"><img class="img-fluid" src="assets/img/desk.jpg">
                    <h3 class="name">Project Name</h3>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
                <div class="col-sm-6 col-lg-4 item"><img class="img-fluid" src="assets/img/building.jpg">
                    <h3 class="name">Project Name</h3>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
                <div class="col-sm-6 col-lg-4 item"><img class="img-fluid" src="assets/img/loft.jpg">
                    <h3 class="name">Project Name</h3>
                    <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="icon ion-social-github"></i></a><a href="#"><i class="icon ion-social-linkedin"></i></a><a href="#"><i class="icon ion-email"></i></a><a href="#"><i class="fab fa-dev"></i></a></div>
            <p class="copyright">Faizaan Madhani © 2020</p>
        </footer>
    </div>
    <section></section>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</div>
)

export default IndexPage
