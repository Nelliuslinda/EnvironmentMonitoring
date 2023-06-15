// BAR CHART

var barChartOptions = {
    series: [
      {
        name: 'Precipitation',
        data: [10, 10, 0, 0, 20, 10, 0, 30, 10]
      }, {
        name: 'Humidity',
        data: [50, 85, 11, 48, 87, 15, 41, 114, 84]
      }
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: [
      '#216869',
      '#49a078',
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      labels: {
        style: {
          colors: "#343a40",
        },
      },
    },
    yaxis: {
      title: {
        text: 'amount',
        style: {
          color:  "#343a40",
        },
      },
      labels: {
        style: {
          colors: "#343a40",
        },
      },
    },
    fill: {
      opacity: 1
    },
    grid: {
      borderColor: "#55596e",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: "#343a40",
      },
      show: true,
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return 'mm ' + val + ' amount'
        }
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
  
  
  // AREA CHART
  
  var areaChartOptions = {
    series: [{
      name: "Temperature",
      data: [17, 17, 17, 16, 15, 17, 19, 21, 23, 23, 25, 21, 19],
    }],
    chart: {
      type: "area",
      background: "transparent",
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#aacc00"],
    labels: ["0600", "0700", "0800", "0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: "vertical",
      },
      type: "gradient",
    },
    grid: {
      borderColor: "#55596e",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: "#343a40",
      },
      show: true,
      position: "bottom",
    },
    markers: {
      size: 6,
      strokeColors: "#1b2635",
      strokeWidth: 3,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      axisBorder: {
        color: "#55596e",
        show: true,
      },
      axisTicks: {
        color: "#55596e",
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          colors: "#343a40",
        },
      },
    },
    yaxis: 
    [
      {
        title: {
          text: "Temperature",
          style: {
            color: "#343a40",
          },
        },
        labels: {
          style: {
            colors: ["#343a40"],
          },
        },
      }
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
    }
  };
  
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();