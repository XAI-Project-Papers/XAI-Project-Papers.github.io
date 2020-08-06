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
    var searchInput = document.getElementById("searchBar").value;
    if (event.keyCode == 13 || event.which == 13){
        search();
        /* if (searchInput == "" || searchInput == " "){
            var searchResults = document.getElementById("searchResults");
            searchResults.classList.add("hidden");
        }
        else{
            searchResults.classList.remove("hidden");
            search();
        } */
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
    var classesArray = null;
    while (!validation) {
        classesArray = object.className.split(/\s+/);
        if (classesArray.indexOf("panel") > -1) {
            validation = true;
        }
        else {
            object = object.parentNode;
            
        }
    }
    object.classList.add("hidden");
}