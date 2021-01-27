import { css } from '@lion/core';
import { LionInput } from '@lion/input';
import { Validator } from '@lion/form-core';

class componentInput extends LionInput {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          font-family: Roboto, sans-serif;
          outline: 0px;
          width: 100%;
          border: 0px;
          padding: 10px;
          box-sizing: border-box;
          font-size: 14px;
          text-align: left;
        }

        .input-group__container > .input-group__input ::slotted(.form-control){
          color: #777;
          padding-left: 10px;
          margin-top: 7px;
          height: 35px;
          }
        .input-group__container > .input-group__input ::slotted(.form-control:focus) {
              border-radius: 2px;
              border-color: #CDE0EC;
              box-shadow: inset 0 1.5px 3px rgba(190, 190, 190, .4), 0 0 0 5px #CDE0EC;
          }
        
      `,
    ];
  }
}

customElements.define('login-input', componentInput);

const regex =  /^[a-zA-Z0-9_]*$/;

export class alphanumericalOnly extends Validator {
  static get validatorName() {
    return 'alphanumericalOnly';
  }

  execute(value) {
    return !regex.test(value);
  }

  static async getMessage() {
    return 'You can only use gmail.com email addresses.';
  }
}
