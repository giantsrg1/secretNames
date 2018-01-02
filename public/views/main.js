(function() {
    //handlers
    function clear(event) {
        $('#secretName').css('background-color', '');
        $('#secretName').val('');
    }

    //Buttons
    $('#clearSecret').on('click', clear)

    //init - get the data from source and set up page
    function init() {
        const apiURL = 'https://private-f3b4b-interview2.apiary-mock.com/data';
        $('#ghosts').hide();
        $.getJSON(apiURL).done(function(data) {
        	//sort the data by timestamp
            let tempData = data.sort((a, b) => {
                return a.timestamp - b.timestamp;
            });
            //add the ghosts to the frontend
            $('#ghosts').append($.map(tempData, createRow));
            $('#loading').hide();
            $('#ghosts').show();            
        });
    }

    function createRow(ghost) {
        return (
            $('<div class="row ghost">').append(
                $('<div class="col-md-2 col-xs-12">').append(
                    $('<img class="img-responsive images" >').attr('src', ghost.image)),
                $('<div class="col-md-10 col-xs-12">').append(
                    $('<div class="row">').append(
                        $('<h1></h1>').text(ghost.name.toUpperCase())),
                    $('<div class="row">').append(
                        $('<h5></h5>').text(formatDate(ghost.timestamp))))).on('click', ghostClick)
        );

        //ghostClick needed here because of scope
        function ghostClick(event) {
            $('#secretName').val(ghost.secret)
            $('#secretName').css('background-color', ghost.secret)
        }
    }

    //format the date for view
    function formatDate(timestamp) {
        let date = new Date(+timestamp);
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }

    init();

})()