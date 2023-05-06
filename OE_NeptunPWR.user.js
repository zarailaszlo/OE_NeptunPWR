// ==UserScript==
// @name         Neptun captcha méret növelő
// @namespace    Tampermonkey
// @version      1.1
// @description  Növeli a captcha kép méretét négyszeresére a Neptun bejelentkező oldalon.
// @author       Z
// @match        https://neptun.uni-obuda.hu/hallgato/login.aspx
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
