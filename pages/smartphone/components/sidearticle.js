export class SideArticle extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        // const childText = this.textContent
        const title = this.title
        const listNumber = this.getAttribute('listNumber')
        const desc = this.getAttribute('desc')

        this.innerHTML = `
            <div class=" flex items-center gap-16 py-4 border-black grow">
                <h1 class="font-bold text-lg">${listNumber}</h1>
                <div class="">
                <h2 class="text-3xl font-semibold">${title}</h2>
                <div class="info border-b h-0 overflow-hidden transition-all delay-300">
                <p class="my-5">${desc}</p>
                        <button class="font-semibold underline underline-offset-8 border-black pb-8">Learn
                            More</button>
                    </div>
                </div>
            </div>
            
        `
        this.classList.add("block")
        
    }
}


customElements.define("side-article", SideArticle);