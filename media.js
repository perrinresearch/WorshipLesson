    function toggleInfo(offDiv,onDiv) {
        document.getElementById(offDiv).style.display='None';
        document.getElementById(onDiv).style.display='inline-block';
    }


    function playMusic(el,soundfile) {
        var embed = document.getElementById("embed");
        if (!embed) {
            var embed = document.createElement("embed");
                embed.id= "embed";
                embed.setAttribute("src", soundfile);
                embed.setAttribute("hidden", "true");
            el.appendChild(embed);
        } else {
            embed.parentNode.removeChild(embed);
        }
        el.getElementsByClassName("playIcon")[0].style.display='inline-block';
    }

    function loadData(){
        //let url = "http://files.perrinresearch.com/mass.json";
        var url = "mass.json";
        console.log(url);
        $.getJSON( url, function( data ) {
            console.log('Anything?');
            console.log(data);
            var items = [];
            $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
            });
           
            $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
            }).appendTo( "body" );
        });
        console.log('Done');
    }

