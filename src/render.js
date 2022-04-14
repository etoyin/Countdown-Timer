let blinkFxn, timeToSeconds, timeToSecondsNow, hourInput, minuteInput, secondInput, time, state=true, blink=true;



const countdownFxn = () => {
    timeToSecondsNow = hourInput * 3600 + minuteInput * 60 + secondInput;
    console.log(timeToSecondsNow)

    if(timeToSecondsNow <= (timeToSeconds * 0.2)){
        document.getElementById('timer').style.color = "#c08518";
    }
    if(timeToSecondsNow <= 0){
        document.getElementById('timer').style.color = "red";
    }
    if(hourInput > 0){
        document.getElementById('hour').innerText = (hourInput < 10) ? "0"+ hourInput : hourInput;
        if(minuteInput == 0 && secondInput == 0){
            minuteInput = 60;
            hourInput = hourInput - 1;
            document.getElementById('hour').innerText = (hourInput < 10) ? "0"+ hourInput : hourInput;
            document.getElementById('minute').innerText = (minuteInput < 10) ? "0"+ minuteInput : minuteInput;
        }
        // else{
        //     if(secondInput == 0){
        //         minuteInput = minuteInput - 1;
        //         secondInput = 59;
        //         document.getElementById('second').innerText = (secondInput < 10) ? "0" + secondInput : secondInput;
        //         document.getElementById('minute').innerText = (minuteInput < 10) ? "0" + minuteInput : minuteInput;
        //     }
        //     else{
        //         secondInput = secondInput - 1
        //         document.getElementById('second').innerText = (secondInput < 10) ? "0" + secondInput : secondInput;
        //     }
        // }
        
    }
    
    
    if(hourInput <= 0 && minuteInput <= 0 && secondInput <= 0){

        if(secondInput == -59){
            secondInput = 0;
            minuteInput = minuteInput - 1;
            let absoluteSec = -1 * secondInput;
            let absoluteMin = -1 * minuteInput;
            document.getElementById('second').innerText = (secondInput > -10) ? "0" + absoluteSec : absoluteSec;
            
            document.getElementById('minute').innerText = (minuteInput > -10) ? "-0" + absoluteMin : "-"+ absoluteMin;
        }
        else{
            secondInput = secondInput - 1;
            let absoluteSec = -1 * secondInput;
            if(minuteInput > -1){
                document.getElementById('minute').innerText =  "0"+ minuteInput;
                
                document.getElementById('second').innerText = (secondInput > -10) ? "-0" + absoluteSec : "-"+ absoluteSec;
            }
            else{
                
                document.getElementById('second').innerText = (secondInput > -10) ? "0" + absoluteSec : absoluteSec;

            }
        }
    }
    else{
        // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkk");

        if(secondInput == 0){
            minuteInput = minuteInput - 1;
            secondInput = 59;
            document.getElementById('second').innerText = (secondInput < 10) ? "0" + secondInput : secondInput;
            document.getElementById('minute').innerText = (minuteInput < 10) ? "0" + minuteInput : minuteInput;
        }
        else{
            secondInput = secondInput - 1
            document.getElementById('second').innerText = (secondInput < 10) ? "0" + secondInput : secondInput;
            document.getElementById('minute').innerText = (minuteInput < 10) ? "0" + minuteInput : minuteInput;

        }

        
    }

};

document.getElementById('pause').innerText = (state == false) ? "Continue" : "Pause"

document.getElementById('pause').addEventListener('click', () => {
    state = !state;
    // alert(state);
    (!state) ? clearInterval(time) : time = setInterval(countdownFxn, 1000);
    document.getElementById('pause').innerText = (state == false) ? "Continue" : "Pause"
})

document.getElementById("start").addEventListener('click', () => {

    clearInterval(blinkFxn);
    blinkFxn = setInterval(() => {
        blink = !blink;
        if(timeToSecondsNow <= (timeToSeconds * 0.2)){
            if(blink){
            // alert("ujuju")
                document.getElementById('timer').style.visibility = "hidden";
            }
            else{
                document.getElementById('timer').style.visibility = "visible";
            }
        }
        
    }, 500);

    state = true;
    document.getElementById('pause').innerText = (state == false) ? "Continue" : "Pause"
    clearInterval(time);
    document.getElementById('timer').style.color = "#16f316";
    hourInput =document.getElementById("hourInput").value;
    minuteInput =document.getElementById("minuteInput").value;
    secondInput =document.getElementById("secondInput").value;

    hourInput = (hourInput == "") ? 0 : Number(hourInput);
    minuteInput = (minuteInput == "") ? 0 : Number(minuteInput);
    secondInput = (secondInput == "") ? 0 : Number(secondInput);

    timeToSeconds = (hourInput * 3600) + (minuteInput * 60) + (secondInput);

    console.log(timeToSeconds)
    if(hourInput < 0 || (minuteInput < 0 || minuteInput > 59 ) || (secondInput < 0 || secondInput > 59) ){
        alert("Input not within range!");
        hourInput = minuteInput = secondInput = 0
    }else{
        
        time = setInterval(countdownFxn, 1000);
        
    }
})

document.getElementById("clear").addEventListener('click', () => {
    // window.reload();
    hourInput = document.getElementById("hourInput").value = ""
    minuteInput =document.getElementById("minuteInput").value = "";
    secondInput =document.getElementById("secondInput").value = "";

    document.getElementById("second").innerText = "00"
    document.getElementById("minute").innerText = "00"
    document.getElementById("hour").innerText = "00"
    document.getElementById('timer').style.visibility = "visible";
    document.getElementById('timer').style.color = "#16f316";

    clearInterval(blinkFxn);
    blink = false;
    clearInterval(time);
})