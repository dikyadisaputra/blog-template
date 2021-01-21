    // Apex Charts
    function showPostCount()
    {
        var postCount = {
            series: [{
              name: "Post",
              data: [5, 3, 0, 1, 8, 2, 4]
          }],
            chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Post published by Day',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'],
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          }
        };
        var chart = new ApexCharts(document.querySelector("#chartPostCount"), postCount);
        chart.render();
    }  

$(document).ready(function(){

});
