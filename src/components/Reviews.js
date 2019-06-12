import React, { Component } from "react";

export default class Reviews extends Component {
  textCut = (str, length = 75) => {
    const strArray = str.split(" ");
    return strArray.length < length
      ? str
      : strArray.filter((a, b) => b < length).join(" ") + "...";
  };
  render() {
    return (
      <div>
        {this.props.reviews.map(review => (
          <div
            key={review.url}
            className="movie-details-main-reviews-container"
          >
            <h3 className="movie-details-main-reviews-container-author">
              {review.author}
            </h3>
            <p className="movie-details-main-reviews-container-content">
              {this.textCut(review.content)}
            </p>
            <a
              className="movie-details-main-reviews-container-link"
              href={review.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>| Read full review |</p>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
