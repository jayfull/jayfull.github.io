function display_Spidershot() {
    hide_Everything()
    mode = get_mode()

    console.log("Spidershot " + mode)

    var button_clicked = document.getElementById("Spidershot_button");
    button_clicked.className = "button is-primary is-active"
    var position = 1;
    document.querySelectorAll(".spidershot_table").forEach(function(element) {
        for (var i = element.childNodes.length - 1; i >= 0; i--) {
            if (element.childNodes[i].className == "leaderboard_mode") {
                mode_cell = element.childNodes[i];
                if (mode_cell.innerHTML == mode) {
                    element.style.display = "table-row";
                } else if (mode_cell.innerHTML != mode) {
                    break;
                }
            } else if (element.childNodes[i].className == "leaderboard_position") {
                position_cell = element.childNodes[i];
                position_cell.innerHTML = "# " + position;
                position++;
                break;
            }
        }
    })
}

function display_Reflexshot() {
    hide_Everything()
    mode = get_mode()

    console.log("Reflexshot " + mode)

    var button_clicked = document.getElementById("Reflexshot_button");
    button_clicked.className = "button is-primary is-active"
    var position = 1;
    document.querySelectorAll(".reflexshot_table").forEach(function(element) {
        for (var i = element.childNodes.length - 1; i >= 0; i--) {
            if (element.childNodes[i].className == "leaderboard_mode") {
                mode_cell = element.childNodes[i];
                if (mode_cell.innerHTML == mode) {
                    element.style.display = "table-row";
                } else if (mode_cell.innerHTML != mode) {
                    break;
                }
            // steve lu was here
            } else if (element.childNodes[i].className == "leaderboard_position") {
                position_cell = element.childNodes[i];
                position_cell.innerHTML = "# " + position;
                position++;
                break;
            }
        }
    })
}

function display_Strafeshot() {
    hide_Everything()
    mode = get_mode()

    console.log("Strafeshot " + mode)

    var button_clicked = document.getElementById("Strafeshot_button");
    button_clicked.className = "button is-primary is-active"
    var position = 1;
    document.querySelectorAll(".strafeshot_table").forEach(function(element) {
        for (var i = element.childNodes.length - 1; i >= 0; i--) {
            if (element.childNodes[i].className == "leaderboard_mode") {
                mode_cell = element.childNodes[i];
                if (mode_cell.innerHTML == mode) {
                    element.style.display = "table-row";
                } else if (mode_cell.innerHTML != mode) {
                    break;
                }
            } else if (element.childNodes[i].className == "leaderboard_position") {
                position_cell = element.childNodes[i];
                position_cell.innerHTML = "# " + position;
                position++;
                break;
            }
        }
    })
}

function display_Pentakill() {
    hide_Everything()
    mode = get_mode()

    console.log("Pentakill " + mode)

    var button_clicked = document.getElementById("Pentakill_button");
    button_clicked.className = "button is-primary is-active"
    var position = 1;
    document.querySelectorAll(".pentakill_table").forEach(function(element) {
        for (var i = element.childNodes.length - 1; i >= 0; i--) {
            if (element.childNodes[i].className == "leaderboard_mode") {
                mode_cell = element.childNodes[i];
                if (mode_cell.innerHTML == mode) {
                    element.style.display = "table-row";
                } else if (mode_cell.innerHTML != mode) {
                    break;
                }
            } else if (element.childNodes[i].className == "leaderboard_position") {
                position_cell = element.childNodes[i];
                position_cell.innerHTML = "# " + position;
                position++;
                break;
            }
        }
    })
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

function mode0_click() {
    var d = document.getElementById("mode_0_button");
    d.className = "button is-primary is-active"
    var d = document.getElementById("mode_1_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("mode_2_button");
    d.className = "button is-primary is-outlined"
    rebuild_table()
}

function mode1_click() {
    var d = document.getElementById("mode_1_button");
    d.className = "button is-primary is-active"
    var d = document.getElementById("mode_0_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("mode_2_button");
    d.className = "button is-primary is-outlined"
    rebuild_table()
}

function mode2_click() {
    var d = document.getElementById("mode_2_button");
    d.className = "button is-primary is-active"
    var d = document.getElementById("mode_1_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("mode_0_button");
    d.className = "button is-primary is-outlined"
    rebuild_table()
}


function hide_Everything() {
    var d = document.getElementById("Reflexshot_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("Pentakill_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("Strafeshot_button");
    d.className = "button is-primary is-outlined"
    var d = document.getElementById("Spidershot_button");
    d.className = "button is-primary is-outlined"

    document.querySelectorAll(".spidershot_table").forEach(tr => tr.style.display = "none");
    document.querySelectorAll(".pentakill_table").forEach(tr => tr.style.display = "none");
    document.querySelectorAll(".reflexshot_table").forEach(tr => tr.style.display = "none");
    document.querySelectorAll(".strafeshot_table").forEach(tr => tr.style.display = "none");

}

function rebuild_table() {
    var Spidershot_button = document.getElementById("Spidershot_button")
    var Strafeshot_button = document.getElementById("Strafeshot_button")
    var Reflexshot_button = document.getElementById("Reflexshot_button")
    var Pentakill_button = document.getElementById("Pentakill_button")

    if (Spidershot_button.className == "button is-primary is-active") {
        display_Spidershot()
    } else if (Strafeshot_button.className == "button is-primary is-active") {
        display_Strafeshot()
    } else if (Reflexshot_button.className == "button is-primary is-active") {
        display_Reflexshot()
    } else if (Pentakill_button.className == "button is-primary is-active") {
        display_Pentakill()
    }

}
