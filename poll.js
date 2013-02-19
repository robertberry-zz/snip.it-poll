(function () {
    var POLL_URL = "http://3kgx.t.proxylocal.com/api/snippet/poll/environment/2013/feb/18/nuclear-power-ministers-reactor"

    var poll = function () {
        $.ajax({
            url: POLL_URL,
            success: function (data) {
                // data will be null if polled for a long time without changes
                if (data != null) {
                    console.log(data);
                }
            },
            dataType: "json",
            complete: poll,
            timeout: 30000
        });
    };

    poll();

})();
