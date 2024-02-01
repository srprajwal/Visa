
function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(ele[i],ele_sizes[i],"black");
    div_update(ele[j],ele_sizes[j],"black");

    var temp=ele_sizes[i];
    ele_sizes[i]=ele_sizes[j];
    ele_sizes[j]=temp;

    div_update(ele[i],ele_sizes[i],"black");
    div_update(ele[j],ele_sizes[j],"black");

    div_update(ele[i],ele_sizes[i],"grey");
    div_update(ele[j],ele_sizes[j],"grey");
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && ele_sizes[l]>ele_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(ele[largest],ele_sizes[largest],"grey");
        }

        largest=l;

        div_update(ele[largest],ele_sizes[largest],"black");
    }

    if(r<n && ele_sizes[r]>ele_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(ele[largest],ele_sizes[largest],"grey");
        }

        largest=r;

        div_update(ele[largest],ele_sizes[largest],"black");
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(ele[i],ele_sizes[i],"green");
        div_update(ele[i],ele_sizes[i],"red");

        max_heapify(i,0);

        div_update(ele[i],ele_sizes[i],"grey");
        div_update(ele[i],ele_sizes[i],"orange");
    }
    div_update(ele[i],ele_sizes[i],"orange");
}
