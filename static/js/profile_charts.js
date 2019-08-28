var profile_json



function create_charts(taskname, mode) {
    spidershot_x = profile_json[taskname][mode]["create_date"];
    console.log(profile_json[taskname][mode])
    for (var i = 0; i < spidershot_x.length; i++) {
        spidershot_x[i] = new Date(spidershot_x[i]);
    }
    taskname_score = profile_json[taskname][mode]["score"];
    taskname_kills = profile_json[taskname][mode]["kill_total"];
    taskname_accuracy = profile_json[taskname][mode]["accuracy"];
    taskname_shots = profile_json[taskname][mode]["shots_total"];
    taskname_killsPerSec = profile_json[taskname][mode]["killsPerSec"];

    taskname_histogram_frequency_score = profile_json[taskname][mode]["scores_dict"]["histogram"]["frequency"]
    taskname_histogram_z_score_score = profile_json[taskname][mode]["scores_dict"]["histogram"]["z_score"]
    taskname_histogram_colors_score = profile_json[taskname][mode]["scores_dict"]["histogram"]["color_list"]

    taskname_histogram_frequency_accuracy = profile_json[taskname][mode]["accuracy_dict"]["histogram"]["frequency"]
    taskname_histogram_z_score_accuracy = profile_json[taskname][mode]["accuracy_dict"]["histogram"]["z_score"]
    taskname_histogram_colors_accuracy = profile_json[taskname][mode]["accuracy_dict"]["histogram"]["color_list"]
    console.log(taskname_histogram_colors_score)

    modename = ['ultimate', 'precision', 'speed']

    Chart.defaults.global.tooltips
    Chart.defaults.global.defaultFontColor = 'gray';
    lineChartColor = 'rgba(0, 209, 178, 1)'

    // Score histogram
    if (taskname_histogram_frequency_score.length > 0){
        $('#barChart').replaceWith('<canvas id="barChart"></canvas>');

        var barctx = document.getElementById("barChart");
        var barChart = new Chart(barctx, {
            type: 'bar',
            data: {
                labels: taskname_histogram_z_score_score,
                datasets: [{
                    label: '# of players',
                    data: taskname_histogram_frequency_score,
                    backgroundColor: taskname_histogram_colors_score,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 0
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Population'
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: false,
                        barPercentage: 1.0,
                        categoryPercentage: 1.0
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: '# of players'
                        },
                        gridLines: {
                            display: false,
                            color: 'rgba(0, 0, 0, 0)',
                            lineWidth: 5,
                            zeroLineWidth: 5,
                            zeroLineColor: 'rgba(0, 0, 0, 0)',
                            drawTicks: true,
                            tickMarkLength: 3
                        },
                        ticks: {
                            // display: false
                           callback: function(label, index, labels) {
                                return '';
                            }
                        }
                    }]
                }
            }
        });
    }else{
        $('#barChart').replaceWith('<p id="barChart" class="title is-4"> Not enough data to produce histogram for '+ modename[mode] + ' ' + taskname  +'.</p>');
    }

    // Accuracy histogram
    if (taskname_histogram_frequency_accuracy.length > 0){
        $('#accuracyBarChart').replaceWith('<canvas id="accuracyBarChart"></canvas>');

        var barctx = document.getElementById("accuracyBarChart");
        var barChart = new Chart(barctx, {
            type: 'bar',
            data: {
                labels: taskname_histogram_z_score_accuracy,
                datasets: [{
                    label: '# of players',
                    data: taskname_histogram_frequency_accuracy,
                    backgroundColor: taskname_histogram_colors_accuracy,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 0
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Population'
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: false,
                        barPercentage: 1.0,
                        categoryPercentage: 1.0
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: '# of players'
                        },
                        gridLines: {
                            display: false,
                            color: 'rgba(0, 0, 0, 0)',
                            lineWidth: 5,
                            zeroLineWidth: 5,
                            zeroLineColor: 'rgba(0, 0, 0, 0)',
                            drawTicks: true,
                            tickMarkLength: 3
                        },
                        ticks: {
                            // display: false
                           callback: function(label, index, labels) {
                                return '';
                            }
                        }
                    }]
                }
            }
        });
    }else{
        $('#accuracyBarChart').replaceWith('<p id="accuracyBarChart" class="title is-4"> Not enough data to produce histogram for '+ modename[mode] + ' ' + taskname  +'.</p>');
    }


    // line chart 1
    if (spidershot_x.length > 0){
        $('#lineChart').replaceWith('<canvas id="lineChart"></canvas>');

        var linectx = document.getElementById("lineChart");
        var lineChart = new Chart(linectx, {
            type: 'line',
            data: {
                labels: spidershot_x,
                datasets: [{
                    label: 'Score',
                    yAxisID: 'Score',
                    data: taskname_score,
                    backgroundColor: [
                        lineChartColor,
                    ],
                    borderColor: [
                        lineChartColor,
                    ],
                    fill: false,
                    pointBackgroundColor: lineChartColor,
                    pointBorderColor: lineChartColor,
                    pointBorderWidth: 1,
                    pointRadius: 3,
                    pointStyle: 'circle',
                    pointHitRadius: 20,
                    borderWidth: 2,
                    pointHoverBackgroundColor: lineChartColor,
                    pointHoverBorderColor: lineChartColor,
                    pointHoverBorderWidth: 0,
                    pointHoverRadius: 10
                }],
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Progress'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Plays'
                        },
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                        },
                        type: 'time',
                        distribution: 'series',

                    }],
                    yAxes: [{
                        id: 'Score',
                        position: 'left',
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        ticks: {
                            callback: function(label, index, labels) {
                                return '';
                            }
                        },
                        gridLines: {
                            display: false,
                            color: 'rgba(0, 0, 0, 0.4)',
                            lineWidth: 1.5,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(0, 0, 0, 0)',
                            drawTicks: true,
                        }
                    }]
                }
            }
        });
    }
    else{
        $('#lineChart').replaceWith('<p id="lineChart" class="title is-4">'+ document.getElementById("steam_username").innerHTML + ' has not yet played a round of ' + modename[mode] + ' ' + taskname + '.</p>');
    }


    // Kills Line Chart
    if (spidershot_x.length > 0){
        $('#killsLineChart').replaceWith('<canvas id="killsLineChart"></canvas>');

        var linectx = document.getElementById("killsLineChart");
        var killsLineChart = new Chart(linectx, {
            type: 'line',
            data: {
                labels: spidershot_x,
                datasets: [{
                    label: 'Kills',
                    yAxisID: 'Kills',
                    data: taskname_kills,
                    backgroundColor: [
                        lineChartColor,
                    ],
                    borderColor: [
                        lineChartColor,
                    ],
                    fill: false,
                    pointBackgroundColor: lineChartColor,
                    pointBorderColor: lineChartColor,
                    pointBorderWidth: 1,
                    pointRadius: 3,
                    pointStyle: 'circle',
                    pointHitRadius: 20,
                    borderWidth: 2,
                    pointHoverBackgroundColor: lineChartColor,
                    pointHoverBorderColor: lineChartColor,
                    pointHoverBorderWidth: 0,
                    pointHoverRadius: 10
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
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Plays'
                        },
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                        },
                        type: 'time',
                        distribution: 'series',

                    }],
                    yAxes: [{
                        id: 'Kills',
                        position: 'left',
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Kills'
                        },
                        ticks: {
                            callback: function(label, index, labels) {
                                return '';
                            }
                        },
                        gridLines: {
                            display: false,
                            color: 'rgba(0, 0, 0, 0.4)',
                            lineWidth: 1.5,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(0, 0, 0, 0)',
                            drawTicks: true,
                        }
                    }]
                }
            }
        });
    }
    else{
        $('#killsLineChart').replaceWith('<p id="killsLineChart" class="title is-4">'+ document.getElementById("steam_username").innerHTML + ' has not yet played a round of ' + modename[mode] + ' ' + taskname + '.</p>');
    }


    // Accuracy Line Chart
    if (spidershot_x.length > 0){
        $('#accuracyLineChart').replaceWith('<canvas id="accuracyLineChart"></canvas>');

        var linectx = document.getElementById("accuracyLineChart");
        var accuracyLineChart = new Chart(linectx, {
            type: 'line',
            data: {
                labels: spidershot_x,
                datasets: [{
                    label: 'Accuracy',
                    yAxisID: 'Accuracy',
                    data: taskname_accuracy,
                    backgroundColor: [
                        lineChartColor,
                    ],
                    borderColor: [
                        lineChartColor,
                    ],
                    fill: false,
                    pointBackgroundColor: lineChartColor,
                    pointBorderColor: lineChartColor,
                    pointBorderWidth: 1,
                    pointRadius: 3,
                    pointStyle: 'circle',
                    pointHitRadius: 20,
                    borderWidth: 2,
                    pointHoverBackgroundColor: lineChartColor,
                    pointHoverBorderColor: lineChartColor,
                    pointHoverBorderWidth: 0,
                    pointHoverRadius: 10
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
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Plays'
                        },
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                        },
                        type: 'time',
                        distribution: 'series',

                    }],
                    yAxes: [{
                        id: 'Accuracy',
                        position: 'left',
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Accuracy'
                        },
                        ticks: {
                            callback: function(label, index, labels) {
                                return '';
                            }
                        },
                        gridLines: {
                            display: false,
                            color: 'rgba(0, 0, 0, 0.4)',
                            lineWidth: 1.5,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(0, 0, 0, 0)',
                            drawTicks: true,
                        }
                    }]
                }
            }
        });
    }
    else{
        $('#accuracyLineChart').replaceWith('<p id="accuracyLineChart" class="title is-4">'+ document.getElementById("steam_username").innerHTML + ' has not yet played a round of ' + modename[mode] + ' ' + taskname + '.</p>');
    }


// Shots Total Line Chart
    if (spidershot_x.length > 0){
        $('#shotsLineChart').replaceWith('<canvas id="shotsLineChart"></canvas>');

        var linectx = document.getElementById("shotsLineChart");
        var shotsLineChart = new Chart(linectx, {
            type: 'line',
            data: {
                labels: spidershot_x,
                datasets: [{
                    label: 'Accuracy',
                    yAxisID: 'Accuracy',
                    data: taskname_shots,
                    backgroundColor: [
                        lineChartColor,
                    ],
                    borderColor: [
                        lineChartColor,
                    ],
                    fill: false,
                    pointBackgroundColor: lineChartColor,
                    pointBorderColor: lineChartColor,
                    pointBorderWidth: 1,
                    pointRadius: 3,
                    pointStyle: 'circle',
                    pointHitRadius: 20,
                    borderWidth: 2,
                    pointHoverBackgroundColor: lineChartColor,
                    pointHoverBorderColor: lineChartColor,
                    pointHoverBorderWidth: 0,
                    pointHoverRadius: 10
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
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Plays'
                        },
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                        },
                        type: 'time',
                        distribution: 'series',

                    }],
                    yAxes: [{
                        id: 'Accuracy',
                        position: 'left',
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Total Shots'
                        },
                        ticks: {
                            callback: function(label, index, labels) {
                                return '';
                            }
                        },
                        gridLines: {
                            display: false,
                            color: 'rgba(0, 0, 0, 0.4)',
                            lineWidth: 1.5,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(0, 0, 0, 0)',
                            drawTicks: true,
                        }
                    }]
                }
            }
        });
    }
    else{
        $('#shotsLineChart').replaceWith('<p id="shotsLineChart" class="title is-4">'+ document.getElementById("steam_username").innerHTML + ' has not yet played a round of ' + modename[mode] + ' ' + taskname + '.</p>');
    }

// Kills Per Second Line Chart
    if (spidershot_x.length > 0){
        $('#killsPerSecLineChart').replaceWith('<canvas id="killsPerSecLineChart"></canvas>');

        var linectx = document.getElementById("killsPerSecLineChart");
        var killsPerSecLineChart = new Chart(linectx, {
            type: 'line',
            data: {
                labels: spidershot_x,
                datasets: [{
                    label: 'Accuracy',
                    yAxisID: 'Accuracy',
                    data: taskname_killsPerSec,
                    backgroundColor: [
                        lineChartColor,
                    ],
                    borderColor: [
                        lineChartColor,
                    ],
                    fill: false,
                    pointBackgroundColor: lineChartColor,
                    pointBorderColor: lineChartColor,
                    pointBorderWidth: 1,
                    pointRadius: 3,
                    pointStyle: 'circle',
                    pointHitRadius: 20,
                    borderWidth: 2,
                    pointHoverBackgroundColor: lineChartColor,
                    pointHoverBorderColor: lineChartColor,
                    pointHoverBorderWidth: 0,
                    pointHoverRadius: 10
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
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Plays'
                        },
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                        },
                        type: 'time',
                        distribution: 'series',

                    }],
                    yAxes: [{
                        id: 'Accuracy',
                        position: 'left',
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Total Shots'
                        },
                        ticks: {
                            callback: function(label, index, labels) {
                                return '';
                            }
                        },
                        gridLines: {
                            display: false,
                            color: 'rgba(0, 0, 0, 0.4)',
                            lineWidth: 1.5,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(0, 0, 0, 0)',
                            drawTicks: true,
                        }
                    }]
                }
            }
        });
    }
    else{
        $('#killsPerSecLineChart').replaceWith('<p id="killsPerSecLineChart" class="title is-4">'+ document.getElementById("steam_username").innerHTML + ' has not yet played a round of ' + modename[mode] + ' ' + taskname + '.</p>');
    }

    // // this always destroys charts
    // $('#killsPerCrapChart').replaceWith('<canvas id="killsPerCrapChart></canvas>')

    // // this creates one only if the taskname === 'pentakill'
    // if (taskname === 'pentakill') {
    //     // build chart
    // }

    // Get high score
    document.getElementById("userHighScore").innerHTML = profile_json[taskname][mode]["max_score"];//Now you get the js variable inside your form element
    document.getElementById("userMaxKills").innerHTML = profile_json[taskname][mode]["max_kill_total"];
    document.getElementById("userMaxAccuracy").innerHTML = profile_json[taskname][mode]["max_accuracy"];
    document.getElementById("userMaxShots").innerHTML = profile_json[taskname][mode]["max_shots_total"];
    document.getElementById("userMaxKillsPerSec").innerHTML = profile_json[taskname][mode]["max_killsPerSec"];

    // Get average score
    document.getElementById("userAvgScore").innerHTML = profile_json[taskname][mode]["avg_score"];
    document.getElementById("userAvgKills").innerHTML = profile_json[taskname][mode]["avg_kill_total"];
    document.getElementById("userAvgAccuracy").innerHTML = profile_json[taskname][mode]["avg_accuracy"];
    document.getElementById("userAvgShots").innerHTML = profile_json[taskname][mode]["avg_shots_total"];
    document.getElementById("userAvgKillsPerSec").innerHTML = profile_json[taskname][mode]["avg_killsPerSec"];

}


function get_json_data() {
    var jsonData = $.ajax({
        url: window.location.href.replace("profile", "profile_json"),
        dataType: 'json',
    }).done(function(results) {
        profile_json = results;
        display_Spidershot();
    });
}

function display_Spidershot() {
    var button_clicked = document.getElementById("Spidershot_button");
    if (button_clicked.className != "button is-primary is-active"){
        button_clicked.className = "button is-primary is-loading"
        create_charts('spidershot',get_mode());
        hide_buttons();
        button_clicked.className = "button is-primary is-active"
    }
}


function display_Strafeshot() {
    var button_clicked = document.getElementById("Strafeshot_button");
    if (button_clicked.className != "button is-primary is-active"){
        button_clicked.className = "button is-primary is-loading"
        create_charts('strafeshot',get_mode());
        hide_buttons();
        button_clicked.className = "button is-primary is-active"
    }
}


function display_Reflexshot() {
    var button_clicked = document.getElementById("Reflexshot_button");
    if (button_clicked.className != "button is-primary is-active"){
        button_clicked.className = "button is-primary is-loading"
        create_charts('reflexshot',get_mode());
        hide_buttons();
        button_clicked.className = "button is-primary is-active"
    }
}


function display_Pentakill() {
    var button_clicked = document.getElementById("Pentakill_button");
    if (button_clicked.className != "button is-primary is-active"){
        button_clicked.className = "button is-primary is-loading"
        create_charts('pentakill',get_mode());
        hide_buttons();
        button_clicked.className = "button is-primary is-active"
    }
}

function hide_buttons() {
    var d = document.getElementById("Reflexshot_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("Pentakill_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("Strafeshot_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("Spidershot_button");
    d.className = "button is-primary is-outlined"
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

function get_task() {
    var spidershot_button = document.getElementById("Spidershot_button");
    var reflexshot_button = document.getElementById("Reflexshot_button");
    var pentakill_button = document.getElementById("Pentakill_button");
    var strafeshot_button = document.getElementById("Strafeshot_button");

    if (spidershot_button.className == "button is-primary is-active") {
        task = 'spidershot';
    } else if (reflexshot_button.className == "button is-primary is-active") {
        task = 'reflexshot';
    } else if (pentakill_button.className == "button is-primary is-active") {
        task = 'pentakill';
    }else if (strafeshot_button.className == "button is-primary is-active") {
        task = 'strafeshot';
    }
    return task;
}


function mode0_click() {
    var d = document.getElementById("mode_0_button");
    d.className = "button is-primary is-active";
    var d = document.getElementById("mode_1_button");
    d.className = "button is-primary is-outlined";
    var d = document.getElementById("mode_2_button");
    d.className = "button is-primary is-outlined";
    create_charts(get_task(),0);
}

function mode1_click() {
    var d = document.getElementById("mode_1_button");
    d.className = "button is-primary is-active";
    var d = document.getElementById("mode_0_button");
    d.className = "button is-primary is-outlined";
    var d = document.getElementById("mode_2_button");
    d.className = "button is-primary is-outlined";
    create_charts(get_task(),1);
}

function mode2_click() {
    var d = document.getElementById("mode_2_button");
    d.className = "button is-primary is-active";
    var d = document.getElementById("mode_1_button");
    d.className = "button is-primary is-outlined";
    var d = document.getElementById("mode_0_button");
    d.className = "button is-primary is-outlined";
    create_charts(get_task(),2);
}
