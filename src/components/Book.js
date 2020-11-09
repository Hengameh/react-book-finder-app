import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    return (
      <div key={this.props.id} className="book">
        {this.props.imageLinks && (
          <img
            className="book-thumbnail"
            src={this.props.imageLinks}
            alt={this.props.title}
          />
        )}

        <h2 className="book-title">
          <a
            href={this.props.canonicalVolumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
        </h2>
        <p>
          <strong>Authors:</strong> {this.props.authors}
        </p>

        <p>
          <strong>Category:</strong> {this.props.categories}
        </p>
        <p>
          <strong>Description:</strong> {this.props.description}
        </p>
      </div>
    );
  }
}

export default Book;
