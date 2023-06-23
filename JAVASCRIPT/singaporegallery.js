var arrayImages=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"]
var i=0;
function header()
{
    if(i>=9)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/singapore/${arrayImages[i]})`
    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../assets/images/singapore/${arrayImages[i]})`
    }
    i++;
    var time=setTimeout(header,2000)
}
function left()
{
    i--;
    if(i<0)
    {
        i=arrayImages.length-1;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/singapore/${arrayImages[i]})`
    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../assets/images/singapore/${arrayImages[i]})`
    }

}
function right()
{
    i++;
    if(i>arrayImages.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../assets/images/singapore/${arrayImages[i]})`

    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../assets/images/singapore/${arrayImages[i]})`
    }

}

var img=document.getElementsByClassName("images");
for(i=0;i<img.length;i++)
{
    img[i].src=`../assets/images/singapore/${i}.jpg`
    img[i].style.width="300px"
    img[i].style.height="200px"
}
function clos()
{
    document.getElementById("big").setAttribute("style","display:none");
}
function openTheImage(img,tit,p)
{   
    document.getElementById("gib").setAttribute("src",`../assets/images/singapore/${img}.jpg`);
    document.getElementById("big").removeAttribute("style");
    document.getElementById("tit").innerHTML=tit;
    document.getElementById("p").innerHTML=p;
}