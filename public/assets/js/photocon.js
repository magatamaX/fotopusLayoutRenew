(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var photoconDetailImg = document.getElementById('photoconDetailImg');
var photoconNavi = document.getElementById('photoconNavi');
var prev = photoconNavi.querySelector('.photocon_detail_menu_navi_prev');
var next = photoconNavi.querySelector('.photocon_detail_menu_navi_next');

// adjust photo position
if (photoconDetailImg) {

    var windowWidth = void 0;
    var windowHeight = void 0;
    var timer = false;

    var ua = window.navigator.userAgent;
    var $photo = photoconDetailImg;

    var func = function func() {
        if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || ua.indexOf('Mobile') > 0) {
            return false;
        }

        if (timer !== false) {
            clearTimeout(timer);
        }

        timer = setTimeout(function () {
            windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            $photo.style.maxHeight = windowHeight - 20 + 'px';
        }, 100);
    };

    window.addEventListener('load', func, false);
    window.addEventListener('resize', func, false);

    if (photoconNavi) {
        var _windowWidth = void 0,
            positionTop = void 0,
            scrollTop = void 0;

        var scrollFunc = function scrollFunc() {
            positionTop = photoconDetailImg.getBoundingClientRect().top + window.pageYOffset + photoconDetailImg.clientHeight / 2;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            _windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            if (prev) {
                prev.style.top = _windowWidth >= 1200 ? positionTop + 'px' : '';
                prev.style.webkitTransform = _windowWidth >= 1200 ? 'translateY(-' + scrollTop + 'px)' : '';
                prev.style.transform = _windowWidth >= 1200 ? 'translateY(-' + scrollTop + 'px)' : '';
            }
            if (next) {
                next.style.top = _windowWidth >= 1200 ? positionTop + 'px' : '';
                next.style.webkitTransform = _windowWidth >= 1200 ? 'translateY(-' + scrollTop + 'px)' : '';
                next.style.transform = _windowWidth >= 1200 ? 'translateY(-' + scrollTop + 'px)' : '';
            }
        };

        window.addEventListener('DOMContentLoaded', scrollFunc, false);
        window.addEventListener('resize', scrollFunc, false);
        window.addEventListener('scroll', scrollFunc, false);
        window.addEventListener('load', scrollFunc, false);
    }
}

// URL select

var urlSelectBtn = document.getElementById('urlSelectBtn');
var urlBox = document.getElementById('urlBox');
if (urlSelectBtn && urlBox) {
    urlSelectBtn.addEventListener('click', function () {
        urlBox.select();
    });
}

},{}]},{},[1])

