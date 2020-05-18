// Author: Erik Kazuo Sugawara
// Github: https://github.com/ErikSugawara
// Release: May 18, 2020
// Version: 1.0
// Description: A simple script that autoclick a gift button on twitch.tv website.

function gift_clicker() {
	if (document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0]){
		document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0].click();
		console.log("Button Clicked!");
	}
	console.log("Gift button not ready")
}
var seconds = 60;
setInterval(function(){gift_clicker()}, seconds * 1000);
