    var reportemail = 'jim.peregoy@gmail.com';
    function sendEmail() {
        if (navigator.geolocation) {
            var options = {
                    enableHighAccuracy: true,
                    timeout: 7000,
                    maximumAge: 0
                  };
            navigator.geolocation.getCurrentPosition(sendPosition,sendReport,options);
        } else
            sendReport(null);
   }
   function sendPosition (position) {
       var href = location.href;
       if (href.indexOf('#') > 0)
           href = href.substr(0, href.indexOf('#')); 
       href = href.replaceAll('about.html','Interactive_Maps.html');
       var emailBody = 'Description: %0D%0ALocation: '
        + href+'#map=18/'+position.coords.latitude.toString()+'/'+position.coords.longitude.toString()+'/mark %0D%0A' 
        + 'Accuracy(meters): '+position.coords.accuracy;
       document.location = "mailto:"+reportemail+"?subject=Trail Hazards Report&body="+emailBody;
   }
   function sendReport (ignored) {
       document.location = "mailto:"+email+"?subject=Trail Hazards Report";
   }