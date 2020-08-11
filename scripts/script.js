//functions with TODOs/questions in them: enter, search, executeSearchOn, findAndHideParentPanel, checkForResults, switchToAbstract, switchToReference
//TODO: implement a system in which it displays both reference and abstract view if both contain a search input

//decides when a search should occur, makes "no results" message appear, reloads window after search for user convenience
function enter(event){
}

/* function search(){
} */

//locates a search input within an element, if nothing is located: (1) item index is returned, (2) true is also returned to indicate nothing was found (nothing was found = true)
function executeSearchOn(elementVar, searchItem){
}

//finds and hides a parent panel given the item
function findAndHideParentPanel(innerObject){
}

//check if a search has any results (in abstract and/or reference/list view)
function checkForResults(){
}

/* 
Search Algorithm:
[1] Get user input
[2] show abstract and reference view
[3] check if any panel elements have the input
[4] if an element has the input, highlight the input in the element
[5] if a panel's elements don't have the input, hide the panel
[6] check if any list elements have the input
[7] if a list element has the input, highlight the input in the element
[8] if the searchbox is cleared, reload the page
*/

function search(){
    var input = document.getElementById("searchBar").value.toUpperCase();
    if (!input){
        window.location.reload();
    }
    else{
        var panels = document.getElementById("panels");
        var classesArray = null;
        for (var i = 0; i < panels.children.length; i++){
            classesArray = panels.children[i].className.split(/\s+/);
            if (classesArray.indexOf("panel") > -1){
                checkPanel(panels.children[i], input);
            }
            else{
                alert("An error occured when searching in " + toString(panels[i].id));
            }
        }
    }
}

function checkPanel(panel, searchInput){
    var found = 0;
    var classesArray = null;
    var childItem = null;
    for (var i = 0; i < panel.children.length; i++){
        childItem = panel.children[i];
        classesArray = childItem.className.split(/\s+/);
        if (classesArray.indexOf("panelContent") > -1){
            for (var n = 0; n < childItem.children.length; n++){
                var val = childItem.children[n].innerText.toUpperCase();
                var innerHTML = childItem.children[n].innerHTML;
                if (val.indexOf(searchInput) > -1){
                    /* innerHTML = innerHTML.substring(0,index) + "<span style='background-color: yellow;'>" + innerHTML.substring(index, index + searchInput.length) + "</span>" + innerHTML.substring(index + searchInput.length);
                    inputText.innerHTML = innerHTML;
                    found += 1; --> not making desired output
                    */ 
                }
            }
        }
        else{
            alert("An error occured when searching in " + toString(panel[i].parentNode.id));
        }
    }
    if (found == 0){
        panel.style.display = "none";
    }
}

/* //check if an object has a class given the class you are searching for and the element you are checking
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
} */


//________________________________________________________________________________________________________


//hides panel view and associated buttons, shows lists view
function listsView(){

    //variable definitions
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");
    var abstractView = document.getElementById("abstractView");
    var refView = document.getElementById("refView");
    var listView = document.getElementById("listView");
    var panelView = document.getElementById("panelView");

    panels.style.display = "none"; //hiding panels
    lists.style.display = "inline"; //showing lists, "inline" is used instead of "" because lists is set to display: "none" as a default
    panelView.classList.remove("panelAndListDefault");
    listView.classList.add("panelAndListDefault");

    //hiding abstract and reference view buttons
    abstractView.style.display = "none";
    refView.style.display="none";
}

//hides lists, shows panels and associated buttons
function panelsView(){

    //variable definitions
    var panels = document.getElementById("panels");
    var lists = document.getElementById("lists");
    var abstractView = document.getElementById("abstractView");
    var refView = document.getElementById("refView");
    var listView = document.getElementById("listView");
    var panelView = document.getElementById("panelView");

    panels.style.display = ""; //showing panels, "" sets display style to CSS default
    lists.style.display = "none"; //hiding lists
    panelView.classList.add("panelAndListDefault");
    listView.classList.remove("panelAndListDefault");

    //showing abstract and reference view buttons
    abstractView.style.display = "";
    refView.style.display="";
}

//switch the content inside a panel so it displays the abstract of the publication
function switchToAbstract(){

    //variable definition
    var abstract = document.getElementsByClassName("abstract");
    var aLength = abstract.length;//number of elements with a certain class name (e.g. number of items with a class of abstract)
    var panDes = document.getElementsByClassName("panDes");
    var length = panDes.length;//number of items with a class name of panDes (reference items) [rename to something reference related???]
    var abstractView = document.getElementById("abstractView");
    var refView = document.getElementById("refView");

    abstractView.classList.add("refAndAbstractDefault");
    abstractView.classList.remove("refAndAbstractLight");
    refView.classList.remove("refAndAbstractDefault");
    refView.classList.add("refAndAbstractLight");

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
    var abstractView = document.getElementById("abstractView");
    var refView = document.getElementById("refView");

    abstractView.classList.remove("refAndAbstractDefault");
    abstractView.classList.add("refAndAbstractLight");
    refView.classList.add("refAndAbstractDefault");
    refView.classList.remove("refAndAbstractLight");

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