(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{14:function(e,n,o){"use strict";o.r(n),o.d(n,"createaccount_fun",function(){return t});var t=function(e,n,o,t,c){console.log("STEP 1");var r=document.querySelector(".login100-formCA"),l=document.querySelector(".g_signin");console.log("STEP 2"),r.addEventListener("submit",function(o){o.preventDefault(),console.log("CREATEFORM ACTIVE");var t=r.email.value,c=r.password.value;n(e,t,c).then(function(e){window.location.href="./verbs.html"}).catch(function(e){return console.log(e.message)})}),l.addEventListener("click",function(n){console.log("STEP 3"),n.preventDefault();var o=new c;t(e,o).then(function(e){var n=c.credentialFromResult(e);window.location.href="./verbs.html";n.accessToken,e.user}).catch(function(e){console.log(e.message)})})}}}]);