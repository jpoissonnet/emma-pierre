class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .primary {
          font-family: 'Jost', sans-serif;
          text-transform: uppercase;
          color: white;
          font-size: 20px;
          padding: 10px 60px; 
          border-radius:5px;
          margin: 10px;
          border: 1px solid #1D5F6B;
          background: #1D5F6B;
        }
      </style>
      <button class="primary">Valider</button>
    `;
  }

}

customElements.define("c-button", Button);
