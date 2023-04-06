class Article extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        .article {
            position: relative;
            width: 300px;
            height: 400px;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            padding: 5px;
           z-index: 1; 
        }

        .article:before {
            content: "";
            border: 1px solid #000;
            position: absolute;
            width: 100%;
            height: 105%;
            right: -25px;
            top: -13px;
            transition: 0.5s ease-in-out;
            z-index: -1;
        }

        .article img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .article:hover img {
            filter: brightness(0.5);
            transition: 0.5s ease-in-out;
        }

        .hover h2,
        .hover span {
            opacity: 1;
            transition: 0.5s ease-in-out;
            z-index: 1;
        }

        h2, span {
            display: none;
            z-index: -1;
        }

        .hover h2 {
            position: absolute;
            margin: 0px;
            padding: 0px;
            top: 15px;
            left: 15px;
            display: block;
            letter-spacing: 1px;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 20px;
        }

        .hover .cart {
            position: absolute;
            left: 15px;
            bottom: 15px;
            display: block;
        }

        .hover .price {
            position: absolute;
            right: 15px;
            bottom: 15px;
            display: block;
        }

        @media screen and (max-width: 768px) {
            .article {
                width: 250px;
                height: 350px;
            }

            div:before {
                display: none;
            }
    
        </style>        
        <div id="id" class="article">
            <img src="/assets/images/start.jpeg" alt="article image">
            <h2>Title</h2>
            <span class="cart">🛒</span>
            <span class="price">24,00€</span>
        </div>
        `;
    }

    connectedCallback() {
        this.render();

        this.shadowRoot.querySelector(".article").addEventListener("mouseover", () => {
            this.shadowRoot.querySelector(".article").classList.add("hover");
        });

        this.shadowRoot.querySelector(".article").addEventListener("mouseout", () => {
            this.shadowRoot.querySelector(".article").classList.remove("hover");
        });

        this.shadowRoot.querySelector(".article").addEventListener("click", (event) => {
            if (event.target.classList.contains("cart") && !event.target.classList.contains("added")) {
                this.shadowRoot.querySelector(".cart").classList.add("added");
                this.shadowRoot.querySelector(".cart").innerHTML = "✔️";
                return;
            }

            if (event.target.classList.contains("added")) {
                this.shadowRoot.querySelector(".cart").classList.remove("added");
                this.shadowRoot.querySelector(".cart").innerHTML = "🛒️";
                return;
            }

            window.location.href = "/article.html";
        });
    }
}

customElements.define("c-article", Article);

