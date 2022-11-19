let x = 0;
setInterval(function()
{
    if(x == 0)
    {
        document.getElementById("img3").style.display = "none";
        document.getElementById("img2").style.display = "block" ;   
        document.getElementById("img1").style.display = "none";
       
       
      console.log(x);
        x = 1;
    }
    else if(x == 1)
    {
        document.getElementById("img3").style.display = "block";
        document.getElementById("img2").style.display = "none" ;   
        document.getElementById("img1").style.display = "none";
           
           
          console.log(x);
            x = 2;
        }
        else if(x == 2)
        {
        document.getElementById("img3").style.display = "none";
        document.getElementById("img2").style.display = "none" ;   
        document.getElementById("img1").style.display = "block";
           
           
          console.log(x);
            x = 0;
        }
}, 5000)

function mostrarmenu()
{
  
}