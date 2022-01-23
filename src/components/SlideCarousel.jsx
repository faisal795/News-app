import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import city from "../img/city.jpg";
import news from "../img/news.png";
import opera from "../img/opera.jpg";
import sport from "../img/sport.jpg";
import studio from "../img/studio.png";

export default class SlideCarousel extends Component {
  state = {
    items: [
      { id: 1, url: city, newsTitle: ' Entertainment forms', newsDescription: 'Exploring the consumption of media in all its forms. Whether you want to stream movies on Netflix or music on Spotify.' },
      { id: 2, url: news, newsTitle: 'Programming code', newsDescription: 'Whether you’re an expert programmer or code. you’ll find everything from Python and SQL, to expert CSS or JS.' },
      { id: 3, url: opera, newsTitle: 'Tech Explained', newsDescription: 'If technology has you confused, this is the place to be. We’ll do our best to break down complex topics.' },
      { id: 4, url: sport, newsTitle: 'Sports Explained', newsDescription: 'you’ll find tips, sports, and gaming relating to the body. we’ll explain how to get more out of the body, and a lot more besides.' },
      { id: 5, url: studio, newsTitle: 'Social Media', newsDescription: 'We cover social networks, big and small. Learn surprising uses for social media, the privacy risks of sharing.' },
    ],
  };

  render() {

    return (
      <>
        <div>
          <Carousel>
            {this.state.items.map((curntElement) => {
              return (
                <Carousel.Item
                  key={curntElement.id}
                  interval={2000}
                  className="carousel_css"
                >
                  <img
                    className="d-block w-100"
                    src={curntElement.url}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h2>{curntElement.newsTitle}</h2>
                    <p>
                     {curntElement.newsDescription}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </>
    );
  }
}
