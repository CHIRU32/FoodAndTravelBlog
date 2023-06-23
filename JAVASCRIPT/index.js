var email="arcp@gmail.com"
var pass="1929"
function ver()
{
    var givenemailid=document.getElementById("email").value
    var givenpassword=document.getElementById("pass").value
    if(givenemailid==email && givenpassword==pass)
    {
        document.getElementById("fom").setAttribute("action","../project/HTML/homep.html")
        document.getElementById("but").setAttribute("type","submit")
    }
   else  if(givenemailid!=email && givenpassword==pass)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("pass").style.borderColor="royalblue"
        document.getElementById("home").style.backgroundImage="linear-gradient(70deg,red,pink)"
        document.getElementById("result").innerHTML="Wrong Email Id"
    }
    else  if(givenemailid==email && givenpassword!=pass)
    {
        document.getElementById("pass").style.borderColor="red"
        document.getElementById("email").style.borderColor="royalblue"
        document.getElementById("home").style.backgroundImage="linear-gradient(70deg,pink,red)"
        document.getElementById("result").innerHTML="Wrong password"

    }
    else  
    {
        document.getElementById("pass").style.borderColor="red"
        document.getElementById("email").style.borderColor="red"
        document.getElementById("home").style.backgroundImage="linear-gradient(70deg,red,red)"
        document.getElementById("result").innerHTML="Wrong Email Id and password"

    }
}
function visiblepassword()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","../project/assets/logo/monkey-open-eyes.jpg")
    document.getElementById("visible").style.transform=" rotateY(360deg)"
}
function hidepassword()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","../project/assets/logo/monkey-close-eyes.jpg")
    document.getElementById("visible").style.transform=" rotateY(-360deg)"
}