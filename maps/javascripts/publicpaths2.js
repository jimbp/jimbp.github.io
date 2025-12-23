	var publicSatelliteStyle = {
        color: "#FFFFFF", 
        weight: 2,
        opacity: 0.8,
        dashArray: "3" // Optional: for a dashed trail appearance
    };
	var publicMapboxStyle = {
        color: "#228B22", // Green
        weight: 4,
        opacity: 0.8,
        dashArray: "3" // Optional: for a dashed trail appearance
    };
	var townlineMapboxStyle = {
        color: "#000000", // Green
        weight: 2,
        opacity: 0.8,
        dashArray: "3" // Optional: for a dashed trail appearance
    };
    
    var publicpathsadded = false;
    var publicSatellitePaths = null;
   	var publicMapboxPaths = null;
   	var townlineMapboxPaths= null;
    function updatePublicPaths() {
		var zoom = map.getZoom()
		if (loadPublicPaths()) {
			//console.log("up date public paths zoom "+zoom);
			if (zoom > 14 && !publicpathsadded) {
      			//console.log('add paths to map');
				publicpathsadded = true;
				publicSatellitePaths.addTo(mapboxSatellite);
				publicMapboxPaths.addTo(mapboxOutdoors);
			} else if (zoom <= 14 && publicpathsadded) {
     			//console.log('remove paths from map');
				publicpathsadded = false;
				publicSatellitePaths.remove(mapboxSatellite);
				publicMapboxPaths.remove(mapboxOutdoors);
			}
		}
		if (loadTownlinePaths()) {
				townlineMapboxPaths.addTo(mapboxOutdoors);
		}
	}

	function loadTownlinePaths () {
		if (typeof townline !== 'undefined') {
  			if (townlineMapboxPaths == null)
       			townlineMapboxPaths = L.geoJSON(townline,{style: townlineMapboxStyle});
       		//console.log('loadPublicPaths true');
       		return true;
       	}
       	//console.log('loadPublicPaths false');
      	return false;
    }

    function loadPublicPaths () {
		if (typeof pathsWithName !== 'undefined') {
			if (publicSatellitePaths == null)
        		publicSatellitePaths = L.geoJSON(pathsWithName,{style: publicSatelliteStyle});
  			if (publicMapboxPaths == null)
       			publicMapboxPaths = L.geoJSON(pathsWithName,{style: publicMapboxStyle});
       		//console.log('loadPublicPaths true');
       		return true;
       	}
       	//console.log('loadPublicPaths false');
      	return false;
    }