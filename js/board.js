$(document).ready(function () {
    var $todo = $("#todo");
    var $taskName = $("#taskName");
    var taskCounter = 0;
    var now = new Date();
    var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    $("#addTask").click(function () {
        if ($taskName.val() !== "") {
            $($todo).prepend("" +
                "<li class=\"info-element\" id=\"task" + taskCounter+ "\">" +
                $taskName.val() +
                "<div class=\"agile-detail\">" +
                "<a href=\"#\" class=\"pull-right btn btn-xs btn-primary m-l-sm\">Test</a>" +
                "<a href=\"#\" class=\"pull-right btn btn-xs btn-danger\">Delete</a>" +
                " <i class=\"fa fa-clock-o\"></i> " +
                now.getDate() + "." +
                (now.getMonth()+1) + "." +
                now.getFullYear() + ", " +
                week[now.getDay()-1] +
                "</div> " +
                "</li>");
            taskCounter += 1;
            $taskName.val()="";
        }
    });

});
