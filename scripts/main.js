"use strict";smoothScroll.init(),$(document).ready(function(){$("ul.nav > li").click(function(e){e.preventDefault(),$("ul.nav > li").removeClass("active"),$(this).addClass("active")}),$("img.objectiveimg").click(function(e){e.preventDefault(),$("img.objectiveimg").removeClass("activeObjective"),$(this).addClass("activeObjective")})});