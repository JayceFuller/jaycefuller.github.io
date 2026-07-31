class FootNote extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .footnotes {
                    background-color: rgb(107, 25, 58);
                    color: rgba(255, 255, 255, 0.90);
                    display: flex;
                    justify-content: space-between;
                    padding: 25px 45px;
                    align-items: center;
                    text-align: left;
                }

                .footnotes h2 {
                    font-weight: bold;
                }

                .footnotes path {
                    color: rgba(255, 255, 255, 0.90);
                }
                
                .links a {
                    text-decoration: none;
                }
                
                @media(max-width: 768px) {
                    .footnotes { 
                        flex-direction: column; 
                        justify-content: center; 
                        text-align: center;
                    }
                }
            </style>

            <div class="footnotes">
                <div class="title digital-text">
                    <h2>JayceFuller.dev</h2>
                    <p>Programmer, Web Developer</p>
                </div>
                <div class="links">
                    <a href="https://www.linkedin.com/in/jayce-fuller-131807383/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i class="fa-brands fa-linkedin fa-3x"></i>
                    </a>
                    <a href="https://github.com/JayceFuller" target="_blank" rel="noopener noreferrer" title="Github">
                        <i class="fa-brands fa-github fa-3x"></i>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('foot-note', FootNote);