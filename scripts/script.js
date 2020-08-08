//alert("This page is under development");

//functions with TODOs/questions in them: event, search, executeSearchOn, findAndHideParentPanel, checkForResults

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
    
    //if no results were found in a [certain panel???], hide that panel using findAndHideParentPanel function
    if (h2ExecuteSearchOn[1] && pExecuteSearchOn[1] && dateExecuteSearchOn[1] && abExecuteSearchOn[1]){
        var item1 = h2ExecuteSearchOn[0];
        findAndHideParentPanel(item1);
    }

}

//locates a search input within an element, if nothing is located: (1) item index is returned, (2) true is also returned to indicate nothing was found (nothing was found = true)
function executeSearchOn(elementVar, searchItem){
    //for every item within an elementVar (ex. for every word/letter within a h2 element)
    for (i=0; i < elementVar.length; i++){
        //capitalize item text (e.g. capitalize word/letter within a h2 element)
        var val = elementVar[i].innerText.toUpperCase();
        //if item text contains search input
        if (val.indexOf(searchItem)>-1){
            //increase the z-index of that element [or word???]
            elementVar[i].style.zIndex = '10000000';
            //if the element [or word???] is a date, set the background color to red
            if (findClass(elementVar[i], "date")){
                elementVar[i].style.backgroundColor = 'red';
            }
            //if the element is not a date, set the background color to yellow
            else{
                elementVar[i].style.backgroundColor = 'yellow';
            }
        }
        //if item text does not contain search input
        else{
            //return item and true
            var item = elementVar[i];
            return [item, true];
        }
    }
}

//finds and hides a parent panel given the item
function findAndHideParentPanel(innerObject){

    //variable definitions/initializations
    var object = innerObject;
    var validation = false;
    var classesArray = null;

    //while validation is false
    while (!validation) {
        //classes array is an array of an element's classes
        classesArray = object.className.split(/\s+/);

        //if an object has a class of panel
        if (classesArray.indexOf("panel") > -1) {
            //set validation to true so the while loop is escaped and not re-entered
            validation = true;
        }
        //if an object does not have a class of panel, set the grab the parent element of an object, and re-enter while loop
        else {
            object = object.parentNode;
        }
    }
    //once a panel is found, hide it
    //TODO: change this to display style (try to eliminate usage of hidden class)
    object.classList.add("hidden");
}

//check if an object has a class given the class you are searching for and the element you are checking
function findClass(innerObject, searchClass){

    //variable definition/initialization
    var object = innerObject;
    var classesArray = classesArray = object.className.split(/\s+/);//an array of the element/object's classes

    //if the element has the specified class
    if (classesArray.indexOf(searchClass) > -1) {
        //return true indicating that the object has the specified class
        return true;
    }
    //if the element does not have the specified class
    else{
        //return false indicating that the object does not have the specified class
        return false;
    }
}

//switch the content inside a panel so it displays the abstract of the publication
function switchToAbstract(){
    //reload the window [so that previous search results don't show up???]
    window.location.reload();

    //variable definition
    var abstract = document.getElementsByClassName("abstract");
    var aLength = abstract.length;//number of elements with a certain class name (e.g. number of items with a class of abstract)
    var panDes = document.getElementsByClassName("panDes");
    var length = panDes.length;//number of items with a class name of panDes (reference items) [rename to something reference related???]

    //for every reference
    for (var i=0; i<length; i++){
        //hide the reference/don't display it
        panDes[i].style.display="none";
    }

    //for every abstract
    for (var i=0; i<aLength; i++){
        //show the abstract/display it
        abstract[i].style.display="inline";
    }
}

//switch the content inside a panel so it displays the reference of the publication
function switchToReference(){

    //variable definition --look at previous function for more specifics
    var abstract = document.getElementsByClassName("abstract");
    var aLength = abstract.length;
    var panDes = document.getElementsByClassName("panDes");
    var length = panDes.length;

    //for every reference
    for (var i=0; i<length; i++){
        //display it
        panDes[i].style.display="inline";
    }

    //for every abstract
    for (var i=0; i<aLength; i++){
        //hide it
        abstract[i].style.display="none";
    }
}

//check if a search has any results (in abstract and/or reference/list view)
function checkForResults(){

    //variable definition/initialization
    var panels = document.getElementById("panels");
    var noResults = document.getElementById("noResults");
    var length = panels.length;//number panels
    var numberOfActivePanels = 0;
    var classesArray = null;

    //for every panel (for every item in panels div)
    for (var i = 0; i<length; i++){
        //make a list of its classes
        classesArray = panels.className.split(/\s+/);

        //if the panel has a class of hidden (if the panel is hidden)
        if (classesArray.indexOf("hidden") > -1){
            //add one to the number of active panels [say it is active???]
            numberOfActivePanels += 1;
        }
    }
    //if no panels are active
    if (numberOfActivePanels == 0){
        //display message saying that no search results exist
        noResults.style.display = "inline";
    }
}