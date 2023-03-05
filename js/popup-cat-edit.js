import { Popup } from "./popup.js";

export class PopupEditCat extends Popup {

    

    constructor(selectorPopup) {
        super(selectorPopup)
    }

    open(catData) {
        const catId = this._popupElement.querySelector('#upd1');
        const catName = this._popupElement.querySelector('#upd2');
        const catUrl = this._popupElement.querySelector('#upd3');
        const catAge = this._popupElement.querySelector('#upd4');
        const catRate = this._popupElement.querySelector('#upd5');
        const catLike = this._popupElement.querySelector('#upd6');
        const catDescription = this._popupElement.querySelector('#upd7');

        catId.value = catData.id;
        catName.value = catData.name;
        catUrl.value = catData.image;
        catAge.value = catData.age;
        catRate.value = catData.rate;
        catLike.checked = catData.favorite;
        catDescription.value = catData.description;
        
        
        
        

        super.open();
    }

    

}