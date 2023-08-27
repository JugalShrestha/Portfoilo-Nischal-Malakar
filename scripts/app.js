function checkScreenSize(){
    {
        const observer = new IntersectionObserver(entities=>{
            entities.forEach(entity=>{
                if(entity.isIntersecting)
                {
                    entity.target.classList.add('show');
                }else
                {
                    entity.target.classList.remove('show');
                }
            })
        })

        const div = document.querySelectorAll('.slide');

        div.forEach(entity=>{
            observer.observe(entity);
        })
    }
}

checkScreenSize();

//For animating NavBar on scroll

function ChangeOnScroll(){
    const navBar = document.querySelector('.nav-bar');
    const navOptions = document.querySelectorAll(".nav-option");
    const scrolledPos = window.scrollY;

    if(scrolledPos > navBar.clientHeight)
    {
        navBar.style.padding = "1vh 4vh";
        navBar.style.background = "rgba(255,255,255,0.5)";
        navOptions.forEach(option => {
            option.style.color = "var(--p1-color)";
        })
    }
    else{
        navBar.style.padding = "3vh 4vh";
        navBar.style.background = "var(--p1-color)"
        navOptions.forEach(option => {
            option.style.color = "var(--s1-color)";
        })
    }
}

window.addEventListener('scroll',ChangeOnScroll);

const navOptions = document.querySelectorAll('.nav-option')
const pages = document.querySelectorAll('.pages')

navOptions.forEach((option,index)=>{
    option.addEventListener("click",()=>{
        pages[index].scrollIntoView({behavior: "smooth"})
    })
})