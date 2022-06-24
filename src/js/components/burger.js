import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import SmoothScroll from 'smooth-scroll';

const linkScroll = new SmoothScroll();

(function(){
  const burger = document?.querySelectorAll('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.forEach(el => {
    el.addEventListener('click', (e) => {
      el?.classList.toggle('burger--active');
      menu?.classList.toggle('menu--active');

      if (menu?.classList.contains('menu--active')) {
        menu?.setAttribute('aria-hidden', 'false');
        el?.setAttribute('aria-expanded', 'true');
        el?.setAttribute('aria-label', 'Закрыть меню');
        // disableScroll();
      } else {
        menu?.setAttribute('aria-hidden', 'true');
        el?.setAttribute('aria-expanded', 'false');
        el?.setAttribute('aria-label', 'Открыть меню');
        // enableScroll();
      }
    });
  })

  overlay?.addEventListener('click', () => {
    burger?.forEach(el => {
      el.setAttribute('aria-expanded', 'false');
    });
    burger?.forEach(el => {
      el.setAttribute('aria-label', 'Открыть меню');
    });
    burger?.forEach(el => {
      el.classList.remove('burger--active');
    });
    menu.classList.remove('menu--active');
    // enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.forEach(el => {
        el.setAttribute('aria-expanded', 'false');
      });
      burger?.forEach(el => {
        el.setAttribute('aria-label', 'Открыть меню');
      });
      burger?.forEach(el => {
        el.classList.remove('burger--active');
      });
      menu.classList.remove('menu--active');
      // enableScroll();
      linkScroll.animateScroll(document.querySelector(el.getAttribute('href')));
    });
  });
})();
