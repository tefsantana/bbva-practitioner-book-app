import { LitElement, html } from 'lit';

import { books } from '../data/books.js';

export class BooksApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      books: { type: Array, attribute: false },
    };
  }

  // Descomentar para borrar los estilos heredados desde el exterior
  /* static get styles() {
    return css`
      :host {
        all: initial;
      }
    `;
  } */

  constructor() {
    super();
    this.title = 'Biblioteca virtual';
    this.books = books;
  }

  reserveBook(ev) {
    this.books = this.books.map(book => {
      if (book.title === ev.detail.book.title) {
        return { ...book, available: false };
      }
      return book;
    });
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <main class="container">
        <h1 class="my-4">${this.title}</h1>
        <div class="row">
          ${this.books.map(
            book =>
              html`<div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <book-card .book="${book}" @reserve-book="${this.reserveBook}">
                </book-card>
              </div>`
          )}
        </div>
      </main>
    `;
  }
}
