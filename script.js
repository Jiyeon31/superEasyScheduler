$("#currentDay").text(moment().format('dddd, MMM Do'));

function hourColors () {
    const currHour = moment().hours();

    $(".timeblock").each(function() {

    const currHourEl = parseInt($(".span").attr("id"));
    
    if(currHourEl === currHour) {
        $(".hour").addClass("present");
    } else if (currHourEl > currHour) {
        $(".hour").addClass("future");
    } else {
        $(".hour").addClass("past");
    }
});
};


const saveBtn = $(".saveBtn");
    for (var i = 0; i < saveBtn.length; i++) {
        saveBtn[i].addEventListener("click", function () {
            const currTime = parseInt($(".span").attr("id"));
            const plans = document.getElementById("inputPlan").value;
            localStorage.setItem(currTime, plans);
        });
};

hourColors();

