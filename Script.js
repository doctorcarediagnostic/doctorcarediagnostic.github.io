function printPlan(counter) {
    var restorepage = document.body.innerHTML;
    var printcontent = document.getElementById("logo").innerHTML + document.getElementById("issues").innerHTML;
    var arr = [["#Question1a","Q1a"], ["#Question1b" ,"Q1b"], ["#Question1c" ,"Q1c"], ["#Question1d" ,"Q1d"],
    ["#Question2aY","Q2aY"], ["#Question2aN" ,"Q2aN"], ["#Question2bY" ,"Q2bY"], ["#Question2bN" ,"Q2bN"],
    ["#Question2c","Q2c"], ["#Question2dY" ,"Q2dY"], ["#Question2dN" ,"Q2dN"], ["#Question2e" ,"Q2e"], 
    ["#Question2f","Q2f"], ["#Question2g" ,"Q2g"], ["#Question2h" ,"Q2h"], ["#Question3a" ,"Q3a"],
    ["#Question3b","Q3b"], ["#Question3c" ,"Q3c"], ["#Question3d" ,"Q3d"], ["#Question4a" ,"Q4a"], 
    ["#Question4a","Q4a"], ["#Question4b" ,"Q4b"], ["#Question4c" ,"Q4c"], ["#Question4d" ,"Q4d"], 
    ["#Question5a","Q5a"], ["#Question5b" ,"Q5b"], ["#Question5c" ,"Q5c"], ["#Question5d" ,"Q5d"],
    ["#Question6a","Q6a"], ["#Question6b" ,"Q6b"], ["#Question7a" ,"Q7a"], ["#Question7b" ,"Q7b"],["#Question7c","Q7c"],
    ["#Question8a" ,"Q8a"], ["#Question8b" ,"Q8b"], ["#Question8c" ,"Q8c"], ["#Question8d","Q8d"], ["#Question8e" ,"Q8e"], ["#Question8f" ,"Q8f"],
    ["#Question9a" ,"Q9a"], ["#Question9b","Q9b"], ["#Question9c" ,"Q9c"]]
    for (i=0; i<arr.length; i++){
        if ($(arr[i][0]).is(":checked")) {
            printcontent = printcontent + document.getElementById(arr[i][1]).innerHTML + "<br>"
        }
    }
    $(document).ready(replaceAllText);
    $('html').ajaxStop(replaceAllText);
    $("#appointment").remove();
    $("#printButton").remove();
    appenddates(counter)
    for (i = 1; i<counter; i++) {
   		 $('#inputbox' + i).remove();
    }
    printcontent = printcontent + document.getElementById("Print").innerHTML
    document.body.innerHTML = printcontent;
    window.print();
    document.body.innerHTML = restorepage;
}         

function replaceAllText() {
	replaceText('*', 'Any others:', 'hi', 'g');
}

function replaceText(selector, text, newText, flags) {
  var matcher = new RegExp(text, flags);
  var elems = document.querySelectorAll(selector), i;

  for (i = 0; i < elems.length; i++)
    if (!elems[i].childNodes.length)
      elems[i].innerHTML = elems[i].innerHTML.replace(matcher, newText);
}

function hide(target) {
    document.getElementById(target).style.display = 'none';
}

function showAll(params) {
  for (i=0; i<params.length; i++) {
    $(params[i]).show();
  } 
}

function hideAll(params) {
  for (i=0; i<params.length; i++) {
    $(params[i]).hide();
  }
}

function duplicates(arr, ele) {
    showAll(ele);
    var allNotChecked = true;
    for (i=0; i<arr.length; i++) {
        if ($(arr[i]).is(":checked")) {
            allNotChecked = false;
            break;
        }
    }
    if (allNotChecked == true) {
        hideAll(ele);
    }
}

function appenddates(counter) {
    $(".datetext").empty();
    for (i = 1; i<counter; i++) {
        var currentDate = $('#date' + i).datepicker("getDate");
        if (currentDate != null) {
            $("<p class = 'datetext'>'"+ currentDate + "</p>").appendTo("#details")
        }
    }
}
$(document).ready(function() {
    //Question 1 (Clinical)
    $('#Question1a').click(function() {
        showAll([".Q1aed", ".Q1al", ".Q1aev", ".Q1ag", ".Q1aApp"]);
        if (!$('#Question1a').is(":checked")) {
            hideAll([".Q1aed", ".Q1al", ".Q1aev", ".Q1ag", ".Q1aApp"]);
        }
        //Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question2aN"], ["#ed_1a_2"]);

        //Related Lab Results
        duplicates(["#Question1a", "#Question1b", "#Question1c"], ["#ev_1a_2"]);

        //Physical Activity Monthly
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question3a", "#Question3b", "#Question3c", "#Question3d"], ["#ev_1a_3"]);
        
        //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c", "#Question3a", "Question#4a"], ["#life_1a_4"])
    })

    $('#Question1b').click(function() {
        showAll([".Q1bed", ".Q1bl", ".Q1bev", ".Q1bg", ".Q1bApp"]);
        if (!$('#Question1b').is(":checked")) {
            hideAll([".Q1bed", ".Q1bl", ".Q1bev", ".Q1bg", ".Q1bApp"]);
        }
        //Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question2aN"], ["#ed_1a_2"]);

        //Soluble & Insoluble Fibre
        duplicates(["#Question1b", "#Question2e"], ["#ed_1b_2"])

        //Related Lab Results, Physical Activity Monthly
        duplicates(["#Question1a", "#Question1b", "#Question1c"], ["#ev_1a_2"]);

       //Physical Activity Monthly
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question3a", "#Question3b", "#Question3c", "#Question3d"], ["#ev_1a_3"]);

        //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c", "#Question3a", "Question#4a"], ["#life_1a_4"])

        //Living with Cholesterol
        duplicates(["#Question1b", "#Question1c", "#Question2c"], ["#App_1b_1"]);
    })

    $('#Question1c').click(function() {
        showAll([".Q1ced", ".Q1cl", ".Q1cev", ".Q1cg"]);
        if (!$('#Question1c').is(":checked")) {
            hideAll([".Q1ced", ".Q1cl", ".Q1cev", ".Q1cg"]);
        }
        //Appropriate Fat
        duplicates(["#Question1c", "#Question2c"], ["#ed_1c_3"]);
        
        //Related Lab Results, Physical Activity Monthly
        duplicates(["#Question1a", "#Question1b", "#Question1c"], ["#ev_1a_2"]);

        //Physical Activity Monthly
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question3a", "#Question3b", "#Question3c", "#Question3d"], ["#ev_1a_3"]);

        //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c", "#Question3a", "Question#4a"], ["#life_1a_4"])

         //Living with Cholesterol
        duplicates(["#Question1b", "#Question1c", "#Question2c"], ["#App_1b_1"]);
    })
    $('#Question1d').click(function() {
        $('#ed_1d_1').toggle();
    })

    //Question 2
    $('#Question2aY').click(function() {
        showAll([".Q2aed", ".Q2al", ".Q2aev", ".Q2ag", ".Q2aApp"]);
        hide(["life_2aN_1", ".Q2a1App"])
        //Physical Activity
        duplicates(["#Question2aY", "#Question2aN"], ["#life_2a_2"]);

         //Healthy lipid Profile.
        duplicates(["#Question2aY", "#Question2aN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_3"])
    })

    $('#Question2aN').click(function() {
        showAll([".Q2aed", ".Q2a1l", ".Q2aev", ".Q2ag",".Q2aApp", ".Q2a1App"]);
        hideAll(["#life_2aY_1", "#life_2aY_3", "#life_2aY_4"]);
        //Physical Activity
        duplicates(["#Question2aY", "#Question2aN"], ["#life_2a_2", ".Q2aev", ".Q2ag", ".Q2aApp"]);

        //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c", "#Question3a", "Question#4a"], ["#life_1a_4"])

        //Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question2aN"], ["#ed_1a_2"]);

         //Healthy lipid Profile.
        duplicates(["#Question2aY", "#Question2aN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_3"])
    })

    $('#Question2bY').click(function() {
        showAll([".Q2bed", ".Q2bl", ".Q2bev", ".Q2bg"])
        hideAll([".Q2b1l"])

        //Weight, Physical Monthly
        duplicates(["#Question2aY", "#Question2aN", "#Question2bY", "#Question2bN"], ["#ev_2a_2", "#ev_2a_3"])

        //Eat every 4 hours
        duplicates(["#Question2aY", "#Question2aN", "#Question2bY"], ["#life_2aY_2"])

        //Healthy Weight
        duplicates(["#Question2aY", "#Question2aN", "#Question2bY", "#Question2bN", "#Question2c", "#Question3a", "#Question3b", "#Question3c"], ["#goals_2a_1"])

    })

    $('#Question2bN').click(function() {
        showAll([".Q2bed", ".Q2b1l", ".Q2bev", ".Q2bg"])
        hideAll(["#life_2aY_1", "#life_2aY_2"])

        //Weight, Physical Monthly
        duplicates(["#Question2aY", "#Question2aN", "#Question2bY", "#Question2bN"], ["#ev_2a_2", "#ev_2a_3"])

        //Healthy Weight
         duplicates(["#Question2aY", "#Question2aN", "#Question2bY", "#Question2bN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_1"])

               //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c", "#Question3a", "Question#4a"], ["#life_1a_4"])
    })

    $('#Question2c').click(function() {
        showAll([".Q2cl", ".Q2cev", ".Q2cApp"]);
        if (!$('#Question2c').is(":checked")) {
            hideAll([".Q2cl", ".Q2cev", ".Q2cApp"]);
        }
        //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c", "#Question3a", "Question#4a"], ["#life_1a_4"])
        //Appropriate Fat
        duplicates(["#Question1c", "#Question2c"], ["#ed_1c_3"])
        //Healthy Weight
         duplicates(["#Question2aY", "#Question2aN", "#Question2bY", "#Question2bN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_1"])
        //Healthy lipid Profile.
        duplicates(["#Question2aY", "#Question2aN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_3"])
        //Living with Cholesterol
        duplicates(["#Question1b", "#Question1c", "#Question2c"], ["#App_1b_1"]);
    })

    $('#Question2dY').click(function() {
        showAll(['.Q2d1ed', '.Q2dl', '.Q2dev', '.Q1aApp', '.Q2ag', "#App_2a_1"])
        $("#App_1a_3").hide();
        $("#goals_2a_3").hide();

        //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c","#Question2d", "#Question3a", "Question#4a"], ["#life_1a_4"])

        //Choose whole grain
        duplicates(["#Question2cY", "#Question2dY"], ["#life_2e_2"])
    })

    $('#Question2dN').click(function() {
        showAll(['.Q2d2ed', '.Q2d1l', '.Q2dev', '.Q2ag', '.Q1aApp'])
    })
    $('#Question2e').click(function() {
        showAll([".Q2el", ".Q2eev", ".Q2eg", ".Q2eApp"])
        if (!$('#Question2e').is(":checked")) {
            hideAll([".Q2el", ".Q2eev", ".Q2eg", ".Q2eApp"]);
        }
    })

    $('#Question2e').click(function() {
        showAll([".Q2el", ".Q2eev", ".Q2eg", ".Q2eApp"])
        if (!$('#Question2e').is(":checked")) {
            hideAll([".Q2el", ".Q2eev", ".Q2eg", ".Q2eApp"]);
        }
        //Soluble & Insoluble Fibre
        duplicates(["#Question1b", "#Question2e"], ["#ed_1b_2"])
    })

    $('#Question2f').click(function() {
        showAll([".Q2fed", ".Q2fl", ".Q2fev"])
        if (!$('#Question2f').is(":checked")) {
            hideAll([".Q2fed", ".Q2fl", ".Q2fev"]);
        }
        //Take supplements, if needed
        duplicates(["#Question2f", "#Question2g"], ["#life_2f_2"])

        //Food intake, Related lab results
        duplicates(["#Question2f", "#Question2g", "#Question2h", "#Question4a", "#Question4b", "#Question4c"], ["#ev_2f_1", "#ev_2f_3"])
        
        //Supplements
        duplicates(["#Question2f", "#Question2g"], ["#ev_2f_2"])
    })

    $('#Question2g').click(function() {
        showAll([".Q2ged", ".Q2gl"])
        if (!$('#Question2g').is(":checked")) {
            hideAll([".Q2ged", ".Q2gl"]);
        }
        //Take supplements, if needed
        duplicates(["#Question2f", "#Question2g"], ["#life_2f_2"])

        //Food intake, Related lab results
        duplicates(["#Question2f", "#Question2g", "#Question2h", "#Question4a", "#Question4b", "#Question4c"], ["#ev_2f_1", "#ev_2f_3"])
       
        //Supplements
        duplicates(["#Question2f", "#Question2g"], ["#ev_2f_2"])

        //*PEN
        duplicates(["#Question2c", "#Question2g"], ["#App_2c_1"])
    })

    $('#Question2h').click(function() {
        showAll([".Q2hed", ".Q2hl", ".Q2hApp"])
        if (!$('#Question2h').is(":checked")) {
            hideAll([".Q2hed", ".Q2hl", ".Q2hApp"]);
        }
        //Food intake, Related lab results
        duplicates(["#Question2f", "#Question2g", "#Question2h", "#Question4a", "#Question4b", "#Question4c"], ["#ev_2f_1", "#ev_2f_3"])
    })

    //Question 3
    $('#Question3a').click(function() {
        showAll([".Q3al"])
        if (!$('#Question3a').is(":checked")) {
            hideAll([".Q3al"]);
        }
        //Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question2aN", "#Question3a", "#Question3b", "#Question3d"], ["#ed_1a_2"]);
        //Physical Activity Monthly
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question3a", "#Question3b", "#Question3c", "#Question3d"], ["#ev_1a_3"]);
        //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c", "#Question3a", "Question#4a"], ["#life_1a_4"])
        //Healthy Weight
        duplicates(["#Question2aY", "#Question2aN", "#Question2bY", "#Question2bN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_1"])
        //Healthy Blood
        duplicates(["#Question2aY", "#Question2aN", "#Question3a", "#Question3b"], ["#goals_2a_2"])
        //Healthy Lipid Profile
        duplicates(["#Question2aY", "#Question2aN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_3"])

        //Weight Loss, Improved Mood, Lower Stress, 3a Appendix
        duplicates(["#Question3a", "#Question3c"], [".Q3ag",".Q3aApp"])
        //Lower Stress, Improved Mood
        duplicates(["#Question3a", "#Question3b", "#Question3c"], ["#goals_3a_2", "goals_3a_3"])

        //CSEP Guidelines 18-64, 65+
        duplicates(["#Question2aN", "#Question3a", "#Question3b", "#Question3c"], [".Q2a1App"])
       //Physical Activity and Diabetes, Physical Activity Log]
        duplicates (["#Question3a", "#Question3b", "#Question3c"], ["#App_3a_1", "#App_3a_6"])
    })

    $('#Question3b').click(function() {
        showAll([".Q3bed", ".Q3bl", ".Q3bApp"])
        if (!$("#Question3b").is(":checked")) {
            hideAll([".Q3bed", ".Q3bl", ".Q3bApp"])
        }
        //Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question2aN", "#Question3a", "#Question3b", "#Question3d"], ["#ed_1a_2"]);
        //Physical Activity Monthly
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question3a", "#Question3b", "#Question3c", "#Question3d"], ["#ev_1a_3"]);
        //Healthy Weight
        duplicates(["#Question2aY", "#Question2aN", "#Question2bY", "#Question2bN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_1"])
        //Healthy Blood
        duplicates(["#Question2aY", "#Question2aN", "#Question3a", "#Question3b"], ["#goals_2a_2"])
        //Healthy Lipid Profile
        duplicates(["#Question2aY", "#Question2aN", "#Question2c", "#Question3a", "#Question3b"], ["#goals_2a_3"])
        //Weight Loss, Improved Mood, Lower Stress
        duplicates(["#Question3a", "#Question3b"], [".Q3ag"])
        //Lower Stress, Improved Mood
        duplicates(["#Question3a", "#Question3b", "#Question3c"], ["#goals_3a_2", "goals_3a_3"])
        //CSEP Guidelines 18-64, 65+
        duplicates(["#Question2aN", "#Question3a", "#Question3b", "#Question3c"], [".Q2a1App"])
        //Physical Activity and Diabetes, Physical Activity Log]
        duplicates (["#Question3a", "#Question3b", "#Question3c"], ["#App_3a_1", "#App_3a_6"])
    })
    
    $("#Question3c").click(function() {
        showAll([".Q3ced", ".Q3cl", ".Q3cg"])
        if (!$("#Question3c").is(":checked")) {
            hideAll([".Q3ced", ".Q3cl", ".Q3cg"])
        }
        //Physical Activity Monthly
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question3a", "#Question3b", "#Question3c", "#Question3d"], ["#ev_1a_3"]);

        //Lower Stress, Improved Mood
        duplicates(["#Question3a", "#Question3b", "#Question3c"], ["#goals_3a_2", "#goals_3a_3"])

        //Physical Activity and Diabetes, Physical Activity Log]
        duplicates (["#Question3a", "#Question3b", "#Question3c"], ["#App_3a_1", "#App_3a_6"])

        //CSEP Guidelines 18-64, 65+
        duplicates(["#Question2aN", "#Question3a", "#Question3b", "#Question3c"], [".Q2a1App"])
    })

    $("#Question3d").click(function() {
        showAll([".Q3ded", ".Q3dl", ".Q3dev", ".Q3dg", ".Q3dApp"])
        if (!$("#Question3d").is(":checked")) {
            hideAll([".Q3ded", ".Q3dl", ".Q3dev", ".Q3dg", ".Q3dApp"])
        }
        //Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question2aN", "#Question3a", "#Question3b", "#Question3d"], ["#ed_1a_2"]);
    })

    //Question 4
    $("#Question4a").click(function() {
        showAll([".Q4aed", ".Q4al"])
        if (!$("#Question4a").is(":checked")) {
            hideAll([".Q4aed", ".Q4al"])
        }
        // Importance of Sleep for Chronic Conditions
        duplicates(["#Question4a", "#Question4b", "#Question4c"], ["#ed_4a_1"])

        //Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question2aN", "#Question3a", "#Question3b", "#Question3d", "#Question4a"], ["#ed_1a_2"]);

        // Meal Planning
        duplicates(["#Question4a", "#Question8a"], ["#ed_4a_4"])
        
        //Increase Physical Activity
        duplicates(["#Question1a", "#Question1b", "#Question1c", "#Question2aN", "#Question2bN", "#Question2c", "#Question3a", "#Question4a"], ["#life_1a_4"])

        // Practice Medication and Relaxation Techniques
        duplicates(["#Question4a", "#Question5a"], ["#life_4a_2", "#life_4a_3"])

        //Food intake, Related lab results
        duplicates(["#Question2f", "#Question2g", "#Question2h", "#Question4a", "#Question4b", "#Question4c"], ["#ev_2f_1", "#ev_2f_3"])

        //Sleep monthly
        duplicates(["#Question4a", "#Question4b", "#Question4c", "#Question4d"], ["#ev_4a_1"])

        //Improve Quantity of Sleep
        duplicates(["#Question4a", "#Question4b", "#Question4c", "#Question4d"], ["#goals_4a_1"])

        //Sleep Handout
        duplicates(["#Question4a", "#Question4b"], ["#App_4a_1"])

    })

    $("#Question4b").click(function() {
        showAll([".Q4bed", ".Q4bl"])
        if (!$("#Question4b").is(":checked")) {
            hideAll([".Q4bed", ".Q4bl"])
        }
        // Importance of Sleep for Chronic Conditions
        duplicates(["#Question4a", "#Question4b", "#Question4c"], ["#ed_4a_1"])

        //Relaxation Techniques
        duplicates(["#Question4b", "#Question5a"], ["#ed_4b_3"])

        //Food intake, Related lab results
        duplicates(["#Question2f", "#Question2g", "#Question2h", "#Question4a", "#Question4b", "#Question4c"], ["#ev_2f_1", "#ev_2f_3"])

        //Sleep monthly
        duplicates(["#Question4a", "#Question4b", "#Question4c", "#Question4d"], ["#ev_4a_1"])

        //Improve Quantity of Sleep
        duplicates(["#Question4a", "#Question4b", "#Question4c", "#Question4d"], ["#goals_4a_1"])

        //Sleep Handout
        duplicates(["#Question4a", "#Question4b"], ["#App_4a_1"])
    })

    $("#Question4c").click(function() {
        showAll([".Q4ced", ".Q4cl"])
        if (!$("#Question4c").is(":checked")) {
            hideAll([".Q4ced", ".Q4cl"])
        }
        // Importance of Sleep for Chronic Conditions
        duplicates(["#Question4a", "#Question4b", "#Question4c"], ["#ed_4a_1"])

        //Food intake, Related lab results
        duplicates(["#Question2f", "#Question2g", "#Question2h", "#Question4a", "#Question4b", "#Question4c"], ["#ev_2f_1", "#ev_2f_3"])

        //Sleep monthly
        duplicates(["#Question4a", "#Question4b", "#Question4c", "#Question4d"], ["#ev_4a_1"])

        //Improve Quantity of Sleep
        duplicates(["#Question4a", "#Question4b", "#Question4c", "#Question4d"], ["#goals_4a_1"])

        //CPAP Direct Handout
        duplicates(["#Question4c", "#Question4d"], ["#App_4c_1"])
    })

    $("#Question4d").click(function() {
        showAll([".Q4ded", ".Q4dl"])
        if (!$("#Question4d").is(":checked")) {
            hideAll([".Q4ded", ".Q4dl"])
        }
        //Sleep monthly
        duplicates(["#Question4a", "#Question4b", "#Question4c", "#Question4d"], ["#ev_4a_1"])

        //Improve Quantity of Sleep
        duplicates(["#Question4a", "#Question4b", "#Question4c", "#Question4d"], ["#goals_4a_1"])

        //CPAP Direct Handout
        duplicates(["#Question4c", "#Question4d"], ["#App_4c_1"])
    })

    //Question 5
    $("#Question5a").click(function() {
        showAll([".Q5aed", ".Q5al"]);
        if (!$("#Question5a").is(":checked")) {
            hideAll([".Q5aed", ".Q5al"]);
        }
        //Importance of Social Networks
        duplicates(["#Question5a","#Question8e"], ["#ed_5a_1"])

        //Relaxation Techniques
        duplicates(["#Question4b", "#Question5a"], ["#ed_4b_3"])

        // Practice Medication and Relaxation Techniques
        duplicates(["#Question4a", "#Question5a"], ["#life_4a_2", "#life_4a_3"])

        //Stress Level Monthly, Improve coping with stress
        duplicates(["#Question5a", "#Question5b", "#Question5c", "#Question5d"], ["#ev_5a_1", "#goals_4a_1"])

        //Coping with Stress
        duplicates(["#Question5a", "#Question5b", "#Question5c"], ["#App_5a_1"])
    })

    $("#Question5b").click(function() {
        showAll([".Q5bed", ".Q5bl"])
        if(!$("#Question5b").is(":checked")) {
           hideAll([".Q5bed", ".Q5bl"])
        }
        //Stress Level Monthly, Improve coping with stress
        duplicates(["#Question5a", "#Question5b", "#Question5c", "#Question5d"], ["#ev_5a_1", "#goals_5a_1"])

        //Coping with Stress
        duplicates(["#Question5a", "#Question5b", "#Question5c"], ["#App_5a_1"])
    })

    $("#Question5c").click(function() {
        showAll([".Q5ced", ".Q5cl"])
        if(!$("#Question5c").is(":checked")) {
           hideAll([".Q5ced", ".Q5cl"])
        }
        //Stress Level Monthly, Improve coping with stress
        duplicates(["#Question5a", "#Question5b", "#Question5c", "#Question5d"], ["#ev_5a_1", "#goals_5a_1"])

        //Coping with Stress
        duplicates(["#Question5a", "#Question5b", "#Question5c"], ["#App_5a_1"])

    })

    $("#Question5d").click(function() {
        showAll([".Q5ded", ".Q5dl"])
        if(!$("#Question5d").is(":checked")) {
           hideAll([".Q5ded", ".Q5l"])
        }
        //Stress Level Monthly, Improve coping with stress
        duplicates(["#Question5a", "#Question5b", "#Question5c", "#Question5d"], ["#ev_5a_1", "#goals_4a_1"])
    })

    $("#Question6a").click(function() {
        showAll([".Q6aed", ".Q6al", ".Q6aev", ".Q6ag", ".Q6aApp"])
        if(!$("#Question6a").is(":checked")) {
           hideAll([".Q6aed", ".Q6al", ".Q6aev", ".Q6ag", ".Q6aApp"])
        }
    })

    $("#Question6b").click(function() {
        showAll([".Q6bed", ".Q6bl", ".Q6bev", ".Q6bg", ".Q6bApp"])
        if(!$("#Question6b").is(":checked")) {
           hideAll([".Q6bed", ".Q6bl", ".Q6bev", ".Q6bg", ".Q6bApp"])
        }
    })

    //Question 7
    $("#Question7a").click(function() {
        showAll([".Q7al"])
        if(!$("#Question7a").is(":checked")) {
            hideAll([".Q7al"])
        }
        //Managing Medications
        duplicates(["#Question7a", "#Question7c"], ["#ed_7a_1"])
        //Learning about your medications
        duplicates(["#Question7a", "#Question7b"], ["#ed_7a_2"])
        //Med list review quarterly, effective self-management
        duplicates(["#Question7a", "#Question7b", "#Question7c"], ["#ev_7a_1", "#goals_7a_1"])
    })

    $("#Question7b").click(function() {
        showAll([".Q7bl"])
        if(!$("#Question7b").is(":checked")) {
            hideAll([".Q7bl"])
        }
        //Learning about your medications
        duplicates(["#Question7a", "#Question7b"], ["#ed_7a_2"])
        //Med list review quarterly, effective self-management
        duplicates(["#Question7a", "#Question7b", "#Question7c"], ["#ev_7a_1", "#goals_7a_1"])
    })

    $("#Question7c").click(function() {
        showAll([".Q7cl"])
        if(!$("#Question7c").is(":checked")) {
            hideAll([".Q7cl"])
        }
        //Managing Medications
        duplicates(["#Question7a", "#Question7c"], ["#ed_7a_1"])
        //Med list review quarterly, effective self-management
        duplicates(["#Question7a", "#Question7b", "#Question7c"], ["#ev_7a_1", "#goals_7a_1"])
    })

    //Question 8
    $("#Question8a").click(function() {
        showAll([".Q8aed", ".Q8al", ".Q8aev", ".Q8ag"])
        if(!$("#Question8a").is(":checked")) {
            hideAll([".Q8aed", ".Q8al", ".Q8aev", ".Q8ag"])
        }
        //Financial Planning
        duplicates(["#Question8a", "#Question8b"], ["#ed_8a_1"])
        // Meal Planning
        duplicates(["#Question4a", "#Question8a"], ["#ed_4a_4"])
    })

    $("#Question8b").click(function() {
        showAll([".Q8bed", ".Q8bl", ".Q8bev", ".Q8bg"])
        if(!$("#Question8b").is(":checked")) {
            hideAll([".Q8bed", ".Q8bl", ".Q8bev", ".Q8bg"])
        }
         //Financial Planning
        duplicates(["#Question8a", "#Question8b"], ["#ed_8a_1"])
    })

    $("#Question8c").click(function() {
        showAll([".Q8ced", ".Q8cl", ".Q8cev", ".Q8cg"])
        if(!$("#Question8c").is(":checked")) {
            hideAll([".Q8ced", ".Q8cl", ".Q8cev", ".Q8cg"])
        }
    })

    $("#Question8d").click(function() {
        showAll([".Q8ded", ".Q8dl", ".Q8dev", ".Q8dg"])
        if(!$("#Question8d").is(":checked")) {
            hideAll([".Q8ded", ".Q8dl", ".Q8dev", ".Q8dg"])
        }
    })

    $("#Question8e").click(function() {
        showAll([".Q8el", ".Q8eev", ".Q8eg"])
        if(!$("#Question8e").is(":checked")) {
            hideAll([".Q8el", ".Q8eev", ".Q8eg"])
        }
        //Importance of Social Networks
        duplicates(["#Question5a","#Question8e"], ["#ed_5a_1"])

        //Connect with Supportive Community 
        duplicates(["#Question8e", "#Question8f"], ["#life_8e_3"])
    })

    $("#Question8f").click(function() {
        showAll([".Q8fed", ".Q8fl", ".Q8fev", ".Q8fg"])
        if(!$("#Question8f").is(":checked")) {
            hideAll([".Q8fed", ".Q8fl", ".Q8fev", ".Q8fg"])
        }
        //Connect with Supportive Community 
        duplicates(["#Question8e", "#Question8f"], ["#life_8e_3"])
    })

    //Question 9 
    $("#Question9a").click(function() {
        showAll([".Q9al"])
        if(!$("#Question9a").is(":checked")) {
            hideAll([".Q9al"])
        }
        //Foot Care, Check feet daily, Annual foot exam, Prevention of neuropathy & food-related complications, Foot Care Appendix
        duplicates(["#Question9a", "#Question9b"], ["#ed_9a_1", "#life_9a_1", "#ev_9a_1", "#goals_9a_1", "#App_9a_1"])
    })
    $("#Question9b").click(function() {
        showAll([".Q9bl"])
        if(!$("#Question9b").is(":checked")) {
            hideAll([".Q9bl"])
        }
        //Foot Care, Check feet daily, Annual foot exam, Prevention of neuropathy & food-related complications, Foot Care Appendix
        duplicates(["#Question9a", "#Question9b"], ["#ed_9a_1", "#life_9a_1", "#ev_9a_1", "#goals_9a_1", "#App_9a_1"])
    })
    $("#Question9c").click(function() {
        showAll([".Q9ced", ".Q9cl", ".Q9cev", ".Q9cg", ".Q9cApp"])
        if(!$("#Question9c").is(":checked")) {
            hideAll([".Q9ced", ".Q9cl", ".Q9cev", ".Q9cg", ".Q9cApp"])
        }
        
    })

    var counter = 1
    $("#appointment").click(function() {
        var id = "date" + counter
        var id2 = "alternate" + counter
        var id3 = "inputbox"+ counter
        $("#plan").append("<div id = '" + id3 +"'> <p>Date: <input type='text' class='datepicker' id = '"+ id +"'>&nbsp;<input type:text id= '"+ id2 +"' size='30'>&nbsp;<input ></p></div>")
        $( ".datepicker" ).datepicker({
            altField: "#" + id2,
            altFormat: "DD, d MM, yy"
        });
        counter++
    })

    $(".glyphicon-ok").click(function() {
        $('body *').replaceWith(function(){
        return this.value || this.innerHTML;
        });
    })

    $("#printButton").click(function() {
        printPlan(counter);
    })  
});














































/*$(document).ready(function() {
    //Plan Button
    $("#plan").click(function() {
        $("#plan_details").slideToggle();
    })

    //Question 1 (Clinical)
    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question1aY"){
            $(".Q1aed").show();
            $(".Q1aApp").show();
        }
        else if($(this).attr("id")=="Question1aN") {
            $(".Q1aed").hide();
            if (!$("#Question2dN").is(":checked")) {
                $(".Q1aApp").hide();
            }
            if ($("#Question2dY").is(":checked")) {
                $(".Q1aApp").show();
                $("#App_3").hide();
            }
            if($('#Question1bY').is(':checked')) {
                $("#ed_2").show();
            }
        }
    })

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question1bY"){
            $("#ed_2").show();
            $(".Q1bed").show();
            $(".Q1bApp").show();
        }
        else if($(this).attr("id")=="Question1bN") {
            $(".Q1bed").hide();
            $(".Q1bApp").hide();
            if(!$('#Question1aY').is(':checked')) {
                $("#ed_2").hide();
            }
            if($("#Question2cY").is(':checked')) {
                $("#App_4").show();
            }
        }
    })

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question1cY"){
            $(".Q1ced").show();
            $(".Q1bApp").show();
        }
        if($(this).attr("id")=="Question1cN") {
            $(".Q1ced").hide();
            if($("#Question2cY").is(':checked')) {
                $("#ed_7").show();
            }
        }
        if($("#Question1bN").is(':checked') && $("#Question1cN").is(':checked')) {
            $(".Q1bApp").hide();
        }
    })

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question1dY"){
            $(".Q1ded").show();
        }
        else if($(this).attr("id")=="Question1dN") {
            $(".Q1ded").hide();
        }
    })

    //Question 2 (Nutrition)
    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question2aY" || $(this).attr("id")=="Question2aN"){
            $(".Q2aed").show();
            $(".Q2aApp").show();
            if($(this).attr("id")=="Question2aN") {
                $(".Q2bApp").show();
                $("#ed_2").show();
            }
            else if($('#Question2aY').is(':checked')) {
                 $("#double1").hide();
                 $(".Q2bApp").hide();
            }
        }
    })

    $('input[type="radio"]').click(function() {
        if($(this).attr("id")=="Question2bY" || $(this).attr("id")=="Question2bN") {
            $(".Q2bed").show();
        }
    })

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question2cY"){
            $("#ed_7").show();
            $("#App_4").show();
            $("#App_9").show();
        }
        else if(!$('#Question2cY').is(':checked')) {
            if (!$('#Question1cY').is(':checked')) {
                $("#ed_7").hide();
                if (!$('#Question1bY').is(':checked')) {
                    $("#App_4").hide();
                }
            }
            if (!$('#Question2gY').is(':checked')){
                 $("#App_9").hide();
            }
        }
    })

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question2dY"){
            $(".Q2d1ed").show();
            $(".Q2d2ed").hide();
            $(".Q1aApp").show();
            $("#App_3").hide();
            $("#App_5").show();
        }
        else if ($(this).attr("id")=="Question2dN") {
            $("#App_5").hide();
            $(".Q1aApp").show();
            $(".Q2d2ed").show();
            $(".Q2d1ed").hide();
        }
    })  

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question2eY"){
            $("#ed_4").show();
            $("#App_10").show();
        }
        else if (!$("#Question1bY").is(':checked') && $('#Question2eN').is(':checked')) {
            $("#ed_4").hide();
            $("#App_10").hide();
        }
    })
    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question2fY"){
            $(".Q2fed").show();
        }
        else if ($('#Question2fN').is(':checked')) {
            $(".Q2fed").hide();
        }
    })

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question2gY"){
            $(".Q2ged").show();
            $("#App_9").show();
        }
        else if ($('#Question2gN').is(':checked')) {
            $(".Q2ged").hide();
            if (!$("#Question2cY").is(':checked')) {
                $("#App_9").hide();
            }
        }
    })

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question2hY"){
            $(".Q2hed").show();
            $("#App_11").show();
        }
        else if ($('#Question2hN').is(':checked')) {
            $(".Q2hed").hide();
            $("#App_11").hide();
        }
    })


    //Question 5
    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question5aY"){
            $("#AppS_1").show();
            $(".Q5aed").show();
        }
        else if ($('#Question5aN').is('checked') && !$('#Question5bY').is(':checked') && !$('#Question5cY').is(':checked')) {
                $("#AppS_1").hide();
        }
        else if ($('#Question5aN').is(':checked')){
            $(".Q5aed").hide();
        }
    })
});
    

/*$(document).ready(function() 
    $('#Diabetes').click(function() {
        $("#Diabetestext").toggle(this.checked);
    });

    $("#Hypercholesterolema").click(function() {
        $("#Hypercholesterolematext").toggle(this.checked);
    });

    $("#Congestive_Heart_Failure").click(function() {
        $("#Congestive_Heart_Failuretext").toggle(this.checked)
    });
    $("#plan").click(function() {
        $("#plan_details").slideToggle();
    });
    
    $(function() {
    $("#sortable1, #sortable2").sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

    $(function() {
        $("#plan_details").resizable();
    });
    $(function() {
    $( "#datepicker" ).datepicker();
    });
  });
})

$(document).ready(function(){
	function clearAll_1() {
    	$("#Question2").hide();
        $("#Question3").hide();
        $("#Question4").hide();
    }
    function clearAll_2() {
        $("#Question4").hide();
    }
    function notif() {
        $("#Recom").text("Please Complete Step 1")
        $("#Pattern").text("No Pattern")
        $("#Pattern").attr("disabled", true)
        $("#Pattern_Pic").attr("src", "")
    }
    function clickagain() {
        $('input[type = "radio"]').click(function() {
            if($(this).attr("id")=="Question1-1" || $(this).attr("id")=="Question1-2" || $(this).attr("id")=="Question1-3"){
                $("#Question2-1").prop("checked", false)
                $("#Question2-2").prop("checked", false)
                $("#Question2-3").prop("checked", false)
                $("#Question3-1").prop("checked", false)
                $("#Question3-2").prop("checked", false)
                $("#Question3-3").prop("checked", false)
                $("#Question4-1").prop("checked", false)
                $("#Question4-2").prop("checked", false)
                $("#Question4-3").prop("checked", false)
        }
        })
    }
    function clickagain2() {
        $('input[type = "radio"]').click(function() {
            if($(this).attr("id")=="Question2-1" || $(this).attr("id")=="Question2-2" || $(this).attr("id")=="Question2-3"){
                $("#Question4-1").prop("checked", false)
                $("#Question4-2").prop("checked", false)
                $("#Question4-3").prop("checked", false)
        }
        })
    }

    $('input[type="radio"]').click(function(){
        if($(this).attr("id")=="Question1-1"){
        	clearAll_1();
            notif();
            $("#Question2").show();
        }
        if($(this).attr("id")=="Question1-2"){
        	clearAll_1();
            notif();
            $("#Question3").show();
        }
        if($(this).attr("id")=="Question1-3"){
            clearAll_1();
           	$("#Recom").text("Solution")
            $("#Pattern").text("Click here for Pattern")
            $("#Pattern").attr("disabled", false)
			$("#Pattern_Pic").attr("src", "./Images/Blue.png")
			$("#download").attr("src", "./Images/Blue.png")
        }
        if($(this).attr("id")=="Question2-1"){
            clearAll_2();
            $("#Recom").text("Solution2")
            $("#Pattern").text("Click here for Pattern")
            $("#Pattern").attr("disabled", false)
			$("#Pattern_Pic").attr("src", "./Images/Red.png")
			$("#download").attr("src", "./Images/Red.png")
            clickagain();
            clickagain2();
        }
        if($(this).attr("id")=="Question2-2"){
            notif();
            //clickagain2();
            $("#Question4").show();
        }
        if($(this).attr("id")=="Question2-3"){
            clearAll_2();
            $("#Recom").text("Solution3")
            $("#Pattern").text("Click here for Pattern")
            $("#Pattern").attr("disabled", false)
            $("#Pattern_Pic").attr("src", "./Images/Yellow.png")
            $("#download").attr("src", "./Images/Yellow.png")
            clickagain();
            clickagain2();
        }
    });

    $("#button1").click(function() {
 		clearAll_1();
	});

	$("#Pattern").click(function() {
		$("#Pattern_Pic").Toggle();
		$("#download_btn").Toggle();
	})
});*/