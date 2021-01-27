import { html, css, LitElement } from 'lit-element';

export class footer extends LitElement {
  static get styles() {
    return css`
      :host {
        height: 20vh;
        background-color: #C1C3C0;
      }
      h2 {
        margin-top: 0;
        margin-bottom: 0;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div></div>
    `;
  }
}

customElements.define('footer-elem', footer);
