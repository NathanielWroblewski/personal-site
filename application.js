!function(){
	var pages;
	var FADE_DURATION = 1000;
	var PAGE_LIFETIME = 4000;


	startPageAdvancing = advance;

	function scheduleNextAdvance() {
		setTimeout(advance, PAGE_LIFETIME);
	}

	function advance(){
		pages || (pages = $('.websites > .pages > *'));
		pages.stop();
		var current_page = pages.filter(':visible');
		if (current_page.length > 0){
			debugger
			current_page.fadeOut(FADE_DURATION, function(){
				current_page.hide();
				if (current_page.next().length > 0){
          current_page.next().fadeIn(FADE_DURATION, scheduleNextAdvance);
				}
				else {
          current_page = pages.first().fadeIn(FADE_DURATION);
			    scheduleNextAdvance();
				}
			});
		}else{
			current_page = pages.first().fadeIn(FADE_DURATION);
			scheduleNextAdvance();
		}
	}
}();


$(document).ready(startPageAdvancing);