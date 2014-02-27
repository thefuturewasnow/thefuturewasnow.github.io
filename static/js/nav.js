var navSelector = '#nav';
var navTabSelector = '#nav-tab';
var navContainer = '#nav-outer';

$(document).ready(function(){
	$(navSelector).toggle();
	
	$(navTabSelector).click(function(){
		$(navSelector).slideToggle();
	});
	
	
});