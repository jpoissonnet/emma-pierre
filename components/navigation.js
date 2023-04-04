class Navigation extends HTMLElement {
    constructor() {
        super();
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                this.shadowRoot.querySelector("nav").classList.add("scrolled");
            }
            if (window.scrollY === 0) {
                this.shadowRoot.querySelector("nav").classList.remove("scrolled");
            }
        });
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
      <style>
        :host .scrolled {
          background: #FFFFFF80;
          backdrop-filter: blur(15px);
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
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
          height: 60px;
          padding: 15px 18px;
          z-index: 1;
        }

        :host nav img{
          height: 100%;
        }
        :host nav > ul{
          display: none;
        }

        :host nav ul li{
            font-family: Jost, sans-serif;
            text-transform: uppercase;
        }
        :host nav ul li a{
            text-decoration: none;
            color: #3E3943
        }

        :host .drawer{
            display: none;
        }
        :host .drawer:has(.open){
          display: block;
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: calc(100% - 36px);
          height: 100vh;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
          padding: 20px;
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
          <button class="mobile-link">🍔</button>
          <img src="https://haudrey.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabc3cfef-58c0-40c1-b855-7d59d6a7925d%2FEP-logo-DEF-carre.png?id=c4206b66-9240-4498-b79d-34fac4501f7d&table=block&spaceId=13fec3ef-4892-4045-a9dd-26c7528efbeb&width=2000&userId=&cache=v2" alt="logo emma pierre" />
          <span class="mobile-link">panier</span>
          <ul>
            <li><a href="/index.html">Accueil</a></li>
            <li><a href="/">Précieuses</a></li>
            <li><a href="/">Impertinentes</a></li>
            <li><a href="/">Uniques</a></li>
            <li><a href="/">Par couleur</a></li>
            <li><a href="/pages/about.html">A propos</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <div class="drawer">
          <span id="close-drawer">✖</span>
            <ul>
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/">Précieuses</a></li>
                <li><a href="/">Impertinentes</a></li>
                <li><a href="/">Uniques</a></li>
                <li><a href="/">Par couleur</a></li>
                <li><a href="/">A propos</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
          </ul>
          </div>
      </nav>
    `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.mobile-link').addEventListener('click', () => {
                console.log("coucou");
                this.shadowRoot.querySelector('.drawer').classList.add('open');
                this.shadowRoot.querySelector('#close-drawer').addEventListener('click', () => {
                    this.shadowRoot.querySelector('.drawer').classList.remove('open');
                });
        });
    }

}

customElements.define("c-nav", Navigation);

