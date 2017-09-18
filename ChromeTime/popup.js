document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'http://api.timezonedb.com/v2/list-time-zone?key=5G70CPYHX6GK&format=json&country=IN',
   error: function() {
      console.log('Error occured');
   },
   success: function(data) {
		console.log(data);
		var timestamp = data.zones[0].timestamp;
		console.log(timestamp);

		var timezoneAdd = 330*60; 
		date = new Date((timestamp+timezoneAdd) * 1000);
		datevalues = [
		   date.getFullYear(),
		   date.getMonth()+1,
		   date.getDate(),
		   date.getHours()+1,
		   date.getMinutes(),
		   date.getSeconds(),
		];
		
		var formatted = datevalues[3]+":"+datevalues[4]+":"+datevalues[5];
		$('#h4id').html(formatted);
   },
   type: 'GET'
});

}, false);

/* The Web Request API */
const WEB_REQUEST = chrome.webRequest;

WEB_REQUEST.onBeforeRequest.addListener(
    function(details) {
        if(details.method == "POST")
            console.log(JSON.stringify(details));
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestBody"]
);

