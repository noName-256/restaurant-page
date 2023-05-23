import * as headers from "./headers.js";
import "../styles/scss/style.scss";
import "../styles/scss/about-us-style.scss";
import "../styles/scss/menus-style.scss";
import "../styles/scss/gallery-style.scss";
import "../styles/scss/contact-style.scss";

import menusScript from "./menus.js";
import galleryScript from "./gallery.js";
import selectCurrentNavElement from "./navElementsHighlighting.js";

import Swup from "swup";
import SwupFadeTheme from "@swup/fade-theme";
import SwupSlideTheme from "@swup/slide-theme";
import SwupOverlayTheme from "@swup/overlay-theme";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupProgressPlugin from "@swup/progress-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";

let scrollOffset;
let runningOnDesktop = window.innerWidth > 1200;
if (runningOnDesktop) {
  scrollOffset = 100;
} else {
  scrollOffset = 0;
}

const swup = new Swup({
  plugins: [
    new SwupFadeTheme(),
    new SwupScrollPlugin({
      animateScroll: {
        betweenPages: false,
        samePageWithHash: false,
        samePage: true,
      },
      offset: scrollOffset,
    }),
    new SwupProgressPlugin({ delay: 0 }),
    new SwupA11yPlugin(),
  ],
});
headers.initHeaders();
selectCurrentNavElement();
function addCustomScript() {
  let websiteName = document.querySelector("#website-name").className;
  if (websiteName === "menus") {
    menusScript();
  } else if (websiteName === "gallery") {
    galleryScript();
  }
}
function loadWebsiteSpecificContent() {
  headers.initSecondaryNavMenuAgain();
  addCustomScript();
}

loadWebsiteSpecificContent();
swup.on("contentReplaced", loadWebsiteSpecificContent);
swup.on("contentReplaced", selectCurrentNavElement);
