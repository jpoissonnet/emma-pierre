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
    if (variant === "produit") {
      button.innerHTML = ` Ajouter <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt" height="512.000000pt" style="width: 1.5em; height: 1.5em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
     
     <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
     fill="#000000" stroke="none">
     <path d="M162 4843 c-59 -21 -126 -91 -147 -154 -32 -96 -4 -203 71 -269 71
     -62 84 -64 366 -68 l257 -4 11 -31 c9 -27 974 -2800 1017 -2924 l15 -43 1516
     0 1517 0 51 24 c159 74 189 283 58 410 -72 70 18 66 -1454 66 l-1327 0 -523
     1505 -523 1505 -431 -1 c-357 0 -438 -3 -474 -16z"/>
     <path d="M1953 3970 c-39 -23 -53 -48 -53 -94 0 -20 106 -347 244 -752 214
     -628 249 -721 277 -750 66 -68 -10 -64 1118 -64 1124 0 1056 -4 1120 63 31 33
     47 80 247 769 117 403 214 746 214 761 0 18 -10 39 -29 58 l-29 29 -1539 0
     c-1505 0 -1539 0 -1570 -20z"/>
     <path d="M2193 1145 c-178 -48 -305 -188 -335 -370 -21 -129 26 -275 119 -370
     100 -101 198 -139 344 -133 87 3 104 7 171 40 175 87 270 266 247 463 -31 254
     -300 436 -546 370z"/>
     <path d="M4077 1139 c-208 -49 -364 -283 -329 -494 61 -368 496 -512 757 -251
     233 232 131 639 -183 736 -68 21 -177 25 -245 9z"/>
     </g>
     </svg>`;
      button.style.padding = "5px 30px";
      button.setAttribute("href", "/panier");
    }


    let showLink = this.getAttribute("showLink") === "true";
    let span = this.shadowRoot.querySelector("span");
    if (showLink) span.classList.add("showLink");
  }
}

customElements.define("c-button", Button);

