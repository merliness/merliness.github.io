let siteAnswer, designAnswer, adaptiveAnswer;

const options = document.querySelectorAll('option');
let calculator = {
	price: [
           [8000,12000,20000],
           [2000, 4000, 8000],
           [2000,3000,7000]
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
$('body').on('input','#scid', function(){
	this.value = this.value.replace(/[^a-z\s#]/gi, '',);
});


$('select').change(function(){
    getAnswers();
});


function getAnswers(){
    siteAnswer = $('.tape_sait').val();
    designAnswer = $('.disaing').val();
    adaptiveAnswer = $('.adaptiviti').val();
    calculator.run(siteAnswer, designAnswer, adaptiveAnswer);
     $('#scid').change(function(){
        if ($('#scid').context = $('.btn').context ){
         $('#summit') = String((Number($('#summit')) * 0.2));
        }
    });
};

getAnswers();





