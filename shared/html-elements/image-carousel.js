class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;

        this.shadowRoot.innerHTML = `
            <style>
                .carousel-container {
                    overflow: hidden;
                    max-width: 600px;
                    width: 100%;
                    border-radius: 4px;
                    background-color: rgb(107, 25, 58);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
                }
                .carousel-slides {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    transition: transform 0.4s ease-in-out;
                }
                ::slotted(img) {
                    width: 600px;
                    height: 350px;
                    flex-shrink: 0;
                    object-fit: cover;
                }
                .buttons {
                    display: flex; 
                    justify-content: center;
                    gap: 25px;
                    margin: 5px;
                }
                .carousel-btn {
                    background-color: rgba(255, 255, 255, 0.55);
                }
                .carousel-btn:hover {
                    background-color: rgba(255, 255, 255, 0.75);
                }

                @media(max-width: 768px) {
                    .carousel-container { max-width: 365px }
                    ::slotted(img) { width: 365px;  height: 215px; }
                }
            </style>

            <div style="display: flex; justify-content:center;">
                <div class="carousel-container" role="region">
                    <div class="carousel-slides">
                        <slot></slot>
                    </div>
                    <div class="buttons">
                        <button class="carousel-btn prev">&#10094;</button>
                        <button class="carousel-btn next">&#10095;</button>
                    </div>
                </div>
            </div>
        `

        this.container = this.shadowRoot.querySelector('.carousel-slides');
        this.slotElement = this.shadowRoot.querySelector('slot')
        this.prevBtn = this.shadowRoot.querySelector('.prev');
        this.nextBtn = this.shadowRoot.querySelector('.next');

        this.prevBtn.addEventListener('click', () => this.moveSlide(-1));
        this.nextBtn.addEventListener('click', () => this.moveSlide(1));
    }

    getTotalSlides() {
        const assignedElements = this.slotElement.assignedElements();
        return assignedElements.filter(el => el.tagName === 'IMG').length;
    }

    moveSlide(direction) {
        const total = this.getTotalSlides();

        if (total === 0) { return; }

        this.currentIndex = (this.currentIndex + direction + total) % total;
        this.container.style.transform = `translateX(-${ this.currentIndex * 100 }%)`;
    }
}

customElements.define('image-carousel', ImageCarousel);