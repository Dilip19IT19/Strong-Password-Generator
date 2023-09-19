let inputBox=document.querySelector("input");
let passwordBtn=document.querySelector(".psd_btn");
let copy_btn=document.querySelector(".input_box button");

passwordBtn.addEventListener("click",function(){

  let Ucase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let Lcase="abcdefghijklmnopqrstuvwxyz";
  let numb="0123456789";
  let sChar="@#$%&*";
  let allChars=(Ucase+Lcase+numb+sChar);
  console.log(allChars)

  let requiredLength=16;

  let password="";

  password+=Ucase.charAt(Math.floor(Math.random()*Ucase.length));
  password+=Lcase.charAt(Math.floor(Math.random()*Lcase.length));
  password+=numb.charAt(Math.floor(Math.random()*numb.length));
  password+=sChar.charAt(Math.floor(Math.random()*sChar.length));

  while(password.length<requiredLength)
  {
    password+=allChars.charAt(Math.floor(Math.random()*allChars.length));
  }

  inputBox.value=password;
  // copy_btn.textContent="Copy Password";
  copy_btn.innerHTML=`<img src="./images/copy.png" />`
  copy_btn.style.backgroundColor=""
  copy_btn.addEventListener("click",function(){

    inputBox.select();
    inputBox.setSelectionRange(0,999999);
    navigator.clipboard.writeText(inputBox.value);
    // copy_btn.textContent="Copied";
    copy_btn.innerHTML=`<img src="./images/copied.png" />`;
    copy_btn.style.backgroundColor="black"
  })

})

