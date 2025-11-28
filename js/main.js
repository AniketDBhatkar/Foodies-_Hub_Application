  
  // counter Design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  // Calling counters
  counter("count1", 0, 1287, 3000);
  counter("count2", 0, 3237, 3000);
  counter("count3", 0, 1687, 3000);
  counter("count4", 0, 2287, 3000); // corrected from count3 to count4
});

// Active Navbar

let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
  if(document.documentElement.scrollTop >20)
  {
    nav.classList.add("scroll-on");
  }

  else{
    nav.classList.remove("scroll-on");
  }
}

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
