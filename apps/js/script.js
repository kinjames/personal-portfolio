
let homePage = document.querySelector('.home');
let mainPage = document.querySelector('.main-container');
let aboutPage = document.querySelector('.about-container');
let resumePage = document.querySelector('.resume-section');
let portfolioPage = document.querySelector('.portfolio-section');
let servicesPage = document.querySelector('.services-section');
let contactPage = document.querySelector('.contact-section');
let contact = document.querySelector('.contact');
let about = document.querySelector('.about');
let resume = document.querySelector('.resume');
let services = document.querySelector('.services');
let portfolio = document.querySelector('.portfolio');
let home = document.querySelector('.home');
let navItems = document.querySelectorAll('.nav_links');


function aboutSection () {
    if (aboutPage.classList.contains('hide')){
        mainPage.style.display = "none";
        homePage.classList.remove('color-change');
        aboutPage.classList.remove('hide');
        about.classList.add('color-change');
    } else{
        aboutPage.classList.add('hide');
        about.classList.remove('color-change');
    }
};
function contactSection () {
    if (contactPage.classList.contains('hide')){
        mainPage.style.display = "none";
        homePage.classList.remove('color-change');
        contactPage.classList.remove('hide');
        contact.classList.add('color-change');
    } else{
        contactPage.classList.add('hide');
        contact.classList.remove('color-change');
    }
};



// function name(params) {
    
// }


navItems.forEach(nav =>(
    nav.addEventListener('click', ()=>{
        aboutSection();
        contactSection();

        // const styles = e.currentTarget.classList;
        // switch(true){
        //     case styles.contains('home'):
        //         mainPage.style.display = "flex";
        //         homePage.classList.add('color-change');
        //         break;
        //     case styles.contains('about'):
        //         aboutSection();
        //         break;
        //     case styles.contains('resume'):
        //         mainPage.style.display = "none";
        //         homePage.classList.remove('color-change');
        //         resumePage.classList.remove('hide');
        //         resume.classList.add('color-change');
        //         console.log("resume");
        //         break;
        //     case styles.contains('portfolio'):
        //         mainPage.style.display = "none";
        //         homePage.classList.remove('color-change');
        //         portfolioPage.classList.remove('hide');
        //         portfolio.classList.add('color-change');
        //         console.log("portfolio");
        //         break;
        //     case styles.contains('services'):
        //         mainPage.style.display = "none";
        //         homePage.classList.remove('color-change');
        //         servicesPage.classList.remove('hide');
        //         services.classList.add('color-change');
        //         console.log("services");
        //         break;
        //     case styles.contains('contact'):
        //         contactSection();
        //         break;
        //     default:
        //         aboutPage.style.display = "none";
        //         about.classList.remove('color-change');
        //         contactPage.classList.add('hide');
        //         contact.classList.remove('color-change');
        //         servicesPage.classList.add('hide');
        //         services.classList.remove('color-change');
        //         resumePage.classList.add('hide');
        //         resume.classList.remove('color-change');
        //         portfolioPage.classList.add('hide');
        //         portfolio.classList.remove('color-change');

        // }
    })
));

function startUp(){
    homePage.classList.add('color-change');
    mainPage.style.display = "flex";  
}


window.onload = startUp();