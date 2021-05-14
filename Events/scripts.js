
// window.addEventListener('DOMContentLoaded',function(){

// const yes=confirm("Subscribe my channel to learn more !");

// if(yes)
// {
// const email=prompt("Enter Your email address ");
// alert(`Hello ${email} Welcome To You On NkSourceGuide`);
// }
// else{
// alert("Your one subscribe can motivate me to upload more :-)");
// }

// })

let email_pattern=/^[A-Za-z0-9][A-Za-z0-9]+@[A-Za-z]{5,}\.[A-Za-z]+[A-Za-z.]*$/;

const email=document.querySelector('#email')
const emailCheckInfo=document.querySelector('#email-check-info');

email.addEventListener('input',(event)=>{
   
    if(!email_pattern.test(event.target.value))
    emailCheckInfo.innerText="Invalid Email"
    else
    emailCheckInfo.innerText="Valid Email :-)"

})


document.querySelector('#change').addEventListener('click',()=>{

const check=document.querySelector('.box').style.backgroundColor==="seagreen"?
            true:false;
 if(check)
 document.querySelector('.box').style.backgroundColor="red"
 else
 document.querySelector('.box').style.backgroundColor="seagreen"       

})


