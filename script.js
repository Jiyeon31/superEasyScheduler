const saveBtn = $(".saveBtn");
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

saveBtn.on("click", function () {
    const currTime = $(this).siblings(".span").text();
    const plans = $(this).siblings("#inputPlan").val();
    localStorage.setItem(currTime, plans);
});

function keepPlans () {
    $(".span").each(function() {
    const currentTime = $(this).text();
    const savedPlans = localStorage.getItem(currentTime);
    $(this).siblings("#inputPlan").val(savedPlans);
})
};

hourColors();
keepPlans();

