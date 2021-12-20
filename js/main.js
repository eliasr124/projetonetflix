$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//mais informacoes
document.getElementById('botao').addEventListener('click', (event) => {
    event.preventDefault();
    setTimeout(() =>{
        window.location.href ='https://www.papodecinema.com.br/filmes/alien-vs-predador/';
    }, 1000);
});

//Assistir
document.getElementById('botao1').addEventListener('click', (event) => {
    event.preventDefault();
    setTimeout(() =>{
        window.location.href ='https://www.youtube.com/watch?v=55w8Qe-YyDA';
    }, 1000);
});