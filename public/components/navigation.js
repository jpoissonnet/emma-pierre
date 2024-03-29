class Navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host * {
          transition: height 0.3s ease 0s, left 0.3s ease 0s;
        }

        :host nav{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          border-bottom: 1px solid #ccc0;
          height: 60px;
          padding: 15px 18px;
          z-index: 10;
        }
        :host nav.scrolled{
          border-bottom: 1px solid #5b5b5b;
        }
        :host .scrolled::after{
            opacity: 1;
        }

        :host nav::after{
            opacity: 0;
            background: rgb(255,255,255,75%);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: "";
            z-index: -1;
            backdrop-filter: blur(40px);
            transition: all 0.1s ease-in-out;
        }

        :host nav img{
          height: 100%;
        }

        :host nav .mobile-link{
          cursor: pointer;
          border: none;
          background: none;
          font-size: 32px;
        }

        :host nav > ul{
          display: none;
        }
        :host nav > ul li::after{
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: #1D5F6B;
            transition: width 0.3s;
        }

        :host nav > ul li:hover::after{
            width: 100%;
        }

        :host nav ul li{
            font-family: Jost, sans-serif;
            text-transform: uppercase;
        }
        :host nav a{
            text-decoration: none;
            color: #242129;
        }

        :host .drawer{
          position: absolute;
          content: "";
          top: 0;
          left: -100%;
          width: 75%;
          height: 100vh;
          overflow: hidden;
          background: #ffffff;
          padding: 20px;
        }
        :host .drawer.open{
          left: 0;
          box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
        }

        :host nav .drawer ul{
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
        }

        :host nav .drawer ul li{
            list-style: none;
            letter-spacing: 2px;
            line-height: 2;
            border-bottom: 1px solid #3E3943;
            padding: 10px 0;
        }

        @media (min-width: 768px) {
          :host .scrolled{
            height: 120px;
          }

          :host .scrolled img{
           transform: scale(0.8) translateY(-10px);
          }
          :host .mobile-link:not(#panier){
            display: none;
          }
          :host #panier{
            position: absolute;
            right: 200px;
            top: 30%;
          }
          :host nav {
            flex-direction: column;
            height: 186px;
            padding: 20px 0;
          }
          :host nav img{
            width: 150px;
            height: auto;
          }
          :host nav ul{
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            gap: 10px;
          }
        }

      </style>
      <nav>
          <button class="mobile-link" id="menu"><svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M128 341.333333h768a42.666667 42.666667 0 0 0 0-85.333333H128a42.666667 42.666667 0 0 0 0 85.333333z m768 341.333334H128a42.666667 42.666667 0 0 0 0 85.333333h768a42.666667 42.666667 0 0 0 0-85.333333z m0-213.333334H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z"/></svg></button>
          <img src="/assets/images/logo.png" alt="logo emma pierre" />
          <span class="mobile-link" id="panier"><a href="/panier"><svg class="svg-icon" style="margin: 0px 70px 10px 00px; width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M725.333333 768c-47.36 0-85.333333 37.973333-85.333333 85.333333a85.333333 85.333333 0 0 0 85.333333 85.333334 85.333333 85.333333 0 0 0 85.333334-85.333334 85.333333 85.333333 0 0 0-85.333334-85.333333M42.666667 85.333333v85.333334h85.333333l153.6 323.84-58.026667 104.533333c-6.4 11.946667-10.24 26.026667-10.24 40.96a85.333333 85.333333 0 0 0 85.333334 85.333333h512v-85.333333H316.586667a10.666667 10.666667 0 0 1-10.666667-10.666667c0-2.133333 0.426667-3.84 1.28-5.12L345.6 554.666667h317.866667c32 0 60.16-17.92 74.666666-43.946667l152.746667-276.053333c2.986667-6.826667 5.12-14.08 5.12-21.333334a42.666667 42.666667 0 0 0-42.666667-42.666666H222.293333l-40.106666-85.333334M298.666667 768c-47.36 0-85.333333 37.973333-85.333334 85.333333a85.333333 85.333333 0 0 0 85.333334 85.333334 85.333333 85.333333 0 0 0 85.333333-85.333334 85.333333 85.333333 0 0 0-85.333333-85.333333z" fill="" /></svg></a></span>
          <span class="mobile-link" id="panier"><a href="/connexion"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000"
          preserveAspectRatio="xMidYMid meet">

         <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
         fill="#000000" stroke="none">
         <path d="M110 250 c-11 -11 -20 -31 -20 -45 0 -30 32 -65 60 -65 28 0 60 35
         60 65 0 30 -32 65 -60 65 -11 0 -29 -9 -40 -20z"/>
         <path d="M80 92 c-19 -9 -35 -24 -35 -32 0 -12 18 -15 105 -15 87 0 105 3 105
         15 0 20 -62 50 -105 50 -19 0 -51 -8 -70 -18z"/>
         </g></svg></a></span>

          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/precieuses">Précieuses</a></li>
            <li><a href="/impertinentes">Impertinentes</a></li>
            <li><a href="/uniques">Uniques</a></li>
            <li><a href="/couleur">Par couleur</a></li>
            <li><a href="/about">A propos</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div class="drawer">
          <span id="close-drawer"><svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z"  /></svg></span>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/precieuses">Précieuses</a></li>
              <li><a href="/impertinentes">Impertinentes</a></li>
              <li><a href="/uniques">Uniques</a></li>
              <li><a href="/couleur">Par couleur</a></li>
              <li><a href="/about">A propos</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
          </div>
      </nav>
    `;
  }

  connectedCallback() {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        this.shadowRoot.querySelector("nav").classList.add("scrolled");
      }
      if (window.scrollY === 0) {
        let scrollPosition = window.scrollY;
        setTimeout(() => {
          if (window.scrollY === scrollPosition) {
            this.shadowRoot.querySelector("nav").classList.remove("scrolled");
          }
        }, 300);
      }
    });
    this.shadowRoot.querySelector("#menu").addEventListener("click", () => {
      this.shadowRoot.querySelector(".drawer").classList.add("open");
      this.shadowRoot.querySelector("#close-drawer").addEventListener("click", () => {
        this.shadowRoot.querySelector(".drawer").classList.remove("open");
      });
    });
  }
}

customElements.define("c-nav", Navigation);

