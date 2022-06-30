// Homepage
//Javacript for responsive navigation menu
const navigation = document.querySelector(".navigation");
  
//Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});


// Contact US
function clicked() {
    alert('Your form has been submited successfuly! We will get back to you shortly.');
  }


// Login/Register
const loginText = document.querySelector(".title-text .login");
       const loginForm = document.querySelector("form.login");
       const loginBtn = document.querySelector("label.login");
       const registerBtn = document.querySelector("label.register");
       const registerLink = document.querySelector("form .register-link a");
       const loginLink = document.querySelector("form .login-link a");
       registerBtn.onclick = (()=>{
         loginForm.style.marginLeft = "-50%";
         loginText.style.marginLeft = "-50%";
       });
       loginBtn.onclick = (()=>{
         loginForm.style.marginLeft = "0%";
         loginText.style.marginLeft = "0%";
       });
       registerLink.onclick = (()=>{
        registerBtn.click();
         return false;
       });
       loginLink.onclick = (()=>{
         loginBtn.click();
         return false;
       });

