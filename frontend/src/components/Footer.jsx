import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Dynamically create the link tag for Font Awesome
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

    // Append the link tag to the head of the document
    document.head.appendChild(link);

    // Cleanup function to remove the link tag when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <style>
        {`
                    * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "montserrat";
                color: #fff;
            }
            
            body {
                display: flex;
                flex-direction: column;
                min-height: 100vh; /* Ensure the body takes at least 100% height */
            }
            
            .smile {
                cursor: default;
                text-align: center;
                color: #f0eded3a;
                font-size: 9.5em;
                line-height: 1.2em;
                letter-spacing: .2em;
                text-shadow: 0 0 5px hsla(0, 10%, 94%, 0.097),
                0 0 10px #f0eded13,
                0 0 15px #b8b0b800,
                0 0 20px #87838700,
                0 0 25px #aaa7aa00,
                0 0 30px #cfc5cf00,
                0 0 35px #d6d3d600;
            }
            
            .footer {
                background: linear-gradient(to top, rgb(2, 2, 24), black);
                height: 26em;
                overflow: hidden;
                margin-top: auto; /* Push the footer to the bottom */
            }
            
            .footer-text {
                height: 21em;
                display: flex;
                justify-content: space-around;
                padding-top: 3em;
                font-size: small;
            }
            
            .conclude {
                width: 29%;
            }
            
            .conclude-text {
                font-size: 1.1em;
                line-height: 1.5em;
                margin: 1.5em 0;
            }
            
            /* Social media links */
            .social-media {
                height: 4em;
                display: flex;
                justify-content: center;
                gap: 1em;
            }
            
            .bg-circle {
                margin-top: 1.5em;
                background-color: white;
                height: 2em;
                width: 2em;
                border-radius: 50%;
            }
            
            .bg-circle i {
                margin-left: .45em;
                font-size: 1em;
                color: #000;
            }
            
            .list-header {
                font-weight: bold;
                font-size: 1.2em;
            }
            
            .list-points {
                font-size: 1.1em;
            }
            
            .quick-links,
            .download-app,
            .company {
                list-style-type: none;
                line-height: 2.5em;
            }
            
            .list-points:hover {
                text-decoration: underline;
                cursor: pointer;
            }
            
            .list-points {
                color: rgb(138, 134, 134);
            }
            
            .list-points a {
                text-decoration: none;
                color: rgb(138, 134, 134);
            }
            
            .logo img {
                height: 100px;
                width: 100px;
                background: radial-gradient(circle, rgba(182, 182, 177, 0.473) 1%, rgba(55, 55, 53, 0.473), black 99%);
            }
            
            .logo {
                margin-left: 4em;
            }
            
            @media (max-width: 950px) {
                .smile {
                letter-spacing: .1em;
                }
            }
            
            @media (max-width: 900px) {
                .smile {
                letter-spacing: 0em;
                }
            }
            
            @media (max-width: 700px) {
                .list-header {
                font-size: 1em;
                }
            
                .smile {
                font-size: 7em;
                }
            
                .footer {
                height: 23.5em;
                }
            
                .logo img {
                height: 60px;
                width: 60px;
                }
            }
            
            @media (max-width: 500px) {
                .list-header {
                font-size: .8em;
                }
            
                .list-points {
                font-size: .8em;
                }
            
                .conclude-text {
                font-size: 1.2em;
                line-height: 1.2em;
                }
            
                .download-app {
                display: none;
                }
            
                .conclude {
                width: 45%;
                }
            
                .smile {
                font-size: 4.5em;
                }
            
                .footer {
                height: 21em;
                }
            }
            
            @media (max-width: 450px) {
                .company {
                display: none;
                }
            }
            
            footer {
                margin-top: auto; /* This ensures footer stays at the bottom */
            }
            

        `}
      </style>

      <footer>
        <div className="footer">
          {/* Footer conclusion and links */}
          <div className="footer-text">
            {/* First box */}
            <div className="conclude">
              <div className="logo">
                <img
                  src="https://res.cloudinary.com/dmnep85ym/image/upload/v1713867500/for_black_bgm_ioxgoi.png"
                  alt="Smile Club Logo"
                />
              </div>
              <div className="conclude-text">
                <p>
                  SMILE Club is a college initiative celebrating Indian culture
                  through engaging events. Join us to explore and embrace our rich
                  heritage with a vibrant community.
                </p>
              </div>
            </div>

            {/* Second box */}
            <div className="quick-links">
              <li className="list-header">QUICK LINKS</li>
              <li className="list-points">
                <a href="/">Home</a>
              </li>
              <li className="list-points">
                <a href="/blogs/">Blogs</a>
              </li>
              <li className="list-points">
                <a href="/gallery/">Gallery</a>
              </li>
            </div>

            {/* Third box */}
            <div className="company">
              <li className="list-header">OTHER LINKS</li>
              <li className="list-points">
                <a href="/about/">About Us</a>
              </li>
              <li className="list-points">
                <a href="/timeline/">Events</a>
              </li>
            </div>

            {/* Fourth box */}
            <div className="download-app">
              <li className="list-header">FOLLOW US ON</li>
              <div className="social-media">
                <div className="bg-circle">
                  <a
                    href="https://www.instagram.com/smile._.club_nitk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <div className="bg-circle">
                  <a
                    href="https://www.linkedin.com/company/smile-club-nitk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="bg-circle">
                  <a
                    href="https://youtube.com/@SMILEClub_NITK?si=qk-v-oJZi8M7igKn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer company name */}
          <h2 className="smile">smile club</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
