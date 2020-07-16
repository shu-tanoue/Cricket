const nav = document.querySelector("nav");
const sectionOne = document.querySelector('.nextPrevBtn');

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
//   sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// $(document).ready(function(){       
//   var scroll_pos = 0;
//   $(document).scroll(function() {
//       scroll_pos = $(this).scrollTop();
//       if(scroll_pos > 300) {
//           $("nav").css('background-color', 'blue');
//       } else {
//           $("nav").css('background-color', 'transparent');
//       }
//   });
// });
