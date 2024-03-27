function calculate(btn) {


    let buttonvalue = btn.innerHTML;
    let answervalue = document.getElementById("answer").innerHTML;
    let gamosvalue = document.getElementById("gamosaxuleba").innerHTML;
    console.log(buttonvalue, gamosvalue, answervalue);



    if (answervalue == '0') {
        document.getElementById("answer").innerHTML = "";
    }
    if (answervalue == '0') {
        document.getElementById("gamosaxuleba").innerHTML = "";
    }
    document.getElementById("answer").innerHTML += buttonvalue;
    let answerlenght = document.getElementById("answer").innerHTML.length;


    document.getElementById("gamosaxuleba").innerHTML += buttonvalue;
    if (answerlenght >= 15) {

    }

    console.log(answerlenght);

    if (answerlenght >= 15) {
        let gilakebi = document.querySelectorAll(".calculate");
        console.log(gilakebi);
        gilakebi.forEach(jondo => {
            jondo.removeAttribute("onclick");
            console.log(jondo);
            
        });
    
    console.log(answerlenght);
}
}
