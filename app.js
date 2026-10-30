import Swiper from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import './node_modules/swiper/swiper-bundle.css';
import { createIcons, Clock3, CookingPot, UsersRound } from 'lucide';

document.querySelectorAll('.platillos-swiper, .categoria-swiper').forEach((elemento) => {

    const contenedor = elemento.closest('.carrusel-contenedor') || elemento.parentElement;

    new Swiper(elemento, {
        modules: [Navigation, Pagination, A11y],

        slidesPerView: 1.15,
        spaceBetween: 16,

        navigation: {
            nextEl: contenedor.querySelector('.swiper-button-next'),
            prevEl: contenedor.querySelector('.swiper-button-prev')
        },

        pagination: {
            el: elemento.querySelector('.swiper-pagination'),
            clickable: true
        },

        breakpoints: {
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20
            },

            1024: {
                slidesPerView: 3.5,
                spaceBetween: 22
            }
        }
    });

});

createIcons({
    icons: {
        Clock3,
        CookingPot,
        UsersRound
    }
});
