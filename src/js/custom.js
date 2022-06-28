let siteAnswer, designAnswer, adaptiveAnswer;
const saitIpe = document.querySelector('.tape_sait');
const saitDis = document.querySelector('.disaing');
const saitAd = document.querySelector('.adaptiviti');
const options = document.querySelectorAll('option');
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
        $('#summit').html(String(sum));
        $('#timer').html(String(time));
         console.log(sum);
         console.log(time);

	}
}
function getAnswers(){
    siteAnswer = saitIpe.value ;
    if(siteAnswer != 1 && siteAnswer != 2 && siteAnswer != 3){
        getAnswers();
        return;
    }
    designAnswer = saitDis.value ;
     if(designAnswer != 1 && designAnswer != 2 && designAnswer != 3){
        getAnswers();
        return;
    }
    adaptiveAnswer = saitAd.value;
     if(adaptiveAnswer != 1 && adaptiveAnswer != 2 && adaptiveAnswer != 3){
        getAnswers();
        return;
    }
    calculator.run(siteAnswer, designAnswer, adaptiveAnswer);
}

getAnswers();

$('select').change(function(){
    getAnswers();
});




