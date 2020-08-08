//alert("This page is under development");

//hides panel view and associated buttons, shows lists view
function lists(){

    //variable definitions
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");
    var abstractView = document.getElementById("abstractView");
    var refView = document.getElementById("refView");

    panels.style.display = "none"; //hiding panels
    lists.style.display = "inline"; //showing lists, "inline" is used instead of "" because lists is set to display: "none" as a default

    //hiding abstract and reference view buttons
    abstractView.style.display = "none";
    refView.style.display="none";
}

//hides lists, shows panels and associated buttons
function panels(){

    //variable definitions
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");
    var abstractView = document.getElementById("abstractView");
    var refView = document.getElementById("refView");

    panels.style.display = ""; //showing panels, "" sets display style to CSS default
    lists.style.display = "none"; //hiding lists

    //showing abstract and reference view buttons
    abstractView.style.display = "";
    refView.style.display="";
}

//decides when a search should occur, makes "no results" message appear, reloads window after search for user convenience
function enter(event){

    //variable definitions
    var searchInput = document.getElementById("searchBar").value;
    var searchResults = document.getElementById("searchResults");
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");

    //TODO: make all panels visible if a new search is taking place (change event to oninput, remove/adapt else if)

    //if enter key is pressed
    if (event.keyCode == 13 || event.which == 13){
        searchResults.innerHTML = "Search results for '" + searchInput + "' in abstract and/or reference/list view"; //writing search results message
        searchResults.classList.remove("hidden"); //displaying search results message
        panels.style.marginTop = "190px"; //adding spacing above panels so search message does not overlap
        lists.style.marginTop = "190px"; //adding spacing above lists so search message does not overlap
        search(); //running search function
        checkForResults(); //running checkForResults function (if no panels are present, displays no results message)
    }

    //if nothing is in search bar [or] backspace/delete is pressed [or] input is changed, window is reloaded
    //this is useful if: (1) the user wishes look at all panels after a search is completed or (2) change their search without viewing old results
    else if (!searchInput || event.keyCode == 8 || event.which == 8 || event.keyCode == 46 || event.which == 46){
        window.location.reload();
    }
}

function search(){

    //variable definitions
    var searchInput = document.getElementById("searchBar").value;
    var search = searchInput.toUpperCase();

    var h2 = document.getElementsByClassName("pubTitle");
    var p = document.getElementsByClassName("pubDes");
    var ab = document.getElementsByClassName("abstract");
    var date = document.getElementsByClassName("date");

    //getting executeSearchOn function return value (list) for all search elements (headings, reference/publication descriptions, abstracts, and dates)
    var h2ExecuteSearchOn = executeSearchOn(h2, search);
    var pExecuteSearchOn = executeSearchOn(p, search);
    var abExecuteSearchOn = executeSearchOn(ab, search);
    var dateExecuteSearchOn = executeSearchOn(date, search);
    
    //if no results were found in a [certain panel???], hide that panel
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