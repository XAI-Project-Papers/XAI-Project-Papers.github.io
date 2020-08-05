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

/* function search(){
    var search = document.getElementById("searchBar").value;
    var searchRange = document.getElementsByClassName("year");

    for (item of searchRange.values()){

    }
} */