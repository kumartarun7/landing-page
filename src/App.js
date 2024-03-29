import './App.css';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { act } from 'react-dom/test-utils';


function App() {
 
  const [active,setActive]=useState(false);





  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  
  


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };





  return (
    <>
   
    {/* Bootstrap CSS */}
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" id="navbar">
      <div className="container">
     
        <button
          className="navbar-toggler ml-auto"
         
          onClick={()=>{setActive(!active)}}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SimplyEnglish Web
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link border-right-0" href="#">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {
         active&&<>
           
           <div className='header'>
            <div style={{color:'white'}}>About Us</div>
            <div style={{color:'white'}}>SimplyEnglish Web</div>
            <div style={{color:'white'}}>Blogs</div>
           </div>
            




         </>
    }



   
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12 mt-2 mb-2">
          <div className="container1">
            <img
              src="images/banner1.png"
              alt="banner_img_left"
              className="img-fluid container__image"
              width="55px"
            />
            <div className="container__text">
              <h4 className="mb-0">Simply English AI</h4>
              <p>Your Gateway to Success!</p>
            </div>
          </div>
          <h4 className="unl mt-4">
            Unlock 1 Billion Dreams <br />
            With Our AI Driven English Learning APP
          </h4>
          <ul className="mt-4 mb-4 pl-4 headul">
            <li>Elevate Your Language Skills for Interviews and Exams</li>
            <li>Powered by Advanced AI Technology</li>
            <li>Future of Education, Right at Your Fingertips</li>
          </ul>
          <a href="#">
            <img
              src="images/googleplay.png"
              alt="qr-img"
              width=""
              className="img-fluid"
            />
          </a>
          <img
            src="images/qr.png"
            alt="qr-img"
            width="100px"
            className="img-fluid"
          />
          <div className="social mt-4">
            <a href="">
              <i className="fa fa-facebook" />
            </a>
            <a href="">
              <i className="fa fa-instagram" />
            </a>
            <a href="">
              <i className="fa fa-twitter" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 mt-2 mb-2">
          <img
            src="images/banner.JPG"
            alt="banner-img"
            className="img-fluid w-100"
          />
        </div>
      </div>
    </div>
    {/* Banner */}
    {/* Features */}
    <section className="">
      <div className="container">
        <img
          src="images/featurehead.PNG"
          alt=""
          width="100px"
          className="img-fluid mb-3"
        />
        <h2 className="mt-3 mb-4">
          Simply English making your <br />
          communication skills your greatest asset
        </h2>
        <h5>
          Your Language Coach: Elevate speaking, writing, and interview skills
          seamlessly.
        </h5>
        <h1 className="abtus mt-5">App Features</h1>

        <div className="row mt-5 mb-5 d-flex align-items-center">
          <div id="demo" className="carousel slide w-100" data-ride="carousel">


            <Slider {...settings1} className=" bgcircle" style={{ backgroundImage: 'url("images/circle.PNG")',}}>
              <div className="carousel-item active">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                    <img
                      src="images/Guideprompts.png"
                      alt="app-img"
                      width="48.2%"
                      className="img-fluid rounded h-100"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                    <div className="">
                      <h2 className="featurehead">Guided Learning Prompts</h2>
                      <p>
                        Let our Guided Learning Prompts be your personalized
                        language coach. Tailored to your proficiency, these
                        prompts not only refine your English skills but also
                        provide structured lessons, making learning on
                        SimplyEnglish a breeze.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                    <img
                      src="images/voice.png"
                      alt="app-img"
                      width="48.2%"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                    <div className="">
                      <h2 className="featurehead">Voice Recognition</h2>
                      <p>
                        Speak your questions into our SimplyEnglish app and
                        receive instant answers! Our Voice Recognition feature not
                        only enhances your spoken English but also allows you to
                        effortlessly inquire about anything, eliminating the need
                        for typing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                    <img
                      src="images/voiceenabled.png"
                      width="48%"
                      alt="app-img"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                    <div className="">
                      <h2 className="featurehead">Voice-Enabled Learning</h2>
                      <p>
                        Immerse yourself in interactive learning with
                        Voice-Enabled Learning on SimplyEnglish. Speak, listen,
                        and practice pronunciation effortlessly, taking your
                        language skills to new heights with just your voice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                    <img
                      src="images/chathistory.png"
                      width="48.2%"
                      alt="app-img"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                    <div className="">
                      <h2 className="featurehead">Chat History</h2>
                      <p>
                        No need to worry about forgetting lessons—SimplyEnglish's
                        Chat History feature keeps track of your progress. Revisit
                        and review your personalized chat log to stay organized
                        and motivated throughout your English learning journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                    <img
                      src="images/askanything.png"
                      width="48.2%"
                      alt="app-img"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                    <div className="">
                      <h2 className="featurehead">Ask Anything</h2>
                      <p>
                        With our "Ask Anything" feature, speaking is all you need
                        to do. Simply use your voice to inquire about language
                        nuances, exam strategies, or any English-related queries,
                        and receive instant and accurate responses on
                        SimplyEnglish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            
          </div>
        </div>
      </div>
    </section>
    {/* Features */}
    {/* benefit */}
    <section className="benefit">
      <div className="container">
        <h1 className="abtus text-white">Key Benefits</h1>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src="images/benefit1..PNG"
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">24X7 English Tutor</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src="images/benefit2.PNG"
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">Ask Questions Any Time</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src="images/benefit3.PNG"
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">Progress Tracking</h3>
          </div>
        </div>
      </div>
    </section>
    {/* Client */}
    <div className="clinetlogos">
      <div className="clientlogo_items">
        <img src="images/clientlogo/abhinav.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/airtel.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/aspire.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/british.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/cologate.PNG" alt="" className="img-fluid" />
        <img
          src="images/clientlogo/delhimetro.PNG"
          alt=""
          className="img-fluid"
        />
        <img src="images/clientlogo/dpworld.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/edusky.PNG" alt="" className="img-fluid" />
        <img
          src="images/clientlogo/foundation.PNG"
          alt=""
          className="img-fluid"
        />
        <img src="images/clientlogo/g2market.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/jcb.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/john.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/midways.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/nov.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/radington.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/school.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/shubham.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/sos.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/univer.PNG" alt="" className="img-fluid" />
        <img src="images/clientlogo/vlcc.PNG" alt="" className="img-fluid" />
      </div>
    </div>
    {/* Client */}
    {/* How itsworks */}
    <section className="simplyenglish">
      <div className="container">
        <h1 className="abtus">How it Works</h1>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-6 col-md-6 col-12 mt-2">
            <ul>
              <li>
                <img
                  src="images/signup1.PNG"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />{" "}
                Sign Up{" "}
              </li>
              <li>
                <img
                  src="images/learn1.PNG"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Choose what you would like to learn
              </li>
              <li>
                <img
                  src="images/prompt1.PNG"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Leverage the guided prompts
              </li>
              <li>
                <img
                  src="images/ask1.PNG"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Type your own prompts to ask anything
              </li>
              <li>
                <img
                  src="images/review1.PNG"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                Review chat history
              </li>
            </ul>
            <div className="text-center mt-4">
              <img
                src="images/watchvideo.png"
                alt=""
                className="img-fluid"
                width="50%"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-2 text-center">
            <img
              src="images/howitsworks.png"
              alt="feature-img"
              width="85%"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
    {/* How itsworks */}
    <section className="casestudy">
      <div className="container mt-5">
        <h1 className="abtus mt-4">Case Study</h1>
        <div className="row mt-5 mb-3">
          <div className="col-md-12">
          <div className="gd-carousel-wrapper">
          <Slider {...settings}>
              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="">
                    <img className="card-img-top" src="images/craft.PNG" alt="" />
                    <div className="card-body">
                      <h5 className="card-text">
                        Craft A+ Essays: Elevate your grades with Simply English's
                        writing expertise.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="">
                    <img
                      className="card-img-top"
                      src="images/communication.PNG"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5>
                        From Lines of Code to Lines of Communication: Simply
                        English Unleashes Your Potentia
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="">
                    <img
                      className="card-img-top"
                      src="images/speak.PNG"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5>
                        Speak with Heart: Simply English—Moms, speaking the
                        language of their children with ease
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="">
                    <img
                      className="card-img-top"
                      src="images/powerful.jpeg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="">
                        Powerful Vision, Persuasive Words: Simply English for
                        Business Leaders.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          
          </div>
        </div>
      </div>
    </section>
    <section className="clients">
      <div className="container mt-5">
        <h1 className="abtus mt-4 mb-5">What our clients say</h1>
        <div className="row clienthead">
          <div className="col-md-12">
            <Slider {...settings}>
              <div className="">
                <div className="col-sm-12 d-flex">
                  <div className="testimonial">
                    <img src="images/test2.PNG" className="imgtest" alt="" />
                    <h5 className="mt-4">Arjun from Bangalore</h5>
                    <p className="description mt-4">
                      "SimplyEnglish played a key role in my professional growth.
                      The refined communication skills and insightful Guided
                      Learning Prompts helped me secure a promotion. Grateful for
                      the app's impact on my career!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 d-flex">
                <div className="testimonial">
                  <img src="images/test1.PNG" className="imgtest" alt="" />
                  <h5 className="mt-4">Priya from Mumbai</h5>
                  <p className="description mt-4">
                    "Navigating Chat History on SimplyEnglish kept my learning
                    organized and proved crucial for my important presentation
                    preparation. Thanks to the app, I delivered with confidence
                    and received positive feedback."
                  </p>
                </div>
              </div>
              <div className="col-sm-12 d-flex">
                <div className="testimonial">
                  <img src="images/test4.PNG" className="imgtest" alt="" />
                  <h5 className="mt-4">Raj from Delhi</h5>
                  <p className="description mt-4">
                    "SimplyEnglish's interactive learning was a game-changer for
                    my business dealings. Personalized lessons and instant
                    feedback through Voice-Enabled Learning significantly
                    contributed to cracking a major business deal."
                  </p>
                </div>
              </div>
              <div className="col-sm-12 d-flex">
                <div className="testimonial">
                  <img src="images/test3.PNG" className="imgtest" alt="" />
                  <h5 className="mt-4">Aisha from Hyderabad</h5>
                  <p className="description mt-4">
                    "Ask Anything is my favorite feature on SimplyEnglish. It
                    clarified my doubts during exam preparation, and the
                    confidence gained through the app's unique features helped me
                    clear my exam with flying colors."
                  </p>
                </div>
              </div>
              <div className="col-sm-12 d-flex">
                <div className="testimonial">
                  <img src="images/test5.PNG" className="imgtest" alt="" />
                  <h5 className="mt-4">Vikram from Chennai</h5>
                  <p className="description mt-4">
                    "As a content creator, SimplyEnglish was my go-to app for
                    writing interactive website content. The fine-tuned language
                    skills, courtesy of the app's features, made my content more
                    engaging and impactful."
                  </p>
                </div>
              </div>
              <div className="col-sm-12 d-flex">
                <div className="testimonial">
                  <img src="images/test6.PNG" className="imgtest" alt="" />
                  <h5 className="mt-4">Neha from Kolkata</h5>
                  <p className="description mt-4">
                    "SimplyEnglish significantly impacted my exam preparation. The
                    seamless Voice-Enabled Learning made practicing skills easy,
                    and thanks to the app, I cleared my exam with confidence.
                    Highly recommended!"
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2">
            <img src="images/contactus.jpeg" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 col-12  mt-2 mb-2">
            <h3 className="abtus">Keep In Touch</h3>
            <p className="mt-5">
              <b>Email Address</b> <br />{" "}
              <span>
                <a href="info@simplyenglish.ai">info@simplyenglish.ai</a>
              </span>
            </p>
            <p className="mt-2">
              <b>Phone Number</b> <br /> India : 9599060043
              <br />
            </p>
            <div>
              <a href="#">
                <img
                  src="images/gogleplay.png"
                  alt="qr-img"
                  width=""
                  className="img-fluid rounded-lg"
                />
              </a>
              <img
                src="images/qr.png"
                alt="qr-img"
                width="100px"
                className="img-fluid ml-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-dark text-white p-2">
      <div className="container text-white">
        Copyright@2008-23 Eagetutor.com All rights reserved | Powered by EAGE
        EDUSOLUTIONS PVT LTD
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  </>
  );
}

export default App;
