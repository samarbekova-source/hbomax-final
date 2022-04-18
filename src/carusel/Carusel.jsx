import { Carousel } from "antd";
import React from "react";
import "./Carusel.css";

const Carusel = () => {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="block-carousel-t">
      <div className="carusel">
        <Carousel className="carusel" autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://www.heavenofhorror.dk/wp-content/uploads/2021/01/morbius-2022-marvel.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/8c42c6eda888f12755f737b14dcc3f98/960x540"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://filmdaily.co/wp-content/uploads/2022/03/Lost-lede.jpeg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.thedirect.com/media/article_full/the-batman-dc.jpg"
                alt=""
              />
            </h3>
          </div>
        </Carousel>
      </div>
      <div className="history-hbo-t">
        <div>
          <img
            style={{ width: "20%", margin: "10px" }}
            src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
            alt=""
          />
        </div>
        <p>
          HBO Max is an American subscription-based video on demand service
          owned by Warner Bros. Discovery. The service was launched in the
          United States on May 27, 2020, in Latin America and the Caribbean on
          June 29, 2021, in Andorra, Spain and the Nordic countries on October
          26, 2021, and in the Netherlands, Portugal and Central and Eastern
          Europe on March 8, 2022. While built around content from the namesake
          pay television service HBO, HBO Max principally serves as a content
          hub for WarnerMedia's various film and television properties. It
          offers a range of original programming and library content from the
          additional company content licensed through third-party distributors.
        </p>
      </div>
    </div>
  );
};

export default Carusel;
