/*
  importimg components
*/
import Header from "../Components/Header/Header";

//importing home.css
import "../Designs/Home.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
//swiper requirements
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// import required modules
import { Pagination, Navigation } from "swiper";

//importing images from assets
import Boda1 from "../Assets/boda1.jpg";
import Boda2 from "../Assets/boda2.jpg";
import Boda3 from "../Assets/boda3.jpg";
import Boda4 from "../Assets/boda4.jpg";
import CoreValues from "../Assets/our-core-value.png";
import Starthub from "../Assets/starthub.png";
import Beacon from "../Assets/beacon.png";
import WPS from "../Assets/what-people-say.jpg";
import Quorts from "../Assets/qrts.png";
import Message from "../Assets/mms.jpg";

//imports from mui
import { TextareaAutosize, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <div className="home">
        <Header />
        <div className="swiper">
          <Swiper
            // showsButtons={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              576: {
                slidesPerView: 1,
              },
            }}
            autoplay={{ delay: 3000 }}
            // slidesPerView={7}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwviper"
          >
            <SwiperSlide>
              <img
                src={Boda1}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Boda2}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Boda3}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Boda4}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="aboutus">
          <div className="aboutus1">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              inventore quia eos explicabo expedita debitis vitae possimus eum
              nisi unde, illo quidem aliquid eius officia non, quo voluptate.
              Cum, nam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis inventore quia eos explicabo expedita debitis vitae possimus
              eum nisi unde, illo quidem aliquid eius officia non, quo
              voluptate. Cum, nam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Omnis inventore quia eos explicabo expedita
              debitis vitae possimus eum nisi unde, illo quidem aliquid eius
              officia non, quo voluptate. Cum, nam!
            </p>
          </div>
          <div className="aboutus2">
            <img src={Boda4} alt="" />
          </div>
        </div>
        <div className="missiom-vision">
          <div className="mission">
            <h1>Our Mission</h1>
            <p>
              To create most accessible and affordable financial services and
              opportunities through leveraging technology centered around
              customer needs.
            </p>
          </div>
          <div className="vision">
            <h1>Our Vision</h1>
            <p>
              To create access to financial services to the unbanked and
              underserved communities
            </p>
          </div>
        </div>
        <div className="core-values">
          <div className="core-img">
            <img src={CoreValues} alt="" />
          </div>
          <div className="core-details">
            <li>Customer centered</li>
            <li>Transparency</li>
            <li>Loyalty to customers</li>
            <li>Trust worthy</li>
            <li>Constant Innovation</li>
            <li>Hardwork</li>
          </div>
        </div>
        <div className="lonyo-fuel">
          <h1>LonYo Fuel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum
            id quod a consectetur iusto, dolorem eligendi fuga eaque magni eos
            suscipit dignissimos ducimus optio et nesciunt dolor vero modi?
          </p>
        </div>
        <div className="our-e-wallet">
          <h2>Our E-Wallet</h2>
          <p>
            Our e-wallet consists of a current account and savings account. The
            current account is one in which our clients in the transportation
            sector draw money from for fuel financing regular. Meanwhile our
            savings account is one through which our clients deposit money,
            facilitate money transfer and access credit
          </p>
        </div>
        <div className="our-partners">
          <h2>Our Partners</h2>
          <div className="our-partners-1">
            <div className="our-partners-2">
              <img src={Beacon} alt="" />
              <p>
                <span style={{ color: "blue" }}>Hostel Booking App</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores necessitatibus modi eveniet similique doloribus
                nobis! Eum, error natus nulla facilis odio officia, eaque
                inventore non unde sunt quae, asperiores quasi?
              </p>
            </div>
            <div className="our-partners-3">
              <img src={Starthub} alt="" />
              <p>
                <span style={{ color: "blue" }}>Starthub Africa</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quis
                rem cum qui aliquid repellendus dolore voluptatibus mollitia,
                repudiandae quidem eum, doloribus deleniti temporibus expedita
                incidunt necessitatibus consequatur. Quod, quae?
              </p>
            </div>
          </div>
        </div>
        <div className="blogs">
          <div className="blogs1">
            <div className="blogs1-1">
              <img src={WPS} alt="" />
            </div>
            <div className="blogt">
              <h1>Consistent response from our clients</h1>
            </div>
            <div className="blogs1-2">
              <img src={Quorts} alt="" />
            </div>
          </div>
          <div className="blogs2">
            <Swiper
              // showsButtons={false}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                576: {
                  slidesPerView: 1,
                },
              }}
              autoplay={{ delay: 5000 }}
              // slidesPerView={7}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide style={{ textAlign: "center" }}>
                <h2>
                  Since I started saving with Lonyo E-wallet, my business
                  capital acumulated.
                </h2>
                <p style={{ fontSize: "large" }}>Godfrey Kazo</p>
                <p style={{ fontSize: "large", color: "blue" }}>
                  Lira university stage
                </p>
              </SwiperSlide>
              <SwiperSlide style={{ textAlign: "center" }}>
                <h2>Lonyo fuel is the best option to go</h2>
                <p style={{ fontSize: "large" }}>Odong Ben</p>
                <p style={{ fontSize: "large", color: "blue" }}>
                  Adyera Stage - Lira west city
                </p>
              </SwiperSlide>
              <SwiperSlide style={{ textAlign: "center" }}>
                <h2>
                  Lonyo has been a financial inclusion that we have been waiting
                  on for over year
                </h2>
                <p style={{ fontSize: "large" }}>Apio Nathan</p>
                <p style={{ fontSize: "large", color: "blue" }}>
                  Ayeta 1 - bodaboda stage
                </p>
              </SwiperSlide>
              <SwiperSlide style={{ textAlign: "center" }}>
                <h2>
                  Lonyo saccos have brought together unity in bodaboda stages
                </h2>
                <p style={{ fontSize: "large" }}>Fred Ajayo</p>
                <p style={{ fontSize: "large", color: "blue" }}>
                  Chairman bodaboda - Lira city West
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="leave-a-message">
          <div className="leave-a-message1">
            <img src={Message} alt="" />
          </div>
          <div className="leave-a-message2">
            <div>
              <h1>Leave a message here</h1>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
              />
            </div>
            <div>
              <TextareaAutosize
                aria-label="minimum height"
                maxRows={7}
                placeholder="leave a message"
                style={{ width: 370, height: 100 }}
              />
            </div>
            <div>
              <Button id="btn" variant="contained">
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
        <div className="footer-b">
          <div className="footer">
            <div className="contacts">
              <h2>CONTACT US</h2>
              <p className="p-top">
                Plot 851, Serumaga road, <br />
                Bukoto, Kampala, Uganda
              </p>
              <p>
                Rhino oil, Obote Avenue,
                <br /> Lira, Uganda
              </p>
              <p>0393254343 / +256-787-299525</p>
              <p>Twitter @LonyoUg | info.lonyoug.com</p>
            </div>
            <div className="quick-links">
              <h2>QUICK LINKS</h2>
              <div className="links">
                <Link id="link">Home</Link>
                <Link id="link">About Us</Link>
                <Link id="link">Lonyo-Fuel</Link>
                <Link id="link">E-Wallet</Link>
                <Link id="link">Blogs</Link>
              </div>
            </div>
            <div className="our-system">
              <h2>OUR SYSTEM</h2>
              <div className="links">
                <Link id="link">Get Fuel</Link>
                <Link id="link">Register With Us</Link>
                <Link id="link">Inquire</Link>
                <Link id="link">Leave a message</Link>
              </div>
            </div>
            <div className="our-partners">
              <h2>OUR PARTNERS</h2>
              <div className="links">
                <Link id="link">Beacon Hostels App</Link>
                <Link id="link">Starthub Uganda</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
