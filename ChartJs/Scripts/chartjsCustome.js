
        //var myChart = new Chart({  });
        window.onload = function () {
            createChartWinLoss();
        }
var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
    //return 0;
};
      
function createChartWinLoss() {

    var ctx = document.getElementById("myChart");
    var ctx = document.getElementById("myChart").getContext("2d");
    var ctx = $("#myChart");

    var barChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [

            {
                label: "Bob",
                fillColor: "rgba(88,196,246,0.5)",
                strokeColor: "rgba(88,196,246,0.8)",
                highlightFill: "rgba(88,196,246,0.75)",
                highlightStroke: "rgba(88,196,246,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {
                label: "Tina",
                fillColor: "#000",
                strokeColor:  "#000",
                highlightFill: "rgba(74,211,97,0.75)",
                highlightStroke: "rgba(74,211,97,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
             {
                 label: "Tina",
                 fillColor: "#000",
                 strokeColor: "#000",
                 highlightFill: "#000",
                 highlightStroke: "#000",
                 data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
             }

        ]
    }

    var ctx = document.getElementById("myChart").getContext("2d");
    //window.myBar = new window.Chart(ctx).Line(barChartData, {
    //    responsive: true,
    //    animation: true,
    //    barValueSpacing: 5,
    //    barDatasetSpacing: 1,
    //    tooltipFillColor: "rgba(0,0,0,0.8)",
    //    multiTooltipTemplate: "<%= label %> - <%= value %>"

    //});

    var chartInstance = new window.Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: false,
            tooltips: false,
            tooltipTemplate: function (barChartData) {
                console.log('in');
                return barChartData.label + " : " + scale[barChartData.value];
            }
        },
       
        //multiTooltipTemplate: function (barChartData) { return barChartData.datasetLabel + " : " + barChartData.value; }
       
    });


    console.log('hello');
    console.log(barChartData.datasetLabel);
}
