class ServiceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                width: 350px;
                height: 200px;
            }

            slot[name="icon"] {
                font-size: 25px;
                color: var(--blue-light);
            }

            slot[name="title"] {
                font-size: 20px;
                font-weight: 600;
                color: var(--blue-light);
            }

            slot[name="content"] {
                font-size: 16px;
                margin: 0;
            }

        </style>
        <div>
            <slot name="icon"></slot>
            <slot name="title"></slot>
            <slot name="content"></slot>
        </div>
        `;
    }
}
customElements.define("c-service-card", ServiceCard);

