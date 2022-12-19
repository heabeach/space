    // Variables for blastoffTimer
    var count = 50;
    
    var timer = 0;

    var loop = count;
    
// Looping for timer
function theFinalCountdown(){
    while(loop > 0){
        setTimeout(function(){count -= 5; document.getElementById("display").innerHTML = " The Time Is: " + "00:00:" + count;
            if(count == 25) {
                document.getElementById("display").innerHTML = " Half Way Warning!: " + "00:00:" + count;
            }
            else if (count < 25) {
                document.getElementById("display").innerHTML = " The Time Is: " + "00:00:" + count;
            }
            
            if (count < 10){
                document.getElementById("display").innerHTML = " The Time Is: " + "00:00:0" + count;
            }
            
            if(count == 0){
                document.getElementById("display").innerHTML = "WE HAVE BLAST OFF!!";
                count = count + 5;
                location.replace("tablePage.html");
            }
        }, timer += 5000); loop -= 5;
     
    }
}