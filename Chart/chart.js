class ChartManager {
    constructor(dataFile) {
      this.dataFile = dataFile; 
    }
  
    fetchData() {
      return fetch(this.dataFile)
        .then(response => response.json())  
        .then(data => {
          this.data = data;  
        })
        .catch(error => {
          console.error('Error loading JSON data:', error);
          throw error; 
        });
    }
  
    initializeCharts() {
      if (!this.data) {
        console.error('Data not loaded');
        return;
      }
  
      const barChartData = this.data.barChartData;
      const pieChartData = this.data.pieChartData;
  
      // Bar Chart 
      const barChartConfig = {
        type: 'bar',
        data: barChartData,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
  
      // Pie Chart 
      const pieChartConfig = {
        type: 'pie',
        data: pieChartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return tooltipItem.label + ': ' + tooltipItem.raw + ' units sold';
                }
              }
            }
          }
        }
      };
  
      
      new Chart(document.getElementById('barChart'), barChartConfig);
      new Chart(document.getElementById('pieChart'), pieChartConfig);
    }
  }
  
  const chartManager = new ChartManager('chart.json');
  chartManager.fetchData()
    .then(() => chartManager.initializeCharts())  
    .catch(error => console.error('Error in chartManager:', error));
  