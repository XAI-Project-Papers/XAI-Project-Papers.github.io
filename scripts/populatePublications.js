class publication{
    constructor(dataArray){
        this.divEnd = "</div>"

        this.listItem = "<li>";
        this.listPubTitle = "<p class='pubTitle'>" + dataArray[0] + "</p>";
        this.listReference = "<p class='pubDes'>" + dataArray[1] + "</p>";
        //link here
        this.listItemEnd = "</li>";

        this.outerPanel = "<div class='panel'>";
        this.panelContent = "<div class='panelContent'>";
        this.pubTitle = "<h2 class='pubTitle'>" + dataArray[0] + "</h2>";
        this.reference = "<p class='pubDes panDes'>" + dataArray[1] + "<br>" + "<a href=" + dataArray[6] + ">" + dataArray[6] + "</a>" + "</p>";
        this.abstract = "<p class='abstract'>" + dataArray[2] + "</p>";
        //divEnd for panelContent here
        this.panelExtras = "<div class='panelExtras'>";
        this.iconText = "<div class='iconText'>";
        this.icon = "<i class='material-icons'>event</i>";
        this.date = "<p class='date'>" + dataArray[3] + " " + dataArray[4] + "</p>";
        //divEnd for iconText here
        this.link = "<div><a class='pubLink' href=" + dataArray[5] + ">View Publication</a></div>";
        //divEnd for panelExtras here
        //divEnd for outerPanel here

        this.lsFinal = this.listItem + this.listPubTitle + this.listReference + this.listItemEnd;

        this.panFinal = this.outerPanel + this.panelContent + this.pubTitle + this.reference + this.abstract + this.divEnd + this.panelExtras + this.iconText + this.icon + this.date + this.divEnd + this.link + this.divEnd + this.divEnd;
    }

    createPanel(){
        var panels = document.getElementById("panels");
        panels.innerHTML = panels.innerHTML + this.panFinal;
    }

    createList(){
        var lists = document.getElementById("ol");
        lists.innerHTML = lists.innerHTML + this.lsFinal;
    }
}

/* 
Data order: Title, Reference Format, Abstract, Month, Year, PDF link, Additional Link
Remember to escape characters (e.g. "")
If a link is unavailable: use "./templates/noLink.html"
*/
var Data51 = [
    "Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations",
    "Kin-Ho Lam, Zhengxian Lin, Jed Irvine, Jonathan Dodge, Zeyad T Shureih, Roli Khanna, Minsuk Kahng, and Alan Fern. (submitted). Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations. IJCAI-PRICAI 2020 Workshop on Explainable Artificial Intelligence.",
    "Abstract Currently Unavailable. <br>For more information, look at the reference provided here: <br><br> Kin-Ho Lam, Zhengxian Lin, Jed Irvine, Jonathan Dodge, Zeyad T Shureih, Roli Khanna, Minsuk Kahng, and Alan Fern. (submitted). Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations. IJCAI-PRICAI 2020 Workshop on Explainable Artificial Intelligence.",
    "August",
    "2020",
    "./templates/noLink.html",
    "./templates/noLink.html"
];

var pub51 = new publication(Data51);
pub51.createPanel();
pub51.createList();

var Data50 = [
    "Understanding Finite-State Representations of Recurrent Policy Networks",
    "Zhengxian Lin, Kim-Ho Lam, and Alan Fern. (2020). Understanding Finite-State Representations of Recurrent Policy Networks. ICML 2020 Workshop on XXAI: Extending Explainable AI Beyond Deep Models and Classifiers",
    "We introduce an approach for understanding finite-state machine (FSM) representations of recurrent policy networks. Recent work focused on minimizing FSMs to gain high-level insight, however, minimization can obscure a deeper understanding by merging states that are semantically distinct. Conversely, our approach starts with an unminimized machine and applies more-interpretable reductions that preserve the key decision points of the policy. We also contribute a saliency tool to attain a deeper understanding of the role of observations in the decisions. Our case studies on policies from 7 Atari games and 3 control benchmarks demonstrate that the approach can reveal insights that have not been noticed in prior work.",
    "July",
    "2020",
    "https://arxiv.org/pdf/2006.03745.pdf",
    "https://arxiv.org/abs/2006.03745"
];

var pub50 = new publication(Data50);
pub50.createPanel();
pub50.createList();