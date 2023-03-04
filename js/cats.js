class Cat {
    constructor(id, name='no name', age=0, image='', rate=0, favorite=false, description='') {
        this.id = id;
        this.name = name;
        this.age = age;
        this.image = image;
        this.rate = rate;
        this.favorite = favorite;
        this.description = description;
    }
}

export let cats = [];

const createCat = (id, itsName, age, image, rate, favorite, description) => {
    let cat = new Cat(id, itsName, age, image, rate, favorite, description)
    cats.push(cat)
    
}

createCat(1, 'Барсик', 10, 'https://images.unsplash.com/photo-1456677698485-dceeec22c7fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80', 0, false, 'Пушистый');
createCat(2, 'Муська', 4, 'https://grandgames.net/puzzle/source/eti_glaza_naprotiv.jpg', 0, false, 'Ласковая');
createCat(3, 'Васька', 5, 'https://desktopmania.ru/pics/00/98/96/DesktopMania.ru-98969-300x187.jpg', 0, false, 'Хулиган');
createCat(4, 'Семен', 1, 'https://images.unsplash.com/photo-1556799483-8a3c48110b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 0, false, 'Блудливый');
createCat(5, 'Соня', 8, 'https://plafonknauf.my.id/wp-content/uploads/2022/11/67e5e258f7c982e6154271b92aa5a65f-1024x640.jpg', 0, false, 'Белая');
createCat(6, 'Бублик', 6, 'https://desktopmania.ru/pics/00/72/85/DesktopMania.ru-72852-300x187.jpg', 0, false, 'Большой и круглый');
createCat(7, 'Петька', 3, 'https://bryansktoday.ru/uploads/common/57f72c0eb7536934_S.jpg', 0, false, 'Друг Васьки');
createCat(8, 'Моня', 1, 'https://images.unsplash.com/photo-1456171668946-36ce1bab08a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 0, false, 'Молчаливый');
createCat(9, 'Гендальф', 20, 'https://i.pinimg.com/originals/2f/9f/0e/2f9f0eed414e6c8887eb98d873e14ca5.jpg', 0, false, 'Старый');
createCat(10, 'Фродо', 14, 'https://sun9-47.userapi.com/impf/c845020/v845020982/c554/gUplj2vA65I.jpg?size=320x219&quality=96&sign=c85139b81030552e81be3d63366826af&c_uniq_tag=zl7qrrQtNFozOQPUEaldYPw7Yxux8WmB0cvqrJCHr3s&type=album', 0, false, 'маленький');

//console.log(cats)