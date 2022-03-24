let scrollToTopBtn = document.getElementById("top-scroll");
let myScroll = document.querySelector("#top-scroll");
let rootElement = document.documentElement;


function scrollToTop(){
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop);

window.onscroll = () => {
    const nav = document.getElementById('navbar');
    if(this.scrollY <= 300){
        nav.className = 'navbar';
    }else{
        nav.className = 'nav-scroll';
    }
    if(this.scrollY <= 500){
        myScroll.style.display = "none";
    }else{
        myScroll.style.display = "block";
    }
}