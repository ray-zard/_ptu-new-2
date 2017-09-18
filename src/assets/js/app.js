import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';



$(document).ready(function() {

	$(this).foundation();

	$('#fullpage').fullpage({
		menu: '#menu',
		anchors: [

			'mainScreen', 
			'subMainScreen', 
			'secondPage', 
			'subSecondPage', 
			'bookScreen', 
			'subBookScreen', 
			'legalScreen', 
			'subLegalScreen', 
			'clientsScreen', 
			'subClientsScreen', 
			'companyScreen', 
			'questBlock', 
			'footer'
			
		],
		navigationPosition: 'top',
	});

});
