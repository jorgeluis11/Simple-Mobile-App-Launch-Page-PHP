
	if( navigator.userAgent.match("Android") )
	{
		document.getElementById("image").src = "./img/android.png"	
		document.getElementById("link-download").innerHTML = '<a href="https://play.google.com/store/apps/details?id=com.ionicframework.notaso683473"> <img alt="Android app on Google Play" src="https://developer.android.com/images/brand/en_app_rgb_wo_45.png" /></a>';
	}
	else if(navigator.userAgent.match("iPhone") || navigator.userAgent.match("iPad"))
	{
		document.getElementById("image").src = "./img/iphone.png"	
		document.getElementById("link-download").innerHTML = '<a id="link" href="https://itunes.apple.com/us/app/profesearch/id985709320?mt=8&uo=6&at=&ct=" target="itunes_store"></a>';
	}
	else
	{

		if (Math.round(Math.random() * 1) === 0) 
						document.getElementById("image").src = "./img/android.png";
			else
						document.getElementById("image").src = "./img/iphone.png";


		document.getElementById("link-download").innerHTML = '<a id="link" href="https://itunes.apple.com/us/app/profesearch/id985709320?mt=8&uo=6&at=&ct=" target="itunes_store"></a><a href="https://play.google.com/store/apps/details?id=com.ionicframework.notaso683473"> <img alt="Android app on Google Play" src="https://developer.android.com/images/brand/en_app_rgb_wo_45.png" /></a>';
	}

	 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-62224099-1', 'auto');
	  ga('send', 'pageview');