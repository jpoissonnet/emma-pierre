class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
      <style>
        button {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          color: white;
          font-size: 20px;
          padding: 10px 60px;
          border-radius:5px;
          margin: 10px;
          border: 1px solid #1D5F6B;
          background: #1D5F6B;
        }
        .secondary {
            border: 2px solid #1D5F6B;
            background: transparent;
            color: #1D5F6B;
        }

        button span{
          display: none;
        }

        button span.showLink{
          display: inline;
        }
      </style>
      <button><span>🔗</span>Valider</button>
    `;
    }

    connectedCallback() {
        let variant = this.getAttribute("variant");
        let button = this.shadowRoot.querySelector("button");
        if (variant === null || variant !== "primary") button.classList.add(variant);

        let showLink = this.getAttribute("showLink") === "true";
        let span = this.shadowRoot.querySelector("span");
        if (showLink) span.classList.add("showLink");
    }

}

customElements.define("c-button", Button);
