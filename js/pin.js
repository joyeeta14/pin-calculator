function random() {
    const randomPin = Math.round(Math.random() * 10000);
    const pinString = randomPin + '';
    // console.log(pinString.length);
    if (pinString.length === 4) {
        return randomPin;
    }
    else {
        return random();
    }
}


document.getElementById('pin-generate-btn').addEventListener("click", function () {
    const pinInputBox = document.getElementById('random-pin-box');
    pinInputBox.value = random();

})

document.getElementById('calc-id').addEventListener("click", function (event) {
    const click = event.target.innerText;
    const displayClick = document.getElementById('display-click');
    const previousNum = displayClick.value;

    if (isNaN(click)) {
        if (click === 'C') {
            displayClick.value = '';
        }
        else if (click === '<') {
            const remove = previousNum.split('');
            remove.pop();
          const joinAgain =  remove.join('');
          displayClick.value = joinAgain;

        }
    }
    else {
        const newClicks = previousNum + click;
        displayClick.value = newClicks;
    }

})

document.getElementById('submit-btn-id').addEventListener("click", function(){
    const randomPin = document.getElementById('random-pin-box').value;
    const displayClick = document.getElementById('display-click').value;
    if(randomPin === displayClick){
        document.getElementById('success').style.display = 'block';
        document.getElementById('mistake').style.display = 'none';
    }
    else{
        document.getElementById('mistake').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
})

