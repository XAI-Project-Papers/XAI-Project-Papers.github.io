//alert("This page is under development");

function lists(){
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");
    panels.style.display = "none";
    lists.classList.remove("hidden")
}

function panels(){
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");
    panels.style.display = "grid";
    lists.classList.add("hidden");
}

function enter(event){
    if (event.keyCode == 13 || event.which == 13){
        search();
    }
}

function search(){
    var searchInput = document.getElementById("searchBar").value;
    var search = searchInput.toUpperCase();

    var h2 = document.getElementsByClassName("pubTitle");
    var p = document.getElementsByClassName("pubDes");
    
    for (i=0; i < h2.length; i++){
        var valH2 = h2[i].innerText.toUpperCase();
        if (valH2.indexOf(search)>-1){
            h2[i].style.zIndex = '10000000';
            h2[i].style.backgroundColor = 'yellow'
        }
        else{
            var item = h2[i];
            findAndHideParentPanel(item);
        }
    }
}

function findAndHideParentPanel(innerObject){
    var object = innerObject;
    var validation = false;
    while(!validation){
        //alert("works");//This alert shows up!!!!!!!!!!
        if (object.classList.indexOf(panel) > -1){
            break;
            alert("works");//This alert does not show up
            validation = true;
        }
        else{
            break;
            alert("works");//This alert does not show up
            object = object.parentNode;
        }
    }
    alert("works");//This still doesnt shoew up !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    object.classList.add("hidden");
}