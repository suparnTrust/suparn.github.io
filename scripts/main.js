"use strict";smoothScroll.init(),$(document).ready(function(){$("ul.nav > li").click(function(t){t.preventDefault(),$("ul.nav > li").removeClass("active"),$(this).addClass("active")}),$("img.objectiveimg").click(function(t){t.preventDefault();var i="#"+$(this).data("target");$(".objectiveText").not(i).hide(),$(i).show();var e="#"+$(this).data("triangle");$(".triangle").not(e).hide(),$(e).show()}),$("div.boardOfTrusteesImages img").click(function(t){t.preventDefault();var i="#"+$(this).data("target");$("div.boardOfTrusteesBio div").not(i).hide(),$(i).show()}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()})});