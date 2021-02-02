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


    function showCommentsCount()
    {
         var comments = {
            series: [44, 32, 24],
            chart: {
              type: 'donut',
            },

            title: {
              text: 'Comments from Readers',
              align: 'left'
            },

            labels: ['Approved', 'Rejected', 'Pending'],

            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          };

          var chart = new ApexCharts(document.querySelector("#chartCommentsCount"), comments);
          chart.render();
    }  



$(document).ready(function(){
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});
