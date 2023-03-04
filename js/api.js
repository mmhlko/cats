// https://cats.petiteweb.dev/api/single/mmhlko/show

//GET - получить информацию обо всех котах
//https://cats.petiteweb.dev/api/single/{db}/show
//
//GET - получить массив всех существующих id
//https://cats.petiteweb.dev/api/single/{db}/ids
//
//GET - получить информацию об одном коте по id
//https://cats.petiteweb.dev/api/single/{db}/show/{id}
//
//POST - добавить нового кота (id, name - обязательно!)
//https://cats.petiteweb.dev/api/single/{db}/add
//
//PUT - изменить информацию о коте (запрещено менять id)
//https://cats.petiteweb.dev/api/single/{db}/update/{id}
//
//DELETE - удалить кота
//https://sb-cats.herokuapp.com/api/single/{db}/delete/{id}


const config = {
    baseUrl: 'https://cats.petiteweb.dev/api/single/mmhlko',
    headers: {
        'content-type': 'application/json'
    }

}



class Api {

    #getResponse(res) {
        return res.ok ? res.json() : Promise.reject(Error('ошибка'))
    }
    #baseUrl
    #headers
    constructor(config) {
        this.#baseUrl = config.baseUrl;
        this.#headers = config.headers
    }    
    
    getAllCats() {
        return fetch(`${this.#baseUrl}/show/`)
            //.then(data => console.log(data))
            .then(this.#getResponse)
            .catch(err => console.log('Ошибка', Error(err)))
    }

    getCatsIds() {
        return fetch(`${this.#baseUrl}/ids/`)
            .then(this.#getResponse)
            .catch(err => console.log(Error(err)))
    }

    addNewCat(data) {
       return fetch(`${this.#baseUrl}/add/`, {
        method: 'POST',
        headers: this.#headers,
        body: JSON.stringify(data)
       })
            .then(this.#getResponse)
            .catch(err => console.log(Error(err)))
    }
    updateCatBuId(catId, data) {
        return fetch(`${this.#baseUrl}/update/${catId}`, {
            method: 'PUT',
            headers: this.#headers,
            body: JSON.stringify(data)
        })
             .then(this.#getResponse)
             .catch(err => console.log(Error(err)))
     }
    deleteCat(catId) {
        return fetch(`${this.#baseUrl}/delete/${catId}`, {
            method: 'DELETE',
           })
           .then(this.#getResponse)
           .catch(err => console.log(Error(err)))
    } 

    deleteAllCats() {
        return fetch(`${this.#baseUrl}/ids/`)
            .then(this.#getResponse)
            .then(Ids => Ids.forEach( catId => {
                return fetch(`${this.#baseUrl}/delete/${catId}`, {
                    method: 'DELETE',
                   })
                   .then(this.#getResponse)
                   .catch(err => console.log(Error(err)))
            }               
                    
            ))
            .catch(err => console.log(Error(err)))
    }
}

export const api = new Api(config);

//console.log(api)

/* const addAllCats = () => { //создаем локальный массив с экземплярами класса Cat
    cats.forEach(cat => {
        api.addNewCat(cat)
        .catch(err => console.log(Error(err)))
    })
} 

addAllCats();  */

//api.addNewCat({name: 'Мурка', id: 11, age: 11, description: 'Мой Муреночек'})
//.then(data => console.log(data))

//api.updateCatBuId(2, {name: 'Пусинка'})
//.then(data => console.log(data))

//api.deleteCat(12)
//.then(data => console.log(data))

//api.getAllCats()
//.then(data => console.log(data))

//api.getCatsIds()
//.then(data => console.log(data))

//api.deleteAllCats()
//.then(data => console.log(data))
