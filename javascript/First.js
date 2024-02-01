var a_size=document.getElementById('a_size');
var a_speed=document.getElementById("a_speed");
var a_create=document.getElementById("a_create");
var algo_btns=document.querySelectorAll(".head3 button");
var array_size=a_size.value;

var ele=[];
var ele_sizes=[];
var margin_size;
var disp=document.getElementById("container2");
disp.style="flex-direction:row;"

a_size.addEventListener("input",update_array_size);
a_create.addEventListener("click",create_new_array);

function update_array_size(){
    array_size=a_size.value;
    create_new_array();
}

window.onload=update_array_size();

function create_new_array(){
    disp.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        ele_sizes[i]=Math.floor(Math.random()*0.5*(a_size.max-a_size.min))+10;
        ele[i]=document.createElement("div");
        disp.appendChild(ele[i]);
        margin_size=0.1;
        ele[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (ele_sizes[i]) + "%;";
    }

}
for(var i=0;i<algo_btns.length;i++)
{
    algo_btns[i].addEventListener("click",exealgo);
}

function disable_btns()
{
    for(var i=0;i<algo_btns.length;i++)
    {
        algo_btns[i].classList=[];
        algo_btns[i].classList.add("butt_locked");

        algo_btns[i].disabled=true;
        a_size.disabled=true;
        a_speed.disabled=true;
        a_create.disabled=true;
    }
} 

function exealgo(){
    disable_btns()
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "BUBBLE SORT":Bubble();
                        break;
        case "SELECTION SORT":Selection_sort();
                        break;
        case "INSERTION SORT":Insertion();
                        break;
        case "MERGE SORT":Merge();
                        break;
        case "QUICK SORT":Quick();
                        break;
        case "HEAP SORT":Heap();
                        break;
    }
}
