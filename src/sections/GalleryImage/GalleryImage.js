import React, { useEffect, useState } from "react";
import "./GalleryImage.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";
import img9 from "../../assets/images/9.png";
import img10 from "../../assets/images/10.png";
import Slider from "react-slick";

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
const GalleryImage = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, []);

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="galleryImage">
      {width > 576 ? (
        <div className="gallery_container">
          {imageList.map((item, indx) => (
            <div className="image_container" key={indx}>
              <img src={item} alt="imaga1" className="squareImg" />
            </div>
          ))}
        </div>
      ) : (
        <div className="carousel_container">
          <Slider {...settings}>
            {imageList.map((item, indx) => (
              <div className="image_container" key={indx}>
                <img src={item} alt="imaga1" className="squareImg" />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default GalleryImage;
