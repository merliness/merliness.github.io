let siteAnswer, designAnswer, adaptiveAnswer;

let calculator = {
	price: [
           [300,500,1000],
           [500, 1000, 5000],
           [1000,3000,7000]
           ], 
	days: [
           [1,3,5],
           [1, 2, 3],
           [4,7,10]
           ],
    run(site, design, adaptive){
        let sum = calculator.price[0][site-1] + calculator.price[1][design-1] + calculator.price[2][adaptive-1];
        let time = calculator.days[0][site-1] + calculator.days[1][design-1] + calculator.days[2][adaptive-1];
        alert("Стоимость: "+ sum +"\n Сроки: "+ time);
        

	}
}
function getAnswers(){
    siteAnswer = prompt("Введите тип сайта: \n1 - Визитка, \n2 - Корпоративный, \n3 - Интернет-магазин");
    if(siteAnswer != 1 && siteAnswer != 2 && siteAnswer != 3){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    designAnswer = prompt("Выберите дизайн: \n1 - Шаблонный, \n2 - Уникальный, \n3 - WOW-Дизайн");
     if(designAnswer != 1 && designAnswer != 2 && designAnswer != 3){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    adaptiveAnswer = prompt("Адаптивность: \n1 - Только ПК, \n2 - Только Мобильная версия, \n3 - ПК + Мобильный");
     if(adaptiveAnswer != 1 && adaptiveAnswer != 2 && adaptiveAnswer != 3){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    calculator.run(siteAnswer, designAnswer, adaptiveAnswer);
}

getAnswers();




let  price = {
    feature1: 0,
    feature2: 0,
    feature3: 0,
    getFeatures: function () {
        this.feature1 = prompt("Характеристика 1 1) Вариант 1 2) Вариант 2 3) Вариант 3");
        this.feature2 = prompt("Характеристика 2 1) Вариант 1 2) Вариант 2 3) Вариант 3");
        this.feature3 = prompt("Характеристика 3 1) Вариант 1 2) Вариант 2 3) Вариант 3");
    },
    prices1: [[11, 12, 13],[21, 22, 23],[31, 32, 33]],
    prices2: [1, 2, 3],
    totalPrice: function () {
        this.getFeatures();
        return this.prices1[0][this.feature1-1] + this.prices1[1][this.feature2-1] + this.prices1[2][this.feature3-1];
    }
}

alert("Итоговая цена = " + price.totalPrice());

