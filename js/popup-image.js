import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup)
    }
    open(catData) {
        const imagePopup = this._popupElement.querySelector('.popup__image');
        const catId = this._popupElement.querySelector('.cat__info-id');
        const catName = this._popupElement.querySelector('.cat__info-name');
        const catUrl = this._popupElement.querySelector('.cat__info-age');
        const catAge = this._popupElement.querySelector('.cat__info-age');
        const catRate = this._popupElement.querySelector('.cat__info-rate');
        const catLike = this._popupElement.querySelector('.cat__info-favorite');
        const catDescription = this._popupElement.querySelector('.cat__info-description');


        imagePopup.src = catData.image;
        catId.textContent = catData.id;
        catName.textContent = catData.name;
        //catUrl.textContent = `ID: ${catData.id}`;
        catAge.textContent = catData.age;
        catRate.textContent = catData.rate;
        catLike.textContent = catData.favorite ? 'Да' : "Нет";
        catDescription.textContent = catData.description;

        super.open();
    }
}