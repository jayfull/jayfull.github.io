var profile_json
var m
var j
var windowh
var windoww
var fdata

// get the primary and secondary colors
var style = getComputedStyle(document.body);
var color_primary = style.getPropertyValue('--color_primary');
var color_secondary = style.getPropertyValue('--color_secondary');


var windoww = window.innerWidth;
var windowh = window.innerHeight;

var layout = {
      // autosize: true,
      // width: 475,
      // height: 250,
      margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
          pad: 0,
        },
      showlegend: false,
      paper_bgcolor: '#ffffff',
      plot_bgcolor: '#ffffff',
      xaxis: {rangemode: 'tozero',
          showgrid: false,
          zeroline: false,
          showline: false,
          // zerolinecolor: '#969696',
          // zerolinewidth: 50,
          autotick: true,
          ticks: '',
          showticklabels: false,
          linecolor: '#636363',
          linewidth: 3,
          // title: 'Date',
          // titlefont: {
          //   family: 'Rajdhani, serif',
          //   size: 16,
          //   color: '#636363',
          //   },
          },
      yaxis: {rangemode: 'tozero',
          zeroline: false,
          showline: false,
          // zerolinecolor: '#969696',
          // zerolinewidth: 4,
          showgrid: false,
          autotick: false,
          ticks: '',
          showticklabels: false,
          tickfont: {color: 'rgb(54,54,54)',
                    family: 'Rajdhani, serif',
                    size: 14,},
          linecolor: 'rgb(54,54,54)',
          linewidth: 3,
          // title: 'Aim Lab',
          // titlefont: {
          //   family: 'Rajdhani, serif',
          //   size: 16,
          //   color: 'rgb(54,54,54)'
          //   },
          },
      yaxis2: {rangemode: 'tozero',
          zeroline: false,
          showline: false,
          // zerolinecolor: '#969696',
          // zerolinewidth: 4,
          showgrid: false,
          autotick: true,
          ticks: '',
          showticklabels: true,
          tickfont: {color: 'rgb(255, 56, 96)',
                    family: 'Rajdhani, serif',
                    size: 14,},
          linecolor: 'rgb(255, 56, 96)',
          linewidth: 3,
          // title: 'Survey',
          // titlefont: {
          //   family: 'Rajdhani, serif',
          //   size: 16,
          //   color: 'rgb(255, 56, 96)'
          //   },
          side: 'right',
          overlaying: 'y',
          range: [0, 5],
          },
      legend: {
          y: 0.5,
          // yref: 'paper',
          font: {
            family: 'Rajdhani, serif',
            size: 20,
            color: 'grey',
      }
    },
  };


// trace defaults for scatter plots
marker_style = {
              color: 'rgb(54,54,54)',
              size: 10,
              line: {
                  color: 'rgb(255,255,255)',
                  width: 1,
                  },
              };
marker_style2 = {
              color: 'rgb(255, 56, 96)',
              size: 10,
              line: {
                  color: 'rgb(255,255,255)',
                  width: 1,
                  },
              };
line_style = {
              width: 2
            };
trace_type = 'scatter';


var time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var energy = [1, 2, 3, 5, 4, 3, 5, 5, 4, 5];
var dscore = [2, 3, 3, 4, 4, 5, 5, 6, 5, 6];

var dhealth = [2, 2, 3, 2, 4, 4, 5, 3, 5, 5];
var daccuracy = [2, 3, 2, 3, 4, 4, 5, 6, 6, 6];

var dselfeval = [1, 1, 3, 3, 2, 3, 1, 3, 4, 3];
var dprecision = [3, 2, 3, 8, 6, 8, 2, 5, 2, 4];

var dteameval = [2, 3, 3, 4, 3, 3, 2, 2, 4, 3];
var dgain = [3, 2, 4, 3, 7, 5, 7, 3, 7, 7];

var dhappiness = [1, 2, 2, 1, 2, 3, 4, 4, 5, 5];
var derror = [8, 7, 6, 6, 5, 4, 5, 2, 1, 1];

var dfuture = [4, 2, 1, 5, 2, 3, 2, 1, 1, 3];
var dotr = [4, 8, 6, 7, 7, 7, 5, 4, 3, 8];

function create_charts() {
    // // line1 and line2 (this makes to plots)
    // var player1 = {
    //   x: time,
    //   y: energy,
    //   type: 'scatter',
    //   name: 'Energy',
    //   marker: marker_style,
    //   line: line_style,
    // };
    // var player2 = {
    //   x: time,
    //   y: dscore,
    //   type: 'scatter',
    //   name: 'Score',
    //   marker: marker_style2,
    //   line: line_style,
    //   yaxis: 'y2',
    // };

    // var health = {
    //   x: time,
    //   y: dhealth,
    //   type: 'scatter',
    //   name: 'Health',
    //   marker: marker_style,
    //   line: line_style,
    // };
    // var accuracy = {
    //   x: time,
    //   y: daccuracy,
    //   yaxis: 'y2',
    //   type: 'scatter',
    //   name: 'Score',
    //   marker: marker_style2,
    //   line: line_style,
    //   yaxis: 'y2',
    // };

    // var selfeval = {
    //   x: time,
    //   y: dselfeval,
    //   type: 'scatter',
    //   name: 'Score',
    //   marker: marker_style,
    //   line: line_style,
    // };
    // var precision = {
    //   x: time,
    //   y: dprecision,
    //   type: 'scatter',
    //   name: 'Score',
    //   marker: marker_style2,
    //   line: line_style,
    //   yaxis: 'y2',
    // };


    // var happiness = {
    //   x: time,
    //   y: dhappiness,
    //   type: 'scatter',
    //   name: 'Happiness',
    //   marker: marker_style,
    //   line: line_style,
    // };
    // var error = {
    //   x: time,
    //   y: derror,
    //   type: 'scatter',
    //   name: 'Score',
    //   marker: marker_style2,
    //   line: line_style,
    //   yaxis: 'y2',
    // };


    // var teameval = {
    //   x: time,
    //   y: dteameval,
    //   type: 'scatter',
    //   name: 'Team eval.',
    //   marker: marker_style,
    //   line: line_style,
    // };
    // var gain = {
    //   x: time,
    //   y: dgain,
    //   type: 'scatter',
    //   name: 'Score',
    //   marker: marker_style2,
    //   line: line_style,
    //   yaxis: 'y2',
    // };


    // var future = {
    //   x: time,
    //   y: dfuture,
    //   type: 'scatter',
    //   name: 'Future feel',
    //   marker: marker_style,
    //   line: line_style,
    // };
    // var otr = {
    //   x: time,
    //   y: dotr,
    //   type: 'scatter',
    //   name: 'Score',
    //   marker: marker_style2,
    //   line: line_style,
    //   yaxis: 'y2',
    // };


    // // data sets to plot
    // var data = [player1, player2];
    // var line2 = [health, accuracy];
    // var line3 = [selfeval, precision];
    // var line4 = [happiness, error];
    // var line5 = [teameval, gain];
    // var line6 = [future, otr];

    // // var data = [player2];
    // // var line2 = [accuracy];
    // // var line3 = [precision];
    // // var line4 = [error];
    // // var line5 = [gain];
    // // var line6 = [otr];

    // // draw plots
    // Plotly.newPlot('plotly_spider', data, layout, {displayModeBar: false});
    // Plotly.newPlot('plotly_audio', line2, layout, {displayModeBar: false});
    // Plotly.newPlot('plotly_detection', line3, layout, {displayModeBar: false});
    // Plotly.newPlot('plotly_capacity', line4, layout, {displayModeBar: false});
    // Plotly.newPlot('plotly_tracking', line5, layout, {displayModeBar: false});
    // Plotly.newPlot('plotly_decision', line6, layout, {displayModeBar: false});

    pageloaded() // stop the page loading indication

    // run the six update functions
    update_audiospatial()
    // update_spidershot()
    update_detection()
    update_decisionmaker()
    update_capacity()
    update_freetrack()
    update_reflexshot()
    update_microshot()
    update_motionshot()
    update_blinkshot()
    update_strafeshot()
    update_strafetrack()
    update_circleshot()
    update_circletrack()
    update_pentakill()
    update_ninjashot()

    update_taskTimeseries()


}

// these functions set one of the buttons to loading state while initial charts load
function pageloading() {
  var button_clicked = document.getElementById("pageload_button");
  button_clicked.className = "button is-primary is-small is-loading"
}

function pageloaded() {
  var button_clicked = document.getElementById("pageload_button");
  button_clicked.className = "button is-white has-text-danger is-small is-white"
}





// taskTimeseries
function loading_taskTimeseries() {
  // sets button_update_taskTimeseries to loading styling
  var button_clicked = document.getElementById("button_update_taskTimeseries");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_taskTimeseries() {
  // sets button_update_taskTimeseries to loaded styling
  var button_clicked = document.getElementById("button_update_taskTimeseries");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_taskTimeseries(input_survey_metric_taskTimeseries) {
    text = document.getElementById('survey_metric_id_taskTimeseries')
    text.innerHTML=input_survey_metric_taskTimeseries;
    if(input_survey_metric_taskTimeseries!='Survey'){
       survey_metric_taskTimeseries = input_survey_metric_taskTimeseries;
    }
    console.log(survey_metric_taskTimeseries)
}

function metric_select_aimlab_taskTimeseries(input_aimlab_metric_taskTimeseries) {
    text = document.getElementById('aimlab_metric_id_taskTimeseries')
    text.innerHTML=input_aimlab_metric_taskTimeseries;
    if(input_aimlab_metric_taskTimeseries!='Aim Lab'){
       aimlab_metric_taskTimeseries = input_aimlab_metric_taskTimeseries;
    }
    console.log(aimlab_metric_taskTimeseries)
}

function mode_select_aimlab_taskTimeseries(input_aimlab_mode_taskTimeseries) {
    text = document.getElementById('aimlab_mode_id_taskTimeseries')
    text.innerHTML= 'mode ' + input_aimlab_mode_taskTimeseries;
    if(input_aimlab_mode_taskTimeseries!='Aim Lab'){
       aimlab_mode_taskTimeseries = input_aimlab_mode_taskTimeseries;
    }
    console.log(aimlab_mode_taskTimeseries)
}

function map_select_aimlab_taskTimeseries(input_aimlab_map_taskTimeseries) {
    text = document.getElementById('aimlab_map_id_taskTimeseries')
    text.innerHTML= 'map ' + input_aimlab_map_taskTimeseries;
    if(input_aimlab_map_taskTimeseries!='Aim Lab'){
       aimlab_map_taskTimeseries = input_aimlab_map_taskTimeseries;
    }
    console.log(aimlab_map_taskTimeseries)
}

function task_select_aimlab_taskTimeseries(input_aimlab_task_taskTimeseries) {
    text = document.getElementById('aimlab_task_id_taskTimeseries')
    text.innerHTML= input_aimlab_task_taskTimeseries;
    if(input_aimlab_task_taskTimeseries!='Aim Lab'){
       aimlab_task_taskTimeseries = input_aimlab_task_taskTimeseries;
    }
    console.log(aimlab_task_taskTimeseries)
}

function weaponName_select_aimlab_taskTimeseries(input_aimlab_weaponName_taskTimeseries) {
    text = document.getElementById('aimlab_weaponName_id_taskTimeseries')
    text.innerHTML= input_aimlab_weaponName_taskTimeseries;
    if(input_aimlab_weaponName_taskTimeseries!='Aim Lab'){
       aimlab_weaponName_taskTimeseries = input_aimlab_weaponName_taskTimeseries;
    }
    console.log(aimlab_weaponName_taskTimeseries)
}

function history_select_aimlab_taskTimeseries(input_aimlab_history_taskTimeseries) {
    text = document.getElementById('aimlab_history_id_taskTimeseries')
    text.innerHTML= input_aimlab_history_taskTimeseries + ' days';
    if(input_aimlab_history_taskTimeseries!='Aim Lab'){
       aimlab_history_taskTimeseries = input_aimlab_history_taskTimeseries;
    }
    console.log(aimlab_history_taskTimeseries)
}

aimlab_task_taskTimeseries = 'spidershot'
aimlab_metric_taskTimeseries = 'score' // initial state
survey_metric_taskTimeseries = 'energy' // initial state
aimlab_mode_taskTimeseries = '0'
aimlab_map_taskTimeseries = '0'
aimlab_weaponName_taskTimeseries = '9mm'
aimlab_history_taskTimeseries = 7
function update_taskTimeseries() {
    console.log(aimlab_metric_taskTimeseries)
    console.log(aimlab_mode_taskTimeseries)
    loading_taskTimeseries()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: aimlab_task_taskTimeseries,
            mode: aimlab_mode_taskTimeseries,
            aimlab_map: aimlab_map_taskTimeseries,
            weaponName: aimlab_weaponName_taskTimeseries,
            days_of_history: aimlab_history_taskTimeseries,
            aimlab_metric : aimlab_metric_taskTimeseries,
            survey_metric : survey_metric_taskTimeseries,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_taskTimeseries()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
            connectgaps: true,
            fill: 'tozeroy',
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
            connectgaps: true,
            line: {shape: 'spline'},
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_taskTimeseries', traces, layout, {responsive:true, displayModeBar: false});
    });
}









// spidershot
function loading_spidershot() {
  // sets button_update_spidershot to loading styling
  var button_clicked = document.getElementById("button_update_spidershot");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_spidershot() {
  // sets button_update_spidershot to loaded styling
  var button_clicked = document.getElementById("button_update_spidershot");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_spidershot(input_survey_metric_spidershot) {
    text = document.getElementById('survey_metric_id_spidershot')
    text.innerHTML=input_survey_metric_spidershot;
    if(input_survey_metric_spidershot!='Survey'){
       survey_metric_spidershot = input_survey_metric_spidershot;
    }
    console.log(survey_metric_spidershot)
}

function metric_select_aimlab_spidershot(input_aimlab_metric_spidershot) {
    text = document.getElementById('aimlab_metric_id_spidershot')
    text.innerHTML=input_aimlab_metric_spidershot;
    if(input_aimlab_metric_spidershot!='Aim Lab'){
       aimlab_metric_spidershot = input_aimlab_metric_spidershot;
    }
    console.log(aimlab_metric_spidershot)
}

function mode_select_aimlab_spidershot(input_aimlab_mode_spidershot) {
    text = document.getElementById('aimlab_mode_id_spidershot')
    text.innerHTML= 'mode ' + input_aimlab_mode_spidershot;
    if(input_aimlab_mode_spidershot!='Aim Lab'){
       aimlab_mode_spidershot = input_aimlab_mode_spidershot;
    }
    console.log(aimlab_mode_spidershot)
}

function map_select_aimlab_spidershot(input_aimlab_map_spidershot) {
    text = document.getElementById('aimlab_map_id_spidershot')
    text.innerHTML= 'map ' + input_aimlab_map_spidershot;
    if(input_aimlab_map_spidershot!='Aim Lab'){
       aimlab_map_spidershot = input_aimlab_map_spidershot;
    }
    console.log(aimlab_map_spidershot)
}

function weaponName_select_aimlab_spidershot(input_aimlab_weaponName_spidershot) {
    text = document.getElementById('aimlab_weaponName_id_spidershot')
    text.innerHTML= input_aimlab_weaponName_spidershot;
    if(input_aimlab_weaponName_spidershot!='Aim Lab'){
       aimlab_weaponName_spidershot = input_aimlab_weaponName_spidershot;
    }
    console.log(aimlab_weaponName_spidershot)
}

function history_select_aimlab_spidershot(input_aimlab_history_spidershot) {
    text = document.getElementById('aimlab_history_id_spidershot')
    text.innerHTML= input_aimlab_history_spidershot + ' days';
    if(input_aimlab_history_spidershot!='Aim Lab'){
       aimlab_history_spidershot = input_aimlab_history_spidershot;
    }
    console.log(aimlab_history_spidershot)
}

aimlab_metric_spidershot = 'score' // initial state
survey_metric_spidershot = 'energy' // initial state
aimlab_mode_spidershot = '0'
aimlab_map_spidershot = '0'
aimlab_weaponName_spidershot = '9mm'
aimlab_history_spidershot = 7
function update_spidershot() {
    console.log(aimlab_metric_spidershot)
    console.log(aimlab_mode_spidershot)
    loading_spidershot()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'spidershot',
            mode: aimlab_mode_spidershot,
            aimlab_map: aimlab_map_spidershot,
            weaponName: aimlab_weaponName_spidershot,
            days_of_history: aimlab_history_spidershot,
            aimlab_metric : aimlab_metric_spidershot,
            survey_metric : survey_metric_spidershot,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_spidershot()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_spidershot', traces, layout, {displayModeBar: false, });
    });
}











// freetrack
function loading_freetrack() {
  // sets button_update_freetrack to loading styling
  var button_clicked = document.getElementById("button_update_freetrack");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_freetrack() {
  // sets button_update_freetrack to loaded styling
  var button_clicked = document.getElementById("button_update_freetrack");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_freetrack(input_survey_metric_freetrack) {
    text = document.getElementById('survey_metric_id_freetrack')
    text.innerHTML=input_survey_metric_freetrack;
    if(input_survey_metric_freetrack!='Survey'){
       survey_metric_freetrack = input_survey_metric_freetrack;
    }
    console.log(survey_metric_freetrack)
}

function metric_select_aimlab_freetrack(input_aimlab_metric_freetrack) {
    text = document.getElementById('aimlab_metric_id_freetrack')
    text.innerHTML=input_aimlab_metric_freetrack;
    if(input_aimlab_metric_freetrack!='Aim Lab'){
       aimlab_metric_freetrack = input_aimlab_metric_freetrack;
    }
    console.log(aimlab_metric_freetrack)
}

function mode_select_aimlab_freetrack(input_aimlab_mode_freetrack) {
    text = document.getElementById('aimlab_mode_id_freetrack')
    text.innerHTML= 'mode ' + input_aimlab_mode_freetrack;
    if(input_aimlab_mode_freetrack!='Aim Lab'){
       aimlab_mode_freetrack = input_aimlab_mode_freetrack;
    }
    console.log(aimlab_mode_freetrack)
}

function map_select_aimlab_freetrack(input_aimlab_map_freetrack) {
    text = document.getElementById('aimlab_map_id_freetrack')
    text.innerHTML= 'map ' + input_aimlab_map_freetrack;
    if(input_aimlab_map_freetrack!='Aim Lab'){
       aimlab_map_freetrack = input_aimlab_map_freetrack;
    }
    console.log(aimlab_map_freetrack)
}

function weaponName_select_aimlab_freetrack(input_aimlab_weaponName_freetrack) {
    text = document.getElementById('aimlab_weaponName_id_freetrack')
    text.innerHTML= input_aimlab_weaponName_freetrack;
    if(input_aimlab_weaponName_freetrack!='Aim Lab'){
       aimlab_weaponName_freetrack = input_aimlab_weaponName_freetrack;
    }
    console.log(aimlab_weaponName_freetrack)
}

function history_select_aimlab_freetrack(input_aimlab_history_freetrack) {
    text = document.getElementById('aimlab_history_id_freetrack')
    text.innerHTML= input_aimlab_history_freetrack + ' days';
    if(input_aimlab_history_freetrack!='Aim Lab'){
       aimlab_history_freetrack = input_aimlab_history_freetrack;
    }
    console.log(aimlab_history_freetrack)
}

aimlab_metric_freetrack = 'score' // initial state
survey_metric_freetrack = 'energy' // initial state
aimlab_mode_freetrack = '0'
aimlab_map_freetrack = '0'
aimlab_weaponName_freetrack = '9mm'
aimlab_history_freetrack = 7
function update_freetrack() {
    console.log(aimlab_metric_freetrack)
    console.log(aimlab_mode_freetrack)
    loading_freetrack()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'freetrack',
            mode: aimlab_mode_freetrack,
            aimlab_map: aimlab_map_freetrack,
            weaponName: aimlab_weaponName_freetrack,
            days_of_history: aimlab_history_freetrack,
            aimlab_metric : aimlab_metric_freetrack,
            survey_metric : survey_metric_freetrack,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_freetrack()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_freetrack', traces, layout, {displayModeBar: false});
    });
}




// audiospatial
function loading_audiospatial() {
  // sets button_update_audiospatial to loading styling
  var button_clicked = document.getElementById("button_update_audiospatial");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_audiospatial() {
  // sets button_update_audiospatial to loaded styling
  var button_clicked = document.getElementById("button_update_audiospatial");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_audiospatial(input_survey_metric_audiospatial) {
    text = document.getElementById('survey_metric_id_audiospatial')
    text.innerHTML=input_survey_metric_audiospatial;
    if(input_survey_metric_audiospatial!='Survey'){
       survey_metric_audiospatial = input_survey_metric_audiospatial;
    }
    console.log(survey_metric_audiospatial)
}

function metric_select_aimlab_audiospatial(input_aimlab_metric_audiospatial) {
    text = document.getElementById('aimlab_metric_id_audiospatial')
    text.innerHTML=input_aimlab_metric_audiospatial;
    if(input_aimlab_metric_audiospatial!='Aim Lab'){
       aimlab_metric_audiospatial = input_aimlab_metric_audiospatial;
    }
    console.log(aimlab_metric_audiospatial)
}

function mode_select_aimlab_audiospatial(input_aimlab_mode_audiospatial) {
    text = document.getElementById('aimlab_mode_id_audiospatial')
    text.innerHTML= 'mode ' + input_aimlab_mode_audiospatial;
    if(input_aimlab_mode_audiospatial!='Aim Lab'){
       aimlab_mode_audiospatial = input_aimlab_mode_audiospatial;
    }
    console.log(aimlab_mode_audiospatial)
}

function map_select_aimlab_audiospatial(input_aimlab_map_audiospatial) {
    text = document.getElementById('aimlab_map_id_audiospatial')
    text.innerHTML= 'map ' + input_aimlab_map_audiospatial;
    if(input_aimlab_map_audiospatial!='Aim Lab'){
       aimlab_map_audiospatial = input_aimlab_map_audiospatial;
    }
    console.log(aimlab_map_audiospatial)
}

function weaponName_select_aimlab_audiospatial(input_aimlab_weaponName_audiospatial) {
    text = document.getElementById('aimlab_weaponName_id_audiospatial')
    text.innerHTML= input_aimlab_weaponName_audiospatial;
    if(input_aimlab_weaponName_audiospatial!='Aim Lab'){
       aimlab_weaponName_audiospatial = input_aimlab_weaponName_audiospatial;
    }
    console.log(aimlab_weaponName_audiospatial)
}

function history_select_aimlab_audiospatial(input_aimlab_history_audiospatial) {
    text = document.getElementById('aimlab_history_id_audiospatial')
    text.innerHTML= input_aimlab_history_audiospatial + ' days';
    if(input_aimlab_history_audiospatial!='Aim Lab'){
       aimlab_history_audiospatial = input_aimlab_history_audiospatial;
    }
    console.log(aimlab_history_audiospatial)
}

aimlab_metric_audiospatial = 'score' // initial state
survey_metric_audiospatial = 'energy' // initial state
aimlab_mode_audiospatial = '0'
aimlab_map_audiospatial = '0'
aimlab_weaponName_audiospatial = '9mm'
aimlab_history_audiospatial = 7
function update_audiospatial() {
    console.log(aimlab_metric_audiospatial)
    console.log(aimlab_mode_audiospatial)
    loading_audiospatial()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'audiospatial',
            mode: aimlab_mode_audiospatial,
            aimlab_map: aimlab_map_audiospatial,
            weaponName: aimlab_weaponName_audiospatial,
            days_of_history: aimlab_history_audiospatial,
            aimlab_metric : aimlab_metric_audiospatial,
            survey_metric : survey_metric_audiospatial,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_audiospatial()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_audiospatial', traces, layout, {displayModeBar: false});
    });
}











// detection
function loading_detection() {
  // sets button_update_detection to loading styling
  var button_clicked = document.getElementById("button_update_detection");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_detection() {
  // sets button_update_detection to loaded styling
  var button_clicked = document.getElementById("button_update_detection");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_detection(input_survey_metric_detection) {
    text = document.getElementById('survey_metric_id_detection')
    text.innerHTML=input_survey_metric_detection;
    if(input_survey_metric_detection!='Survey'){
       survey_metric_detection = input_survey_metric_detection;
    }
    console.log(survey_metric_detection)
}

function metric_select_aimlab_detection(input_aimlab_metric_detection) {
    text = document.getElementById('aimlab_metric_id_detection')
    text.innerHTML=input_aimlab_metric_detection;
    if(input_aimlab_metric_detection!='Aim Lab'){
       aimlab_metric_detection = input_aimlab_metric_detection;
    }
    console.log(aimlab_metric_detection)
}

function mode_select_aimlab_detection(input_aimlab_mode_detection) {
    text = document.getElementById('aimlab_mode_id_detection')
    text.innerHTML= 'mode ' + input_aimlab_mode_detection;
    if(input_aimlab_mode_detection!='Aim Lab'){
       aimlab_mode_detection = input_aimlab_mode_detection;
    }
    console.log(aimlab_mode_detection)
}

function map_select_aimlab_detection(input_aimlab_map_detection) {
    text = document.getElementById('aimlab_map_id_detection')
    text.innerHTML= 'map ' + input_aimlab_map_detection;
    if(input_aimlab_map_detection!='Aim Lab'){
       aimlab_map_detection = input_aimlab_map_detection;
    }
    console.log(aimlab_map_detection)
}

function weaponName_select_aimlab_detection(input_aimlab_weaponName_detection) {
    text = document.getElementById('aimlab_weaponName_id_detection')
    text.innerHTML= input_aimlab_weaponName_detection;
    if(input_aimlab_weaponName_detection!='Aim Lab'){
       aimlab_weaponName_detection = input_aimlab_weaponName_detection;
    }
    console.log(aimlab_weaponName_detection)
}

function history_select_aimlab_detection(input_aimlab_history_detection) {
    text = document.getElementById('aimlab_history_id_detection')
    text.innerHTML= input_aimlab_history_detection + ' days';
    if(input_aimlab_history_detection!='Aim Lab'){
       aimlab_history_detection = input_aimlab_history_detection;
    }
    console.log(aimlab_history_detection)
}

aimlab_metric_detection = 'score' // initial state
survey_metric_detection = 'energy' // initial state
aimlab_mode_detection = '0'
aimlab_map_detection = '0'
aimlab_weaponName_detection = '9mm'
aimlab_history_detection = 7
function update_detection() {
    console.log(aimlab_metric_detection)
    console.log(aimlab_mode_detection)
    loading_detection()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'detection',
            mode: aimlab_mode_detection,
            aimlab_map: aimlab_map_detection,
            weaponName: aimlab_weaponName_detection,
            days_of_history: aimlab_history_detection,
            aimlab_metric : aimlab_metric_detection,
            survey_metric : survey_metric_detection,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_detection()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_detection', traces, layout, {displayModeBar: false});
    });
}




// decisionmaker
function loading_decisionmaker() {
  // sets button_update_decisionmaker to loading styling
  var button_clicked = document.getElementById("button_update_decisionmaker");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_decisionmaker() {
  // sets button_update_decisionmaker to loaded styling
  var button_clicked = document.getElementById("button_update_decisionmaker");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_decisionmaker(input_survey_metric_decisionmaker) {
    text = document.getElementById('survey_metric_id_decisionmaker')
    text.innerHTML=input_survey_metric_decisionmaker;
    if(input_survey_metric_decisionmaker!='Survey'){
       survey_metric_decisionmaker = input_survey_metric_decisionmaker;
    }
    console.log(survey_metric_decisionmaker)
}

function metric_select_aimlab_decisionmaker(input_aimlab_metric_decisionmaker) {
    text = document.getElementById('aimlab_metric_id_decisionmaker')
    text.innerHTML=input_aimlab_metric_decisionmaker;
    if(input_aimlab_metric_decisionmaker!='Aim Lab'){
       aimlab_metric_decisionmaker = input_aimlab_metric_decisionmaker;
    }
    console.log(aimlab_metric_decisionmaker)
}

function mode_select_aimlab_decisionmaker(input_aimlab_mode_decisionmaker) {
    text = document.getElementById('aimlab_mode_id_decisionmaker')
    text.innerHTML= 'mode ' + input_aimlab_mode_decisionmaker;
    if(input_aimlab_mode_decisionmaker!='Aim Lab'){
       aimlab_mode_decisionmaker = input_aimlab_mode_decisionmaker;
    }
    console.log(aimlab_mode_decisionmaker)
}

function map_select_aimlab_decisionmaker(input_aimlab_map_decisionmaker) {
    text = document.getElementById('aimlab_map_id_decisionmaker')
    text.innerHTML= 'map ' + input_aimlab_map_decisionmaker;
    if(input_aimlab_map_decisionmaker!='Aim Lab'){
       aimlab_map_decisionmaker = input_aimlab_map_decisionmaker;
    }
    console.log(aimlab_map_decisionmaker)
}

function weaponName_select_aimlab_decisionmaker(input_aimlab_weaponName_decisionmaker) {
    text = document.getElementById('aimlab_weaponName_id_decisionmaker')
    text.innerHTML= input_aimlab_weaponName_decisionmaker;
    if(input_aimlab_weaponName_decisionmaker!='Aim Lab'){
       aimlab_weaponName_decisionmaker = input_aimlab_weaponName_decisionmaker;
    }
    console.log(aimlab_weaponName_decisionmaker)
}

function history_select_aimlab_decisionmaker(input_aimlab_history_decisionmaker) {
    text = document.getElementById('aimlab_history_id_decisionmaker')
    text.innerHTML= input_aimlab_history_decisionmaker + ' days';
    if(input_aimlab_history_decisionmaker!='Aim Lab'){
       aimlab_history_decisionmaker = input_aimlab_history_decisionmaker;
    }
    console.log(aimlab_history_decisionmaker)
}

aimlab_metric_decisionmaker = 'score' // initial state
survey_metric_decisionmaker = 'energy' // initial state
aimlab_mode_decisionmaker = '0'
aimlab_map_decisionmaker = '0'
aimlab_weaponName_decisionmaker = '9mm'
aimlab_history_decisionmaker = 7
function update_decisionmaker() {
    console.log(aimlab_metric_decisionmaker)
    console.log(aimlab_mode_decisionmaker)
    loading_decisionmaker()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'decisionmaker',
            mode: aimlab_mode_decisionmaker,
            aimlab_map: aimlab_map_decisionmaker,
            weaponName: aimlab_weaponName_decisionmaker,
            days_of_history: aimlab_history_decisionmaker,
            aimlab_metric : aimlab_metric_decisionmaker,
            survey_metric : survey_metric_decisionmaker,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_decisionmaker()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_decisionmaker', traces, layout, {displayModeBar: false});
    });
}











// capacity
function loading_capacity() {
  // sets button_update_capacity to loading styling
  var button_clicked = document.getElementById("button_update_capacity");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_capacity() {
  // sets button_update_capacity to loaded styling
  var button_clicked = document.getElementById("button_update_capacity");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_capacity(input_survey_metric_capacity) {
    text = document.getElementById('survey_metric_id_capacity')
    text.innerHTML=input_survey_metric_capacity;
    if(input_survey_metric_capacity!='Survey'){
       survey_metric_capacity = input_survey_metric_capacity;
    }
    console.log(survey_metric_capacity)
}

function metric_select_aimlab_capacity(input_aimlab_metric_capacity) {
    text = document.getElementById('aimlab_metric_id_capacity')
    text.innerHTML=input_aimlab_metric_capacity;
    if(input_aimlab_metric_capacity!='Aim Lab'){
       aimlab_metric_capacity = input_aimlab_metric_capacity;
    }
    console.log(aimlab_metric_capacity)
}

function mode_select_aimlab_capacity(input_aimlab_mode_capacity) {
    text = document.getElementById('aimlab_mode_id_capacity')
    text.innerHTML= 'mode ' + input_aimlab_mode_capacity;
    if(input_aimlab_mode_capacity!='Aim Lab'){
       aimlab_mode_capacity = input_aimlab_mode_capacity;
    }
    console.log(aimlab_mode_capacity)
}

function map_select_aimlab_capacity(input_aimlab_map_capacity) {
    text = document.getElementById('aimlab_map_id_capacity')
    text.innerHTML= 'map ' + input_aimlab_map_capacity;
    if(input_aimlab_map_capacity!='Aim Lab'){
       aimlab_map_capacity = input_aimlab_map_capacity;
    }
    console.log(aimlab_map_capacity)
}

function weaponName_select_aimlab_capacity(input_aimlab_weaponName_capacity) {
    text = document.getElementById('aimlab_weaponName_id_capacity')
    text.innerHTML= input_aimlab_weaponName_capacity;
    if(input_aimlab_weaponName_capacity!='Aim Lab'){
       aimlab_weaponName_capacity = input_aimlab_weaponName_capacity;
    }
    console.log(aimlab_weaponName_capacity)
}

function history_select_aimlab_capacity(input_aimlab_history_capacity) {
    text = document.getElementById('aimlab_history_id_capacity')
    text.innerHTML= input_aimlab_history_capacity + ' days';
    if(input_aimlab_history_capacity!='Aim Lab'){
       aimlab_history_capacity = input_aimlab_history_capacity;
    }
    console.log(aimlab_history_capacity)
}

aimlab_metric_capacity = 'score' // initial state
survey_metric_capacity = 'energy' // initial state
aimlab_mode_capacity = '0'
aimlab_map_capacity = '0'
aimlab_weaponName_capacity = '9mm'
aimlab_history_capacity = 7
function update_capacity() {
    console.log(aimlab_metric_capacity)
    console.log(aimlab_mode_capacity)
    loading_capacity()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'capacity',
            mode: aimlab_mode_capacity,
            aimlab_map: aimlab_map_capacity,
            weaponName: aimlab_weaponName_capacity,
            days_of_history: aimlab_history_capacity,
            aimlab_metric : aimlab_metric_capacity,
            survey_metric : survey_metric_capacity,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_capacity()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_capacity', traces, layout, {displayModeBar: false});
    });
}





// add update functions to create charts

// reflexshot
function loading_reflexshot() {
  // sets button_update_reflexshot to loading styling
  var button_clicked = document.getElementById("button_update_reflexshot");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_reflexshot() {
  // sets button_update_reflexshot to loaded styling
  var button_clicked = document.getElementById("button_update_reflexshot");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_reflexshot(input_survey_metric_reflexshot) {
    text = document.getElementById('survey_metric_id_reflexshot')
    text.innerHTML=input_survey_metric_reflexshot;
    if(input_survey_metric_reflexshot!='Survey'){
       survey_metric_reflexshot = input_survey_metric_reflexshot;
    }
    console.log(survey_metric_reflexshot)
}

function metric_select_aimlab_reflexshot(input_aimlab_metric_reflexshot) {
    text = document.getElementById('aimlab_metric_id_reflexshot')
    text.innerHTML=input_aimlab_metric_reflexshot;
    if(input_aimlab_metric_reflexshot!='Aim Lab'){
       aimlab_metric_reflexshot = input_aimlab_metric_reflexshot;
    }
    console.log(aimlab_metric_reflexshot)
}

function mode_select_aimlab_reflexshot(input_aimlab_mode_reflexshot) {
    text = document.getElementById('aimlab_mode_id_reflexshot')
    text.innerHTML= 'mode ' + input_aimlab_mode_reflexshot;
    if(input_aimlab_mode_reflexshot!='Aim Lab'){
       aimlab_mode_reflexshot = input_aimlab_mode_reflexshot;
    }
    console.log(aimlab_mode_reflexshot)
}

function map_select_aimlab_reflexshot(input_aimlab_map_reflexshot) {
    text = document.getElementById('aimlab_map_id_reflexshot')
    text.innerHTML= 'map ' + input_aimlab_map_reflexshot;
    if(input_aimlab_map_reflexshot!='Aim Lab'){
       aimlab_map_reflexshot = input_aimlab_map_reflexshot;
    }
    console.log(aimlab_map_reflexshot)
}

function weaponName_select_aimlab_reflexshot(input_aimlab_weaponName_reflexshot) {
    text = document.getElementById('aimlab_weaponName_id_reflexshot')
    text.innerHTML= input_aimlab_weaponName_reflexshot;
    if(input_aimlab_weaponName_reflexshot!='Aim Lab'){
       aimlab_weaponName_reflexshot = input_aimlab_weaponName_reflexshot;
    }
    console.log(aimlab_weaponName_reflexshot)
}

function history_select_aimlab_reflexshot(input_aimlab_history_reflexshot) {
    text = document.getElementById('aimlab_history_id_reflexshot')
    text.innerHTML= input_aimlab_history_reflexshot + ' days';
    if(input_aimlab_history_reflexshot!='Aim Lab'){
       aimlab_history_reflexshot = input_aimlab_history_reflexshot;
    }
    console.log(aimlab_history_reflexshot)
}

aimlab_metric_reflexshot = 'score' // initial state
survey_metric_reflexshot = 'energy' // initial state
aimlab_mode_reflexshot = '0'
aimlab_map_reflexshot = '0'
aimlab_weaponName_reflexshot = '9mm'
aimlab_history_reflexshot = 7
function update_reflexshot() {
    console.log(aimlab_metric_reflexshot)
    console.log(aimlab_mode_reflexshot)
    loading_reflexshot()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'reflexshot',
            mode: aimlab_mode_reflexshot,
            aimlab_map: aimlab_map_reflexshot,
            weaponName: aimlab_weaponName_reflexshot,
            days_of_history: aimlab_history_reflexshot,
            aimlab_metric : aimlab_metric_reflexshot,
            survey_metric : survey_metric_reflexshot,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_reflexshot()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_reflexshot', traces, layout, {displayModeBar: false});
    });
}












// microshot
function loading_microshot() {
  // sets button_update_microshot to loading styling
  var button_clicked = document.getElementById("button_update_microshot");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_microshot() {
  // sets button_update_microshot to loaded styling
  var button_clicked = document.getElementById("button_update_microshot");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_microshot(input_survey_metric_microshot) {
    text = document.getElementById('survey_metric_id_microshot')
    text.innerHTML=input_survey_metric_microshot;
    if(input_survey_metric_microshot!='Survey'){
       survey_metric_microshot = input_survey_metric_microshot;
    }
    console.log(survey_metric_microshot)
}

function metric_select_aimlab_microshot(input_aimlab_metric_microshot) {
    text = document.getElementById('aimlab_metric_id_microshot')
    text.innerHTML=input_aimlab_metric_microshot;
    if(input_aimlab_metric_microshot!='Aim Lab'){
       aimlab_metric_microshot = input_aimlab_metric_microshot;
    }
    console.log(aimlab_metric_microshot)
}

function mode_select_aimlab_microshot(input_aimlab_mode_microshot) {
    text = document.getElementById('aimlab_mode_id_microshot')
    text.innerHTML= 'mode ' + input_aimlab_mode_microshot;
    if(input_aimlab_mode_microshot!='Aim Lab'){
       aimlab_mode_microshot = input_aimlab_mode_microshot;
    }
    console.log(aimlab_mode_microshot)
}

function map_select_aimlab_microshot(input_aimlab_map_microshot) {
    text = document.getElementById('aimlab_map_id_microshot')
    text.innerHTML= 'map ' + input_aimlab_map_microshot;
    if(input_aimlab_map_microshot!='Aim Lab'){
       aimlab_map_microshot = input_aimlab_map_microshot;
    }
    console.log(aimlab_map_microshot)
}

function weaponName_select_aimlab_microshot(input_aimlab_weaponName_microshot) {
    text = document.getElementById('aimlab_weaponName_id_microshot')
    text.innerHTML= input_aimlab_weaponName_microshot;
    if(input_aimlab_weaponName_microshot!='Aim Lab'){
       aimlab_weaponName_microshot = input_aimlab_weaponName_microshot;
    }
    console.log(aimlab_weaponName_microshot)
}

function history_select_aimlab_microshot(input_aimlab_history_microshot) {
    text = document.getElementById('aimlab_history_id_microshot')
    text.innerHTML= input_aimlab_history_microshot + ' days';
    if(input_aimlab_history_microshot!='Aim Lab'){
       aimlab_history_microshot = input_aimlab_history_microshot;
    }
    console.log(aimlab_history_microshot)
}

aimlab_metric_microshot = 'score' // initial state
survey_metric_microshot = 'energy' // initial state
aimlab_mode_microshot = '0'
aimlab_map_microshot = '0'
aimlab_weaponName_microshot = '9mm'
aimlab_history_microshot = 7
function update_microshot() {
    console.log(aimlab_metric_microshot)
    console.log(aimlab_mode_microshot)
    loading_microshot()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'microshot',
            mode: aimlab_mode_microshot,
            aimlab_map: aimlab_map_microshot,
            weaponName: aimlab_weaponName_microshot,
            days_of_history: aimlab_history_microshot,
            aimlab_metric : aimlab_metric_microshot,
            survey_metric : survey_metric_microshot,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_microshot()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_microshot', traces, layout, {displayModeBar: false});
    });
}









// motionshot
function loading_motionshot() {
  // sets button_update_motionshot to loading styling
  var button_clicked = document.getElementById("button_update_motionshot");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_motionshot() {
  // sets button_update_motionshot to loaded styling
  var button_clicked = document.getElementById("button_update_motionshot");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_motionshot(input_survey_metric_motionshot) {
    text = document.getElementById('survey_metric_id_motionshot')
    text.innerHTML=input_survey_metric_motionshot;
    if(input_survey_metric_motionshot!='Survey'){
       survey_metric_motionshot = input_survey_metric_motionshot;
    }
    console.log(survey_metric_motionshot)
}

function metric_select_aimlab_motionshot(input_aimlab_metric_motionshot) {
    text = document.getElementById('aimlab_metric_id_motionshot')
    text.innerHTML=input_aimlab_metric_motionshot;
    if(input_aimlab_metric_motionshot!='Aim Lab'){
       aimlab_metric_motionshot = input_aimlab_metric_motionshot;
    }
    console.log(aimlab_metric_motionshot)
}

function mode_select_aimlab_motionshot(input_aimlab_mode_motionshot) {
    text = document.getElementById('aimlab_mode_id_motionshot')
    text.innerHTML= 'mode ' + input_aimlab_mode_motionshot;
    if(input_aimlab_mode_motionshot!='Aim Lab'){
       aimlab_mode_motionshot = input_aimlab_mode_motionshot;
    }
    console.log(aimlab_mode_motionshot)
}

function map_select_aimlab_motionshot(input_aimlab_map_motionshot) {
    text = document.getElementById('aimlab_map_id_motionshot')
    text.innerHTML= 'map ' + input_aimlab_map_motionshot;
    if(input_aimlab_map_motionshot!='Aim Lab'){
       aimlab_map_motionshot = input_aimlab_map_motionshot;
    }
    console.log(aimlab_map_motionshot)
}

function weaponName_select_aimlab_motionshot(input_aimlab_weaponName_motionshot) {
    text = document.getElementById('aimlab_weaponName_id_motionshot')
    text.innerHTML= input_aimlab_weaponName_motionshot;
    if(input_aimlab_weaponName_motionshot!='Aim Lab'){
       aimlab_weaponName_motionshot = input_aimlab_weaponName_motionshot;
    }
    console.log(aimlab_weaponName_motionshot)
}

function history_select_aimlab_motionshot(input_aimlab_history_motionshot) {
    text = document.getElementById('aimlab_history_id_motionshot')
    text.innerHTML= input_aimlab_history_motionshot + ' days';
    if(input_aimlab_history_motionshot!='Aim Lab'){
       aimlab_history_motionshot = input_aimlab_history_motionshot;
    }
    console.log(aimlab_history_motionshot)
}

aimlab_metric_motionshot = 'score' // initial state
survey_metric_motionshot = 'energy' // initial state
aimlab_mode_motionshot = '0'
aimlab_map_motionshot = '0'
aimlab_weaponName_motionshot = '9mm'
aimlab_history_motionshot = 7
function update_motionshot() {
    console.log(aimlab_metric_motionshot)
    console.log(aimlab_mode_motionshot)
    loading_motionshot()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'motionshot',
            mode: aimlab_mode_motionshot,
            aimlab_map: aimlab_map_motionshot,
            weaponName: aimlab_weaponName_motionshot,
            days_of_history: aimlab_history_motionshot,
            aimlab_metric : aimlab_metric_motionshot,
            survey_metric : survey_metric_motionshot,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_motionshot()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_motionshot', traces, layout, {displayModeBar: false});
    });
}











// blinkshot
function loading_blinkshot() {
  // sets button_update_blinkshot to loading styling
  var button_clicked = document.getElementById("button_update_blinkshot");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_blinkshot() {
  // sets button_update_blinkshot to loaded styling
  var button_clicked = document.getElementById("button_update_blinkshot");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_blinkshot(input_survey_metric_blinkshot) {
    text = document.getElementById('survey_metric_id_blinkshot')
    text.innerHTML=input_survey_metric_blinkshot;
    if(input_survey_metric_blinkshot!='Survey'){
       survey_metric_blinkshot = input_survey_metric_blinkshot;
    }
    console.log(survey_metric_blinkshot)
}

function metric_select_aimlab_blinkshot(input_aimlab_metric_blinkshot) {
    text = document.getElementById('aimlab_metric_id_blinkshot')
    text.innerHTML=input_aimlab_metric_blinkshot;
    if(input_aimlab_metric_blinkshot!='Aim Lab'){
       aimlab_metric_blinkshot = input_aimlab_metric_blinkshot;
    }
    console.log(aimlab_metric_blinkshot)
}

function mode_select_aimlab_blinkshot(input_aimlab_mode_blinkshot) {
    text = document.getElementById('aimlab_mode_id_blinkshot')
    text.innerHTML= 'mode ' + input_aimlab_mode_blinkshot;
    if(input_aimlab_mode_blinkshot!='Aim Lab'){
       aimlab_mode_blinkshot = input_aimlab_mode_blinkshot;
    }
    console.log(aimlab_mode_blinkshot)
}

function map_select_aimlab_blinkshot(input_aimlab_map_blinkshot) {
    text = document.getElementById('aimlab_map_id_blinkshot')
    text.innerHTML= 'map ' + input_aimlab_map_blinkshot;
    if(input_aimlab_map_blinkshot!='Aim Lab'){
       aimlab_map_blinkshot = input_aimlab_map_blinkshot;
    }
    console.log(aimlab_map_blinkshot)
}

function weaponName_select_aimlab_blinkshot(input_aimlab_weaponName_blinkshot) {
    text = document.getElementById('aimlab_weaponName_id_blinkshot')
    text.innerHTML= input_aimlab_weaponName_blinkshot;
    if(input_aimlab_weaponName_blinkshot!='Aim Lab'){
       aimlab_weaponName_blinkshot = input_aimlab_weaponName_blinkshot;
    }
    console.log(aimlab_weaponName_blinkshot)
}

function history_select_aimlab_blinkshot(input_aimlab_history_blinkshot) {
    text = document.getElementById('aimlab_history_id_blinkshot')
    text.innerHTML= input_aimlab_history_blinkshot + ' days';
    if(input_aimlab_history_blinkshot!='Aim Lab'){
       aimlab_history_blinkshot = input_aimlab_history_blinkshot;
    }
    console.log(aimlab_history_blinkshot)
}

aimlab_metric_blinkshot = 'score' // initial state
survey_metric_blinkshot = 'energy' // initial state
aimlab_mode_blinkshot = '0'
aimlab_map_blinkshot = '0'
aimlab_weaponName_blinkshot = '9mm'
aimlab_history_blinkshot = 7
function update_blinkshot() {
    console.log(aimlab_metric_blinkshot)
    console.log(aimlab_mode_blinkshot)
    loading_blinkshot()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'blinkshot',
            mode: aimlab_mode_blinkshot,
            aimlab_map: aimlab_map_blinkshot,
            weaponName: aimlab_weaponName_blinkshot,
            days_of_history: aimlab_history_blinkshot,
            aimlab_metric : aimlab_metric_blinkshot,
            survey_metric : survey_metric_blinkshot,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_blinkshot()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_blinkshot', traces, layout, {displayModeBar: false});
    });
}



// strafeshot
function loading_strafeshot() {
  // sets button_update_strafeshot to loading styling
  var button_clicked = document.getElementById("button_update_strafeshot");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_strafeshot() {
  // sets button_update_strafeshot to loaded styling
  var button_clicked = document.getElementById("button_update_strafeshot");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_strafeshot(input_survey_metric_strafeshot) {
    text = document.getElementById('survey_metric_id_strafeshot')
    text.innerHTML=input_survey_metric_strafeshot;
    if(input_survey_metric_strafeshot!='Survey'){
       survey_metric_strafeshot = input_survey_metric_strafeshot;
    }
    console.log(survey_metric_strafeshot)
}

function metric_select_aimlab_strafeshot(input_aimlab_metric_strafeshot) {
    text = document.getElementById('aimlab_metric_id_strafeshot')
    text.innerHTML=input_aimlab_metric_strafeshot;
    if(input_aimlab_metric_strafeshot!='Aim Lab'){
       aimlab_metric_strafeshot = input_aimlab_metric_strafeshot;
    }
    console.log(aimlab_metric_strafeshot)
}

function mode_select_aimlab_strafeshot(input_aimlab_mode_strafeshot) {
    text = document.getElementById('aimlab_mode_id_strafeshot')
    text.innerHTML= 'mode ' + input_aimlab_mode_strafeshot;
    if(input_aimlab_mode_strafeshot!='Aim Lab'){
       aimlab_mode_strafeshot = input_aimlab_mode_strafeshot;
    }
    console.log(aimlab_mode_strafeshot)
}

function map_select_aimlab_strafeshot(input_aimlab_map_strafeshot) {
    text = document.getElementById('aimlab_map_id_strafeshot')
    text.innerHTML= 'map ' + input_aimlab_map_strafeshot;
    if(input_aimlab_map_strafeshot!='Aim Lab'){
       aimlab_map_strafeshot = input_aimlab_map_strafeshot;
    }
    console.log(aimlab_map_strafeshot)
}

function weaponName_select_aimlab_strafeshot(input_aimlab_weaponName_strafeshot) {
    text = document.getElementById('aimlab_weaponName_id_strafeshot')
    text.innerHTML= input_aimlab_weaponName_strafeshot;
    if(input_aimlab_weaponName_strafeshot!='Aim Lab'){
       aimlab_weaponName_strafeshot = input_aimlab_weaponName_strafeshot;
    }
    console.log(aimlab_weaponName_strafeshot)
}

function history_select_aimlab_strafeshot(input_aimlab_history_strafeshot) {
    text = document.getElementById('aimlab_history_id_strafeshot')
    text.innerHTML= input_aimlab_history_strafeshot + ' days';
    if(input_aimlab_history_strafeshot!='Aim Lab'){
       aimlab_history_strafeshot = input_aimlab_history_strafeshot;
    }
    console.log(aimlab_history_strafeshot)
}

aimlab_metric_strafeshot = 'score' // initial state
survey_metric_strafeshot = 'energy' // initial state
aimlab_mode_strafeshot = '0'
aimlab_map_strafeshot = '0'
aimlab_weaponName_strafeshot = '9mm'
aimlab_history_strafeshot = 7
function update_strafeshot() {
    console.log(aimlab_metric_strafeshot)
    console.log(aimlab_mode_strafeshot)
    loading_strafeshot()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'strafeshot',
            mode: aimlab_mode_strafeshot,
            aimlab_map: aimlab_map_strafeshot,
            weaponName: aimlab_weaponName_strafeshot,
            days_of_history: aimlab_history_strafeshot,
            aimlab_metric : aimlab_metric_strafeshot,
            survey_metric : survey_metric_strafeshot,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_strafeshot()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_strafeshot', traces, layout, {displayModeBar: false});
    });
}











// strafetrack
function loading_strafetrack() {
  // sets button_update_strafetrack to loading styling
  var button_clicked = document.getElementById("button_update_strafetrack");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_strafetrack() {
  // sets button_update_strafetrack to loaded styling
  var button_clicked = document.getElementById("button_update_strafetrack");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_strafetrack(input_survey_metric_strafetrack) {
    text = document.getElementById('survey_metric_id_strafetrack')
    text.innerHTML=input_survey_metric_strafetrack;
    if(input_survey_metric_strafetrack!='Survey'){
       survey_metric_strafetrack = input_survey_metric_strafetrack;
    }
    console.log(survey_metric_strafetrack)
}

function metric_select_aimlab_strafetrack(input_aimlab_metric_strafetrack) {
    text = document.getElementById('aimlab_metric_id_strafetrack')
    text.innerHTML=input_aimlab_metric_strafetrack;
    if(input_aimlab_metric_strafetrack!='Aim Lab'){
       aimlab_metric_strafetrack = input_aimlab_metric_strafetrack;
    }
    console.log(aimlab_metric_strafetrack)
}

function mode_select_aimlab_strafetrack(input_aimlab_mode_strafetrack) {
    text = document.getElementById('aimlab_mode_id_strafetrack')
    text.innerHTML= 'mode ' + input_aimlab_mode_strafetrack;
    if(input_aimlab_mode_strafetrack!='Aim Lab'){
       aimlab_mode_strafetrack = input_aimlab_mode_strafetrack;
    }
    console.log(aimlab_mode_strafetrack)
}

function map_select_aimlab_strafetrack(input_aimlab_map_strafetrack) {
    text = document.getElementById('aimlab_map_id_strafetrack')
    text.innerHTML= 'map ' + input_aimlab_map_strafetrack;
    if(input_aimlab_map_strafetrack!='Aim Lab'){
       aimlab_map_strafetrack = input_aimlab_map_strafetrack;
    }
    console.log(aimlab_map_strafetrack)
}

function weaponName_select_aimlab_strafetrack(input_aimlab_weaponName_strafetrack) {
    text = document.getElementById('aimlab_weaponName_id_strafetrack')
    text.innerHTML= input_aimlab_weaponName_strafetrack;
    if(input_aimlab_weaponName_strafetrack!='Aim Lab'){
       aimlab_weaponName_strafetrack = input_aimlab_weaponName_strafetrack;
    }
    console.log(aimlab_weaponName_strafetrack)
}

function history_select_aimlab_strafetrack(input_aimlab_history_strafetrack) {
    text = document.getElementById('aimlab_history_id_strafetrack')
    text.innerHTML= input_aimlab_history_strafetrack + ' days';
    if(input_aimlab_history_strafetrack!='Aim Lab'){
       aimlab_history_strafetrack = input_aimlab_history_strafetrack;
    }
    console.log(aimlab_history_strafetrack)
}

aimlab_metric_strafetrack = 'score' // initial state
survey_metric_strafetrack = 'energy' // initial state
aimlab_mode_strafetrack = '0'
aimlab_map_strafetrack = '0'
aimlab_weaponName_strafetrack = '9mm'
aimlab_history_strafetrack = 7
function update_strafetrack() {
    console.log(aimlab_metric_strafetrack)
    console.log(aimlab_mode_strafetrack)
    loading_strafetrack()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'strafetrack',
            mode: aimlab_mode_strafetrack,
            aimlab_map: aimlab_map_strafetrack,
            weaponName: aimlab_weaponName_strafetrack,
            days_of_history: aimlab_history_strafetrack,
            aimlab_metric : aimlab_metric_strafetrack,
            survey_metric : survey_metric_strafetrack,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_strafetrack()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_strafetrack', traces, layout, {displayModeBar: false});
    });
}



// circleshot
function loading_circleshot() {
  // sets button_update_circleshot to loading styling
  var button_clicked = document.getElementById("button_update_circleshot");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_circleshot() {
  // sets button_update_circleshot to loaded styling
  var button_clicked = document.getElementById("button_update_circleshot");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_circleshot(input_survey_metric_circleshot) {
    text = document.getElementById('survey_metric_id_circleshot')
    text.innerHTML=input_survey_metric_circleshot;
    if(input_survey_metric_circleshot!='Survey'){
       survey_metric_circleshot = input_survey_metric_circleshot;
    }
    console.log(survey_metric_circleshot)
}

function metric_select_aimlab_circleshot(input_aimlab_metric_circleshot) {
    text = document.getElementById('aimlab_metric_id_circleshot')
    text.innerHTML=input_aimlab_metric_circleshot;
    if(input_aimlab_metric_circleshot!='Aim Lab'){
       aimlab_metric_circleshot = input_aimlab_metric_circleshot;
    }
    console.log(aimlab_metric_circleshot)
}

function mode_select_aimlab_circleshot(input_aimlab_mode_circleshot) {
    text = document.getElementById('aimlab_mode_id_circleshot')
    text.innerHTML= 'mode ' + input_aimlab_mode_circleshot;
    if(input_aimlab_mode_circleshot!='Aim Lab'){
       aimlab_mode_circleshot = input_aimlab_mode_circleshot;
    }
    console.log(aimlab_mode_circleshot)
}

function map_select_aimlab_circleshot(input_aimlab_map_circleshot) {
    text = document.getElementById('aimlab_map_id_circleshot')
    text.innerHTML= 'map ' + input_aimlab_map_circleshot;
    if(input_aimlab_map_circleshot!='Aim Lab'){
       aimlab_map_circleshot = input_aimlab_map_circleshot;
    }
    console.log(aimlab_map_circleshot)
}

function weaponName_select_aimlab_circleshot(input_aimlab_weaponName_circleshot) {
    text = document.getElementById('aimlab_weaponName_id_circleshot')
    text.innerHTML= input_aimlab_weaponName_circleshot;
    if(input_aimlab_weaponName_circleshot!='Aim Lab'){
       aimlab_weaponName_circleshot = input_aimlab_weaponName_circleshot;
    }
    console.log(aimlab_weaponName_circleshot)
}

function history_select_aimlab_circleshot(input_aimlab_history_circleshot) {
    text = document.getElementById('aimlab_history_id_circleshot')
    text.innerHTML= input_aimlab_history_circleshot + ' days';
    if(input_aimlab_history_circleshot!='Aim Lab'){
       aimlab_history_circleshot = input_aimlab_history_circleshot;
    }
    console.log(aimlab_history_circleshot)
}

aimlab_metric_circleshot = 'score' // initial state
survey_metric_circleshot = 'energy' // initial state
aimlab_mode_circleshot = '0'
aimlab_map_circleshot = '0'
aimlab_weaponName_circleshot = '9mm'
aimlab_history_circleshot = 7
function update_circleshot() {
    console.log(aimlab_metric_circleshot)
    console.log(aimlab_mode_circleshot)
    loading_circleshot()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'circleshot',
            mode: aimlab_mode_circleshot,
            aimlab_map: aimlab_map_circleshot,
            weaponName: aimlab_weaponName_circleshot,
            days_of_history: aimlab_history_circleshot,
            aimlab_metric : aimlab_metric_circleshot,
            survey_metric : survey_metric_circleshot,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_circleshot()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_circleshot', traces, layout, {displayModeBar: false});
    });
}











// circletrack
function loading_circletrack() {
  // sets button_update_circletrack to loading styling
  var button_clicked = document.getElementById("button_update_circletrack");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_circletrack() {
  // sets button_update_circletrack to loaded styling
  var button_clicked = document.getElementById("button_update_circletrack");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_circletrack(input_survey_metric_circletrack) {
    text = document.getElementById('survey_metric_id_circletrack')
    text.innerHTML=input_survey_metric_circletrack;
    if(input_survey_metric_circletrack!='Survey'){
       survey_metric_circletrack = input_survey_metric_circletrack;
    }
    console.log(survey_metric_circletrack)
}

function metric_select_aimlab_circletrack(input_aimlab_metric_circletrack) {
    text = document.getElementById('aimlab_metric_id_circletrack')
    text.innerHTML=input_aimlab_metric_circletrack;
    if(input_aimlab_metric_circletrack!='Aim Lab'){
       aimlab_metric_circletrack = input_aimlab_metric_circletrack;
    }
    console.log(aimlab_metric_circletrack)
}

function mode_select_aimlab_circletrack(input_aimlab_mode_circletrack) {
    text = document.getElementById('aimlab_mode_id_circletrack')
    text.innerHTML= 'mode ' + input_aimlab_mode_circletrack;
    if(input_aimlab_mode_circletrack!='Aim Lab'){
       aimlab_mode_circletrack = input_aimlab_mode_circletrack;
    }
    console.log(aimlab_mode_circletrack)
}

function map_select_aimlab_circletrack(input_aimlab_map_circletrack) {
    text = document.getElementById('aimlab_map_id_circletrack')
    text.innerHTML= 'map ' + input_aimlab_map_circletrack;
    if(input_aimlab_map_circletrack!='Aim Lab'){
       aimlab_map_circletrack = input_aimlab_map_circletrack;
    }
    console.log(aimlab_map_circletrack)
}

function weaponName_select_aimlab_circletrack(input_aimlab_weaponName_circletrack) {
    text = document.getElementById('aimlab_weaponName_id_circletrack')
    text.innerHTML= input_aimlab_weaponName_circletrack;
    if(input_aimlab_weaponName_circletrack!='Aim Lab'){
       aimlab_weaponName_circletrack = input_aimlab_weaponName_circletrack;
    }
    console.log(aimlab_weaponName_circletrack)
}

function history_select_aimlab_circletrack(input_aimlab_history_circletrack) {
    text = document.getElementById('aimlab_history_id_circletrack')
    text.innerHTML= input_aimlab_history_circletrack + ' days';
    if(input_aimlab_history_circletrack!='Aim Lab'){
       aimlab_history_circletrack = input_aimlab_history_circletrack;
    }
    console.log(aimlab_history_circletrack)
}

aimlab_metric_circletrack = 'score' // initial state
survey_metric_circletrack = 'energy' // initial state
aimlab_mode_circletrack = '0'
aimlab_map_circletrack = '0'
aimlab_weaponName_circletrack = '9mm'
aimlab_history_circletrack = 7
function update_circletrack() {
    console.log(aimlab_metric_circletrack)
    console.log(aimlab_mode_circletrack)
    loading_circletrack()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'circletrack',
            mode: aimlab_mode_circletrack,
            aimlab_map: aimlab_map_circletrack,
            weaponName: aimlab_weaponName_circletrack,
            days_of_history: aimlab_history_circletrack,
            aimlab_metric : aimlab_metric_circletrack,
            survey_metric : survey_metric_circletrack,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_circletrack()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_circletrack', traces, layout, {displayModeBar: false});
    });
}


// ninjashot
function loading_ninjashot() {
  // sets button_update_ninjashot to loading styling
  var button_clicked = document.getElementById("button_update_ninjashot");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_ninjashot() {
  // sets button_update_ninjashot to loaded styling
  var button_clicked = document.getElementById("button_update_ninjashot");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_ninjashot(input_survey_metric_ninjashot) {
    text = document.getElementById('survey_metric_id_ninjashot')
    text.innerHTML=input_survey_metric_ninjashot;
    if(input_survey_metric_ninjashot!='Survey'){
       survey_metric_ninjashot = input_survey_metric_ninjashot;
    }
    console.log(survey_metric_ninjashot)
}

function metric_select_aimlab_ninjashot(input_aimlab_metric_ninjashot) {
    text = document.getElementById('aimlab_metric_id_ninjashot')
    text.innerHTML=input_aimlab_metric_ninjashot;
    if(input_aimlab_metric_ninjashot!='Aim Lab'){
       aimlab_metric_ninjashot = input_aimlab_metric_ninjashot;
    }
    console.log(aimlab_metric_ninjashot)
}

function mode_select_aimlab_ninjashot(input_aimlab_mode_ninjashot) {
    text = document.getElementById('aimlab_mode_id_ninjashot')
    text.innerHTML= 'mode ' + input_aimlab_mode_ninjashot;
    if(input_aimlab_mode_ninjashot!='Aim Lab'){
       aimlab_mode_ninjashot = input_aimlab_mode_ninjashot;
    }
    console.log(aimlab_mode_ninjashot)
}

function map_select_aimlab_ninjashot(input_aimlab_map_ninjashot) {
    text = document.getElementById('aimlab_map_id_ninjashot')
    text.innerHTML= 'map ' + input_aimlab_map_ninjashot;
    if(input_aimlab_map_ninjashot!='Aim Lab'){
       aimlab_map_ninjashot = input_aimlab_map_ninjashot;
    }
    console.log(aimlab_map_ninjashot)
}

function weaponName_select_aimlab_ninjashot(input_aimlab_weaponName_ninjashot) {
    text = document.getElementById('aimlab_weaponName_id_ninjashot')
    text.innerHTML= input_aimlab_weaponName_ninjashot;
    if(input_aimlab_weaponName_ninjashot!='Aim Lab'){
       aimlab_weaponName_ninjashot = input_aimlab_weaponName_ninjashot;
    }
    console.log(aimlab_weaponName_ninjashot)
}

function history_select_aimlab_ninjashot(input_aimlab_history_ninjashot) {
    text = document.getElementById('aimlab_history_id_ninjashot')
    text.innerHTML= input_aimlab_history_ninjashot + ' days';
    if(input_aimlab_history_ninjashot!='Aim Lab'){
       aimlab_history_ninjashot = input_aimlab_history_ninjashot;
    }
    console.log(aimlab_history_ninjashot)
}

aimlab_metric_ninjashot = 'score' // initial state
survey_metric_ninjashot = 'energy' // initial state
aimlab_mode_ninjashot = '0'
aimlab_map_ninjashot = '0'
aimlab_weaponName_ninjashot = '9mm'
aimlab_history_ninjashot = 7
function update_ninjashot() {
    console.log(aimlab_metric_ninjashot)
    console.log(aimlab_mode_ninjashot)
    loading_ninjashot()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'ninjashot',
            mode: aimlab_mode_ninjashot,
            aimlab_map: aimlab_map_ninjashot,
            weaponName: aimlab_weaponName_ninjashot,
            days_of_history: aimlab_history_ninjashot,
            aimlab_metric : aimlab_metric_ninjashot,
            survey_metric : survey_metric_ninjashot,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_ninjashot()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_ninjashot', traces, layout, {displayModeBar: false});
    });
}











// pentakill
function loading_pentakill() {
  // sets button_update_pentakill to loading styling
  var button_clicked = document.getElementById("button_update_pentakill");
  button_clicked.className = "button is-primary has-text-grey is-small is-loading"
}

function loaded_pentakill() {
  // sets button_update_pentakill to loaded styling
  var button_clicked = document.getElementById("button_update_pentakill");
  button_clicked.className = "button is-white has-text-grey is-small"
}


function metric_select_survey_pentakill(input_survey_metric_pentakill) {
    text = document.getElementById('survey_metric_id_pentakill')
    text.innerHTML=input_survey_metric_pentakill;
    if(input_survey_metric_pentakill!='Survey'){
       survey_metric_pentakill = input_survey_metric_pentakill;
    }
    console.log(survey_metric_pentakill)
}

function metric_select_aimlab_pentakill(input_aimlab_metric_pentakill) {
    text = document.getElementById('aimlab_metric_id_pentakill')
    text.innerHTML=input_aimlab_metric_pentakill;
    if(input_aimlab_metric_pentakill!='Aim Lab'){
       aimlab_metric_pentakill = input_aimlab_metric_pentakill;
    }
    console.log(aimlab_metric_pentakill)
}

function mode_select_aimlab_pentakill(input_aimlab_mode_pentakill) {
    text = document.getElementById('aimlab_mode_id_pentakill')
    text.innerHTML= 'mode ' + input_aimlab_mode_pentakill;
    if(input_aimlab_mode_pentakill!='Aim Lab'){
       aimlab_mode_pentakill = input_aimlab_mode_pentakill;
    }
    console.log(aimlab_mode_pentakill)
}

function map_select_aimlab_pentakill(input_aimlab_map_pentakill) {
    text = document.getElementById('aimlab_map_id_pentakill')
    text.innerHTML= 'map ' + input_aimlab_map_pentakill;
    if(input_aimlab_map_pentakill!='Aim Lab'){
       aimlab_map_pentakill = input_aimlab_map_pentakill;
    }
    console.log(aimlab_map_pentakill)
}

function weaponName_select_aimlab_pentakill(input_aimlab_weaponName_pentakill) {
    text = document.getElementById('aimlab_weaponName_id_pentakill')
    text.innerHTML= input_aimlab_weaponName_pentakill;
    if(input_aimlab_weaponName_pentakill!='Aim Lab'){
       aimlab_weaponName_pentakill = input_aimlab_weaponName_pentakill;
    }
    console.log(aimlab_weaponName_pentakill)
}

function history_select_aimlab_pentakill(input_aimlab_history_pentakill) {
    text = document.getElementById('aimlab_history_id_pentakill')
    text.innerHTML= input_aimlab_history_pentakill + ' days';
    if(input_aimlab_history_pentakill!='Aim Lab'){
       aimlab_history_pentakill = input_aimlab_history_pentakill;
    }
    console.log(aimlab_history_pentakill)
}

aimlab_metric_pentakill = 'score' // initial state
survey_metric_pentakill = 'energy' // initial state
aimlab_mode_pentakill = '0'
aimlab_map_pentakill = '0'
aimlab_weaponName_pentakill = '9mm'
aimlab_history_pentakill = 7
function update_pentakill() {
    console.log(aimlab_metric_pentakill)
    console.log(aimlab_mode_pentakill)
    loading_pentakill()
    var jsonData = $.ajax({
        url: window.location.href.replace("al_profile", "al_metric"),
        dataType: 'json',
        data: {
            taskname: 'pentakill',
            mode: aimlab_mode_pentakill,
            aimlab_map: aimlab_map_pentakill,
            weaponName: aimlab_weaponName_pentakill,
            days_of_history: aimlab_history_pentakill,
            aimlab_metric : aimlab_metric_pentakill,
            survey_metric : survey_metric_pentakill,
        },
        type: 'get'
    }).done(function(results) {
        data_2_plot = results;
        loaded_pentakill()
        aimlab_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.aimlab_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'aimlab',
            marker: marker_style,
            line: line_style,
          }
        survey_trace = {
            x: data_2_plot.indices,
            y: data_2_plot.survey_metric,
            text: data_2_plot.dates,
            type: trace_type,
            name: 'survey',
            marker: marker_style2,
            line: line_style,
            yaxis: 'y2',
          }

          traces = [survey_trace, aimlab_trace]

        Plotly.newPlot('plotly_pentakill', traces, layout, {displayModeBar: false});
    });
}


// in html:
// onload="get_json_data('{{steam_danger['steamid']}}');"{% endblock %}

// function get_json_data(names) {
//     var jsonData = $.ajax({
//         url: window.location.href.replace("al_profile", "al_profile_json"),
//         dataType: 'json',
//         data: {
//             taskname: 'spidershot',
//             mode: '0'
//         },
//         type: 'get'
//     }).done(function(results) {
//         profile_json = results;
//         create_charts()
//         pageloaded()
//         // display_Spidershot();
//         // console.log('rock')
//         // console.log(names)
//     });
// }



// window.onresize = function() {
//   Plotly.relayout(myDiv, {
//     width: 250 * (window.innerWidth/windoww),
//     height: 250 * (window.innerHeight/windowh)
//   })
// }


// window.onresize = function() {
//   Plotly.relayout(myDiv3, {
//     width: 250 * (window.innerWidth/windoww),
//     height: 250 * (window.innerHeight/windowh)
//   })
// }



// in the application
  // profile_json query to get data for last 14 days
    // inlcude appropriate permissions
      // if steam id, or
  // TBD_json to get the mood data
    // may be able to use the same query as above

// other
  // make figures reponsive in size
    // make figure size small for now
    // make size of figure auto
    // make 2 columns of three rows
  // create special page for Admins to be able to view players
    // hard code in the links to those profile_pages
  // strip out the uneeded menu options for now, or grey them out
  // tables to view the data
   // API endpoint



var bar1 = {
  x: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14'],
  y: [20, 14, 23, 15, 18, 27, 32, 29, 32, 33, 34, 30, 35, 39],
  name: 'Jay',
  type: 'bar'
};

var bar2 = {
  x: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14'],
  y: [20, 14, 14, 15, 18, 27, 32, 29, 32, 33, 34, 36, 34, 37],
  name: 'Wayne',
  type: 'bar'
};

var bar3 = {
  x: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14'],
  y: [20, 14, 14, 15, 18, 27, 32, 29, 32, 33, 34, 36, 34, 37],
  name: 'Rohan',
  type: 'bar'
};

var bar4 = {
  x: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14'],
  y: [20, 14, 14, 15, 18, 27, 32, 29, 32, 70, 34, 36, 34, 37],
  name: 'Brian',
  type: 'bar'
};

var bar5 = {
  x: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14'],
  y: [20, 14, 14, 15, 18, 27, 32, 29, 32, 33, 34, 36, 34, 37],
  name: 'Alex',
  type: 'bar'
};

var data_bar = [bar1, bar2, bar3, bar4, bar5];

var layout_bar = {barmode: 'stack'};

Plotly.newPlot('stacked_bar', data_bar, layout_bar, {responsive:true, displayModeBar: false});






var data_pie = [{
  values: [16, 15, 12, 6, 5, 4, 42],
  labels: ['Pistol', 'AKM', 'SCAR', 'SMG', 'Shotgun', 'LG', 'Rocket' ],
  domain: {column: 0},
  name: 'Weapons',
  hoverinfo: 'label+percent+name',
  hole: .8,
  type: 'pie'
},{
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['Map1', 'Map2', 'Map3', 'Map4', 'Map5', 'Map6', 'Map7' ],
  text: 'Maps',
  textposition: 'inside',
  domain: {column: 1},
  name: 'Maps',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout_pie = {
  title: 'Spidershot',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Weapons',
      x: 0,
      y: 0,
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Maps',
      x: 0.82,
      y: 0.5
    }
  ],
  height: 400,
  width: 600,
  showlegend: false,
  grid: {rows: 1, columns: 2}
};

Plotly.newPlot('donut', data_pie, layout_pie, {responsive:true, displayModeBar: false});


