import { html, css, LitElement } from "@lion/core";
import '@lion/form/lion-form.js'
import '@lion/input/lion-input.js';
import '@lion/fieldset/lion-fieldset.js';
import '@lion/checkbox-group/lion-checkbox.js';
import { alphanumericalOnly } from './input.js';
import { Required } from '@lion/form-core';
import { ajax } from '@lion/ajax';

class LoginPage extends LitElement {
  static get styles() {
    return css`
      :host {
        height: 65vh;
        width: 350px;
        max-width: 350px;
        padding: 25px;
        margin: 10% auto;
        padding: 25px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
      }
      #login {
        width: auto;
        height: auto;
        display: block;
      }
      .save-checkbox {
        padding: 5px 0 0 10px;
        float:left;

      }
      .submit-btn {
        float: right;
        margin-right: 10px;
        width: 80px;
        height: 30px;
      }
    `;
  }

  static get properties() {
    return {
      OrangeBankID: { type: String },
      CardNumber: { Type: String },
      title: { type: String },
      counter: { type: Number },
      objectTest: {}
    };
  }

  constructor() {
    super();
    this.title = 'Login Form';
  }

  render() {
    return html`
    <div id="login-container">
      <h2>${this.title}</h2>
      <lion-form id="login"><form @submit=${ev => {
        const data = ev.target.parentElement.modelValue;

        ajax
          .post('http://httpbin.org/anything', {
            data: data
          })
          .then(response => {
            const loginContainer = this.shadowRoot.getElementById('login-container');
            const successContainer = this.shadowRoot.getElementById('success');
            
            loginContainer.hidden = true;
            successContainer.hidden = false;
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          })
        ;
      }}>
        <lion-fieldset name="login-section">
          <login-input class="bankId" name="bankId" label="Orange Bank ID"
            .validators="${[new alphanumericalOnly()]}"
          ></login-input>
          <login-input class="cardNumber" name="cardNumber" label="Card Number"
            .validators="${[new alphanumericalOnly()]}"
          ></login-input>
          <lion-checkbox class="save-checkbox" label="Save Credentials" name="save-credentials"></lion-checkbox>
          <button class="submit-btn" type="submit">Submit</button>
        </lion-fieldset>
      </lion-form>
      </div>
      <div id="success" hidden><h3>Te-ai logat cu success.</h3></div>
    `;
  }
}

customElements.define('login-page', LoginPage);
