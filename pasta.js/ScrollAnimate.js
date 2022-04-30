const item = document.querySelectorAll('[data-anime]'); //pegando todos elementos com data-anime 

const animeScroll = () =>{
    const windowTop = window.pageYOffset +(( window.innerHeight * 3)/ 4);

    item.forEach((element) =>{
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate");
        };
    });
};

// animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
});
// (( window.innerHeight * 3)/ 4)