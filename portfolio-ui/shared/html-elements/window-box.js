class WindowBox extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                @keyframes floatUp {
                    0% {
                        transform: translateY(25px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .window-box {
                    animation: floatUp 0.8s ease-out forwards; 
                    background-color: rgb(225, 225, 225);;
                    color: black;
                    border: 2px solid;
                    border-color: gray;
                    box-shadow: inset;
                }
                .window-titlebar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    height: 20px;
                    background-color: rgb(107, 25, 58);
                    color: white;
                }
                .window-button {
                    background-color: rgba(255, 255, 255, 0.55);
                }
                .window-button:hover {
                    background-color: rgba(255, 255, 255, 0.75);
                }
                .window-content {
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 25px;
                    padding-right: 25px;
                }
                .digital-text {
                    font-family: 'Courier New', Courier, monospace;
                }
            </style>

            <div class="window-box">
                <div class="window-titlebar">
                    <p class="digital-text"><slot name="window-title"></slot></p>

                    <div>
                        <button class="window-button">–</button>
                        <button class="window-button">&#9633;</button>
                        <button class="window-button">x</button>
                    </div>
                </div>

                <div class="window-content">
                    <p class="digital-text"><slot name="window-content"></slot></p>
                </div>
            </div>
        `
    }
}

customElements.define('window-box', WindowBox)