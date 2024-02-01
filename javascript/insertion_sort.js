
function Insertion(){
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(ele[j],ele_sizes[j],"indigo");

        var key= ele_sizes[j];
        var i=j-1;
        while(i>=0 && ele_sizes[i]>key)
        {
            div_update(ele[i],ele_sizes[i],"black");
            div_update(ele[i+1],ele_sizes[i+1],"black");

            ele_sizes[i+1]=ele_sizes[i];

            div_update(ele[i],ele_sizes[i],"black");
            div_update(ele[i+1],ele_sizes[i+1],"black");
    
            div_update(ele[i],ele_sizes[i],"grey");
            if(i==(j-1))
            {
                div_update(ele[i+1],ele_sizes[i+1],"red");
            }
            else
            {
                div_update(ele[i+1],ele_sizes[i+1],"grey");
            }
            i-=1;
        }
        ele_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(ele[t],ele_sizes[t],"orange");
        }
    }
    div_update(ele[j-1],ele_sizes[j-1],"orange");

    enable_buttons();
}
