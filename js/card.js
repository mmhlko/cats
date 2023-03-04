export class Card {
    
    #selectorTemplate;
    #element;
    #data;
    #handleOpenCatImage;

    #getTemplate() {
        const template = document.querySelector(this.#selectorTemplate).content.querySelector('.card')
        
        return template
    }

    constructor(data, selectorTemplate, handleOpenCatImage) {
        this.#data = data;
        this.#selectorTemplate = selectorTemplate;
        this.#handleOpenCatImage = handleOpenCatImage;
    }

    getCardElement() {
        this.#element = this.#getTemplate().cloneNode(true);
        const cardTitle = this.#element.querySelector('.card__name');
        const cardImage = this.#element.querySelector('.card__image');
        const cardlike = this.#element.querySelector('.card__like');

       cardTitle.innerText = this.#data.name;
       cardImage.src = this.#data.image;
       if (!this.#data.favorite) {
        cardlike.remove();
       }
       cardlike.value = this.#data.favorite;

       cardImage.addEventListener('click', () => {
        this.#handleOpenCatImage(this.#data.image);
       })
        //наполнить карточку данными из бд
        return this.#element
    }
}