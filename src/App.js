import React, { Component } from "react";
import axios from "axios";
import Book from "./components/Book";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "harry potter",
      bookList: [],
      isSearching: false,
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  handleInput(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleEnterKey(e) {
    if (e.key === "Enter") {
      this.searchBook();
    }
  }

  searchBook() {
    this.setState({ isSearching: true });
    this.getBooks();
  }

  getBooks() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&maxResults=12`
      )
      .then((response) => {
        const totalItemsFound = response.data.totalItems;

        if (response.data.totalItems === 0) {
          this.setState({
            bookList: [],
            isSearching: false,
            errorMessage: `No books found for ${this.state.searchTerm}`,
          });
        } else {
          this.setState({
            bookList: response.data.items,
            isSearching: false,
            errorMessage: `${totalItemsFound} search results found for ${this.state.searchTerm}`,
          });
        }
      })
      .catch(() => {
        this.setState({
          bookList: [],
          isSearching: false,
          errorMessage:
            "Encountered Server Error. Please enter a search term and try again...",
        });
      });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
          <p>Find your book here and visit Google Play to find out more.</p>
          <div className="bar">
            <input
              className="searchbar"
              type="text"
              value={this.state.searchTerm}
              placeholder='Eg. "harry potter", "javascript".'
              onChange={this.handleInput.bind(this)}
              onKeyDown={this.handleEnterKey.bind(this)}
            />

            {this.state.isSearching && <div className="loader"></div>}

            <button
              className="button"
              type="button"
              onClick={this.searchBook.bind(this)}
            >
              Search
            </button>
          </div>
        </header>

        <div className="result">
          <div className="result-message">
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
          </div>

          {this.state.bookList && (
            <div className="book-list">
              {this.state.bookList.map((book, index) => (
                <Book
                  key={book.id}
                  index={index}
                  imageLinks={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail
                  }
                  title={book.volumeInfo.title}
                  canonicalVolumeLink={book.volumeInfo.canonicalVolumeLink}
                  authors={book.volumeInfo.authors || "N/A"}
                  categories={book.volumeInfo.categories || "N/A"}
                  description={book.volumeInfo.description || "N/A"}
                />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
