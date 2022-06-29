import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import { getHeaderHeight } from '../functions/header-height';
import { createPopper, right} from '@popperjs/core';
import _vars from "../_vars.js"

getHeaderHeight();

const mediaQuery = window.matchMedia('(max-width: 460px)');

const popperInstance = createPopper(_vars.heroTooltipBtn, _vars.heroTooltipText, {
  placement: mediaQuery.matches ? 'bottom-end' : 'top-end',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [mediaQuery.matches ? -50 : 0, mediaQuery.matches ? 20 : 40],
      },
    },
  ],
});

function show() {
  _vars.heroTooltipText.setAttribute('data-show', '');

  // We need to tell Popper to update the tooltip position
  // after we show the tooltip, otherwise it will be incorrect
  popperInstance.update();
}

function hide() {
  _vars.heroTooltipText.removeAttribute('data-show');
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  _vars.heroTooltipBtn.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  _vars.heroTooltipBtn.addEventListener(event, hide);
});
