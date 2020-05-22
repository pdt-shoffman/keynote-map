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
          ['Country', 'Avg latency (ms)'],
          ['Germany', 300],
          ['United States', 100],
          ['Brazil', 1200],
          ['Canada', 100],
          ['France', 140],
          ['RU', 500],
          ['Japan', 3000],
          ['United Kingdom', 200],
          ['Australia', 1700],
          ['New Zealand', 2000],
          ['Spain', 300]
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
          ['Germany', 1400],
          ['United States', 7000],
          ['Brazil', 600],
          ['Canada', 3000],
          ['France', 600],
          ['RU', 30],
          ['Japan', 5000],
          ['United Kingdom', 4300],
          ['Australia', 1700],
          ['New Zealand', 500],
          ['Spain', 20]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('map_div'));

        chart.draw(data, options);
      }

  }
  )

