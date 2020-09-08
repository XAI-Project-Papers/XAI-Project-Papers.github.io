//functions with TODOs/questions in them: enter, search, executeSearchOn, findAndHideParentPanel, checkForResults, switchToAbstract, switchToReference
//TODO: implement a system in which it displays both reference and abstract view if both contain a search input
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

// When the user scrolls the page, execute myFunction
window.onscroll = function () { stickBar() };

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickBar() {
    var searchBar2 = document.getElementById("searchBar2");
    var navBar = document.getElementById("navBar");
    if (window.pageYOffset >= 500) {
        searchBar2.style.display = "inline";
        navBar.style.backgroundColor = "grey";
        navBar.style.paddingTop = "5px";
        navBar.style.boxShadow = "0 6px 12px #111111";
    }
    else {
        searchBar2.style.display = "none";
        navBar.style.backgroundColor = "";
        navBar.style.paddingTop = "";
        navBar.style.boxShadow = "none";
    }
}

//hides panel view and associated buttons, shows lists view
function listsView() {

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
    refView.style.display = "none";
}

//hides lists, shows panels and associated buttons
function panelsView() {

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
    refView.style.display = "";
}

//switch the content inside a panel so it displays the abstract of the publication
function switchToAbstract() {

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
    for (var i = 0; i < length; i++) {
        //hide the reference/don't display it
        panDes[i].style.display = "none";
    }

    //for every abstract
    for (var i = 0; i < aLength; i++) {
        //show the abstract/display it
        abstract[i].style.display = "inline";
    }
}

//switch the content inside a panel so it displays the reference of the publication
function switchToReference() {

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
    for (var i = 0; i < length; i++) {
        //display it
        panDes[i].style.display = "inline";
    }

    //for every abstract
    for (var i = 0; i < aLength; i++) {
        //hide it
        abstract[i].style.display = "none";
    }
}