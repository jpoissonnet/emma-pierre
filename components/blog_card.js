class BlogCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .card{
          width: 421px;
          height: 560px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
        }
        .imgblogcard{
          width: 421px;
          height: 328px;
        }
        .imgblogcard img {
          width: 421px;
          height: 328px;
        }
        .description{
        }
        .description h2{
        color: black;
        font-size: 20px;
        font-weight: medium;
        text-transform: uppercase;
        font-family: Jost, sans-serif;
        }
        .description p{
          color: black;
          padding-top: 40px;
        }
        .grpbutton{
          display: flex;
          flex-direction: column;
        }
        .grpbutton hr{
          background-color: black;
        }
        button{
          float: right;
          width: 120px;
          border: none;
          background-color: transparent;
          font-family: Jost, sans-serif;
          color: black;
          font-size: 23px;
        }
        .hr{
          display: block;
          margin-left: 315px;
          float: right;
          border-bottom: 1px solid black;
        }
      </style>
      <div class="card">
        <div class="imgblogcard"> 
            <a><img src="/assets/images/WhatsApp Image 2023-03-08 at 20.16.06.jpeg" alt=""></a> 
        </div>
        <div class="description"> 
            <h2>COMMENT ETRETENIR SES BIJOUX ET COLLIERS ?</h2>
            <p>Le plaqué or craint les produits chimiques très agressifs. Plus le placage est fin, ...</p>
            
        </div>
          
          <div class="hr">
            <button>Voir plus</button>
          </div>
      </div>
    `;
  }
}

customElements.define("c-blog-card", BlogCard);
