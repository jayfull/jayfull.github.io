var app = new Vue({
  el: '#app',
  data: {
    leaderboardData: {},
    loadedData: false,
    displayedGameType: 'spidershot',
    displayedGameMode: 0,
    gametypes: {
      spidershot: {
        id: 'spidershot',
        modes: [
          'ultimate',
          'precision',
          'speed'
        ]
      },
      strafeshot: {
        id: 'strafeshot',
        modes: [
          'ultimate'
        ]
      },
      pentakill: {
        id: 'pentakill',
        modes: [
          'ultimate',
          'precision',
          'speed'
        ]
      },
      reflexshot: {
        id: 'reflexshot',
        modes: [
          'ultimate'
        ]
      }
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
    getLeaderboardData: function () {
      this.$http.get('/leaderboard_json').then(function (resp) {
        this.leaderboardData = resp.body
        this.loadedData = true
      })
    },
    goToProfile: function (steamId) {
      window.location.href = '/profile/' + steamId
    }
  },
  mounted: function () {
    this.getLeaderboardData()
  },
  delimiters: ['[[',']]']
})
