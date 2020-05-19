function showTraffic() {
  
}

function showLatency(){
  
  
}

$('#latency_view').on('click', function() {
  google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'RPM'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
          ['Japan', 1000]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('map_div'));

        chart.draw(data, options);
      }

  }
  )

  $('#traffic_view').on('click', function() {
  google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'RPM'],
          ['Germany', 600],
          ['United States', 10],
          ['Brazil', 4000],
          ['Canada', 20],
          ['France', 8000],
          ['RU', 0],
          ['Japan', 20]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('map_div'));

        chart.draw(data, options);
      }

  }
  )

