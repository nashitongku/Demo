/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-01 00:22:06
 * @version $Id$
 */

function include(path){ 
    var a=document.createElement("script");
    a.type = "text/javascript"; 
    a.src=path; 
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(a);
}


include('./js/jquery-3.2.1.min.js');
include('./js/bootstrap.min.js');
init();