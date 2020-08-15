<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XAI Project Papers</title>
    <link rel="icon" href="./images and icons/OSU.png">
    <link rel="stylesheet" type="text/css" href="./styles/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <div id="landing">
        <div class="center">
            <h1 id="pageTitle">OSU XAI Project Papers</h1>
            <input type="search" placeholder="Search for a publication..." id="searchBar" onsearch="search()">
            <p id="titleDescription">Publications from Oregon State University's eXplainable Artificial Intelligence Project</p>
        </div>
    </div>

    <div id="toggleView">
        <div class="iconText" id="listView" onclick="listsView()">
            <i class="material-icons">list</i>
            <p>List View</p>
        </div>
    
        <div class="iconText panelAndListDefault" id="panelView" onclick="panelsView()">
            <i class="material-icons">apps</i>
            <p>Panel View</p>
        </div>
    </div>

    <div id="filterContent">
        <p class="refAndAbstractDefault" id="abstractView" onclick="switchToAbstract()">View Abstract</p>
        <p class="refAndAbstractLight" id="refView" onclick="switchToReference()">View Reference</p>
    </div>
    <h3 id="searchResults"></h3>
    <h3 id="noResults">No Results Were Found</h3>

    <?php
    require './templates/panelsAndLists.html';
    ?>

    <script src="./scripts/script.js"></script>
</body>
</html>