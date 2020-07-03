// Author: Erik Kazuo Sugawara
// Release: May 18, 2020
// Version: 1.1.1
// Description: A simple script that autoclick a gift button on twitch.tv website.

function gift_clicker() {
	document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0].click();
}

var seconds = 5;
setInterval(function(){gift_clicker()}, seconds * 1000);
