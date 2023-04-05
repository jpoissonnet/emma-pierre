class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
            * {
                box-sizing: border-box;
            }
          footer {
            background-color: #A5BFC4;
            font-family: 'Jost', sans-serif;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 20px 50px;
            width: 100%;
            color: black;
            bottom: 0;
            margin: 0 auto;
          }
          .logo {
            display: block;
          }
          .logo a {
            padding: 20px;
            }
          .logo img {
            width: 150px;
          }
          .list {
            display: flex;
            flex-direction: column;
            justify-content: end;
            gap: 20px;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0 20px;
          }
          ul > li:first-child {
            text-transform: uppercase;
          }
          li {
            display: block;
            padding: 10px;
            margin: 0 10px;
          }
          a {
            text-decoration: none;
            color: black;
          }
          .reseau .reseau_soc {
            width: 30px;
            height: 30px;
            cursor: pointer;
            }
        .reseau {
            display: flex;
            }

        @media (min-width: 768px) {
            footer {
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                padding: 20px;
                gap: 20px;
            }
            .list{
                flex-direction: row;
            }
        }
        </style>
        <footer>
            <div class="logo">
                <a><img class="logo" src="/assets/images/logo.png" alt=""></a>
            </div>
            <div class="list">
                <ul>
                    <li>Menu</li>
                    <li><a>Accueil</a></li>
                    <li><a>A propos</a></li>
                    <li><a>Blog</a></li>
                </ul>
                <ul>
                    <li>A propos</li>
                    <li><a>Témoignage client</a></li>
                    <li><a>Emballages protégés</a></li>
                    <li><a>Faq</a></li>
                    <li><a>Mentions légales</a></li>
                    <li><a>Conditions générales</a></li>
                    <li><a>Charte de confidentialité</a></li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li><a>+33 6 12 34 54 57</a></li>
                    <li><a>3 Rue des blés, 69000 Lyon</a></li>
                    <div class="reseau">
                        <li>
                            <a href=""><img class="reseau_soc" src="/assets/images/instagram.png" alt="instagram" /></a>
                        </li>
                        <li>
                            <a href=""><img class="reseau_soc" src="/assets/images/facebook.png" alt="facebook" /></a>
                        </li>
                    </div>

                </ul>
            </div>
        </footer>
      `;
  }
}

customElements.define("c-footer", Footer);
