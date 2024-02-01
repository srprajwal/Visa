var speed=1000;
var a;
a_speed.addEventListener("input",change_speed);
var delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;

function change_speed(){
    a=a_speed.value;
    switch(parseInt(a)){
        case 1: speed=10;
        break;
        case 2: speed=100;
        break;
        case 3: speed=1000;
        break;
        case 4: speed=10000;
        break;
        case 5: speed=100000;
        break; 
    }

    delay_time=10000/(Math.floor(array_size/10)*speed);  
}

function div_update(disp,height,color)
{
    window.setTimeout(function(){
        disp.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algo_btns.length;i++)
        {
            algo_btns[i].classList=[];
            algo_btns[i].classList.add("butt_unselected");

            algo_btns[i].disabled=false;
            a_size.disabled=false;
            a_speed.disabled=false;
            a_create.disabled=false;
        }
    },c_delay+=delay_time);
}