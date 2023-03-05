export class Card {
    
    #selectorTemplate;
    #element;
    #data;
    #handleOpenCatImage;    
    #handleOpenCatEdit;
    #handleDeleteCat;

    #getTemplate() {
        const template = document.querySelector(this.#selectorTemplate).content.querySelector('.card')
        
        return template
    }

    constructor(data, selectorTemplate, handleOpenCatImage, handleOpenCatEdit, handleDeleteCat) {
        this.#data = data;
        this.#selectorTemplate = selectorTemplate;
        this.#handleOpenCatImage = handleOpenCatImage;
        this.#handleOpenCatEdit = handleOpenCatEdit;
        this.#handleDeleteCat = handleDeleteCat;

    }

    getCardElement() {
        this.#element = this.#getTemplate().cloneNode(true);
        const cardTitle = this.#element.querySelector('.card__name');
        const cardImage = this.#element.querySelector('.card__image');
        const cardlike = this.#element.querySelector('.card__like');
        const cardEditBtn = this.#element.querySelector('.edit__btn');
        const cardDeleteBtn = this.#element.querySelector('.delete__btn');
        const cardInfoBtn = this.#element.querySelector('.card__link');
       cardTitle.innerText = this.#data.name;
       cardImage.src = this.#data.image;
/*        if (!this.#data.favorite) {
        cardlike.remove();
       } */
       cardlike.value = this.#data.favorite;

       cardImage.addEventListener('click', () => {
        document.querySelector('.catInfo').classList.add('hidden');
        this.#handleOpenCatImage(this.#data);

       })

       cardInfoBtn.addEventListener('click', () => {
        document.querySelector('.catInfo').classList.remove('hidden');
        this.#handleOpenCatImage(this.#data);
       })

       cardEditBtn.addEventListener('click', () => {
        this.#data.action = 'change';        
        this.#handleOpenCatEdit(this.#data)        
       })

       cardDeleteBtn.addEventListener('click', () => {
        this.#data.action = 'delete';       
        this.#element.remove();
        this.#handleDeleteCat(this.#data)        
       })



        //наполнить карточку данными из бд
        return this.#element
    }


}