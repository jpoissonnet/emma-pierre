class Product extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
        <style>
            *{
            box-sizing: border-box;
            }
             .product{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 300px;
                width: 180px;
                padding: 5px;
            }

            .product img{
                width: 100%;
                height: 75%;
                object-fit: cover;
            }

            .product .product-title{
                font-size: 1.2rem;
                text-transform: uppercase;
                font-weight: inherit;
                margin: 0;
            }

            .product .product-info > p{
                font-size: 1.2rem;
                font-weight: bold;
                margin: 0;
            }

            @media (min-width: 768px){
                .product{
                    min-width: 200px;
                }
            }
        </style>
        <div class="product">
           <img src="/assets/images/25170.jpg" alt="image de bijou"/>
           <div class="product-info">
               <h3 class="product-title"><slot name="name">Ras de cou</slot></h3>
               <p><slot name="price">30,00€</slot></p>
           </div>
        </div>
        `;
    }

    connectedCallback() {
        const src = this.getAttribute("src");
        if(src){
            this.shadowRoot.querySelector("img").setAttribute("src", src);
        }
    }
}

customElements.define("c-product", Product);