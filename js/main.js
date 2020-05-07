let ms = document.querySelector('#ms').innerHTML;
function stopWatch(){
    ms++;
    if(ms < 10){
        document.getElementById('ms').innerHTML = "0" + ms;
    }else{
        document.getElementById('ms').innerHTML = ms;
    }

    if(ms >= 100){
        let sec = document.getElementById('sec').innerHTML;
        sec++;
        if(sec < 10){
            document.getElementById('sec').innerHTML = "0" + sec;

        }else{
            document.getElementById('sec').innerHTML = sec;
        }
        ms = 0;
        document.getElementById('ms').innerHTML = "0" + ms;
        if(sec >= 60 ){
            let min = document.getElementById('min').innerHTML;
            min++;
            
            if(min < 10 ){
                document.getElementById('min').innerHTML = "0"+min;
            }else{
                document.getElementById('min').innerHTML = min;
            }

            sec = 0;
            document.getElementById('sec').innerHTML = "0" + sec;
        }
    }
        
}

var stop;
function start(){
    stop = setInterval(stopWatch, 10);
}

const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click',stop);


function stop(){
    clearInterval(stop);
}