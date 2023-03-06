var btn = document.querySelector('.js-terms-btn');
var info = document.querySelector('.content__main')
var m = document.getElementById('multiple');

if(btn) {
    btn.addEventListener('click', function(e){
        e.preventDefault();

        info.classList.add('content__main_selected');

        setTimeout(function(){
            info.classList.remove('content__main_selected');
        }, 3000)
    });
}  

var checkboxes = document.querySelectorAll('.js-user-check .checkbox__input');
var panel = document.querySelector('.panel-controls');
var table = document.querySelector('.user-list__wrap');

checkboxes.forEach(function(item){
    
    item.addEventListener('change', function(){
        function widthWindow (){
            return window.innerWidth < 490;
        }

        function isCheck() {
            
            function checkAll(i){
                if(checkboxes[i].checked ) {
                    return true;
                } else if(i == checkboxes.length - 1) {
                    return false;
                }
                return checkAll(i + 1);
            }

            return checkAll(0);
        }

        if( widthWindow() && isCheck() ) {
            panel.classList.add('panel-controls_fixed');
            animation();
            table.classList.add('user-list__wrap_mb');
        } else if( widthWindow()) {
            animationHide();
            table.classList.remove('user-list__wrap_mb')
        }
    })
})

function animation() {
    setTimeout(function(){
        panel.classList.add('show')
    }, 100)
}

function animationHide() {

    panel.style.transform = 'translateY(150%)';

    setTimeout(function(){
        panel.classList.remove('panel-controls_fixed'); 
        panel.classList.remove('show');
        panel.style.transform = '';
    }, 400)
}

var editBtn = document.querySelectorAll('.outgoing-links__edit');

editBtn.forEach(function(item){
    item.addEventListener('click', function(i){
        i.preventDefault();
        var parent = item.parentNode.parentNode;
        parent.classList.add('outgoing-links__link-info_hide');
        parent.nextElementSibling.classList.add('outgoing-links__edit-input_active');
    })
})
var newsCheckboxAll = document.querySelector('.expand-news__head .checkbox__input');
var newsCheckboxes = document.querySelectorAll('.expand-news__body .checkbox__input');

newsCheckboxes.forEach(function(itemCheckbox){
    itemCheckbox.addEventListener('change', function(e){
        e.stopPropagation();
        var parent = itemCheckbox.closest('.expand-news__row');
        if(parent.classList.contains('expand-news__row_selected')){
            parent.classList.remove('expand-news__row_selected')
        } else {
            parent.classList.add('expand-news__row_selected')
        }
    })
})

// newsCheckboxAll.addEventListener('change', function(){
//     newsCheckboxes.forEach(function(item){

//     })
// });

/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var n={exports:{}};t(n,n.exports),e.autosize=n.exports}}(this,function(e,t){"use strict";var n,o,p="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return-1<n.indexOf(e)},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);-1<t&&(n.splice(t,1),o.splice(t,1))}}),c=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){c=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(r){if(r&&r.nodeName&&"TEXTAREA"===r.nodeName&&!p.has(r)){var e,n=null,o=null,i=null,d=function(){r.clientWidth!==o&&a()},l=function(t){window.removeEventListener("resize",d,!1),r.removeEventListener("input",a,!1),r.removeEventListener("keyup",a,!1),r.removeEventListener("autosize:destroy",l,!1),r.removeEventListener("autosize:update",a,!1),Object.keys(t).forEach(function(e){r.style[e]=t[e]}),p.delete(r)}.bind(r,{height:r.style.height,resize:r.style.resize,overflowY:r.style.overflowY,overflowX:r.style.overflowX,wordWrap:r.style.wordWrap});r.addEventListener("autosize:destroy",l,!1),"onpropertychange"in r&&"oninput"in r&&r.addEventListener("keyup",a,!1),window.addEventListener("resize",d,!1),r.addEventListener("input",a,!1),r.addEventListener("autosize:update",a,!1),r.style.overflowX="hidden",r.style.wordWrap="break-word",p.set(r,{destroy:l,update:a}),"vertical"===(e=window.getComputedStyle(r,null)).resize?r.style.resize="none":"both"===e.resize&&(r.style.resize="horizontal"),n="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(n)&&(n=0),a()}function s(e){var t=r.style.width;r.style.width="0px",r.offsetWidth,r.style.width=t,r.style.overflowY=e}function u(){if(0!==r.scrollHeight){var e=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(r),t=document.documentElement&&document.documentElement.scrollTop;r.style.height="",r.style.height=r.scrollHeight+n+"px",o=r.clientWidth,e.forEach(function(e){e.node.scrollTop=e.scrollTop}),t&&(document.documentElement.scrollTop=t)}}function a(){u();var e=Math.round(parseFloat(r.style.height)),t=window.getComputedStyle(r,null),n="content-box"===t.boxSizing?Math.round(parseFloat(t.height)):r.offsetHeight;if(n<e?"hidden"===t.overflowY&&(s("scroll"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight):"hidden"!==t.overflowY&&(s("hidden"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight),i!==n){i=n;var o=c("autosize:resized");try{r.dispatchEvent(o)}catch(e){}}}}function i(e){var t=p.get(e);t&&t.destroy()}function d(e){var t=p.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return r(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=l,e.exports=t.default});

autosize(document.querySelectorAll('.form-control_autosize textarea'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdGVybXMtYnRuJyk7XHJcbnZhciBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX21haW4nKVxyXG52YXIgbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdWx0aXBsZScpO1xyXG5cclxuaWYoYnRuKSB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnY29udGVudF9fbWFpbl9zZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF9fbWFpbl9zZWxlY3RlZCcpO1xyXG4gICAgICAgIH0sIDMwMDApXHJcbiAgICB9KTtcclxufSAgXHJcblxyXG52YXIgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy11c2VyLWNoZWNrIC5jaGVja2JveF9faW5wdXQnKTtcclxudmFyIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbmVsLWNvbnRyb2xzJyk7XHJcbnZhciB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWxpc3RfX3dyYXAnKTtcclxuXHJcbmNoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgIFxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZ1bmN0aW9uIHdpZHRoV2luZG93ICgpe1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA0OTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpc0NoZWNrKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tBbGwoaSl7XHJcbiAgICAgICAgICAgICAgICBpZihjaGVja2JveGVzW2ldLmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaSA9PSBjaGVja2JveGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tBbGwoaSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tBbGwoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggd2lkdGhXaW5kb3coKSAmJiBpc0NoZWNrKCkgKSB7XHJcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWNvbnRyb2xzX2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd1c2VyLWxpc3RfX3dyYXBfbWInKTtcclxuICAgICAgICB9IGVsc2UgaWYoIHdpZHRoV2luZG93KCkpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uSGlkZSgpO1xyXG4gICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCd1c2VyLWxpc3RfX3dyYXBfbWInKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICB9LCAxMDApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvbkhpZGUoKSB7XHJcblxyXG4gICAgcGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMTUwJSknO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdwYW5lbC1jb250cm9sc19maXhlZCcpOyBcclxuICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgcGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICB9LCA0MDApXHJcbn1cclxuXHJcbnZhciBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm91dGdvaW5nLWxpbmtzX19lZGl0Jyk7XHJcblxyXG5lZGl0QnRuLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgaS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSBpdGVtLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnb3V0Z29pbmctbGlua3NfX2xpbmstaW5mb19oaWRlJyk7XHJcbiAgICAgICAgcGFyZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvdXRnb2luZy1saW5rc19fZWRpdC1pbnB1dF9hY3RpdmUnKTtcclxuICAgIH0pXHJcbn0pXHJcbnZhciBuZXdzQ2hlY2tib3hBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLW5ld3NfX2hlYWQgLmNoZWNrYm94X19pbnB1dCcpO1xyXG52YXIgbmV3c0NoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kLW5ld3NfX2JvZHkgLmNoZWNrYm94X19pbnB1dCcpO1xyXG5cclxubmV3c0NoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtQ2hlY2tib3gpe1xyXG4gICAgaXRlbUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IGl0ZW1DaGVja2JveC5jbG9zZXN0KCcuZXhwYW5kLW5ld3NfX3JvdycpO1xyXG4gICAgICAgIGlmKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZC1uZXdzX19yb3dfc2VsZWN0ZWQnKSl7XHJcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQtbmV3c19fcm93X3NlbGVjdGVkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLW5ld3NfX3Jvd19zZWxlY3RlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vIG5ld3NDaGVja2JveEFsbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4vLyAgICAgbmV3c0NoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuXHJcbi8vICAgICB9KVxyXG4vLyB9KTtcclxuXHJcbi8qIVxyXG5cdGF1dG9zaXplIDQuMC4yXHJcblx0bGljZW5zZTogTUlUXHJcblx0aHR0cDovL3d3dy5qYWNrbG1vb3JlLmNvbS9hdXRvc2l6ZVxyXG4qL1xyXG4hZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcIm1vZHVsZVwiLFwiZXhwb3J0c1wiXSx0KTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKXQobW9kdWxlLGV4cG9ydHMpO2Vsc2V7dmFyIG49e2V4cG9ydHM6e319O3QobixuLmV4cG9ydHMpLGUuYXV0b3NpemU9bi5leHBvcnRzfX0odGhpcyxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuLG8scD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBNYXA/bmV3IE1hcDoobj1bXSxvPVtdLHtoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuLTE8bi5pbmRleE9mKGUpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG9bbi5pbmRleE9mKGUpXX0sc2V0OmZ1bmN0aW9uKGUsdCl7LTE9PT1uLmluZGV4T2YoZSkmJihuLnB1c2goZSksby5wdXNoKHQpKX0sZGVsZXRlOmZ1bmN0aW9uKGUpe3ZhciB0PW4uaW5kZXhPZihlKTstMTx0JiYobi5zcGxpY2UodCwxKSxvLnNwbGljZSh0LDEpKX19KSxjPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgRXZlbnQoZSx7YnViYmxlczohMH0pfTt0cnl7bmV3IEV2ZW50KFwidGVzdFwiKX1jYXRjaChlKXtjPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7cmV0dXJuIHQuaW5pdEV2ZW50KGUsITAsITEpLHR9fWZ1bmN0aW9uIHIocil7aWYociYmci5ub2RlTmFtZSYmXCJURVhUQVJFQVwiPT09ci5ub2RlTmFtZSYmIXAuaGFzKHIpKXt2YXIgZSxuPW51bGwsbz1udWxsLGk9bnVsbCxkPWZ1bmN0aW9uKCl7ci5jbGllbnRXaWR0aCE9PW8mJmEoKX0sbD1mdW5jdGlvbih0KXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQsITEpLHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsYSwhMSksci5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIixhLCExKSxyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhdXRvc2l6ZTpkZXN0cm95XCIsbCwhMSksci5yZW1vdmVFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6dXBkYXRlXCIsYSwhMSksT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihlKXtyLnN0eWxlW2VdPXRbZV19KSxwLmRlbGV0ZShyKX0uYmluZChyLHtoZWlnaHQ6ci5zdHlsZS5oZWlnaHQscmVzaXplOnIuc3R5bGUucmVzaXplLG92ZXJmbG93WTpyLnN0eWxlLm92ZXJmbG93WSxvdmVyZmxvd1g6ci5zdHlsZS5vdmVyZmxvd1gsd29yZFdyYXA6ci5zdHlsZS53b3JkV3JhcH0pO3IuYWRkRXZlbnRMaXN0ZW5lcihcImF1dG9zaXplOmRlc3Ryb3lcIixsLCExKSxcIm9ucHJvcGVydHljaGFuZ2VcImluIHImJlwib25pbnB1dFwiaW4gciYmci5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixhLCExKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQsITEpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsYSwhMSksci5hZGRFdmVudExpc3RlbmVyKFwiYXV0b3NpemU6dXBkYXRlXCIsYSwhMSksci5zdHlsZS5vdmVyZmxvd1g9XCJoaWRkZW5cIixyLnN0eWxlLndvcmRXcmFwPVwiYnJlYWstd29yZFwiLHAuc2V0KHIse2Rlc3Ryb3k6bCx1cGRhdGU6YX0pLFwidmVydGljYWxcIj09PShlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHIsbnVsbCkpLnJlc2l6ZT9yLnN0eWxlLnJlc2l6ZT1cIm5vbmVcIjpcImJvdGhcIj09PWUucmVzaXplJiYoci5zdHlsZS5yZXNpemU9XCJob3Jpem9udGFsXCIpLG49XCJjb250ZW50LWJveFwiPT09ZS5ib3hTaXppbmc/LShwYXJzZUZsb2F0KGUucGFkZGluZ1RvcCkrcGFyc2VGbG9hdChlLnBhZGRpbmdCb3R0b20pKTpwYXJzZUZsb2F0KGUuYm9yZGVyVG9wV2lkdGgpK3BhcnNlRmxvYXQoZS5ib3JkZXJCb3R0b21XaWR0aCksaXNOYU4obikmJihuPTApLGEoKX1mdW5jdGlvbiBzKGUpe3ZhciB0PXIuc3R5bGUud2lkdGg7ci5zdHlsZS53aWR0aD1cIjBweFwiLHIub2Zmc2V0V2lkdGgsci5zdHlsZS53aWR0aD10LHIuc3R5bGUub3ZlcmZsb3dZPWV9ZnVuY3Rpb24gdSgpe2lmKDAhPT1yLnNjcm9sbEhlaWdodCl7dmFyIGU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdO2UmJmUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudDspZS5wYXJlbnROb2RlLnNjcm9sbFRvcCYmdC5wdXNoKHtub2RlOmUucGFyZW50Tm9kZSxzY3JvbGxUb3A6ZS5wYXJlbnROb2RlLnNjcm9sbFRvcH0pLGU9ZS5wYXJlbnROb2RlO3JldHVybiB0fShyKSx0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtyLnN0eWxlLmhlaWdodD1cIlwiLHIuc3R5bGUuaGVpZ2h0PXIuc2Nyb2xsSGVpZ2h0K24rXCJweFwiLG89ci5jbGllbnRXaWR0aCxlLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5ub2RlLnNjcm9sbFRvcD1lLnNjcm9sbFRvcH0pLHQmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wPXQpfX1mdW5jdGlvbiBhKCl7dSgpO3ZhciBlPU1hdGgucm91bmQocGFyc2VGbG9hdChyLnN0eWxlLmhlaWdodCkpLHQ9d2luZG93LmdldENvbXB1dGVkU3R5bGUocixudWxsKSxuPVwiY29udGVudC1ib3hcIj09PXQuYm94U2l6aW5nP01hdGgucm91bmQocGFyc2VGbG9hdCh0LmhlaWdodCkpOnIub2Zmc2V0SGVpZ2h0O2lmKG48ZT9cImhpZGRlblwiPT09dC5vdmVyZmxvd1kmJihzKFwic2Nyb2xsXCIpLHUoKSxuPVwiY29udGVudC1ib3hcIj09PXQuYm94U2l6aW5nP01hdGgucm91bmQocGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyLG51bGwpLmhlaWdodCkpOnIub2Zmc2V0SGVpZ2h0KTpcImhpZGRlblwiIT09dC5vdmVyZmxvd1kmJihzKFwiaGlkZGVuXCIpLHUoKSxuPVwiY29udGVudC1ib3hcIj09PXQuYm94U2l6aW5nP01hdGgucm91bmQocGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyLG51bGwpLmhlaWdodCkpOnIub2Zmc2V0SGVpZ2h0KSxpIT09bil7aT1uO3ZhciBvPWMoXCJhdXRvc2l6ZTpyZXNpemVkXCIpO3RyeXtyLmRpc3BhdGNoRXZlbnQobyl9Y2F0Y2goZSl7fX19fWZ1bmN0aW9uIGkoZSl7dmFyIHQ9cC5nZXQoZSk7dCYmdC5kZXN0cm95KCl9ZnVuY3Rpb24gZChlKXt2YXIgdD1wLmdldChlKTt0JiZ0LnVwZGF0ZSgpfXZhciBsPW51bGw7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGU/KChsPWZ1bmN0aW9uKGUpe3JldHVybiBlfSkuZGVzdHJveT1mdW5jdGlvbihlKXtyZXR1cm4gZX0sbC51cGRhdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTooKGw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLmxlbmd0aD9lOltlXSxmdW5jdGlvbihlKXtyZXR1cm4gcihlKX0pLGV9KS5kZXN0cm95PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUubGVuZ3RoP2U6W2VdLGkpLGV9LGwudXBkYXRlPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUubGVuZ3RoP2U6W2VdLGQpLGV9KSx0LmRlZmF1bHQ9bCxlLmV4cG9ydHM9dC5kZWZhdWx0fSk7XHJcblxyXG5hdXRvc2l6ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250cm9sX2F1dG9zaXplIHRleHRhcmVhJykpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
