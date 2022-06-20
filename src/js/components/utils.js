import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import { getHeaderHeight } from '../functions/header-height';
import { createPopper, right} from '@popperjs/core';
import _vars from "../_vars.js"

getHeaderHeight();

createPopper(_vars.heroTooltipBtn, _vars.heroTooltipText, {
  placement: 'top-end'
});
