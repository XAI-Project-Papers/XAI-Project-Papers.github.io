class publication{
    constructor(dataArray){
        this.divEnd = "</div>"

        this.outerPanel = "<div class='panel' id='panel1'>";
        this.panelContent = "<div class='panelContent'>";
        this.pubTitle = "<h2 class='pubTitle'>" + dataArray[0] + "</h2>";
        this.reference = "<p class='pubDes panDes'>" + dataArray[1] + "</p>";
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

        this.final = this.outerPanel + this.panelContent + this.pubTitle + this.reference + this.abstract + this.divEnd + this.panelExtras + this.iconText + this.icon + this.date + this.divEnd + this.link + this.divEnd + this.divEnd;
    }

    createPanelAndList(){
        var panels = document.getElementById("panels");
        panels.innerHTML = panels.innerHTML + this.final;
    }
}

var panel1Data = [
    "Keeping it \"organized and logical\" after-action review for AI (AAR/AI)",
    "Theresa Mai, Roli Khanna, Jonathan Dodge, Jed Irvine, Kin-Ho Lam, Zhengxian Lin, Nicholas Kiddle, Evan Newman, Sai Raja, Caleb Matthews, Christopher Perdriau, Margaret Burnett, and Alan Fern. 2020. Keeping It “Organized and Logical”: After-Action Review for AI (AAR/AI). In 25th International Conference on Intelligent User Interfaces (IUI ’20), March 17–20, 2020, Cagliari, Italy. ACM, New York, NY, USA, 12 pages.",
    "Explainable AI (XAI) is growing in importance as AI pervades modern society, but few have studied how XAI can directly support people trying to assess an AI agent. Without a rigorous process, people may approach assessment in ad hoc ways---leading to the possibility of wide variations in assessment of the same agent due only to variations in their processes. AAR, or After-Action Review, is a method some military organizations use to assess human agents, and it has been validated in many domains. Drawing upon this strategy, we derived an AAR for AI, to organize ways people assess reinforcement learning (RL) agents in a sequential decision-making environment. The results of our qualitative study revealed several strengths and weaknesses of the AAR/AI process and the explanations embedded within it.",
    "March",
    "2020",
    'https://doi.org/10.1145/33773253377525'
]

var panel1 = new publication(panel1Data);
panel1.createPanelAndList();


var panel2Data = [
    "Explaining Reinforcement Learning to Mere Mortals: An Empirical Study",
    "Andrew Anderson, Jonathan Dodge, Amrita Sadarangani, Zoe Juozapaitis, Evan Newman, Jed Irvine, Souti Chattopadhyay, Alan Fern, and Margaret Burnett. (2019). Explaining Reinforcement Learning to Mere Mortals: An Empirical Study. International Joint Conference on Artificial Intelligence (IJCAI’19).",
    "We present a user study to investigate the impact of explanations on non-experts' understanding of reinforcement learning (RL) agents. We investigate both a common RL visualization, saliency maps (the focus of attention), and a more recent explanation type, reward-decomposition bars (predictions of future types of rewards). We designed a 124 participant, four-treatment experiment to compare participants' mental models of an RL agent in a simple Real-Time Strategy (RTS) game. Our results show that the combination of both saliency and reward bars were needed to achieve a statistically significant improvement in mental model score over the control. In addition, our qualitative analysis of the data reveals a number of effects for further study.",
    "March",
    "2019",
    "test"
]

var panel2 = new publication(panel2Data);
panel2.createPanelAndList();