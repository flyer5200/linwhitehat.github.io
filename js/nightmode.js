function switchNightMode(){$('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($("body")),setTimeout(function(){var DarkMode=$("body").hasClass("night")?'1':'0';(DarkMode=='0')?($("#nightMode").click(),$("body").addClass("night"),$("#nightMode").removeClass("fa-moon-o").addClass("fa-lightbulb-o"),$('#modeicon').attr("xlink:href","#icon-sun")):($("#nightMode").click(),$("body").removeClass("night"),$("nightMode").removeClass("fa-lightbulb-o").addClass("fa-moon-o"),$('#modeicon').attr("xlink:href","#icon-_moon")),setTimeout(function(){$(".Cuteen_DarkSky").fadeOut(1e3,function(){$(this).remove()})},2e3)}),50}
//function checkNightMode(){if($("body").hasClass("night")){$("#nightMode").removeClass("fa-moon-o");$("#nightMode").addClass("fa-lightbulb-o");$('#modeicon').attr("xlink:href","#icon-sun");return;}if($("body").hasClass("night")){$("#nightMode").removeClass("fa-lightbulb-o");$("#nightMode").addClass("fa-moon-o");$('#modeicon').attr("xlink:href","#icon-_moon");return;}}
//checkNightMode();