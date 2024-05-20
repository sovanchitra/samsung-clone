export class ProductSeriesCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const heading = this.dataset.heading
        const subheading = this.dataset.subheading
        const image = this.dataset.image
        const description = this.dataset.description
        const reverse = this.dataset.reverse

        this.classList.add("w-full")
        this.innerHTML = `
        <div class="flex py-12 justify-between ${reverse} items-center">
            <div class="max-w-lg w-1/2 space-y-4">
                <p class="font-medium text-sm">${subheading.toUpperCase()}</p>
                <h2 class="text-4xl font-bold">${heading}</h2>
                <p>${description}</p>
            </div>
            <img class="w-[600px] h-fit object-fill bg-contain" src="${image}" alt="feature-image" >
        </div>
        `
    }
}

customElements.define('product-series-card', ProductSeriesCard)
