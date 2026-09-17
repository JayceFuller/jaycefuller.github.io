class WindowBox extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
            <script src="./js/bootstrap/bootstrap.bundle.min.js"></script>

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

                .container-fluid {
                    padding: 0;
                }

                .window-box {
                    animation: floatUp 0.8s ease-out forwards; 
                    background-color: rgb(225, 225, 225);
                    color: black;
                    border: 2px solid;
                    border-color: gray;
                    box-shadow: inset;
                    border-radius: 3px;
                }

                .window-titlebar {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                    background-color: rgb(107, 25, 58);
                    color: white;
                    padding-bottom: 0;
                    border-bottom: 1px darkgray solid;
                }

                .window-button {
                    padding-top: 0;
                    padding-bottom: 0;
                    font-family: monospace;
                    color: black;
                    background-color: rgba(255, 255, 255, 0.55);
                    cursor: default;
                    line-height: 1.3;
                }
                    .window-button:hover {
                        cursor: default;
                    }

                .window-content {
                    padding: 20px;
                }

                .digital-text {
                    font-family: monospace;
                }

                .buttons { gap: 8px; }

            </style>

            <div class="window-box container-fluid">
                <div class="window-titlebar">
                    <p class="digital-text"><slot name="window-title"></slot></p>

                    <div class="buttons">
                        <button class="window-button" disabled>&#8212;</button>
                        <button class="window-button" disabled>&#9633;</button>
                        <button class="window-button" disabled>x</button>
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