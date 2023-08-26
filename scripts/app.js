

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

window.addEventListener('load',()=>{
    const deviceSize = window.innerWidth;
    const heroPageText = document.querySelector('#hero-page .text .main-text')
    if(deviceSize<980){
    }
})