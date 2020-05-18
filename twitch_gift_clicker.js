// Click gift twitch button every 60 seconds
function gift_clicker() {
	document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0].click();
	console.log("Button Clicked");
}
var timer_id = setInterval(gift_clicker(), 60*1000)

