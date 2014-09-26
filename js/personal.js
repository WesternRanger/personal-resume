/**
 * Created by 陈奇 on 14-9-26.
 */
function _load(){
    var resu = document.getElementsByClassName("resu")[0],
        na = document.getElementsByClassName("na")[0],
        web = document.getElementsByClassName("web")[0];
    resu.addEventListener("mouseover",down,false);
    resu.addEventListener("mouseout",up,false);
    resu.attachEvent("mouseover",down);
    resu.attachEvent("mouseout",down);
    function down(){
        na.style.top = '50px';
        web.style.top = '0';
    }
    function up(){
        na.style.top = '0';
        web.style.top = '50px';
    }
}
addLoadEvent(_load);
