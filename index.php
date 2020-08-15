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


    <!-- TODO: rename overlapping "panel" classes/ids -->
    <?php
    require './templates/panels.html';
    ?>
    <!-- <div class="panel" id="panel1">
        <div class="panelContent">
            <h2 class="pubTitle">Keeping it "organized and logical" after-action review for AI (AAR/AI)</h2>
            <p class="pubDes panDes">Theresa Mai, Roli Khanna, Jonathan Dodge, Jed Irvine, Kin-Ho Lam, Zhengxian Lin, Nicholas Kiddle, Evan Newman, Sai Raja, Caleb Matthews, Christopher Perdriau, Margaret Burnett, and Alan Fern. 2020. Keeping It “Organized and Logical”: After-Action Review for AI (AAR/AI). In 25th International Conference on Intelligent User Interfaces (IUI ’20), March 17–20, 2020, Cagliari, Italy. ACM, New York, NY, USA, 12 pages.<a href="https://doi.org/10.1145/3377325.3377525" target="_blank"> https://doi.org/10.1145/3377325.3377525</a></p>
            <p class="abstract">Explainable AI (XAI) is growing in importance as AI pervades modern society, but few have studied how XAI can directly support people trying to assess an AI agent. Without a rigorous process, people may approach assessment in ad hoc ways---leading to the possibility of wide variations in assessment of the same agent due only to variations in their processes. AAR, or After-Action Review, is a method some military organizations use to assess human agents, and it has been validated in many domains. Drawing upon this strategy, we derived an AAR for AI, to organize ways people assess reinforcement learning (RL) agents in a sequential decision-making environment. The results of our qualitative study revealed several strengths and weaknesses of the AAR/AI process and the explanations embedded within it.</p>
        </div>
        <div class="panelExtras">
            <div class="iconText">
                <i class="material-icons">event</i>
                <p class="date">3/7/2020</p>
            </div>
            <div>
                
                <a href="./templates/noPDF.html" class="pubLink">View Publication</a>
            </div>
        </div>
    </div>
    <div class="panel" id="panel2">
        <div class="panelContent">
            <h2 class="pubTitle">Explaining Reinforcement Learning to Mere Mortals: An Empirical Study</h2>
            <p class="pubDes panDes">Andrew Anderson, Jonathan Dodge, Amrita Sadarangani, Zoe Juozapaitis, Evan Newman, Jed Irvine, Souti Chattopadhyay, Alan Fern, and Margaret Burnett. (2019). Explaining Reinforcement Learning to Mere Mortals: An Empirical Study. International Joint Conference on Artificial Intelligence (IJCAI’19).<a href="https://doi.org/10.1145/3377325.3377525" target="_blank"> https://doi.org/10.1145/3377325.3377525</a></p>
            <p class="abstract">We present a user study to investigate the impact of explanations on non-experts' understanding of reinforcement learning (RL) agents. We investigate both a common RL visualization, saliency maps (the focus of attention), and a more recent explanation type, reward-decomposition bars (predictions of future types of rewards). We designed a 124 participant, four-treatment experiment to compare participants' mental models of an RL agent in a simple Real-Time Strategy (RTS) game. Our results show that the combination of both saliency and reward bars were needed to achieve a statistically significant improvement in mental model score over the control. In addition, our qualitative analysis of the data reveals a number of effects for further study.</p>
        </div>
        <div class="panelExtras">
            <div class="iconText">
                <i class="material-icons">event</i>
                <p class="date">May 2020</p>
            </div>
            <div>
                <a href="./templates/noPDF.html" class="pubLink">View Publication</a>
            </div>
        </div>
    </div> -->

    <div id="lists" class="lists hidden">
        <div class="yearBlock">
            <h1 class="year">2020</h1>
            <ol>
                <li>
                    <p class="pubTitle">Keeping it "organized and logical" after-action review for AI (AAR/AI)<!-- <a href="ftp://ftp.cs.orst.edu/pub/burnett/iui20-AARAI.pdf">Local Copy</a> --></p>
                    <p class="pubDes">Theresa Mai, Roli Khanna, Jonathan Dodge, Jed Irvine, Kin-Ho Lam, Zhengxian Lin, Nicholas Kiddle, Evan Newman, Sai Raja, Caleb Matthews, Christopher Perdriau, Margaret Burnett, and Alan Fern. 2020. Keeping It “Organized and Logical”: After-Action Review for AI (AAR/AI). In 25th International Conference on Intelligent User Interfaces (IUI ’20), March 17–20, 2020, Cagliari, Italy. ACM, New York, NY, USA, 12 pages.<a href="https://doi.org/10.1145/3377325.3377525" target="_blank"> https://doi.org/10.1145/3377325.3377525</a></p>
                </li>
            </ol>
        </div>
    </div>

    <script src="./scripts/script.js"></script>
</body>
</html>