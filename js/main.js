function initMap() {
        let gordonFlorist = {lat: 42.66635, lng: -70.835535};
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: gordonFlorist
        });
  
        let marker = new google.maps.Marker({
          position: {lat: 42.66655, lng: -70.835535},
          map: map,
          title: 'Gordon Florist'
        });
      }