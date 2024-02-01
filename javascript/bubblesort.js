
function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(ele[j],ele_sizes[j],"indigo");

            if(ele_sizes[j]>ele_sizes[j+1])
            {
                div_update(ele[j],ele_sizes[j], "black");
                div_update(ele[j+1],ele_sizes[j+1], "black");

                var temp=ele_sizes[j];
                ele_sizes[j]=ele_sizes[j+1];
                ele_sizes[j+1]=temp;

                div_update(ele[j],ele_sizes[j], "black");
                div_update(ele[j+1],ele_sizes[j+1], "red");
            }
            div_update(ele[j],ele_sizes[j], "grey");
        }
        div_update(ele[j],ele_sizes[j], "orange");
    }
    div_update(ele[0],ele_sizes[0], "orange");

    enable_buttons();
}