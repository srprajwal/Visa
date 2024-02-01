var pos;
function Selection_sort(){
    c_delay=0;

    for(let i=0;i<array_size;i++)
    {
        div_update(ele[i],ele_sizes[i],"black");
        pos=i;
        for(let j=i+1;j<array_size;j++)
        {
            div_update(ele[j],ele_sizes[j],"red");
            if(ele_sizes[j]<ele_sizes[pos])
            {
                if(pos!=i)
                {
                    div_update(ele[pos],ele_sizes[pos],"grey");
                }
                pos=j;
                div_update(ele[pos],ele_sizes[pos],"black");
            }
            else{
                div_update(ele[j],ele_sizes[j],"grey");
            }
        }
        if(pos!=i)
        {
            var temp=ele_sizes[i];
            ele_sizes[i]=ele_sizes[pos];
            ele_sizes[pos]=temp;

            div_update(ele[pos],ele_sizes[pos],"black");
            div_update(ele[i],ele_sizes[i],"black");
            div_update(ele[pos],ele_sizes[pos],"grey");
        }
        div_update(ele[i],ele_sizes[i],"orange");
    }
    div_update(ele[i],ele_sizes[i],"orange"); 
}
