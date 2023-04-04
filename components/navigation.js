class Navigation extends HTMLElement {
    constructor() {
        super();
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                this.shadowRoot.querySelector('nav').classList.add('scrolled');
            }
            if(window.scrollY === 0) {
                this.shadowRoot.querySelector('nav').classList.remove('scrolled');
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
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: 186px;
          padding: 20px 0;
          z-index: 1;
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
          gap: 20px;
        }
        :host nav ul li{
            font-family: Jost, sans-serif;
            text-transform: uppercase;
        }
        :host nav ul li a{
            text-decoration: none;
            color: #3E3943
        }
      </style>
      <nav>
        <img src="https://haudrey.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabc3cfef-58c0-40c1-b855-7d59d6a7925d%2FEP-logo-DEF-carre.png?id=c4206b66-9240-4498-b79d-34fac4501f7d&table=block&spaceId=13fec3ef-4892-4045-a9dd-26c7528efbeb&width=2000&userId=&cache=v2" alt="logo emma pierre" />
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
      </nav>
    `;
    }

}

customElements.define("c-nav", Navigation);
