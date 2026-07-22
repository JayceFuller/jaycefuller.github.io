class TagElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .tag {
                    background-color: rgb(107, 25, 58);
                    color: rgba(255,255,255, 0.75);
                    text-align: center;
                    border-radius: 5px;
                    padding: 10px;
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 16px;
                    margin-bottom: 6px;
                }
                    .tag:hover {
                        background-color: rgb(156, 50, 93);
                        color: white;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
                        transition: all 0.2s ease-in-out;
                    }
            </style>

            <button class="tag"><slot></slot></button>
        `;
    }
}
customElements.define('tag-button', TagElement);