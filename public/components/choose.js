class Choose extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
        <template>
            <header>
            <div class="wrapper">
                <h1>
                    <div id="choisir">Ch<div id="long-o"></div>isir
                    </div>
                    son bijou : <span class="whitespace"><slot name="category">les précieuses</slot></span>
                </h1>
                <a id="scroll">Scroll pour voir plus</a>
                <div id="fioritures"></div>
            </div>
        </header>
        </template>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Jost", sans-serif;
            }

            header {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 400px;
                text-transform: uppercase;
            }

            .wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
            }

            .wrapper a#scroll {
                box-sizing: border-box;
                position: relative;
                width: fit-content;
                color: white;
                padding: 1.5rem;
                z-index: 3;
            }

            .wrapper a#scroll::after {
                content: "↓";
                position: absolute;
                bottom: calc(1.5rem - 25px);
                left: 50%;
            }

            .whitespace {
                white-space: nowrap;
            }

            header::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-image: url('/assets/images/boucle shiny.png');
                filter: invert(100%);
                z-index: 0;
            }

            header::after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                backdrop-filter: invert(100%);
                z-index: 1;
            }

            div#fioritures {
                position: absolute;
                height: 100%;
                width: 100%;
                background-image: url('/assets/images/things.png');
                background-position: right;
                background-size: cover;
                background-repeat: no-repeat;
                z-index: 2;
            }

            h1 {
                font-size: 2.5rem;
                padding: 0;
                font-weight: 500;
                color: #000;
                z-index: 0;
                text-align: center;
            }

            div#long-o {
                display: inline-block;
                width: calc(2em - 20px);
                height: calc(1em - 10px);
                border: 3px solid #000;
                border-radius: calc(1em - 20px);
            }


            @media (min-width: 768px) {
                header {
                    height: 600px;
                }

                header::before {
                    left: 50%;
                }

                header::after {
                    left: 50%;
                }

                .wrapper {
                    align-items: flex-start;
                }

                h1 {
                    padding: 0;
                    font-size: 5rem;
                    text-align: left;
                }

                div#choisir {
                    transform: translateX(-7rem);
                }

                .wrapper a#scroll {
                    padding: 3rem 7rem;
                    color: black;
                }

                h1 {
                    padding: 0 7rem;
                }


                div#long-o{
                    height: calc(1em - 20px);
                    border-width: 6px;
                }
            }
            </style>`;
        const template = this.shadowRoot.querySelector('template');
        const instance = template.content.cloneNode(true);
        shadow.appendChild(instance);
    }

    connectedCallback() {
        const src = this.getAttribute('src');
        if (src) {
            const style = document.createElement('style')
            style.innerHTML = `
            header::before {
                background-image: url(${src});
                background-position: center;
                background-size: cover;
            }
            `;
            this.shadowRoot.appendChild(style);
        }
    }
}

customElements.define('c-choose', Choose);




