/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click",() =>{
        navMenu.classList.add('show-sidebar');
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click",() =>{
        navMenu.classList.remove('show-sidebar');
    })
}

/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener("click",(r =>{
            const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills_active')
        })
        target.classList.add('skills_active')

        tabs.forEach(tab => {
            tab.classList.remove('skills_active')
        })
        tab.classList.add('skills_active')
      })
        )
        })
        

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
    linkWork.forEach(l => l.addEventListener("click",activeWork))



/*===== Work Popup =====*/
/* This code is adding an event listener to the entire document, listening for a click event. When a
click event occurs, it checks if the clicked element has a class of "work_button". If it does, it
calls the functions `togglePortfolioPopup()` and `portfolioItemDetails()` with the parent element of
the clicked element as an argument. */
document.addEventListener("click",(e)=>{
    if (e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

/**
 * The function toggles the "open" class on the element with the class "portfolio_popup".
 */
function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector("work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector("portfolio_item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services_modal'),
      modelBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

      let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal')
      }

      modelBtns.forEach((modelBtn, i)=>{
        modelBtn.addEventListener('click', () =>{
            modal(i)
        });
      });

      modalCloses.forEach((modalClose) =>{
         modalClose.addEventListener('click', () =>{
            modalViews.forEach((modalView) =>{
                modalView.classList.remove('active-modal')
            });
        });
      });

/*=============== SWIPER TESTIMONIAL ===============*/
 let swiper = new Swiper(".testimonials_container", {
        spaceBetween:10,
        grapCursor:true,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable:true,

        },
        breakpoints:{
            576:{
                slidesPerView:2,
            },
            768:{
                slidesPerView:2,
                spaceBetween:48,
            },
        },
      });




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
//get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

//add an event listener listening for scroll
window.addEventListener("scroll",navHighlighter);

function navHighlighter(){
    //get current scroll position
    let scrollY = window.pageYOffset;
    //How we loop through sections to get height,top and ID values for each
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        /* - If our current scroll position enters the space where current section on screen is,
        corresponding navigation link,else remove it.
        - To know which link needs an active class,we use sectionId variable we are getting  while looping through section as a selector*/

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/
