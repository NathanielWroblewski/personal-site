!function(){
	var pages;
	var projects;
	var FADE_DURATION = 1000;
	var PAGE_LIFETIME = 4000;


	startPageAdvancing = advance;
	startProjectsAdvancing = advanceProject;

	function scheduleNextAdvance() {
		setTimeout(advance, PAGE_LIFETIME);
	}

	function scheduleNextProjectAdvance() {
		setTimeout(advanceProject, PAGE_LIFETIME);
	}

	function advance(){
		pages || (pages = $('.websites > .pages > *'));
		pages.stop();
		var current_page = pages.filter(':visible');
		if (current_page.length > 0){
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

	function advanceProject(){
		projects || (projects = $('.description > .projects > *'));
		projects.stop();
		var current_project = projects.filter(':visible');
		if (current_project.length > 0){
			current_project.fadeOut(FADE_DURATION, function(){
				current_project.hide();
				if (current_project.next().length > 0){
          current_project.next().fadeIn(FADE_DURATION, scheduleNextProjectAdvance);
				}
				else {
          current_project = projects.first().fadeIn(FADE_DURATION);
			    scheduleNextProjectAdvance();
				}
			});
		}else{
			current_project = projects.first().fadeIn(FADE_DURATION);
			scheduleNextProjectAdvance();
		}
	}
}();

$(document).ready(startPageAdvancing);
$(document).ready(startProjectsAdvancing);