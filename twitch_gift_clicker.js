// Click gift twitch button every 60 seconds

function gift_clicker() {
	if (document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0]){
		document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0].click();
		console.log("Button Clicked!");
	}
	console.log("Gift button not ready")
}
var seconds = 60;
setInterval(function(){gift_clicker()}, seconds * 1000);

