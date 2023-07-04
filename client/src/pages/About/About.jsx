import React from "react";
import "./About.css";
import mirza from "../../components/Assets/Mirza.jpg";
import nibbi from "../../components/Assets/Nibbi.jpg";
import jyoti from "../../components/Assets/Jyoti.jpg";
import atreya from "../../components/Assets/Atreya.jpg";
import group from "../../components/Assets/Group.jpg";
function About() {
  return (
    <div className="container bootstrap snippets bootdey">
      <section id="team" className="white-bg padding-top-bottom">
        <div className="container bootstrap snippets bootdey">
          <h1 className="section-title text-center page-title">
            Small team. Big hearts.
          </h1>
          <h5 className="section-description " style={{ textAlign: "justify" }}>
            Urban Interiors is a dynamic and innovative website dedicated to all
            things related to contemporary interior design. With a strong focus
            on urban lifestyles, the website offers a wealth of inspiration,
            ideas, and solutions for modern living spaces. From stylish
            furniture to trendy decor, Urban Interiors curates a wide range of
            products and designs that cater to diverse tastes and preferences.
            <br />
            <br />
            The website showcases stunning visual content, featuring beautifully
            designed interiors that combine functionality with aesthetic appeal.
            It provides expert tips, guides, and tutorials to assist users in
            transforming their homes into stylish and comfortable urban
            sanctuaries.
            <br />
            <br />
            Urban Interiors aims to stay at the forefront of interior design
            trends, constantly exploring new ideas and emerging styles. With an
            emphasis on practicality and efficiency, the website offers
            innovative solutions for small spaces and urban dwellings,
            maximizing functionality without compromising on style.{" "}
          </h5>
          <hr />
          <h1 className="text-center">Team Members</h1>
          <div className="row member-content">
            <div className="col-sm-3 col-sm-offset-1 member-thumb">
              <img
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  height: "70%",
                  width: "95%",
                }}
                className="img-responsive img-center img-thumbnail img-circle"
                src={atreya}
                alt=""
              />
              <h4>Atreya Chandan</h4>
              <p className="title">Lead Develpoer</p>
            </div>
            <div className="col-sm-7   ">
              <div className="details">
                <p style={{ textAlign: "justify" }}>
                  Highly skilled and dedicated frontend developer with a passion
                  for creating visually appealing and interactive user
                  experiences. Equipped with a strong foundation in HTML, CSS,
                  and JavaScript, I specialize in transforming design concepts
                  into seamless and responsive web interfaces. With a keen eye
                  for detail and a commitment to staying updated with the latest
                  industry trends, I strive to deliver innovative solutions that
                  enhance user engagement and drive business growth.
                </p>
                <ul className="social-content">
                  <li>
                    <a href="mailto:sovonsutarsuitar123@gmail.com">
                      <i className="fa fa-envelope fa-fw" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.facebook.com/subarna2002">
                      <i className="fa fa-facebook fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/itz_sutar/?hl=en">
                      <i className="fa fa-instagram fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/subarna-keshari-sutar-/">
                      <i className="fa fa-linkedin fa-fw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row member-content right">
            <div className="col-sm-7 col-sm-pull-2">
              <div className="details">
                <p>
                  Highly skilled and dedicated frontend developer with a passion
                  for creating visually appealing and interactive user
                  experiences. Equipped with a strong foundation in HTML, CSS,
                  and JavaScript, I specialize in transforming design concepts
                  into seamless and responsive web interfaces. With a keen eye
                  for detail and a commitment to staying updated with the latest
                  industry trends, I strive to deliver innovative solutions that
                  enhance user engagement and drive business growth.
                </p>
                <ul className="social-content">
                  <li>
                    <a href="mailto:mail@example.com">
                      <i className="fa fa-envelope fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-twitter fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-facebook fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-linkedin fa-fw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-sm-push-8 member-thumb">
              <img
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  height: "70%",
                  width: "90%",
                }}
                className="img-fluid"
                src="data:image/jpeg;base64,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"
                alt="profile pic"
              />
              <h4>Subarna Keshari Sutar</h4>
              <p className="title">Frontend Developer</p>
            </div>
          </div>
          <div className="row member-content">
            <div className="col-sm-3 col-sm-offset-1 member-thumb">
              <img
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  height: "55%",
                  width: "90%",
                }}
                className="img-responsive img-center img-thumbnail img-circle"
                src={mirza}
                alt=""
              />
              <h4>Mirza Sahid Baig</h4>
              <p className="title">Developer</p>
            </div>
            <div className="col-sm-7   ">
              <div className="details">
                <p>
                  Highly skilled and dedicated frontend developer with a passion
                  for creating visually appealing and interactive user
                  experiences. Equipped with a strong foundation in HTML, CSS,
                  and JavaScript, I specialize in transforming design concepts
                  into seamless and responsive web interfaces. With a keen eye
                  for detail and a commitment to staying updated with the latest
                  industry trends, I strive to deliver innovative solutions that
                  enhance user engagement and drive business growth.
                </p>
                <ul className="social-content">
                  <li>
                    <a href="mailto:mail@example.com">
                      <i className="fa fa-envelope fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-twitter fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-facebook fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-linkedin fa-fw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row member-content right">
            <div className="col-sm-7 col-sm-pull-2">
              <div className="details">
                <p>
                  Highly skilled and dedicated frontend developer with a passion
                  for creating visually appealing and interactive user
                  experiences. Equipped with a strong foundation in HTML, CSS,
                  and JavaScript, I specialize in transforming design concepts
                  into seamless and responsive web interfaces. With a keen eye
                  for detail and a commitment to staying updated with the latest
                  industry trends, I strive to deliver innovative solutions that
                  enhance user engagement and drive business growth.
                </p>
                <ul className="social-content">
                  <li>
                    <a href="mailto:mail@example.com">
                      <i className="fa fa-envelope fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-twitter fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-facebook fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-linkedin fa-fw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-sm-push-8 member-thumb">
              <img
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  height: "55%",
                  width: "90%",
                }}
                className="img-responsive img-center img-thumbnail img-circle"
                src={nibbi}
                alt=""
              />
              <h4>Nibedita Das</h4>
              <p className="title">Designer</p>
            </div>
          </div>
          <div className="row member-content">
            <div className="col-sm-3 col-sm-offset-1 member-thumb">
              <img
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  height: "60%",
                  width: "80%",
                }}
                className="img-responsive img-center img-thumbnail img-circle"
                src={jyoti}
                alt=""
              />
              <h4>Jyotishree Pradhan</h4>
              <p className="title">Developer</p>
            </div>
            <div className="col-sm-7   ">
              <div className="details">
                <p>
                  Highly skilled and dedicated frontend developer with a passion
                  for creating visually appealing and interactive user
                  experiences. Equipped with a strong foundation in HTML, CSS,
                  and JavaScript, I specialize in transforming design concepts
                  into seamless and responsive web interfaces. With a keen eye
                  for detail and a commitment to staying updated with the latest
                  industry trends, I strive to deliver innovative solutions that
                  enhance user engagement and drive business growth.
                </p>
                <ul className="social-content">
                  <li>
                    <a href="mailto:mail@example.com">
                      <i className="fa fa-envelope fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-twitter fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-facebook fa-fw" />
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <i className="fa fa-linkedin fa-fw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <center>
        <h1>Team : TLE</h1>
          <img
            style={{
              borderRadius:"15px",
              objectFit: "cover",
              height: "50%",
              width: "50%",
            }}
            src={group}
            alt=""
          />
        </center>
      </section>
    </div>
  );
}

export default About;
