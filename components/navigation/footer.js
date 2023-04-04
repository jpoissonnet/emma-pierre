class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
          footer {
            font-family: 'Jost', sans-serif;
            font-family: 'Playfair Display', serif;
            font-family: 'Urbanist', sans-serif;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 20px 50px;
            color: black;
            bottom: 0px;
            margin: 0px auto;
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
            justify-content: end;

          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0px 20px;
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
            margin-right: 10px;
            cursor: pointer;
            }
        .reseau {
            display: flex;
            justify-content: row;
            }
        </style>
        <footer>
            <div class="logo"> 
                <a><img class="logo" src="./assets/images/logo.png" alt=""></a>
            </div>
            <div class="list">
                <ul>
                    <li><a>Menu</a></li>
                    <li><a>Accueil</a></li>
                    <li><a>A propos</a></li>
                    <li><a>Blog</a></li>
                </ul>
                <ul>
                    <li><a>A propos</a></li>
                    <li><a>Témoignage client</a></li>
                    <li><a>Emballages protégés</a></li>
                    <li><a>Faq</a></li>
                    <li><a>Mentions légales</a></li>
                    <li><a>Conditions générales</a></li>
                    <li><a>Charte de confidentialité</a></li>
                </ul>
                <ul>
                    <li><a>Contact</a></li>
                    <li><a>+33 6 12 34 54 57</a></li>
                    <li><a>3 Rue des blés, 69000 Lyon</a></li>
                    <div class="reseau">
                        <li>
                            <a href=""><img class="reseau_soc" src="./assets/images/instagram.png" alt="instagram" /></a>
                        </li>
                        <li>
                            <a href=""><img class="reseau_soc" src="./assets/images/facebook.png" alt="" /></a>
                        </li>
                    </div>
                    
                </ul>
            </div>
           
            
        </footer>
      `;
    }
}

customElements.define("c-footer", Footer);
