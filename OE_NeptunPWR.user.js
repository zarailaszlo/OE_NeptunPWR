// ==UserScript==
// @name         Obudai_Neptun_Fix
// @namespace    Tampermonkey
// @version      1.2
// @description  Neptun butaságok javitása :)
// @author       Zar
// @match        https://neptun.uni-obuda.hu/hallgato/login.aspx
// @supportURL   https://github.com/zarailaszlo/OE_NeptunPWR/
// @namespace   https://github.com/zarailaszlo/OE_NeptunPWR/
// @updateURL   https://github.com/zarailaszlo/OE_NeptunPWR/raw/main/OE_NeptunPWR.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // captcha méret növelése
    var captchaImg = document.getElementById('imgCaptcha');
    captchaImg.style.width = '400px';
    captchaImg.style.height = '220px';

    // login oldal elem eltávolítása
    var loginRightSideDiv = document.getElementById('div_login_right_side');
    loginRightSideDiv.parentNode.removeChild(loginRightSideDiv);
})();
