class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
          cursor: pointer;
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
        .inscription {
          background-color: white;
          border: 1px solid #1D5F6B;
          color: #1D5F6B;
      }
      .inscription:hover{
        background-color: #1D5F6B;
        color: white;

      }
      .center{
          display: block;
          margin: 0 auto;
          text-align: center;
      }

      </style>
      <button><span>🔗</span>Valider</button>
    `;
  }

  connectedCallback() {
    let variant = this.getAttribute("variant");
    let content = this.getAttribute("content");
    let button = this.shadowRoot.querySelector("button");
    if (variant !== null && variant !== "primary") button.classList.add(variant);


    if (content !== null) {
      button.innerHTML = content;
    }
    if (variant === "auth") {
      button.innerHTML = "Connexion";
      button.classList.add("auth");
    }
    if (variant === "inscription") {
      button.innerHTML = "Confirmer";
      button.classList.add("inscription");
      button.classList.add("center");

      button.setAttribute("href", "/inscription");
    }
    if (variant === "sinscrire") {
      button.innerHTML = "Inscription";
      button.classList.add("inscription");

      button.setAttribute("href", "/inscription");
    }

    let showLink = this.getAttribute("showLink") === "true";
    let span = this.shadowRoot.querySelector("span");
    if (showLink) span.classList.add("showLink");
  }
}

customElements.define("c-button", Button);

