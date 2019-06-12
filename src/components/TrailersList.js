import React, { Component } from "react";
import Slider from "react-slick";

export default class Movies extends Component {
  render() {
    const sliderSettings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };

    //fix react-slick 2 trailers bug
    let trailer;
    if (this.props.items[2]) {
      trailer = (
        <Slider {...sliderSettings}>
          {this.props.items.map((item, i) => {
            return (
              <div key={item.key}>
                <iframe
                  title="0"
                  src={`https://www.youtube.com/embed/${item.key}`}
                />
              </div>
            );
          })}
        </Slider>
      );
    } else {
      trailer = (
        <div className="trailers-single">
          <iframe
            title="0"
            src={`https://www.youtube.com/embed/${this.props.items[0].key}`}
          />
        </div>
      );
    }

    return <div className="trailers">{trailer}</div>;
  }
}
