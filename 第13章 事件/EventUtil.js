/**
 * Created by Zhang on 2017/6/4.
 */
var EventUtil = {
    addHandler: function (element, type, handler) {

        if(element.addEventListener){

            element.addEventListener(type, handler, false);
        }else if(element.attachEvent){

            element.attachEvent('on'+type, handler);
        }else {

            element['on'+type] = handler;
        }
    },
    getEvent: function(){

    },
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    preventDefault: function(){

    },
    stopPropagation: function(){

    },
    removeHandler: function (element, type, handler) {

        if(element.removeEventListener){

            element.removeEventListener(type, handler, false);
        }else if(element.detachEvent){

            element.detachEvent('on'+type, handler);
        }else {

            element['on'+type] = null;
        }
    }
};