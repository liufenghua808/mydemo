
;(function anonymous() {
    function computed() {
        let HTML = document.documentElement,
            winW = HTML.clientWidth,
            desW = 750;
        if (winW >= desW) {
            HTML.style.fontSize = '100px';
            return;
        }
        HTML.style.fontSize = winW / 750 * 100 + 'px'; //=>HTML中单独编写的代码尽量不要出现{}等操作，例如：ES6模板字符串，否则WEBPACK编译失败
    }
    computed();
    window.addEventListener('resize', computed, false);
})();
