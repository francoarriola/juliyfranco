import React from "react";
import Carousel from "better-react-carousel";
import Styles from "./index.module.scss";
import Image from "react-bootstrap/Image";

const Moments = () => {
  return (
    <>
      <Carousel
        cols={4}
        rows={2}
        gap={5}
        loop={true}
        hideArrow={true}
        containerStyle={{ backgroundColor: "black", pading: "-300px" }}
        scrollSnap={true}
        autoplay={1800}
      >
        <Carousel.Item>
          <Image className={Styles["img1"]} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className={Styles["img2"]} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className={Styles["img3"]} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className={Styles["img4"]} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className={Styles["img5"]} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=3"
            alt="foto"
            className={Styles["img"]}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=2"
            alt="foto"
            className={Styles["img"]}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=3"
            alt="foto"
            className={Styles["img"]}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Moments;
