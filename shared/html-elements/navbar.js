class Navbar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
            <script src="./js/bootstrap/bootstrap.bundle.min.js"></script>

            <style>
                .custom-nav {
                    background-color: rgb(107, 25, 58);
                    align-items: center;
                }
            
                .nav-item {
                    border-radius: 5px;
                    font-weight: normal;
                    transition: transform 0.3s ease, font-weight 0.3s ease; 
                }
                    .nav-item:hover, .nav-item:active, .nav-item:focus {
                        background-color: rgb(156, 50, 93);
                        font-weight: bold;
                        transform: scale(1.05);
                    }
                    .nav-item.active {
                        background-color: rgb(89, 17, 46);
                    }

                .nav-link {
                    color: rgba(255, 255, 255, 0.75) !important;
                }
                    .nav-link:hover {
                        color: white !important;
                    }

                .navbar-brand {
                    padding-right: 45px;
                    color: rgba(255,255,255, 0.75) !important;
                    transition: font-weight 0.1s ease; 
                }
                    .navbar-brand:hover, .navbar-brand:active, .navbar-brand:focus {
                        color: white !important;
                        font-weight: bold;
                    }

                .digital-text {
                    font-family: 'Courier New', Courier, monospace;
                }
                    
                @media(max-width: 990px) {
                    .navbar-collapse { padding-top: 10px; }
                    .nav-item:hover { transform: scale(1.01); }
                }
            </style>

            <nav class="navbar navbar-dark custom-nav navbar-expand-lg" role="navigation">
                <div class="container-fluid">
                    <a class="navbar-brand digital-text" href="index">JayceFuller.dev</a>
                    
                    <button class="navbar-toggler" type="button" id="navToggle" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="navbar-nav gap-lg-3">
                            <li class="nav-item px-2"><a class="nav-link digital-text" href="./about-me">About Me</a></li>
                            <li class="nav-item px-2"><a class="nav-link digital-text" href="./projects">Projects</a></li>
                            <li class="nav-item px-2"><a class="nav-link digital-text" href="./contact">Contacts</a></li>
                            <li class="nav-item px-2"><a class="nav-link digital-text" href="./assets/documents/Fuller_Jayce_Resume_2026.pdf" download="Resume">Resume Download</a></li>
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

        const currLocation = window.location.pathname;
        const navLinks = shadow.querySelectorAll('.navbar-nav .nav-link');

        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;

            if (currLocation === linkPath) {
                link.classList.add('active');
                link.closest('.nav-item').classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
}
customElements.define('nav-bar', Navbar);