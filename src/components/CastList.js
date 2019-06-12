import React, { Component } from "react";
import Slider from "react-slick";
import avatar from "../image/avatar.png";

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
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1178,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    };

    return (
      <div className="cast">
        {this.props.people.length > 0 ? (
          <Slider {...sliderSettings}>
            {this.props.people.map((person, i) => {
              if (i < 20) {
                return (
                  <div key={person.id}>
                    <div className="cast-link">
                      <div className="cast-link-person">
                        <img
                          className="cast-link-person-image"
                          src={
                            person.profile_path && config.images
                              ? `${
                                  config.images
                                    ? config.images.secure_base_url
                                    : ""
                                }${
                                  config.images
                                    ? config.images.profile_sizes[1]
                                    : ""
                                }${person.profile_path}`
                              : avatar
                          }
                          alt={person.name}
                        />
                        <h3 className="cast-link-person-name">{person.name}</h3>
                        <p className="cast-link-person-secondary">as</p>
                        <h3 className="cast-link-person-character">
                          {person.character}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </Slider>
        ) : (
          "No cast found..."
        )}
      </div>
    );
  }
}
