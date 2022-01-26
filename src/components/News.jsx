import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    pageSize: 9,
    countryName: "us",
    newsCategory: "health",
  };
  static propTypes = {
    countryName: PropTypes.string,
    newsCategory: PropTypes.string,
    pageSize: PropTypes.number,
  };
  upperCaseFun = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
   upperResult = this.upperCaseFun(this.props.newsCategory)
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `PAK-News ${this.upperResult}`;
  }

  async newsUpdate() {
    this.props.setProgress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=${ this.props.countryName }&category=${ this.props.newsCategory }&apiKey=7231ee1a40284271b8b58dfc3f78152a&page=${ this.state.page }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsResult = await data.json();
    this.props.setProgress(60)
    this.setState({
      articles: parsResult.articles,
      totalResults: parsResult.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.newsUpdate();
  }

  previousPage = async () => {
   
    this.setState({ page: this.state.page - 1 });
    this.newsUpdate();
  };

  NextPage = async () => {
    this.setState({ page: this.state.page + 1 });
    this.newsUpdate();
    }

  render() {
    return (
      <>
        <div className="container py-5">
          <h1 className="text-center my-5">
          {`Top-${this.upperResult}-Headlines`} <i className="fas fa-star"></i>
          </h1>
          <div className="row py-3">
            <div className="col">
              <nav className="navigationWrapper">
                <ul className="navigation">
                  <li className="parent">
                    <NavLink className="link" to="/entertainment">
                    Entertainment
                    </NavLink>
                  </li>
                  <li className="parent">
                    <NavLink className="link" to="/General">
                    General
                    </NavLink>
                  </li>
                  <li className="parent">
                    <NavLink className="link" to="/science">
                    Science
                    </NavLink>
                  </li>
                  <li className="parent">
                    <NavLink className="link" to="/sports">
                    Sports
                    </NavLink>
                  </li>
                  <li className="parent">
                    <NavLink className="link" to="/technology">
                    Technology
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row py-5 position-relative shadow-none p-3 mb-5 bg-light rounded">
            {this.state.loading && <Spinner />}
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-6 col-lg-4 py-3" key={element.url}>
                    <NewsItems
                      myTitle={
                        element.title
                          ? element.title.slice(0, 50)
                          : "Sorry! No Title"
                      }
                      myDescription={
                        element.description
                          ? element.description.slice(0, 90)
                          : "Sorry for that! There are No description in this articles  "
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      publishTime={element.publishedAt}
                      sourceName={element.source.name}
                      authorName={element.author}
                      
                    />
                    
                  </div>
                );
              })}
          </div>

          <div className="row pt-5">
            <div className="col d-flex justify-content-around">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-primary btn-lg cursor-pointer"
                onClick={this.previousPage}
              >
                &#8249; Previous
              </button>
              <button
                type="button"
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                className="btn btn-primary btn-lg cursor-pointer"
                onClick={this.NextPage}
              >
                Next &#8250;
              </button>
            </div>
          </div>



          
        </div>
      </>
    );
  }
}

export default News;
