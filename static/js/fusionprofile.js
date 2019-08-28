var profile_json
var profile_json2
var m
var j
var windowh
var windoww
var fdata

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
var dotr = [4, 8, 6, 5, 5, 3, 5, 4, 3, 8];

var windoww = window.innerWidth;
var windowh = window.innerHeight;
console.log(windowh)




// update one chart with data
// draw each chart separtely
// get data from each table in a different call

function create_charts() {
    console.log(profile_json)
    console.log(profile_json2)


    // line1 and line2 (this makes to plots)
    var player1 = {
      x: time,
      y: energy,
      type: 'scatter',
      name: 'Energy',
      marker: {
        color: 'rgb(218,165,32)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };
    var player2 = {
      x: time,
      y: dscore,
      type: 'scatter',
      name: 'Score',
      marker: {
        color: 'rgb(50,86,135)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };

    var health = {
      x: time,
      y: dhealth,
      type: 'scatter',
      name: 'Health',
      marker: {
        color: 'rgb(218,165,32)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };
    var accuracy = {
      x: time,
      y: daccuracy,
      type: 'scatter',
      name: 'Score',
      marker: {
        color: 'rgb(50,86,135)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };

    var selfeval = {
      x: time,
      y: dselfeval,
      type: 'scatter',
      name: 'Score',
      marker: {
        color: 'rgb(218,165,32)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };
    var precision = {
      x: time,
      y: dprecision,
      type: 'scatter',
      name: 'Score',
      marker: {
        color: 'rgb(50,86,135)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };


    var happiness = {
      x: time,
      y: dhappiness,
      type: 'scatter',
      name: 'Happiness',
      marker: {
        color: 'rgb(218,165,32)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };
    var error = {
      x: time,
      y: derror,
      type: 'scatter',
      name: 'Score',
      marker: {
        color: 'rgb(50,86,135)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };


    var teameval = {
      x: time,
      y: dteameval,
      type: 'scatter',
      name: 'Team eval.',
      marker: {
        color: 'rgb(218,165,32)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };
    var gain = {
      x: time,
      y: dgain,
      type: 'scatter',
      name: 'Score',
      marker: {
        color: 'rgb(50,86,135)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };


    var future = {
      x: time,
      y: dfuture,
      type: 'scatter',
      name: 'Future feel',
      marker: {
        color: 'rgb(218,165,32)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };
    var otr = {
      x: time,
      y: dotr,
      type: 'scatter',
      name: 'Score',
      marker: {
        color: 'rgb(50,86,135)',
        size: 14,
        line: {
            color: 'rgb(255,255,255)',
            width: 2,
            },
        },
      line: {
        width: 5
      },
    };

    // Layout for line graphs
    var layout1 = {
        autosize: false,
        width: 425,
        height: 250,
        margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 10,
            pad: 5,
          },
        showlegend: true,
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#ffffff',
        yaxis: {rangemode: 'tozero',
            showgrid: false,
            // zeroline: true,
            showline: true,
            // zerolinecolor: '#969696',
            // zerolinewidth: 50,
            autotick: false,
            ticks: '',
            showticklabels: false,
            linecolor: '#636363',
            linewidth: 3},
        xaxis: {rangemode: 'tozero',
            zeroline: false,
            showline: true,
            // zerolinecolor: '#969696',
            // zerolinewidth: 4,
            showgrid: false,
            autotick: false,
            ticks: '',
            showticklabels: false,
            linecolor: '#636363',
            linewidth: 3,
            // title: 'y Axis',
            // titlefont: {
            //   family: 'Arial, sans-serif',
            //   size: 18,
            //   color: '#7f7f7f'
            //   },
            },
        legend: {
            y: 0.5,
            // yref: 'paper',
            font: {
              family: 'Arial, sans-serif',
              size: 20,
              color: 'grey',
        }
      },
    };

    // data sets to plot
    // var data = [player1, player2];
    // var line2 = [health, accuracy];
    // var line3 = [selfeval, precision];
    // var line4 = [happiness, error];
    // var line5 = [teameval, gain];
    // var line6 = [future, otr];

     var data = [player2];
    var line2 = [accuracy];
    var line3 = [precision];
    var line4 = [error];
    var line5 = [gain];
    var line6 = [otr];



    // draw plots
    Plotly.newPlot('line1', data, layout1);
    Plotly.newPlot('line2', line2, layout1);
    // Plotly.newPlot('line3', line3, layout1);
    Plotly.newPlot('line4', line4, layout1);
    Plotly.newPlot('line5', line5, layout1);
    Plotly.newPlot('line6', line6, layout1);


    // // polar plot 1
    // data = [
    // {
    //   type: 'scatterpolar',
    //   r: [39, 28, 8, 7, 28, 39],
    //   theta: ['Motor','Vision','Memory', 'Reaction', 'Decison', 'Motor'],
    //   fill: 'toself',
    //   name: 'Player 1',
    // },
    // {
    //   type: 'scatterpolar',
    //   r: [1.5, 10, 39, 31, 15, 1.5],
    //   theta: ['Motor','Vision','Memory', 'Reaction', 'Decison', 'Motor'],
    //   fill: 'toself',
    //   name: 'Player 2'
    //   }]

    // layout = {
    //   autosize: true,
    //   width: 425,
    //   height: 250,
    //   margin: {
    //     l: 10,
    //     r: 10,
    //     b: 20,
    //     t: 20,
    //     pad: 50
    //   },
    // paper_bgcolor: 'rgba(0,0,0,0)',
    // plot_bgcolor: 'rgba(0,0,0,0)',
    //   polar: {
    //     radialaxis: {
    //       visible: true,
    //       range: [0, 50]
    //     }
    //   },
    //   showlegend: true
    // }

    // Plotly.plot("myDiv", data, layout)


    // // polar plot 2
    // data = [{
    //   type: 'scatterpolar',
    //   r: [20, 28, 8, 7, 28, 20],
    //   theta: ['Motor','Vision','Memory', 'Reaction', 'Decison', 'Motor'],
    //   fill: 'toself',
    //   name: 'Player 1'
    // },
    // {
    //   type: 'scatterpolar',
    //   r: [1.5, 10, 39, 31, 15, 1.5],
    //   theta: ['Motor','Vision','Memory', 'Reaction', 'Decison', 'Motor'],
    //   fill: 'toself',
    //   name: 'Player 2'
    //   }]

    // layout = {
    //     autosize: false,
    //   width: 425,
    //   height: 250,
    //   margin: {
    //     l: 10,
    //     r: 10,
    //     b: 20,
    //     t: 20,
    //     pad: 50
    //   },
    //   paper_bgcolor: '#ffffff',
    //   plot_bgcolor: '#ffffff',
    //   polar: {
    //     radialaxis: {
    //       visible: true,
    //       range: [0, 50]
    //     }
    //   },
    //   showlegend: true
    // }
    // Plotly.plot("myDiv2", data, layout)

    // scatter
    var trace1 = {
      x: [1, 2, 3, 6, 7],
      y: [1, 2, 2, 5, 4.5],
      mode: 'markers',
      type: 'scatter',
      name: 'Player A',
      text: ['A', 'A-2', 'A-3', 'A-4', 'A-5'],
      // textposition: 'top center',
      textfont: {
        family:  'Raleway, sans-serif'
      },
      marker: { size: 12 }
    };

    var trace2 = {
      x: [4, 5, 6, 7, 8],
      y: [3, 4, 6, 4, 5],
      mode: 'markers',
      type: 'scatter',
      name: 'Player B',
      text: ['Basskdjdfk', 'Bsdf', 'Bckjsdf', 'Bksdfj', 'Bslkfjsae'],
      textfont : {
        family:'Times New Roman'
      },
      textposition: 'bottom center',
      marker: { size: 12 }
    };

    var data = [ trace1, trace2 ];

    var layout = {
        width: 425,
        height: 250,
        margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 10,
            pad: 5,
          },
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#ffffff',
      xaxis: {
        range: [ 0, 9 ]
      },
      yaxis: {
        range: [0, 8],
        // title: 'Performance'
      },
      legend: {
        y: 0.5,
        yref: 'paper',
        font: {
          family: 'Arial, sans-serif',
          size: 20,
          color: 'grey',
        }
      },
      // title:'Data Labels on the Plot',
      width: 425,
      height: 250,
    };

    // var myDiv3 = document.getElementById('myDiv3')

    Plotly.newPlot('myDiv3', data, layout);



    // // stacked bar chart
    // var player1 = {
    //   x: ['date 1', 'date 2', 'date 3', 'date 4', 'date 5'],
    //   y: [20, 14, 23, 18, 23],
    //   name: 'Player 1',
    //   type: 'bar'
    // };

    // var player2 = {
    //   x: ['date 1', 'date 2', 'date 3', 'date 4', 'date 5'],
    //   y: [12, 18, 23, 22, 25],
    //   name: 'Player 2',
    //   type: 'bar'
    // };

    // var player3 = {
    //   x: ['date 1', 'date 2', 'date 3', 'date 4', 'date 5'],
    //   y: [12, 18, 29, 23, 30],
    //   name: 'Player 3',
    //   type: 'bar'
    // };

    // var player4 = {
    //   x: ['date 1', 'date 2', 'date 3', 'date 4', 'date 5'],
    //   y: [12, 12, 17, 27, 32],
    //   name: 'Player 4',
    //   type: 'bar'
    // };

    // var data = [player1, player2, player3, player4];

    // var layout = {barmode: 'stack',
    //         width: 425,
    //           height: 250,
    //           margin: {
    //                 l: 10,
    //                 r: 10,
    //                 b: 20,
    //                 t: 20,
    //                 pad: 50
    //               },
    //             paper_bgcolor: 'rgba(0,0,0,0)',
    //             plot_bgcolor: 'rgba(0,0,0,0)',
    // };

    // Plotly.newPlot('stacked_bar', data, layout);

    // Get high score element and update with a number
    // document.getElementById("userHighScore").innerHTML = profile_json['jj']['0']["rtB0"];

}

function get_json_data(names) {
    var jsonData = $.ajax({
        url: window.location.href.replace("fusionprofile", "fusionprofile_json"),
        dataType: 'json',
        data: {
            taskname: 'spidershot',
            mode: '0'
        },
        type: 'get'
    }).done(function(results) {
        profile_json = results;
        // display_Spidershot();
        // console.log('rock')
        // console.log(names)
    });
}


function get_json_data2() {
    var jsonData = $.ajax({
        url: window.location.href.replace("fusionprofile", "fusionprofile_json"),
        dataType: 'json',
        data: {
            taskname: 'reflexshot',
            mode: '0'
        },
        type: 'get'
    }).done(function(results) {
        profile_json2 = results;
        create_charts()
        display_Spidershot();
    });
}

function display_Spidershot() {
    var button_clicked = document.getElementById("Spidershot_button");
    if (button_clicked.className != "button is-primary is-small is-active"){
        button_clicked.className = "button is-primary is-small is-loading"
        // create_charts();
        hide_buttons();
        hide_dropdown()
        button_clicked.className = "button is-primaryis-small is-active"
    }
}

function mode_start() {
    m = "starting mode"
    console.log(m)

}


function task_select(task_input) {
    task = task_input
    console.log(task)
}

function mode_select(mode_input) {
    mode = mode_input
    console.log(mode)
}

function weapon_select(weapon_input) {
    weapon = weapon_input
    console.log(weapon)
}

function map_select(map_input) {
    map = map_input
    console.log(map)
}



function hide_buttons() {
    var d = document.getElementById("Strafeshot_button");
    d.className = "button is-primary is-small is-outlined"
    var d = document.getElementById("Spidershot_button");
    d.className = "button is-primary is-small is-outlined"
}



function hide_dropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.classList.toggle('is-active');
    });
}


function get_mode() {
    var mode0 = document.getElementById("mode_0_button")
    var mode1 = document.getElementById("mode_1_button")
    var mode2 = document.getElementById("mode_2_button")

    if (mode0.className == "button is-primary is-active") {
        mode = 0
    } else if (mode1.className == "button is-primary is-active") {
        mode = 1
    } else if (mode2.className == "button is-primary is-active") {
        mode = 2
    }
    return mode
}


function getIP() {
  alert("My public IP address is: " + ip);
}



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
