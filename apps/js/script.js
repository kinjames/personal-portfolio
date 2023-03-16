

let navItems = document.querySelectorAll('.nav_links');


navItems.forEach(nav =>(
    nav.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        switch(true){
            case styles.contains('home'):
                console.log("home");
                break;
            case styles.contains('about'):
                console.log("about");
                break;
            case styles.contains('resume'):
                console.log("resume");
                break;
            case styles.contains('portfolio'):
                console.log("portfolio");
                break;
            case styles.contains('services'):
                console.log("services");
                break;
            case styles.contains('contact'):
                console.log("contact");
                break;

        }
    })
))