class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background: #f00;
          color: #fff;
          border: 0;
          padding: 10px;
          cursor: pointer;
        }
      </style>
      <button>AZER</button>
    `;
  }
}

customElements.define("c-button", Button);
