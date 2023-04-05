class Navigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
      <style>
        :host * {
          transition: all 0.3s ease;
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
          z-index: 1;
        }
        :host nav.scrolled{
          border-bottom: 1px solid #5b5b5b;
        }
        :host .scrolled::after{
            opacity: 1;
        }

        :host nav::after{
            opacity: 0;
            background: radial-gradient(ellipse at center, rgba(255,255,255,0) 0%,rgb(255,255,255,75%) 100%);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: "";
            z-index: -1;
            backdrop-filter: blur(30px);
            transition: all 0.1s ease-in-out;
        }

        :host nav img{
          height: 100%;
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
          :host .mobile-link{
            display: none;
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
          <button class="mobile-link" id="menu">🍔</button>
          <img src="https://haudrey.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabc3cfef-58c0-40c1-b855-7d59d6a7925d%2FEP-logo-DEF-carre.png?id=c4206b66-9240-4498-b79d-34fac4501f7d&table=block&spaceId=13fec3ef-4892-4045-a9dd-26c7528efbeb&width=2000&userId=&cache=v2" alt="logo emma pierre" />
          <span class="mobile-link"><a href="/pages/panier.html">panier</a></span>
          <ul>
            <li><a href="/index.html">Accueil</a></li>
            <li><a href="/pages/precieuses.html">Précieuses</a></li>
            <li><a href="/pages/impertinentes.html">Impertinentes</a></li>
            <li><a href="/pages/uniques.html">Uniques</a></li>
            <li><a href="/pages/couleur.html">Par couleur</a></li>
            <li><a href="/pages/about.html">A propos</a></li>
            <li><a href="/pages/blog.html">Blog</a></li>
            <li><a href="/pages/contact.html">Contact</a></li>
          </ul>
          <div class="drawer">
          <span id="close-drawer">✖</span>
            <ul>
              <li><a href="/index.html">Accueil</a></li>
              <li><a href="/pages/precieuses.html">Précieuses</a></li>
              <li><a href="/pages/impertinentes.html">Impertinentes</a></li>
              <li><a href="/pages/uniques.html">Uniques</a></li>
              <li><a href="/pages/couleur.html">Par couleur</a></li>
              <li><a href="/pages/about.html">A propos</a></li>
              <li><a href="/pages/blog.html">Blog</a></li>
              <li><a href="/pages/contact.html">Contact</a></li>
          </ul>
          </div>
      </nav>
    `;
    }

    connectedCallback() {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                this.shadowRoot.querySelector('nav').classList.add('scrolled');
            }
            if(window.scrollY === 0) {
                let scrollPosition = window.scrollY;
                setTimeout(() => {
                    if (window.scrollY === scrollPosition) {
                        this.shadowRoot.querySelector('nav').classList.remove('scrolled');
                    }
                }, 300);
            }
        });
        this.shadowRoot.querySelector('#menu').addEventListener('click', () => {
                this.shadowRoot.querySelector('.drawer').classList.add('open');
                this.shadowRoot.querySelector('#close-drawer').addEventListener('click', () => {
                    this.shadowRoot.querySelector('.drawer').classList.remove('open');
                });
        });
    }

}

customElements.define("c-nav", Navigation);

