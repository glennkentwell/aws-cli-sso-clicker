window.ivl = setInterval(() => {
	try {
		Object.values(document.getElementsByTagName('button'))
			.filter((btn) => btn && (console.log('button', btn) || btn.innerText.match(/Allow/) || !!btn.id?.match(/login|cli_verification_btn/)) )
			.map(b => {
				if (b) {
					b.innerText = b.id;
					// b.style = 'border: solid 5px #ff0; width: 400px; height: 200px;';
					setTimeout(() => { b.click() }, 500);
				}
			});
	} catch {
		console.log('err')
	}
}, 300);
setTimeout(() => { console.log('ivl', ivl); clearInterval(ivl); }, 5000);

// <button data-testid="allow-access-button" 
// 	data-analytics="consent-allow-access" 
// 	data-analytics-type="eventDetail" 
// 	class="awsui_button_vjswe_2od9j_107 awsui_variant-primary_vjswe_2od9j_251" 
// 	data-analytics-funnel-value="button5-1714091094027-9194" 
// 	type="submit"><span class="awsui_content_vjswe_2od9j_103">Allow</span></button>