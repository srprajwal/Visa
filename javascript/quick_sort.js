
function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = ele_sizes[start] ;
    div_update(ele[start],ele_sizes[start],"red");
        for(var j =start + 1; j <= end ; j++ )
        {
            
            if (ele_sizes[ j ] < piv)
            {
                div_update(ele[j],ele_sizes[j],"red");

                div_update(ele[i],ele_sizes[i],"black");
                div_update(ele[j],ele_sizes[j],"black");

                var temp=ele_sizes[i];
                ele_sizes[i]=ele_sizes[j];
                ele_sizes[j]=temp;

                div_update(ele[i],ele_sizes[i],"black");
                div_update(ele[j],ele_sizes[j],"black");

                div_update(ele[i],ele_sizes[i],"grey");
                div_update(ele[j],ele_sizes[j],"grey");

                i += 1;
            }
    }
    div_update(ele[start],ele_sizes[start],"black");
    div_update(ele[i-1],ele_sizes[i-1],"black");
    
    var temp=ele_sizes[start];
    ele_sizes[start]=ele_sizes[i-1];
    ele_sizes[i-1]=temp;

    div_update(ele[start],ele_sizes[start],"black");
    div_update(ele[i-1],ele_sizes[i-1],"black");

    for(var t=start;t<=i;t++)
    {
        div_update(ele[t],ele_sizes[t],"orange");
    }

    return i-1;
}

function quick_sort (start, end )
{
    if( start < end )
    {
    
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);
        quick_sort (piv_pos +1, end) ;
    }
 }
