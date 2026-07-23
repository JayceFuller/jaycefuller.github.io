class Navbar extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
            <script src="./js/bootstrap/bootstrap.bundle.min.js"></script>

            <style>
                .nav {
                    background-color: rgb(107, 25, 58);
                    gap: 50px;
                    min-height: 45px;
                }  
                .nav-item {
                    border-radius: 5px;
                    font-weight: normal;
                    transition: font-size 0.3s ease, font-weight 0.3s ease; 
                }
                    .nav-item:hover, .nav-item:active, .nav-item:focus {
                        background-color: rgb(156, 50, 93);
                        font-weight: bold;
                        font-size: 17px;
                    }
                .nav-link {
                    color: rgba(255, 255, 255, 0.75) !important;
                }
                    .nav-link:hover {
                        color: white !important;
                    }
                .navbar-brand {
                    padding-right: 50px;
                    color: rgba(255,255,255, 0.75) !important;
                }
                    .navbar-brand:hover, .navbar-brand:active, .navbar-brand:focus {
                        color: white !important;
                        font-weight: bold;
                    }
                .digital-text {
                    font-family: 'Courier New', Courier, monospace;
                }
                @media(max-width: 990px) {
                    .nav-link { padding-left: 25px; }
                    .nav { gap: 0; }
                    .navbar-collapse { padding-top: 10px; }
                }
            </style>

            <nav class="navbar nav navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand digital-text" href="index.html">JayceFuller.dev</a>
                    
                    <button class="navbar-toggler" type="button" id="navToggle">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="nav navbar-nav">
                            <li class="nav-item"><a class="nav-link digital-text" href="AboutMe.html">About Me</a></li>
                            <li class="nav-item"><a class="nav-link digital-text" href="Projects.html">Projects</a></li>
                            <li class="nav-item"><a class="nav-link digital-text" href="Contacts.html">Contacts</a></li>
                            <li class="nav-item"><a class="nav-link digital-text" href="./assets/documents/Fuller_Jayce_Resume_2026.pdf" download="Resume">Resume Download</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }

    connectedCallback() {
        const shadow = this.shadowRoot;
        const toggler = shadow.getElementById('navToggle');
        const collapseMenu = shadow.getElementById('navbar');

        toggler.addEventListener('click', () => {
        if (collapseMenu.classList.contains('show')) {
            collapseMenu.classList.remove('show');
        } else {
            collapseMenu.classList.add('show');
        }
        });
    }
}
customElements.define('nav-bar', Navbar);