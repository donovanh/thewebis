$(function(){if($(".checklogo").length>0&&$(window).width()>620?$(window).scroll(function(){checkIfLogoNeedsFixed()}):$(window).width()>620&&$("header nav ul").addClass("shifted"),$("a.scroll").click(function(e){e.preventDefault();var o=$(e.target).attr("href"),i=$(o).offset().top-56;$("html, body").animate({scrollTop:i},1e3)}),window.screenHTML=$(".screen").html(),$(".mac").click(function(e){if($(window).width()>620&&!$(".positioning").hasClass("active")){$(".positioning").addClass("active");var o=$('<iframe src="/macplus/" width="100%" height="100%" frameborder="0"></iframe>');$(".mac").find(".screen").html(o),$(".stage").css("overflow","visible"),attachHideMacListener()}}),window.location.hash){var e=$(window.location.hash).offset().top-56;$("html, body").animate({scrollTop:e},10)}$(".modal-link").click(function(e){e.preventDefault(),$(".modal").addClass("hidden"),$("#"+$(this).data("target")).removeClass("hidden")}),$(".modal .close").click(function(e){$(this).parents(".modal").addClass("hidden")})});var attachHideMacListener=function(){$("body").click(function(e){0===$(e.target).parents(".positioning").length&&$(".positioning").hasClass("active")&&($(".positioning").removeClass("active"),$(".screen").html(window.screenHTML),setTimeout(function(){$(".stage").css("overflow","hidden"),$("body").unbind("click")},1e3))})},adjustBGPipes=function(){var e=$(window).scrollTop();$(".bg-pipes").each(function(o,i){var a=1-e/(10-3*o);$(i).css("transform","translateY("+a+"px)")})},showHideMac=function(){$(window).scrollTop()>$(".mac").height()/3?$(".mac").addClass("hide"):$(".mac").removeClass("hide")},checkIfLogoNeedsFixed=function(){var e=$(window).scrollTop(),o=$("h1.logo").offset().top,i=o-e;-40>i?($("header nav ul").addClass("shifted"),$("h1.logo").addClass("hidden"),$(".fixed-logo").addClass("show")):($("header nav ul").removeClass("shifted"),$("h1.logo").removeClass("hidden"),$(".fixed-logo").removeClass("show"))};