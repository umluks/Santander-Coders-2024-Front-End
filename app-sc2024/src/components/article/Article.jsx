import "./style-article.css";
import React from "react";

export class Article extends React.Component {
  render() {
    return (
      <article>
        <div className="article-info">
          <img src={this.props.thumb} alt={this.props.title} />
          <div className="article-text">
            <h2 className="article-title">{this.props.title}</h2>
            <h3>{this.props.subtitle}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
      </article>
    );
  }
}
