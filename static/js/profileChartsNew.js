Chart.defaults.global.defaultFontFamily = "'Rajdhani', sans-serif"
Chart.defaults.global.defaultFontColor = '#333'
Chart.defaults.global.defaultFontStyle = 600
Chart.defaults.global.defaultFontSize = 16
Chart.defaults.global.tooltips.xPadding = 10
Chart.defaults.global.tooltips.yPadding = 6
Chart.defaults.global.tooltips.bodySpacing = 100
Chart.defaults.global.tooltips.footerSpacing = 4
Chart.defaults.global.tooltips.titleMarginBottom = 4
Chart.defaults.global.tooltips.footerFontSize = 5
Chart.defaults.global.tooltips.footerMarginTop = 0
Chart.defaults.global.tooltips.callbacks.footer = function () {
  return ' '
}

Vue.filter('formatNumber', function (number) {
  return new Intl.NumberFormat().format(number)
})

var app = new Vue({
  el: '#app',
  data: {
    chart: null,
    displayedGameType: 'spidershot',
    displayedGameMode: 0,
    displayedDataSet: 'score',
    // displayedGameGraph: 'progression', // histogram, heatmap
    playerData: {},
    loadedData: false,
    hasData: true,
    gametypes: {
      spidershot: {
        id: 'spidershot',
        modes: [
          'ultimate',
          'precision',
          'speed'
        ],
        datasets: {
          'score': {
            id: 'score',
            graph: 'score',
            max: 'max_score',
            avg: 'avg_score',
            rank: 'scores_dict'
          },
          'kills': {
            id: 'kills',
            graph: 'kill_total',
            graph_type: 'progression',
            max: 'max_kill_total',
            avg: 'avg_kill_total',
            rank: 'kills_dict'
          },
          'kps': {
            id: 'kps',
            graph: 'killsPerSec',
            max: 'max_killsPerSec',
            avg: 'avg_killsPerSec',
            rank: 'killsPerSec_dict'
          },
          'shots': {
            id: 'shots',
            graph: 'shots_total',
            max: 'max_shots_total',
            avg: 'avg_shots_total',
            rank: 'shots_dict'
          },
          'accuracy': {
            id: 'accuracy',
            graph: 'accuracy',
            max: 'max_accuracy',
            avg: 'avg_accuracy',
            rank: 'accuracy_dict'
          }
        }
      },
      strafeshot: {
        id: 'strafeshot',
        modes: [
          'ultimate'
        ],
        datasets: {
          'score': {
            id: 'score',
            graph: 'score',
            max: 'max_score',
            avg: 'avg_score',
            rank: 'scores_dict'
          },
          'kills': {
            id: 'kills',
            graph: 'kill_total',
            max: 'max_kill_total',
            avg: 'avg_kill_total',
            rank: 'kills_dict'
          },
          'kps': {
            id: 'kps',
            graph: 'killsPerSec',
            max: 'max_killsPerSec',
            avg: 'avg_killsPerSec',
            rank: 'killsPerSec_dict'
          },
          'shots': {
            id: 'shots',
            graph: 'shots_total',
            max: 'max_shots_total',
            avg: 'avg_shots_total',
            rank: 'shots_dict'
          },
          'accuracy': {
            id: 'accuracy',
            graph: 'accuracy',
            max: 'max_accuracy',
            avg: 'avg_accuracy',
            rank: 'accuracy_dict'
          }
        }
      },
      pentakill: {
        id: 'pentakill',
        modes: [
          'ultimate',
          'precision',
          'speed'
        ],
        datasets: {
          'score': {
            id: 'score',
            graph: 'score',
            max: 'max_score',
            avg: 'avg_score',
            rank: 'scores_dict'
          },
          'kills': {
            id: 'kills',
            graph: 'kill_total',
            max: 'max_kill_total',
            avg: 'avg_kill_total',
            rank: 'kills_dict'
          },
          'kps': {
            id: 'kps',
            graph: 'killsPerSec',
            max: 'max_killsPerSec',
            avg: 'avg_killsPerSec',
            rank: 'killsPerSec_dict'
          },
          'shots': {
            id: 'shots',
            graph: 'shots_total',
            max: 'max_shots_total',
            avg: 'avg_shots_total',
            rank: 'shots_dict'
          },
          'accuracy': {
            id: 'accuracy',
            graph: 'accuracy',
            max: 'max_accuracy',
            avg: 'avg_accuracy',
            rank: 'accuracy_dict'
          }
        }
      },
      reflexshot: {
        id: 'reflexshot',
        modes: [
          'ultimate'
        ],
        datasets: {
          'score': {
            id: 'score',
            graph: 'score',
            max: 'max_score',
            avg: 'avg_score',
            rank: 'scores_dict'
          },
          'kills': {
            id: 'kills',
            graph: 'kill_total',
            max: 'max_kill_total',
            avg: 'avg_kill_total',
            rank: 'kills_dict'
          },
          'kps': {
            id: 'kps',
            graph: 'killsPerSec',
            max: 'max_killsPerSec',
            avg: 'avg_killsPerSec',
            rank: 'killsPerSec_dict'
          },
          'shots': {
            id: 'shots',
            graph: 'shots_total',
            max: 'max_shots_total',
            avg: 'avg_shots_total',
            rank: 'shots_dict'
          },
          'accuracy': {
            id: 'accuracy',
            graph: 'accuracy',
            max: 'max_accuracy',
            avg: 'avg_accuracy',
            rank: 'accuracy_dict'
          }
        }
      },
      // {
      //   id: 'strafetrack'
      // }
    }
  },
  methods: {
    changeDisplayedGameType: function (gametype) {
      this.displayedGameType = gametype
      this.displayedGameMode = 0
      this.displayedDataSet = Object.values(this.gametypes[this.displayedGameType].datasets)[0].id
    },
    changeDisplayedMode: function (index) {
      this.displayedGameMode = index
    },
    changeDisplayedDataSet: function (set) {
      this.displayedDataSet = set
    },
    getPlayerData: function () {
      this.$http.get(window.location.href.replace("profile", "profile_json")).then(function (resp) {
        this.playerData = resp.body
        console.log("playerData", this.playerData)
        this.loadedData = true
      })
    },
    getRank: function (dict) {
      if (!dict) {
        return
      }

      // cause Jay is a mad man
      if (dict.player_rank <= 100) {
        return '#' + dict.player_rank
      } else if (dict.player_rank > 100){
        return 'TOP ' + dict.player_percentage + '%'
      }
      return 'N/A'
    },
    renderProgression: function (chartLabels, chartData) {
      var lineChartColor = 'rgba(0, 209, 178, 1)'
      var backgroundColor = 'rgba(0, 209, 178, 0.2)'

      this.chart = new Chart(this.$refs.chart, {
        type: 'line',
        data: {
          labels: chartLabels,
          datasets: [{
            label: 'Score',
            yAxisID: 'Score',
            data: chartData,
            backgroundColor: [
              backgroundColor,
            ],
            borderColor: [
              lineChartColor,
            ],
            fill: true,
            pointBackgroundColor: lineChartColor,
            pointBorderColor: lineChartColor,
            pointBorderWidth: 0,
            pointRadius: 0,
            pointStyle: 'circle',
            pointHitRadius: 20,
            borderWidth: 2,
            pointHoverBackgroundColor: lineChartColor,
            pointHoverBorderColor: lineChartColor,
            pointHoverBorderWidth: 2,
            pointHoverRadius: 5
          }],
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: false,
            text: 'Progress'
          },
          tooltips: {
            displayColors: false,
            intersect: false
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: false
              },
              ticks: {
                display: false,
                padding: 0
              },
              gridLines: {
                display: false
              },
              type: 'time',
              time: {
                unit: 'hour',
                tooltipFormat: "MMM D, YYYY – h:mma",
              },
              distribution: 'series',
              zeroLineColor: 'rgba(0,0,0,0)'
            }],
            yAxes: [{
              id: 'Score',
              display: false,
              gridLines: {
                display: false,
                color: 'rgba(0, 0, 0, 0)',
                lineWidth: 0,
                zeroLineWidth: 0,
                zeroLineColor: 'rgba(0, 0, 0, 0)'
              }
            }]
          }
        }
      })
    },
    renderChart: function () {
      if (!this.playerData) {
        return
      }

      if (this.chart) {
        this.chart.destroy()
      }

      var displayData = this.playerData[this.displayedGameType][this.displayedGameMode]

      var displayedGraph = this.gametypes[this.displayedGameType].datasets[this.displayedDataSet].graph
      var chartData = displayData[displayedGraph]

      if (!chartData || !chartData.length) {
        this.hasData = false
      } else {
        this.hasData = true
      }

      if (!this.$refs.chart) {
        return
      }

      var displayedGameGraph = this.gametypes[this.displayedGameType].datasets[this.displayedDataSet].graph_type

      if (displayedGameGraph === 'histogram') {
        this.renderHistogram(chartLabels, chartData)
      } else {
        this.renderProgression(displayData.create_date, chartData)
      }
    }
  },
  updated: function () {
    this.renderChart()
    twttr.widgets.load()
    // FB.init()
  },
  mounted: function () {
    this.getPlayerData()
  },
  delimiters: ['[[',']]']
})
