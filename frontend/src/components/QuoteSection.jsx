import React from "react";

const QuoteSection = () => {
  return (
    <div className="quote-section">
      <style>
        {`
          .quote-section {
              height: 100vh;
              width: 100%;
              background-color: rgba(226, 21, 21, 0.7);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              flex-direction: column;
              padding: 20px;
              box-sizing: border-box;
          }

          .quote-text {
              font-size: 35px;
              font-weight: 700;
              width: 70%;
              line-height: 45px;
              text-align: center;
              color: white;
              position: relative;
              z-index: 1;
          }

          .quote-section img {
              position: absolute;
              max-width: 8%; /* Ensures images are responsive */
              height: auto;
              min-width: 30px; /* Prevents images from becoming too small */
          }

          .quote-left {
              left: 5vw;
              top: 20%;
          }

          .quote-right {
              right: 5vw;
              bottom: 20%;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
              .quote-text {
                  font-size: 22px;
                  width: 85%;
                  line-height: 35px;
              }

              .quote-section img {
                  max-width: 12%;
              }

              .quote-left {
                  left: 3vw;
                  top: 15%;
              }

              .quote-right {
                  right: 3vw;
                  bottom: 15%;
              }
          }

          @media (max-width: 480px) {
              .quote-text {
                  font-size: 16px;
                  width: 90%;
                  line-height: 30px;
              }

              .quote-section img {
                  max-width: 15%;
              }

              .quote-left {
                  left: 2vw;
                  top: 12%;
              }

              .quote-right {
                  right: 2vw;
                  bottom: 12%;
              }
          }
        `}
      </style>
      <img
        className="quote-left"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
        alt=""
      />
      <p className="quote-text">
        You have the right to work, but never to the fruit of work. Let not the
        fruits of action be your motive, nor let your attachment be to inaction.
      </p>
      <img
        className="quote-right"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
        alt=""
      />
    </div>
  );
};

export default QuoteSection;
