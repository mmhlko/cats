import { Card } from "./card.js";
import { PopupWithImage } from "./popup-image.js";
import { Popup } from "./popup.js";
import { api } from "./api.js";


const cardContainer = document.querySelector('.cards');
const btnOpenPopup = document.querySelector('.add-new-cat');
const btnLogin = document.querySelector('#login');
const formCatAdd = document.querySelector('#popup-form-add');
const formAuthLogin = document.querySelector('#popup-form-login');
const isAuth = Cookies.get('email');
const MAX_LIVE_STORAGE = 10;

const popupAdd = new Popup('popup-add');
const popupCatImage = new PopupWithImage('popup-cat-image');
const popupLogin = new Popup('popup-login')

function serializeForm(elements) { //собирает данные из массива формы для добавления карточки
    const formData = {};

    elements.forEach(input => {
        if (input.type === 'submit' || input.type === 'button') return //нам нужны только инпуты ввода данных, а на этих игнор
        if (input.type === 'checkbox') {
            formData[input.name] = input.checked; //добавляет в инпут чека true или false
        }
        if (input.type === 'radio' && input.checked) {

            formData[input.name] = input.value; //добавляет в инпут чека true или false
        }
        if (input.type !== 'checkbox' && input.type !== 'radio') { //добавляет в formData имя инпута и его значение
            formData[input.name] = input.value;
        }


    })


    return formData;
}

function handleFromAddCat(e) {
    e.preventDefault();
    const elementsFormCat = [...formCatAdd.elements]; //собирает массив из всех элементов внутри формы
    const formData = serializeForm(elementsFormCat); //а потом достает из него то, что нужно в функции serializeForm

    if (formData.action === 'add') {
        delete formData.action;
        api.addNewCat(formData) //при нажатии ОТПРАВИТЬ добавляет кота в БД
            .then(data => {
                alert(JSON.stringify(data));
                
                createCard(formData);
                updateLocalStorage(formData, {type: 'ADD_CAT'})
            })
            .catch(err => console.log(Error(err)))
    }

    if (formData.action === 'change') {
        delete formData.action;
        api.updateCatBuId(formData.id, formData)
            .then(data => {
                updateLocalStorage(formData, {type: 'ALL_CATS'})
                alert(JSON.stringify(data))}
                )
            .catch(err => console.log(Error(err)))
    }
    if (formData.action === 'delete') {
        delete formData.action;
        api.deleteCat(formData.id)
            .then(data => {
                updateLocalStorage(formData, {type: 'ALL_CATS'})
                alert(JSON.stringify(data))
            })
            .catch(err => console.log(Error(err)))
    }

    popupAdd.close();


}

function handleOpenCatImage(dataSrc) { //открывает попап с картинкой кота
    popupCatImage.open(dataSrc)
}

function handleFromLogin(e) {
    e.preventDefault();
    const elementsFromLogin = [...formAuthLogin.elements]; //собирает массив из всех элементов внутри формы
    const formData = serializeForm(elementsFromLogin); //а потом достает из него то, что нужно в функции serializeForm

    Cookies.set('email', formData.email);
    btnOpenPopup.classList.remove('hidden')
    popupLogin.close();

}

function setDataRefresh(minutes, key) {
    const setTime = new Date(new Date().getTime() + minutes*60000);
    localStorage.setItem(key, setTime)

    return setTime
}

function updateLocalStorage(data, action) { // {type: 'ADD_CAT'} {type: 'ALL_CATS'}
    const oldStorage = JSON.parse(localStorage.getItem('cats'));

    switch (action.type) {
        case 'ADD_CAT':
            oldStorage.push(data);
            console.log(oldStorage);
            localStorage.setItem('cats', JSON.stringify(oldStorage))
            return;
        case 'ALL_CATS':
            setDataRefresh(MAX_LIVE_STORAGE, 'catsRefresh')
            localStorage.setItem('cats', JSON.stringify(data))
            return;
        default:
            break;
    }
}

function checkLocalStorage() {
    const localData = JSON.parse(localStorage.getItem('cats'));
    const getTimeExpires = localStorage.getItem('catsRefresh')

    if (localData && localData.length && new Date() < new Date(getTimeExpires)) {
        localData.forEach(cat => {
            createCard(cat);
        });
    } else {
        api.getAllCats() //рендерит всех котов из бд апи
            .then(data => {
                data.forEach(cat => {
                    createCard(cat);
                });
                
                updateLocalStorage(data, {type: 'ALL_CATS'})
            })
            .catch(err => console.log(Error(err)))
    }
}

function createCard(cat) { //функция добавления карточки с котиком в дом

    const newCardElement = new Card(cat, '#card-template', handleOpenCatImage);
    cardContainer.prepend(newCardElement.getCardElement())
}

formCatAdd.addEventListener('submit', handleFromAddCat) //окно с попапом
formAuthLogin.addEventListener('submit', handleFromLogin)
btnOpenPopup.addEventListener('click', (event) => {
    event.preventDefault();
    popupAdd.open();
})

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    popupLogin.open();
})




//document.cookie = 'name=maxim; samesite=strict; max-age=360';
//document.cookie = 'email=maximmhl@mail.ru; samesite=strict; max-age=360';





if (!isAuth) {
    popupLogin.open();
    btnOpenPopup.classList.add('hidden')
} else {
    btnLogin.classList.add('hidden')
}





popupAdd.setEventListener();
popupCatImage.setEventListener();
popupLogin.setEventListener();
checkLocalStorage();



