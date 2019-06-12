import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class Movies extends Component {
  render() {
    const config = this.props.config;
    const sliderSettings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    };

    return (
      <div className="carousel">
        <div className="carousel-heading">
          <h2 className="carousel-heading-title">{this.props.header}</h2>
          <span className="carousel-heading-line" />
        </div>

        <Slider {...sliderSettings}>
          {this.props.items.map((item, i) => {
            if (i > 1 && i < 20) {
              return (
                <Link
                  to={`/movie-details/${item.id}`}
                  className="link"
                  key={item.id}
                >
                  <div className="carousel-item">
                    <img
                      to="/"
                      className="carousel-poster"
                      src={`${
                        config.images ? config.images.secure_base_url : ""
                      }${config.images ? config.images.poster_sizes[1] : ""}${
                        item.poster_path
                      }`}
                      alt={item.title}
                    />

                    <h4>{item.title}</h4>
                  </div>
                </Link>
              );
            }
          })}
        </Slider>
      </div>
    );
  }
}
