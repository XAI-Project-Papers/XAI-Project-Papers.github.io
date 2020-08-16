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
        this.reference = "<p class='pubDes panDes'>" + dataArray[1] + "<a class='pubLink' href=" + dataArray[6] + ">" + dataArray[6] + "</a>" + "</p>";
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
var Data1 = [
    "Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations",
    "Kin-Ho Lam, Zhengxian Lin, Jed Irvine, Jonathan Dodge, Zeyad T Shureih, Roli Khanna, Minsuk Kahng, and Alan Fern. (submitted). Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations. IJCAI-PRICAI 2020 Workshop on Explainable Artificial Intelligence.",
    "Abstract Currently Unavailable. <br>For more information, look at the reference provided here: <br><br> Kin-Ho Lam, Zhengxian Lin, Jed Irvine, Jonathan Dodge, Zeyad T Shureih, Roli Khanna, Minsuk Kahng, and Alan Fern. (submitted). Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations. IJCAI-PRICAI 2020 Workshop on Explainable Artificial Intelligence.",
    "August",
    "2020",
    "./templates/noLink.html",
    "./templates/noLink.html"
];

/* var pub1 = new publication(Data1);
pub1.createPanel();
pub1.createList(); */


var Data2 = [
    "Explaining Reinforcement Learning to Mere Mortals: An Empirical Study",
    "Andrew Anderson, Jonathan Dodge, Amrita Sadarangani, Zoe Juozapaitis, Evan Newman, Jed Irvine, Souti Chattopadhyay, Alan Fern, and Margaret Burnett. (2019). Explaining Reinforcement Learning to Mere Mortals: An Empirical Study. International Joint Conference on Artificial Intelligence (IJCAI’19).",
    "We present a user study to investigate the impact of explanations on non-experts' understanding of reinforcement learning (RL) agents. We investigate both a common RL visualization, saliency maps (the focus of attention), and a more recent explanation type, reward-decomposition bars (predictions of future types of rewards). We designed a 124 participant, four-treatment experiment to compare participants' mental models of an RL agent in a simple Real-Time Strategy (RTS) game. Our results show that the combination of both saliency and reward bars were needed to achieve a statistically significant improvement in mental model score over the control. In addition, our qualitative analysis of the data reveals a number of effects for further study.",
    "March",
    "2019",
    "https://doi.org/10.1145/33773253377525"
];

var pub2 = new publication(Data2);
pub2.createPanel();
pub2.createList();