import React, { useState, useEffect } from "react";
import quotes from "../constants/Quotes";

const QuoteSection = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const updateQuote = () => {
      const minutesSinceEpoch = Math.floor(Date.now() / (1000 * 60)); // Change every minute
      setQuoteIndex(minutesSinceEpoch % quotes.length);
    };

    updateQuote();
    const interval = setInterval(updateQuote, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-section">
      <style>
        {`
          .quote-section {
              height: 100vh;
              width: 100%;
              background: url("https://res.cloudinary.com/dqlgqfxi6/image/upload/v1743445692/bg4_fl3rn4.jpg") no-repeat center center/cover;
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
              max-width: 8%;
              height: auto;
              min-width: 30px;
          }

          .quote-left {
              left: 5vw;
              top: 20%;
          }

          .quote-right {
              right: 5vw;
              bottom: 20%;
          }

          @media (max-width: 768px) {
              .quote-section {
                  height: 80vh;
                  padding: 40px 20px;
              }

              .quote-text {
                  font-size: 24px;
                  width: 80%;
                  line-height: 38px;
              }

              .quote-section img {
                  max-width: 10%;
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
              .quote-section {
                  height: 65vh;
                  min-height: 50vh;
                  padding: 30px 15px;
              }

              .quote-text {
                  font-size: 20px;
                  width: 90%;
                  line-height: 30px;
              }

              .quote-section img {
                  max-width: 12%;
              }

              .quote-left {
                  left: 2vw;
                  top: 10%;
              }

              .quote-right {
                  right: 2vw;
                  bottom: 10%;
              }
          }
        `}
      </style>
      <img
        className="quote-left"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
        alt=""
      />
      <p className="quote-text">{quotes[quoteIndex]}</p>
      <img
        className="quote-right"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
        alt=""
      />
    </div>
  );
};

export default QuoteSection;
