import { html, LitElement } from 'lit';

export class BookCard extends LitElement {
  static properties() {
    return {
      book: { type: Object },
    };
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <div class="card mb-4">
        <div class="card-body">
          <span
            class="badge mb-2 ${this.book.available
              ? 'bg-success'
              : ' bg-secondary'}"
            >${this.book.available
              ? html`<small>Disponible</small>`
              : html`<small>No disponible</small>`}</span
          >
          <h5 class="card-title">${this.book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${this.book.author}</h6>

          <ul class="m-0 list-unstyled">
            <li><strong>Año</strong>: ${this.book.year}</li>
            <li><strong>País de publicación</strong>: ${this.book.country}</li>
            <li>
              <strong>Idioma de publicación</strong>:
              ${this.book.originalLanguage}
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}
