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

/* var pub50 = new publication(Data50);
pub50.createPanel();
pub50.createList(); */

//for black - Related paper

var Data49 = [
    "and Understanding Finite-State Representations of Recurrent Policy Networks",
    "Mohamad Danesh, Anurag Koul, Alan Fern. (2020). and Understanding Finite-State Representations of Recurrent Policy Networks. ICML 2020 Workshop on XXAI: Extending Explainable AI Beyond Deep Models and Classifiers",
    "No Abstract",
    "NA",
    "NA",
    "NA",
    "NA"
];

/* var pub49 = new publication(Data49);
pub49.createPanel();
pub49.createList(); */

var Data48 = [
    "The Shoutcasters, the Game Enthusiasts, and the AI: Foraging for Explanations of Real-Time Strategy Players",
    "Sean Penney, Jonathan Dodge, Andrew Anderson, Claudia Hilderbrand, Logan Simpson, and Margaret Burnett. (2020). The Shoutcasters, the Game Enthusiasts, and the AI: Foraging for Explanations of Real-Time Strategy Players. ACM Transactions on Interactive Intelligent Systems",
    "Assessing and understanding intelligent agents is a difficult task for users who lack an AI background. ?Explainable AI? (XAI) aims to address this problem, but what should be in an explanation? One route toward answering this question is to turn to theories of how humans try to obtain information they seek. Information Foraging Theory (IFT) is one such theory. In this paper, we present a series of studies using IFT: the first investigates how expert explainers supply explanations in the RTS domain, the second investigates what explanations domain experts demand from agents in the RTS domain, and the last focuses on how both populations try to explain a state-of-the-art AI. Our results show that RTS environments like StarCraft offer so many options that change so rapidly, foraging tends to be very costly. Ways foragers attempted to manage such costs included ?satisficing? approaches to reduce their cognitive load, such as focusing more on What information than on Why information, strategic use of language to communicate a lot of nuanced information in a few words, and optimizing their environment when possible to make their most valuable information patches readily available. Further, when a real AI entered the picture, even very experienced domain experts had difficulty understanding and judging some of the AI's unconventional behaviors. Finally, our results reveal ways Information Foraging Theory can inform future XAI interactive explanation environments, and also how XAI can inform IFT.",
    "April",
    "2020",
    "./templates/noLink.html",
    "https://dl.acm.org/doi/10.1145/3396047"
]

var pub48 = newpublication(Data48);
pub48.createPanel();
pub48.createList();

var Data47 = [
    "Abstract: Explaining AI: Fairly? Well?",
    "Margaret Burnett. (2020). Abstract: Explaining AI: Fairly? Well?. Extended Abstract of Keynote at ACM IUI’20",
    "Explainable AI (XAI) has started experiencing explosive growth, echoing the explosive growth of AI's use for purposes that impact the general public. This spread of AI into the world outside of research labs brings with it pressures and requirements on XAI that many of us have perhaps not thought about deeply enough. In this keynote address, I'll explain why I think we have a long way to go before we'll be able to achieve our long-term goal: to explain AI not only well, but also fairly. I'll start with challenges in (1) how we go about XAI research and in (2) what we can succeed at explaining so far. Then I'll go in more depth into a third challenge: (3) who we can explain to. Who are the people we've even tried to explain AI to, so far? What are the societal implications of who we explain to well and who we do not? I'll discuss why we have to explain to populations to whom we've given little thought diverse people in many dimensions, including gender diversity, cognitive diversity, and age diversity. A dressing all of these challenges is necessary before we can claim to explain AI fairly and well.",
    "March",
    "2020",
    "./templates/noLink.html",
    "https://iui.acm.org/2020/keynotes.html"
]

var pub47 = newpublication(Data47);
pub47.createPanel();
pub47.createList();

var Data46 = [
    "Position: We Can Measure XAI Explanations Better with &quot;Templates&quot;",
    "Jonathan Dodge and Margaret Burnett. (2020). Position: We Can Measure XAI Explanations Better with &quot;Templates&quot;. IUI ExSS-ATEC Workshop.",
    "No Abstract",
    "NA",
    "NA",
    "NA",
    "NA"
]

var pub46 = newpublication(Data46);
pub46.createPanel();
pub46.createList();

var Data45 = [
    "Mental Models of Mere Mortals with Explanations of Reinforcement Learning.",
    "Andrew Anderson, Jonathan Dodge, Amrita Sadarangani, Zoe Juozapaitis, Evan Newman, Jed Irvine, Souti Chattopadhyay, Alan Fern, Margaret Burnett. (accepted). Mental Models of Mere Mortals with Explanations of Reinforcement Learning. ACM Transactions on Interactive Intelligent Systems (TiiS).",
    "How should reinforcement learning (RL) agents explain themselves to humans not trained in AI? To gain insights into this question, we conducted a 124-participant, four-treatment experiment to compare participants’ mental models of an RL agent in the context of a simple Real-Time Strategy (RTS) game. The four treatments isolated two types of explanations vs. neither vs. both together. The two types of explanations were as follows: (1) saliency maps (an “Input Intelligibility Type” that explains the AI’s focus of attention) and (2) reward-decomposition bars (an “Output Intelligibility Type” that explains the AI’s predictions of future types of rewards). Our results show that a combined explanation that included saliency and reward bars was needed to achieve a statistically significant difference in participants’ mental model scores over the no-explanation treatment. However, this combined explanation was far from a panacea: It exacted disproportionately high cognitive loads from the participants who received the combined explanation. Further, in some situations, participants who saw both explanations predicted the agent’s next action worse than all other treatments’ participants.",
    "May",
    "2020",
    "ftp://ftp.cs.orst.edu/pub/burnett/TiiS-mentalModelsMereMortals-2020-asPrinted.pdf",
    "https://dl.acm.org/doi/10.1145/3366485"
]

var pub45 = newpublication(Data45);
pub45.createPanel();
pub45.createList();

var Data44 = [
    "Keeping It &quot;Organized and Logical&quot;: After Action Review for AI (AAR/AI).",
    "Theresa Mai, Roli Khanna, Jonathan Dodge, Jed Irvine, Kin-Ho Lam, Zhengxian Lin, Nicholas Kiddle, Evan Newman, Sai Raja, Caleb Matthews, Christopher Perdriau, Margaret Burnett, and Alan Fern. (2020). Keeping It &quot;Organized and Logical&quot;: After Action Review for AI (AAR/AI). ACM Conference on Intelligent User Interfaces (IUI).",
    "Explainable AI (XAI) is growing in importance as AI pervades modern society, but few have studied how XAI can directly support people trying to assess an AI agent. Without a rigorous process, people may approach assessment in ad hoc ways---leading to the possibility of wide variations in assessment of the same agent due only to variations in their processes. AAR, or After-Action Review, is a method some military organizations use to assess human agents, and it has been validated in many domains. Drawing upon this strategy, we derived an AAR for AI, to organize ways people assess reinforcement learning (RL) agents in a sequential decision-making environment. The results of our qualitative study revealed several strengths and weaknesses of the AAR/AI process and the explanations embedded within it.",
    "March",
    "2020",
    "ftp://ftp.cs.orst.edu/pub/burnett/iui20-AARAI.pdf",
    "https://dl.acm.org/doi/abs/10.1145/3377325.3377525"
]

var pub44 = newpublication(Data45);
pub44.createPanel();
pub44.createList();

//black paper
var Data43 = [
    "ScaleNet - Improve CNNs through Recursively Scaling Objects.",
    "Xingyi Li, Zhongang Qi, Xiaoli Fern, LI Fuxin. (2020). ScaleNet - Improve CNNs through Recursively Scaling Objects. AAAI Conference on Artificial Intelligence (AAAI-2020).",
    "Deep networks are often not scale-invariant hence their performance can vary wildly if recognizable objects are at an unseen scale occurring only at testing time. In this paper, we propose ScaleNet, which recursively predicts object scale in a deep learning framework. With an explicit objective to predict the scale of objects in images, ScaleNet enables pretrained deep learning models to identify objects in the scales that are not present in their training sets. By recursively calling ScaleNet, one can generalize to very large scale changes unseen in the training set. To demonstrate the robustness of our proposed framework, we conduct experiments with pretrained as well as fine-tuned classification and detection frameworks on MNIST, CIFAR-10, and MS COCO datasets and results reveal that our proposed framework significantly boosts the performances of deep networks.",
    "April",
    "2020",
    "https://aaai.org/ojs/index.php/AAAI/article/view/6806/6660",
    "https://aaai.org/ojs/index.php/AAAI/article/view/6806"
]

var pub43 = newpublication(Data43);
pub43.createPanel();
pub43.createList();

var Data42 = [
    "Visualizing Deep Networks by Optimizing with Integrated Gradients.",
    "Zhongang Qi, Saeed Khorram, Li Fuxin. (2020). Visualizing Deep Networks by Optimizing with Integrated Gradients. AAAI Conference on Artificial Intelligence (AAAI-2020).",
    "Understanding and interpreting the decisions made by deep learning models is valuable in many domains. In computer vision, computing heatmaps from a deep network is a popular approach for visualizing and understanding deep networks. However, heatmaps that do not correlate with the network may mislead human, hence the performance of heatmaps in providing a faithful explanation to the underlying deep network is crucial. In this paper, we propose I-GOS, which optimizes for a heatmap so that the classification scores on the masked image would maximally decrease. The main novelty of the approach is to compute descent directions based on the integrated gradients instead of the normal gradient, which avoids local optima and speeds up convergence. Compared with previous approaches, our method can flexibly compute heatmaps at any resolution for different user needs. Extensive experiments on several benchmark datasets show that the heatmaps produced by our approach are more correlated with the decision of the underlying deep network, in comparison with other state-of-the-art approaches.",
    "May",
    "2020",
    "https://aaai.org/ojs/index.php/AAAI/article/view/6863/6717",
    "https://aaai.org/ojs/index.php/AAAI/article/view/6863"
]

var pub42 = newpublication(Data42);
pub42.createPanel();
pub42.createList();

var Data41 = [
    "Explanations for Dynamic Programming.",
    "Martin Erwig, Prashant Kumar, and Alan Fern. (2020). Explanations for Dynamic Programming. Symposium on Practical Aspects of Declarative Languages (PADL).",
    "We present an approach for explaining dynamic programming that is based on computing with a granular representation of values that are typically aggregated during program execution. We demonstrate how to derive more detailed and meaningful explanations of program behavior from such a representation than would otherwise be possible. To illustrate the practicality of this approach we also present a Haskell library for dynamic programming that allows programmers to specify programs by recurrence relationships from which implementations are derived that can run with granular representation and produce explanations. The explanations essentially answer questions of why one result was obtained instead of another. While usually the alternatives have to be provided by a user, we will show that with our approach such alternatives can be in some cases anticipated and that corresponding explanations can be generated automatically.",
    "January",
    "2020",
    "https://web.engr.oregonstate.edu/~erwig/papers/ExplanationsForDP_PADL20.pdf",
    "https://www.researchgate.net/publication/338634713_Explanations_for_Dynamic_Programming"
]

var pub41 = newpublication(Data41);
pub41.createPanel();
pub41.createList();

//black paper
var Data40 = [
    "PointConv: Deep Convolutional Networks on 3D Point Clouds.",
    "Wenxuan Wu, Zhongang Qi, and LI Fuxin. PointConv: Deep Convolutional Networks on 3D Point Clouds. International Conference on Computer Vision and Pattern Recognition (CVPR-2019).",
    "Unlike images which are represented in regular dense grids, 3D point clouds are irregular and unordered, hence applying convolution on them can be difficult. In this paper, we extend the dynamic filter to a new convolution operation, named PointConv. PointConv can be applied on point clouds to build deep convolutional networks. We treat convolution kernels as nonlinear functions of the local coordinates of 3D points comprised of weight and density functions. With respect to a given point, the weight functions are learned with multi-layer perceptron networks and density functions through kernel density estimation. The most important contribution of this work is a novel reformulation proposed for efficiently computing the weight functions, which allowed us to dramatically scale up the network and significantly improve its performance. The learned convolution kernel can be used to compute translation-invariant and permutation-invariant convolution on any point set in the 3D space. Besides, PointConv can also be used as deconvolution operators to propagate features from a subsampled point cloud back to its original resolution. Experiments on ModelNet40, ShapeNet, and ScanNet show that deep convolutional neural networks built on PointConv are able to achieve state-of-the-art on challenging semantic segmentation benchmarks on 3D point clouds. Besides, our experiments converting CIFAR-10 into a point cloud showed that networks built on PointConv can match the performance of convolutional networks in 2D images of a similar structure.",
    "June",
    "2020",
    "https://openaccess.thecvf.com/content_CVPR_2019/papers/Wu_PointConv_Deep_Convolutional_Networks_on_3D_Point_Clouds_CVPR_2019_paper.pdf",
    "https://www.researchgate.net/publication/338512774_PointConv_Deep_Convolutional_Networks_on_3D_Point_Clouds"
]

var pub40 = newpublication(Data40);
pub40.createPanel();
pub40.createList();

//
var Data39 = [
    "HyperGAN: A Generative Model for Diverse, Performant Neural Networks.",
    "Neale Ratzlaff and Li Fuxin. (2019). HyperGAN: A Generative Model for Diverse, Performant Neural Networks. International Conference on Machine Learning (ICML-2019).",
    "Standard neural networks are often overconfident when presented with data outside the training distribution. We introduce HyperGAN, a new generative model for learning a distribution of neural network parameters. HyperGAN does not require restrictive assumptions on priors, and networks sampled from it can be used to quickly create very large and diverse ensembles. HyperGAN employs a novel mixer to project prior samples to a latent space with correlated dimensions, and samples from the latent space are then used to generate weights for each layer of a deep neural network. We show that HyperGAN can learn to generate parameters which label the MNIST and CIFAR-10 datasets with competitive performance to fully supervised learning, while learning a rich distribution of effective parameters. We also show that HyperGAN can also provide better uncertainty estimates than standard ensembles by evaluating on out of distribution data as well as adversarial examples.",
    "January",
    "2019",
    "https://arxiv.org/pdf/1901.11058.pdf",
    "https://arxiv.org/abs/1901.11058"
]

var pub39 = newpublication(Data39);
pub39.createPanel();
pub39.createList();

//
var Data38 = [
    "Version Control Systems: An Information Foraging Perspective.",
    "Sruti Srinivasa Ragavan, Mihai Codoban, David Piorkowski, Danny Dig, and Margaret Burnett. (to appear). Version Control Systems: An Information Foraging Perspective. IEEE Transactions on Software Engineering, to appear in 2019.",
    "Version Control Systems (VCS) are an important source of information for developers. This calls for a principled understanding of developers' information seeking in VCS-both for improving existing tools and for understanding requirements for new tools. Our prior work investigated empirically how and why developers seek information in VCS: in this paper, we complement and enrich our prior findings by reanalyzing the data via a theory's lens. Using the lens of Information Foraging Theory (IFT), we present new insights not revealed by the prior empirical work. First, while looking for specific information, participants' foraging behaviors were consistent with other foraging situations in SE; therefore, prior research on IFT-based SE tool design can be leveraged for VCS. Second, in change awareness foraging, participants consumed similar diets, but in subtly different ways than in other situations; this calls for further investigations into change awareness foraging. Third, while committing changes, participants attempted to enable future foragers, but the competing needs of different foraging situations led to tensions that participants failed to balance: this opens up a new avenue for research at the intersection of IFT and SE, namely, creating forageable information. Finally, the results of using an IFT lens on these data provides some evidence as to IFT's scoping and utility for the version control domain.",
    "July",
    "2019",
    "./templates/noLink.html",
    "https://ieeexplore.ieee.org/document/8778723"
]

var pub38 = newpublication(Data38);
pub38.createPanel();
pub38.createList();

var Data37 = [
    "Saliency Learning: Teaching the Model Where to Pay Attention.",
    "Reza Ghaeini, Xiaoli Z. Fern, Hamed Shahbazi, and Prasad Tadepalli. (2019). Saliency Learning: Teaching the Model Where to Pay Attention. NAACL HLT-2019.",
    "Deep learning has emerged as a compelling solution to many NLP tasks with remarkable performances. However, due to their opacity, such models are hard to interpret and trust. Recent work on explaining deep models has introduced approaches to provide insights toward the model's behaviour and predictions, which are helpful for assessing the reliability of the model's predictions. However, such methods do not improve the model's reliability. In this paper, we aim to teach the model to make the right prediction for the right reason by providing explanation training and ensuring the alignment of the model's explanation with the ground truth explanation. Our experimental results on multiple tasks and datasets demonstrate the effectiveness of the proposed method, which produces more reliable predictions while delivering better results compared to traditionally trained models.",
    "June",
    "2019",
    "https://www.aclweb.org/anthology/N19-1404.pdf",
    "https://arxiv.org/abs/1902.08649"
]

var pub37 = newpublication(Data37);
pub37.createPanel();
pub37.createList();
