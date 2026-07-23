class FeatureElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                .feature-box {
                    animation: floatUp 0.8s ease-out forwards; 
                    background-color: rgb(225, 225, 225);;
                    color: black;
                    border: 2px solid;
                    border-color: rgb(107, 25, 58);;
                    border-radius: 4px;
                    box-shadow: inset;
                    width: 350px;
                    min-height: 400px;
                    justify-content: center;
                }
                    .feature-box:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
                        transition: all 0.2s ease-in-out;
                    }
                .feature-titlebar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    height: 20px;
                    background-color: rgb(107, 25, 58);
                    color: white;
                }
                .feature-content {
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 25px;
                    padding-right: 25px;
                }
                .digital-text {
                    font-family: 'Courier New', Courier, monospace;
                }
            </style>

            <div style="display: flex; justify-content: center;">
                <div class="feature-box">
                    <div class="feature-titlebar">
                        <p class="digital-text"><slot name="feature-title"></slot></p>
                    </div>

                    <div class="feature-content">
                        <slot name="preview-img"></slot>
                        <p class="digital-text"><slot name="feature-content"></slot></p>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('feature-box', FeatureElement)