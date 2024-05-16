rollDice = () => {
    var x = document.querySelector('input[name="option"]:checked').value;
    if ( x == null){
        alert ("Select an option!");
    }else{
        const dice1 = Math.ceil(Math.random()*6);
        const dice1roll = `dice${dice1}.png`;
        document.getElementById('check1').setAttribute('src',dice1roll);
        const dice2 = Math.ceil(Math.random()*6);
        const dice2roll = `dice${dice2}.png`;
        document.getElementById('check2').setAttribute('src',dice2roll);
        if (((dice1+dice2 < 7) && (x =="Less than 7")) || ((dice1+dice2 === 7) && (x =="Equal to 7") )|| ((dice1+dice2 > 7) && (x =="More than 7"))){
            document.querySelector('h1').innerHTML = "You win!"; 
        }else{
            document.querySelector('h1').innerHTML = "You lost!"; 
        }
        if (x=="Less than 7"){
            if (dice1 + dice2 < 7){
                document.querySelector('h1').innerHTML = "YOU WIN!";
            }
            else{
                document.querySelector('h1').innerHTML = "YOU LOST!";
            }
        }else if (x=="Equal to 7"){
            if (dice1 + dice2 == 7){
                document.querySelector('h1').innerHTML = "YOU WIN!";
            }
            else{
                document.querySelector('h1').innerHTML = "YOU LOST!";
            }
        }else{
            if (dice1 + dice2 > 7){
                document.querySelector('h1').innerHTML = "YOU WIN!";
            }
            else{
                document.querySelector('h1').innerHTML = "YOU LOST!";
            }
        }
    }
}