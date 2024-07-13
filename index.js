function openMenu() {
document.body.classList += " menu--open"
}
function closeMenu() {
document.body.classList.remove('menu--open')
}


function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}

function toggleFaq(button) {
   const hiddenPara = button.nextElementSibling;
   if (hiddenPara.style.display === "none" || hiddenPara.style.display === "") {
     hiddenPara.style.display = "block";
   } else {
     hiddenPara.style.display = "none";
   }
 }
