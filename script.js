var hour = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;


let start = () => {
    timer = true;
    stopWatch();
}

let stop = () => {
    timer = false;
}

let reset = () => {
        document.getElementById("count").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        timer = false;
}

let stopWatch = () =>{
    if(timer == true)
    {
        count ++;

        if(count == 100)
        {
            sec ++;
            count = 0;
        }

        if(sec == 60)
        {
            min ++;
            sec = 0;
        }

        if(min == 60)
        {
            hour ++;
            min = 0;
            sec = 0;
        }

        var hrStr = hour;
        var secStr = sec;
        var minStr = min;
        var countStr = count;

        if(hour < 10)
        {
            hrStr = "0" + hrStr;
        }

        if(min < 10)
        {
            minStr = "0" + minStr;
        }

        if(sec < 10)
        {
            secStr = "0" + secStr;
        }

        if(count < 10)
        {
            countStr = "0" + countStr;
        }

        document.getElementById("count").innerHTML = countStr;
        document.getElementById("min").innerHTML = minStr;
        document.getElementById("hour").innerHTML = hrStr;
        document.getElementById("sec").innerHTML = secStr;
        setTimeout("stopWatch()", 10);
    }
}