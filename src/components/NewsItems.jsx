import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export class NewsItems extends Component {
  render() {
    const {
      myTitle,
      myDescription,
      imgUrl,
      newsUrl,
      publishTime,
      sourceName,
      authorName,
    } = this.props;

    const newDate = new Date(publishTime);
    let day = newDate.getDay();
    let strdate = newDate.toDateString();
    let time = newDate.toLocaleTimeString();
    let timeFormat = day + " " + strdate + " " + time;

    return (
      <>
        <Card sx={{ minHeight: 350 }}>
          <CardMedia
            component="img"
            height="140"
            image={!imgUrl ? "https://picsum.photos/200/300?tech" : imgUrl}
            alt="green iguana"
          />
          <CardContent>
            <div className="d-flex justify-content-end">
              <span className="badge bg-warning fs-6 fw-bold">
                {sourceName}
              </span>
            </div>
            <Typography gutterBottom variant="h4" component="div">
              {myTitle}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {myDescription}...
            </Typography>
          </CardContent>
          <div className="d-flex justify-content-end">
            <p className="card-text pe-4 fw-bold fs-5">
              <small className="text-muted">
                By {(authorName ? authorName : "Unknown").slice(-20)} &#8680;
                {timeFormat}
              </small>
            </p>
          </div>
          <CardActions style={{ fontSize: "2rem" }}>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-outline-danger"
            >
              Go for Read
            </a>
            <a className="btn btn-sm btn-outline-info" rel="noreferrer" href="">
              Share
            </a>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default NewsItems;
