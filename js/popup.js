export class Popup {
    
    #selectorPopup
    #handleEscUp = (event) => {
        if (event.key === 'Escape') this.close()
    }
    constructor(selectorPopup) {
        this._popupElement = document.querySelector(`.${selectorPopup}`)
        this.#selectorPopup = selectorPopup;
    }
    open() {
        this._popupElement.classList.add(`popup-active`)
        document.addEventListener('keyup', this.#handleEscUp)
    }
    close() {
        this._popupElement.classList.remove(`popup-active`)
        document.removeEventListener('keyup', this.#handleEscUp)
    }
    setEventListener() {
        this._popupElement.addEventListener('mousedown', event => {
            if (event.target.classList.contains(this.#selectorPopup) || Boolean(event.target.closest('.popup__close'))) {
                this.close();

            }
        })
    }
}

