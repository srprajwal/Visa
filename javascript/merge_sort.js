
function Merge()
{
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=ele_sizes[q++];
            div_update(ele[q-1],ele_sizes[q-1],"black");
        }
        else if(q>end)
        {
            Arr[k++]=ele_sizes[p++];
            div_update(ele[p-1],ele_sizes[p-1],"black");
        }
        else if(ele_sizes[p]<ele_sizes[q])
        {
            Arr[k++]=ele_sizes[p++];
            div_update(ele[p-1],ele_sizes[p-1],"black");
        }
        else
        {
            Arr[k++]=ele_sizes[q++];
            div_update(ele[q-1],ele_sizes[q-1],"black");
        }
    }

    for(var t=0;t<k;t++)
    {
        ele_sizes[start++]=Arr[t];
        div_update(ele[start-1],ele_sizes[start-1],"orange");
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(ele[mid],ele_sizes[mid],"red");

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
