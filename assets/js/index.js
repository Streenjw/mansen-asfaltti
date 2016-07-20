import {lory} from '../../node_modules/lory.js/dist/lory.js';
import svgxuse from '../../node_modules/svgxuse/svgxuse.js';
import astro from  '../../node_modules/Astro/dist/js/astro.js';
import drop from  '../../node_modules/Drop/dist/js/drop.js';
import smoothScroll from  '../../node_modules/smooth-scroll/dist/js/smooth-scroll.js';

astro.init();
drop.init({
    'activeClass': 'active',
});

smoothScroll.init({
  'selector': '[data-scroll]',
  'speed': 800,
  'easing': 'easeInOutCubic',
});

document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.js_slider');

    lory(slider, {
        'enableMouseEvents': true,
        'infinite': 1,
        'prev': '.prev',
        'next': '.next'
    });
});



