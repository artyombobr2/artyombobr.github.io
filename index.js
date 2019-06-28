document.addEventListener("DOMContentLoaded", function(event) {
   setInterval(()=> {
       document.querySelector('.counter__number').innerHTML = 5.14 + new Date() / 10000000000000000;
   }, 100)
});
