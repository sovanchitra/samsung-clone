class PaymentCardComponent extends HTMLElement {
    
    constructor() {
        super()
    }

    connectedCallback() {
        const title = this.dataset.title
        const description = this.dataset.description
        const image = this.dataset.image
        const callback =  this.dataset.callback
        const isSingle = this.dataset.single

        this.innerHTML = isSingle ? `    
        <div onclick="${callback}" class="flex gap-6 items-center p-6 border border-gray-500 rounded-md w-full lg:w-1/2 transition ease-in-out hover:delay-100 hover:border-blue-500 hover:border-2">
        <img class="w-10 h-10"
            src="${image}"
            alt="payment-option-image">
            <div>
                <h3 class="font-medium text-sm">${title}</h3>
                <p class="text-sm font-light">${description}</p>
            </div>
         </div>` :
        `<button onclick="${callback}"
            class="flex flex-1 border border-gray-400 p-10 gap-6 w-full items-center rounded-md transition-all ease-in-out hover:delay-100 hover:border-blue-500 hover:border-2">
            <img class="h-4 w-fit object-cover"
                src="${image}"
                alt="payment-option-image">
            <div class="text-sm text-start font-light">
                <p>${title}</p>
                <p>${description}</p>
            </div>
        </button>
        `
    }
}

customElements.define("payment-card-component", PaymentCardComponent);