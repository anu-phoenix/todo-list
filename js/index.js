const addbutton = document.getElementById("add");

let count=0;

addbutton.addEventListener('click',function(){
    let task=document.getElementById('dabba').value;
    if(task=="")
    {
        alert(`Task can't be empty...`);
    }
    else
    {
        document.getElementById(`list`).innerHTML+=`<li class="tlist" onmouseover="dlthov(this)" onmouseout="dltout(this)">${task}<span onclick="dlt(this)">Delete</span></li>`;
        document.getElementById(`dabba`).value=``;
        count++;
        document.getElementById(`count`).innerHTML=count;
    }
    document.getElementById('dabba').focus();
});

dabba.addEventListener('keydown',function(event){
    if(event.keyCode===13)
    {
        document.getElementById('add').click();
    }
});

function dlt(a)
{
    a.parentElement.remove();
    count-=1;
    document.getElementById(`count`).innerHTML=count;
}

const clearbt = document.getElementById("cbt");

clearbt.addEventListener('click',function(){
    let b=document.getElementsByClassName('tlist');
    let n=b.length;
    for(let i=0;i<n;i++)
    {
        b[0].remove();
    }
    count=0;
    document.getElementById(`count`).innerHTML=count;
});

function dlthov(c)
{
    let e=c.childNodes;
    console.log(e);
    let f=e[1];
    f.style.display='inline-block';
}

function dltout(c)
{
    let e=c.childNodes;
    console.log(e);
    let f=e[1];
    f.style.display='none';
}
