    console.log(jsonData);

    function makeContainer(sectionData,sectionId){
        let secA = sectionId + "A";
        let secB = sectionId + "B";

        var box = document.createElement("div");
        box.className = "container pr-0 pl-0 mb-3 mt-3";
        box.style = "background-color:" + sectionData["color"] + ";"

        var media = document.createElement("div");
        media.className = "media";
        var mediaImg = document.createElement("img");
        mediaImg.className = "align-self-start";
        mediaImg.src = sectionData["image"];
        mediaImg.alt = "Generic placeholder image"
        media.appendChild(mediaImg);

        var info1 = document.createElement("div");
        info1.id = secA;
        info1.className = "media-body";
        info1.style = "height:235px;width:100%;line-height:235px;text-align:center;display:inline-block";
        info1.onclick = function() {toggleInfo(secA,secB) };
        var info1child = document.createElement("h1");
        if (sectionData["color"] === "#E91E63" ){
            info1child.style = "display: inline-block;vertical-align: middle;line-height: normal;color:#ffffff;";
        } else {
            info1child.style = "display: inline-block;vertical-align: middle;line-height: normal;";
        }
        var newContent1 = document.createTextNode(sectionData["title"]); 
        info1child.appendChild(newContent1);  
        info1.appendChild(info1child);

        var info2 = document.createElement("div");
        info2.id = secB;
        info2.className = "media-body";
        info2.style = "min-height:235px;width:100%;display:none;";
        var info2header = document.createElement("div");
        info2header.className = "media-body";
        info2header.style = "height:50px;line-height:50px;display: inline-block;";
        info2header.onclick = function() {toggleInfo(secB,secA)};
        var info2child = document.createElement("h4");
        info2child.className = "mt-0 pl-4";
        if (sectionData["color"] === "#E91E63" ){
            info2child.style = "display: inline-block;vertical-align: middle;line-height: normal;color:#ffffff;";
        } else {
            info2child.style = "display: inline-block;vertical-align: middle;line-height: normal;";
        }
        var newContent2 = document.createTextNode(sectionData["title"]);
        info2child.appendChild(newContent2);
        info2header.appendChild(info2child);
        info2.appendChild(info2header);

        var info2table = document.createElement("table");
        info2table.style = "height:180px;width:100%;font-size:20px;";
        let odd = true;
        for(let row of sectionData["row"]){
            var tr = document.createElement("tr");
            if (odd){
                tr.style = "background-color:rgba(255, 255, 255, 0.6);";
                odd = false;
            } else {
                tr.style = "background-color:rgba(255, 255, 255, 0.4);";
                odd = true;
            }
            // 1st column: Check box and Label
            var td = document.createElement("td");
            td.className = "pl-3";
            var tddiv = document.createElement("div");
            tddiv.className = "checkbox";
            tddiv.style = "width:16px;height:16px;border:1px solid black;margin-top:3px;margin-top:3px;margin-right:3px;display: inline-block";
            td.appendChild(tddiv);
            var label = document.createTextNode(row["name"]);
            td.appendChild(label);
            tr.appendChild(td);

            // 2nd column: Action
            var td = document.createElement("td");
            var div = document.createElement("div");
            if(row["actionUrl"]){
                console.log(row["actionUrl"]);
                div.onclick = function() {playMusic(this,row["actionUrl"])};
            }
            var img = document.createElement("img");
            img.src = row["actionIcon"];
            img.style = "height:24px"
            div.appendChild(img);
            var label = document.createTextNode(row["actionLabel"]);
            div.appendChild(label);
            var img = document.createElement("img");
            img.className = "playIcon";
            img.src = "img/play_icon.svg";
            img.style = "height:24px;display:None;";
            div.appendChild(img);
            td.appendChild(div);
            tr.appendChild(td);

            // 3rd column: Stand/Sit/Kneel
            var td = document.createElement("td");
            var img = document.createElement("img");
            img.src = row["stanceIcon"];
            img.style = "height:24px";
            td.appendChild(img);
            var label = document.createTextNode(row["stanceLabel"]);
            td.appendChild(label);
            tr.appendChild(td);

            info2table.appendChild(tr); 
        }
        var info2tablediv = document.createElement("div");
        info2tablediv.appendChild(info2table);
        info2.appendChild(info2tablediv);

        media.appendChild(info1);
        media.appendChild(info2);
        box.appendChild(media);
        document.getElementById('OuterContainer').appendChild(box);        
    }

    let test = 'test';
    let i = 0;
    for(let data of jsonData['sections']){
        makeContainer(data,test + i);
        i = i + 1;
    }
