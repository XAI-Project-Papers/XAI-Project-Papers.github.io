//alert("This page is under development");

function lists(){
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");
    var abstractView = document.getElementById("abstractView");
    var refView = document.getElementById("refView");
    panels.style.display = "none";
    lists.classList.remove("hidden");
    abstractView.style.display = "none";
    refView.style.display="none"
}

function panels(){
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");
    var abstractView = document.getElementById("abstractView");
    var refView = document.getElementById("refView");
    panels.style.display = "grid";
    lists.classList.add("hidden");
    abstractView.style.display = "";
    refView.style.display="";
}

function enter(event){
    var searchInput = document.getElementById("searchBar").value;
    if (event.keyCode == 13 || event.which == 13){
        var searchResults = document.getElementById("searchResults");
        var panels = document.getElementById("panels");
        var lists = document.getElementById("lists");
        searchResults.innerHTML = "Search results for '" + searchInput + "' in abstract and/or reference/list view";
        searchResults.classList.remove("hidden");
        panels.style.marginTop = "190px";
        lists.style.marginTop = "190px";
        search();
        checkForResults();
    }
    else if (!searchInput){
        window.location.reload();
    }
}

function search(){
    var searchInput = document.getElementById("searchBar").value;
    var search = searchInput.toUpperCase();

    var h2 = document.getElementsByClassName("pubTitle");
    var p = document.getElementsByClassName("pubDes");
    var ab = document.getElementsByClassName("abstract");
    var date = document.getElementsByClassName("date");

    var h2ExecuteSearchOn = executeSearchOn(h2, search);
    var pExecuteSearchOn = executeSearchOn(p, search);
    var abExecuteSearchOn = executeSearchOn(ab, search);
    var dateExecuteSearchOn = executeSearchOn(date, search);

    if (h2ExecuteSearchOn[1] && pExecuteSearchOn[1] && dateExecuteSearchOn[1] && abExecuteSearchOn[1]){
        var item1 = h2ExecuteSearchOn[0];
        findAndHideParentPanel(item1);
    }

}

function executeSearchOn(elementVar, searchItem){
    for (i=0; i < elementVar.length; i++){
        var val = elementVar[i].innerText.toUpperCase();
        if (val.indexOf(searchItem)>-1){
            elementVar[i].style.zIndex = '10000000';
            if (findClass(elementVar[i], "date")){
                elementVar[i].style.backgroundColor = 'red';
            }
            else{
                elementVar[i].style.backgroundColor = 'yellow';
            }
        }
        else{
            var item = elementVar[i];
            return [item, true];
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

function findClass(innerObject, searchClass){
    var object = innerObject;
    var classesArray = classesArray = object.className.split(/\s+/);
    if (classesArray.indexOf(searchClass) > -1) {
        return true;
    }
    else{
        return false;
    }
}

function switchToAbstract(){
    window.location.reload();
    var abstract = document.getElementsByClassName("abstract");
    var aLength = abstract.length;
    var panDes = document.getElementsByClassName("panDes");
    var length = panDes.length;
    for (var i=0; i<length; i++){
        panDes[i].style.display="none";
    }
    for (var i=0; i<aLength; i++){
        abstract[i].style.display="inline";
    }
}

function switchToReference(){
    var abstract = document.getElementsByClassName("abstract");
    var aLength = abstract.length;
    var panDes = document.getElementsByClassName("panDes");
    var length = panDes.length;
    for (var i=0; i<length; i++){
        panDes[i].style.display="inline";
    }
    for (var i=0; i<aLength; i++){
        abstract[i].style.display="none";
    }
}

function checkForResults(){
    var panels = document.getElementById("panels");
    var noResults = document.getElementById("noResults");
    var length = panels.length;
    var numberOfActivePanels = 0;
    var classesArray = null;
    for (var i = 0; i<length; i++){
        classesArray = panels.className.split(/\s+/);
        if (classesArray.indexOf("hidden") > -1){
            numberOfActivePanels += 1;
        }
    }
    if (numberOfActivePanels == 0){
        noResults.style.display = "inline";
    }
}