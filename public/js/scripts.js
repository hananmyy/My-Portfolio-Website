// TOGGLE BUTTON
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () =>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link =>{
    link.addEventListener("click", () =>{
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})
 
// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")

    if(this.scrollY >=250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}


window.addEventListener("scroll", scrollUp)

// CHANGE BACKGROUD HEADER
const scrollHeader = () => {
    const header = document.getElementById("navbar")

    if(this.scrollY >=50) {
        header.classList.add("border-b", "border-gray-300")
    } else{
        header.classList.remove("border-b", "border-gray-300")
    }
}

window.addEventListener("scroll", scrollHeader)

// SWIPER



// SHOW SECTIONS ACTIVE LINK
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60; // Adjust for header height or padding
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active"); // Remove active class from all links
  
      if (link.href.includes(currentSection)) {
        link.classList.add("active"); // Add active class to the current section's link
      }
    });
  };
  
  // Add the corrected scroll event listener
  window.addEventListener("scroll", activeLink);


// SCROLL REVEAL ANIMATION