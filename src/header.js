import { html, css, LitElement } from 'lit-element';

export class header extends LitElement {
  static get styles() {
    return css`
      :host {
        height: 15vh;
        background-color: #C1C3C0;
        border-bottom: 1px solid red;
      }
      .logo-container {
        margin: 5px 5px;
      }
      h2 {
        margin-top: 0;
        margin-bottom: 0;
      }
      img {
        width: 150px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'GTA Banking';
  }

  render() {
    return html`
    <div class="logo-container">
      <img src=".././src/images/logo.png" /> 
      <h2>${this.title}</h2>
    </div>
    `;
  }
}

customElements.define('header-elem', header);
