class publication {
    constructor(dataArray) {
        this.divEnd = "</div>"

        this.listItem = "<li>";
        this.listPubTitle = "<p class='pubTitle'>" + dataArray[0] + "</p>";
        this.listReference = "<p class='pubDes'>" + dataArray[1] + " <a href=" + dataArray[6] + " target='_blank'>" + dataArray[6] + "</a>" + "</p>";
        //link here
        this.listItemEnd = "<br><hr style='background-color: #666666; border: 0 none; width: 96%; height: 1px;'><br></li>";

        this.outerPanel = "<div class='panel'>";
        this.panelContent = "<div class='panelContent'>";
        this.pubTitle = "<h2 class='pubTitle'>" + dataArray[0] + "</h2>";
        this.reference = "<p class='pubDes panDes'>" + dataArray[1] + "<br>" + "<a href=" + dataArray[6] + " target='_blank'>" + dataArray[6] + "</a>" + "</p>";
        this.abstract = "<p class='abstract'>" + dataArray[2] + "</p>";
        //divEnd for panelContent here
        this.panelExtras = "<div class='panelExtras'>";
        this.iconText = "<div class='iconText'>";
        this.icon = "<i class='material-icons'>event</i>";
        this.date = "<p class='date'>" + dataArray[3] + " " + dataArray[4] + "</p>";
        //divEnd for iconText here
        this.link = "<div><a class='pubLink' href=" + dataArray[5] + " target='_blank'>View Publication</a></div>";
        //divEnd for panelExtras here
        //divEnd for outerPanel here

        this.lsFinal = this.listItem + this.listPubTitle + this.link + this.listReference + this.listItemEnd;

        this.panFinal = this.outerPanel + this.panelContent + this.pubTitle + this.reference + this.abstract + this.divEnd + this.panelExtras + this.iconText + this.icon + this.date + this.divEnd + this.link + this.divEnd + this.divEnd;
    }

    createPanel() {
        var panels = document.getElementById("panels");
        panels.innerHTML = panels.innerHTML + this.panFinal;
    }

    createList() {
        var lists = document.getElementById("ol");
        lists.innerHTML = lists.innerHTML + this.lsFinal;
    }
}

/* 
data order: Title, Reference Format, Abstract, Month, Year, PDF link, Additional Link
Remember to escape characters (e.g. "")
If a link is unavailable: use "./templates/noLink.html"
*/

var data = {
    "Data50": [
        "Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations",
        "Kin-Ho Lam, Zhengxian Lin, Jed Irvine, Jonathan Dodge, Zeyad T Shureih, Roli Khanna, Minsuk Kahng, and Alan Fern. (submitted). Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations. IJCAI-PRICAI 2020 Workshop on Explainable Artificial Intelligence.",
        "Abstract Currently Unavailable. <br>For more information, look at the reference provided here: <br><br> Kin-Ho Lam, Zhengxian Lin, Jed Irvine, Jonathan Dodge, Zeyad T Shureih, Roli Khanna, Minsuk Kahng, and Alan Fern. (submitted). Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations. IJCAI-PRICAI 2020 Workshop on Explainable Artificial Intelligence.",
        "August",
        "2020",
        "./templates/noLink.html",
        "./templates/noLink.html"
    ],

    /* var pub51 = new publication(ata51);
    pub51.createPanel();
    pub51.createList(); */

    "Data49": [
        "Understanding Finite-State Representations of Recurrent Policy Networks",
        "Zhengxian Lin, Kim-Ho Lam, and Alan Fern. (2020). Understanding Finite-State Representations of Recurrent Policy Networks. ICML 2020 Workshop on XXAI: Extending Explainable AI Beyond Deep Models and Classifiers",
        "We introduce an approach for understanding finite-state machine (FSM) representations of recurrent policy networks. Recent work focused on minimizing FSMs to gain high-level insight, however, minimization can obscure a deeper understanding by merging states that are semantically distinct. Conversely, our approach starts with an unminimized machine and applies more-interpretable reductions that preserve the key decision points of the policy. We also contribute a saliency tool to attain a deeper understanding of the role of observations in the decisions. Our case studies on policies from 7 Atari games and 3 control benchmarks demonstrate that the approach can reveal insights that have not been noticed in prior work.",
        "July",
        "2020",
        "https://arxiv.org/pdf/2006.03745.pdf",
        "https://arxiv.org/abs/2006.03745"
    ],


    //for black - Related paper

    "Data48": [
        "The Shoutcasters, the Game Enthusiasts, and the AI: Foraging for Explanations of Real-Time Strategy Players",
        "Sean Penney, Jonathan Dodge, Andrew Anderson, Claudia Hilderbrand, Logan Simpson, and Margaret Burnett. (2020). The Shoutcasters, the Game Enthusiasts, and the AI: Foraging for Explanations of Real-Time Strategy Players. ACM Transactions on Interactive Intelligent Systems",
        "Assessing and understanding intelligent agents is a difficult task for users who lack an AI background. ?Explainable AI? (XAI) aims to address this problem, but what should be in an explanation? One route toward answering this question is to turn to theories of how humans try to obtain information they seek. Information Foraging Theory (IFT) is one such theory. In this paper, we present a series of studies using IFT: the first investigates how expert explainers supply explanations in the RTS domain, the second investigates what explanations domain experts demand from agents in the RTS domain, and the last focuses on how both populations try to explain a state-of-the-art AI. Our results show that RTS environments like StarCraft offer so many options that change so rapidly, foraging tends to be very costly. Ways foragers attempted to manage such costs included ?satisficing? approaches to reduce their cognitive load, such as focusing more on What information than on Why information, strategic use of language to communicate a lot of nuanced information in a few words, and optimizing their environment when possible to make their most valuable information patches readily available. Further, when a real AI entered the picture, even very experienced domain experts had difficulty understanding and judging some of the AI's unconventional behaviors. Finally, our results reveal ways Information Foraging Theory can inform future XAI interactive explanation environments, and also how XAI can inform IFT.",
        "April",
        "2020",
        "./templates/noLink.html",
        "https://dl.acm.org/doi/10.1145/3396047"
    ],

    "Data47": [
        "Abstract: Explaining AI: Fairly? Well?",
        "Margaret Burnett. (2020). Abstract: Explaining AI: Fairly? Well?. Extended Abstract of Keynote at ACM IUI’20",
        "Explainable AI (XAI) has started experiencing explosive growth, echoing the explosive growth of AI's use for purposes that impact the general public. This spread of AI into the world outside of research labs brings with it pressures and requirements on XAI that many of us have perhaps not thought about deeply enough. In this keynote address, I'll explain why I think we have a long way to go before we'll be able to achieve our long-term goal: to explain AI not only well, but also fairly. I'll start with challenges in (1) how we go about XAI research and in (2) what we can succeed at explaining so far. Then I'll go in more depth into a third challenge: (3) who we can explain to. Who are the people we've even tried to explain AI to, so far? What are the societal implications of who we explain to well and who we do not? I'll discuss why we have to explain to populations to whom we've given little thought diverse people in many dimensions, including gender diversity, cognitive diversity, and age diversity. A dressing all of these challenges is necessary before we can claim to explain AI fairly and well.",
        "March",
        "2020",
        "./templates/noLink.html",
        "https://iui.acm.org/2020/keynotes.html"
    ],

    "Data46": [
        "Position: We Can Measure XAI Explanations Better with &quot;Templates&quot;",
        "Jonathan Dodge and Margaret Burnett. (2020). Position: We Can Measure XAI Explanations Better with &quot;Templates&quot;. IUI ExSS-ATEC Workshop.",
        "Abstract Currently Unavailable. <br>For more information, look at the reference provided here: <br><br> Jonathan Dodge and Margaret Burnett. (2020). Position: We Can Measure XAI Explanations Better with &quot;Templates&quot;. IUI ExSS-ATEC Workshop.",
        " ",
        "2020",
        "./templates/noLink.html",
        "./templates/noLink.html"
    ],

    "Data45": [
        "Mental Models of Mere Mortals with Explanations of Reinforcement Learning.",
        "Andrew Anderson, Jonathan Dodge, Amrita Sadarangani, Zoe Juozapaitis, Evan Newman, Jed Irvine, Souti Chattopadhyay, Alan Fern, Margaret Burnett. (accepted). Mental Models of Mere Mortals with Explanations of Reinforcement Learning. ACM Transactions on Interactive Intelligent Systems (TiiS).",
        "How should reinforcement learning (RL) agents explain themselves to humans not trained in AI? To gain insights into this question, we conducted a 124-participant, four-treatment experiment to compare participants’ mental models of an RL agent in the context of a simple Real-Time Strategy (RTS) game. The four treatments isolated two types of explanations vs. neither vs. both together. The two types of explanations were as follows: (1) saliency maps (an “Input Intelligibility Type” that explains the AI’s focus of attention) and (2) reward-decomposition bars (an “Output Intelligibility Type” that explains the AI’s predictions of future types of rewards). Our results show that a combined explanation that included saliency and reward bars was needed to achieve a statistically significant difference in participants’ mental model scores over the no-explanation treatment. However, this combined explanation was far from a panacea: It exacted disproportionately high cognitive loads from the participants who received the combined explanation. Further, in some situations, participants who saw both explanations predicted the agent’s next action worse than all other treatments’ participants.",
        "May",
        "2020",
        "ftp://ftp.cs.orst.edu/pub/burnett/TiiS-mentalModelsMereMortals-2020-asPrinted.pdf",
        "https://dl.acm.org/doi/10.1145/3366485"
    ],

    "Data44": [
        "Keeping It &quot;Organized and Logical&quot;: After Action Review for AI (AAR/AI).",
        "Theresa Mai, Roli Khanna, Jonathan Dodge, Jed Irvine, Kin-Ho Lam, Zhengxian Lin, Nicholas Kiddle, Evan Newman, Sai Raja, Caleb Matthews, Christopher Perdriau, Margaret Burnett, and Alan Fern. (2020). Keeping It &quot;Organized and Logical&quot;: After Action Review for AI (AAR/AI). ACM Conference on Intelligent User Interfaces (IUI).",
        "Explainable AI (XAI) is growing in importance as AI pervades modern society, but few have studied how XAI can directly support people trying to assess an AI agent. Without a rigorous process, people may approach assessment in ad hoc ways---leading to the possibility of wide variations in assessment of the same agent due only to variations in their processes. AAR, or After-Action Review, is a method some military organizations use to assess human agents, and it has been validated in many domains. Drawing upon this strategy, we derived an AAR for AI, to organize ways people assess reinforcement learning (RL) agents in a sequential decision-making environment. The results of our qualitative study revealed several strengths and weaknesses of the AAR/AI process and the explanations embedded within it.",
        "March",
        "2020",
        "ftp://ftp.cs.orst.edu/pub/burnett/iui20-AARAI.pdf",
        "https://dl.acm.org/doi/abs/10.1145/3377325.3377525"
    ],


    //black paper
    "Data43": [
        "ScaleNet - Improve CNNs through Recursively Scaling Objects.",
        "Xingyi Li, Zhongang Qi, Xiaoli Fern, LI Fuxin. (2020). ScaleNet - Improve CNNs through Recursively Scaling Objects. AAAI Conference on Artificial Intelligence (AAAI-2020).",
        "Deep networks are often not scale-invariant hence their performance can vary wildly if recognizable objects are at an unseen scale occurring only at testing time. In this paper, we propose ScaleNet, which recursively predicts object scale in a deep learning framework. With an explicit objective to predict the scale of objects in images, ScaleNet enables pretrained deep learning models to identify objects in the scales that are not present in their training sets. By recursively calling ScaleNet, one can generalize to very large scale changes unseen in the training set. To demonstrate the robustness of our proposed framework, we conduct experiments with pretrained as well as fine-tuned classification and detection frameworks on MNIST, CIFAR-10, and MS COCO datasets and results reveal that our proposed framework significantly boosts the performances of deep networks.",
        "April",
        "2020",
        "https://aaai.org/ojs/index.php/AAAI/article/view/6806/6660",
        "https://aaai.org/ojs/index.php/AAAI/article/view/6806"
    ],

    "Data42": [
        "Visualizing Deep Networks by Optimizing with Integrated Gradients.",
        "Zhongang Qi, Saeed Khorram, Li Fuxin. (2020). Visualizing Deep Networks by Optimizing with Integrated Gradients. AAAI Conference on Artificial Intelligence (AAAI-2020).",
        "Understanding and interpreting the decisions made by deep learning models is valuable in many domains. In computer vision, computing heatmaps from a deep network is a popular approach for visualizing and understanding deep networks. However, heatmaps that do not correlate with the network may mislead human, hence the performance of heatmaps in providing a faithful explanation to the underlying deep network is crucial. In this paper, we propose I-GOS, which optimizes for a heatmap so that the classification scores on the masked image would maximally decrease. The main novelty of the approach is to compute descent directions based on the integrated gradients instead of the normal gradient, which avoids local optima and speeds up convergence. Compared with previous approaches, our method can flexibly compute heatmaps at any resolution for different user needs. Extensive experiments on several benchmark datasets show that the heatmaps produced by our approach are more correlated with the decision of the underlying deep network, in comparison with other state-of-the-art approaches.",
        "May",
        "2020",
        "https://aaai.org/ojs/index.php/AAAI/article/view/6863/6717",
        "https://aaai.org/ojs/index.php/AAAI/article/view/6863"
    ],

    "Data41": [
        "Explanations for Dynamic Programming.",
        "Martin Erwig, Prashant Kumar, and Alan Fern. (2020). Explanations for Dynamic Programming. Symposium on Practical Aspects of Declarative Languages (PADL).",
        "We present an approach for explaining dynamic programming that is based on computing with a granular representation of values that are typically aggregated during program execution. We demonstrate how to derive more detailed and meaningful explanations of program behavior from such a representation than would otherwise be possible. To illustrate the practicality of this approach we also present a Haskell library for dynamic programming that allows programmers to specify programs by recurrence relationships from which implementations are derived that can run with granular representation and produce explanations. The explanations essentially answer questions of why one result was obtained instead of another. While usually the alternatives have to be provided by a user, we will show that with our approach such alternatives can be in some cases anticipated and that corresponding explanations can be generated automatically.",
        "January",
        "2020",
        "https://web.engr.oregonstate.edu/~erwig/papers/ExplanationsForDP_PADL20.pdf",
        "https://www.researchgate.net/publication/338634713_Explanations_for_Dynamic_Programming"
    ],

    //black paper
    "Data40": [
        "PointConv: Deep Convolutional Networks on 3D Point Clouds.",
        "Wenxuan Wu, Zhongang Qi, and LI Fuxin. PointConv: Deep Convolutional Networks on 3D Point Clouds. International Conference on Computer Vision and Pattern Recognition (CVPR-2019).",
        "Unlike images which are represented in regular dense grids, 3D point clouds are irregular and unordered, hence applying convolution on them can be difficult. In this paper, we extend the dynamic filter to a new convolution operation, named PointConv. PointConv can be applied on point clouds to build deep convolutional networks. We treat convolution kernels as nonlinear functions of the local coordinates of 3D points comprised of weight and density functions. With respect to a given point, the weight functions are learned with multi-layer perceptron networks and density functions through kernel density estimation. The most important contribution of this work is a novel reformulation proposed for efficiently computing the weight functions, which allowed us to dramatically scale up the network and significantly improve its performance. The learned convolution kernel can be used to compute translation-invariant and permutation-invariant convolution on any point set in the 3D space. Besides, PointConv can also be used as deconvolution operators to propagate features from a subsampled point cloud back to its original resolution. Experiments on ModelNet40, ShapeNet, and ScanNet show that deep convolutional neural networks built on PointConv are able to achieve state-of-the-art on challenging semantic segmentation benchmarks on 3D point clouds. Besides, our experiments converting CIFAR-10 into a point cloud showed that networks built on PointConv can match the performance of convolutional networks in 2D images of a similar structure.",
        "June",
        "2020",
        "https://openaccess.thecvf.com/content_CVPR_2019/papers/Wu_PointConv_Deep_Convolutional_Networks_on_3D_Point_Clouds_CVPR_2019_paper.pdf",
        "https://www.researchgate.net/publication/338512774_PointConv_Deep_Convolutional_Networks_on_3D_Point_Clouds"
    ],

    //
    "Data39": [
        "HyperGAN: A Generative Model for Diverse, Performant Neural Networks.",
        "Neale Ratzlaff and Li Fuxin. (2019). HyperGAN: A Generative Model for Diverse, Performant Neural Networks. International Conference on Machine Learning (ICML-2019).",
        "Standard neural networks are often overconfident when presented with data outside the training distribution. We introduce HyperGAN, a new generative model for learning a distribution of neural network parameters. HyperGAN does not require restrictive assumptions on priors, and networks sampled from it can be used to quickly create very large and diverse ensembles. HyperGAN employs a novel mixer to project prior samples to a latent space with correlated dimensions, and samples from the latent space are then used to generate weights for each layer of a deep neural network. We show that HyperGAN can learn to generate parameters which label the MNIST and CIFAR-10 datasets with competitive performance to fully supervised learning, while learning a rich distribution of effective parameters. We also show that HyperGAN can also provide better uncertainty estimates than standard ensembles by evaluating on out of distribution data as well as adversarial examples.",
        "January",
        "2019",
        "https://arxiv.org/pdf/1901.11058.pdf",
        "https://arxiv.org/abs/1901.11058"
    ],

    //
    "Data38": [
        "Version Control Systems: An Information Foraging Perspective.",
        "Sruti Srinivasa Ragavan, Mihai Codoban, David Piorkowski, Danny Dig, and Margaret Burnett. (to appear). Version Control Systems: An Information Foraging Perspective. IEEE Transactions on Software Engineering, to appear in 2019.",
        "Version Control Systems (VCS) are an important source of information for developers. This calls for a principled understanding of developers' information seeking in VCS-both for improving existing tools and for understanding requirements for new tools. Our prior work investigated empirically how and why developers seek information in VCS: in this paper, we complement and enrich our prior findings by reanalyzing the data via a theory's lens. Using the lens of Information Foraging Theory (IFT), we present new insights not revealed by the prior empirical work. First, while looking for specific information, participants' foraging behaviors were consistent with other foraging situations in SE; therefore, prior research on IFT-based SE tool design can be leveraged for VCS. Second, in change awareness foraging, participants consumed similar diets, but in subtly different ways than in other situations; this calls for further investigations into change awareness foraging. Third, while committing changes, participants attempted to enable future foragers, but the competing needs of different foraging situations led to tensions that participants failed to balance: this opens up a new avenue for research at the intersection of IFT and SE, namely, creating forageable information. Finally, the results of using an IFT lens on these data provides some evidence as to IFT's scoping and utility for the version control domain.",
        "July",
        "2019",
        "./templates/noLink.html",
        "https://ieeexplore.ieee.org/document/8778723"
    ],

    "Data37": [
        "Saliency Learning: Teaching the Model Where to Pay Attention.",
        "Reza Ghaeini, Xiaoli Z. Fern, Hamed Shahbazi, and Prasad Tadepalli. (2019). Saliency Learning: Teaching the Model Where to Pay Attention. NAACL HLT-2019.",
        "Deep learning has emerged as a compelling solution to many NLP tasks with remarkable performances. However, due to their opacity, such models are hard to interpret and trust. Recent work on explaining deep models has introduced approaches to provide insights toward the model's behaviour and predictions, which are helpful for assessing the reliability of the model's predictions. However, such methods do not improve the model's reliability. In this paper, we aim to teach the model to make the right prediction for the right reason by providing explanation training and ensuring the alignment of the model's explanation with the ground truth explanation. Our experimental results on multiple tasks and datasets demonstrate the effectiveness of the proposed method, which produces more reliable predictions while delivering better results compared to traditionally trained models.",
        "June",
        "2019",
        "https://www.aclweb.org/anthology/N19-1404.pdf",
        "https://arxiv.org/abs/1902.08649"
    ],

    "Data36": [
        "Counterfactual States for Atari Agents via Generative Deep Learning.",
        "Olson, M., Neal, L., Li, F. and Wong, W-K. (2019). Counterfactual States for Atari Agents via Generative Deep Learning. IJCAI Workshop on Explainable Artificial Intelligence.",
        "Although deep reinforcement learning agents have produced impressive results in many domains, their decision making is difficult to explain to humans. To address this problem, past work has mainly focused on explaining why an action was chosen in a given state. A different type of explanation that is useful is a counterfactual, which deals with 'what if?' scenarios. In this work, we introduce the concept of a counterfactual state to help humans gain a better understanding of what would need to change (minimally) in an Atari game image for the agent to choose a different action. We introduce a novel method to create counterfactual states from a generative deep learning architecture. In addition, we evaluate the effectiveness of counterfactual states on human participants who are not machine learning experts. Our user study results suggest that our generated counterfactual states are useful in helping non-expert participants gain a better understanding of an agent's decision making process.",
        "September",
        "2019",
        "https://web.engr.oregonstate.edu/~olsomatt/Counterfactual_States_for_Atari_Agents_via_Generative_Deep_Learning.pdf",
        "https://arxiv.org/abs/1909.12969"
    ],

    "Data35": [
        "Explainable Reinforcement Learning via Reward Decomposition.",
        "Zoe Juozapaitis, Anurag Koul, Alan Fern, Martin Erwig and Finale Doshi-Velez. (2019). Explainable Reinforcement Learning via Reward Decomposition. IJCAI-2019 Workshop on XAI.",
        "We study reward decomposition for explaining the decisions of reinforcement learning (RL) agents. The approach decomposes rewards into sums of semantically meaningful reward types, so that actions can be compared in terms of trade-offs among the types. In particular, we introduce the concept of minimum sufficient explanations for compactly explaining why one action is preferred over another in terms of the types. Many prior RL algorithms for decomposed rewards produced inconsistent decomposed values, which can be ill-suited to explanation. We exploit an off-policy variant of Qlearning that provably converges to an optimal policy and the correct decomposed action values. We illustrate the approach in a number of domains, showing its utility for explanations.",
        " ",
        "2019",
        "https://web.engr.oregonstate.edu/~erwig/papers/ExplainableRL_XAI19.pdf",
        "https://www.semanticscholar.org/paper/Explainable-Reinforcement-Learning-via-Reward-Juozapaitis-Koul/d47677337b1083d6bfa940748da0780b2c9faf7d"
    ],

    "Data34": [
        "Explaining Reinforcement Learning to Mere Mortals: An Empirical Study.",
        "Andrew Anderson, Jonathan Dodge, Amrita Sadarangani, Zoe Juozapaitis, Evan Newman, Jed Irvine, Souti Chattopadhyay, Alan Fern, and Margaret Burnett. (2019). Explaining Reinforcement Learning to Mere Mortals: An Empirical Study. International Joint Conference on Artificial Intelligence (IJCAI’19).",
        "We present a user study to investigate the impact of explanations on non-experts' understanding of reinforcement learning (RL) agents. We investigate both a common RL visualization, saliency maps (the focus of attention), and a more recent explanation type, reward-decomposition bars (predictions of future types of rewards). We designed a 124 participant, four-treatment experiment to compare participants' mental models of an RL agent in a simple Real-Time Strategy (RTS) game. Our results show that the combination of both saliency and reward bars were needed to achieve a statistically significant improvement in mental model score over the control. In addition, our qualitative analysis of the data reveals a number of effects for further study.",
        "June",
        "2019",
        "https://www.ijcai.org/Proceedings/2019/0184.pdf",
        "https://arxiv.org/abs/1903.09708"
    ],

    //black paper
    "Data33": [
        "Learning to Stop in Structured Prediction for Neural Machine Translation.",
        "Mingbo Ma, Renjie Zheng, and Liang Huang. (2019). Learning to Stop in Structured Prediction for Neural Machine Translation. Proceedings of NAACL.",
        "Beam search optimization (Wiseman and Rush, 2016) resolves many issues in neural machine translation. However, this method lacks principled stopping criteria and does not learn how to stop during training, and the model naturally prefers longer hypotheses during the testing time in practice since they use the raw score instead of the probability-based score. We propose a novel ranking method which enables an optimal beam search stop- ping criteria. We further introduce a structured prediction loss function which penalizes suboptimal finished candidates produced by beam search during training. Experiments of neural machine translation on both synthetic data and real languages (German→English and Chinese→English) demonstrate our pro- posed methods lead to better length and BLEU score.",
        "June",
        "2019",
        "https://par.nsf.gov/servlets/purl/10099245",
        "https://arxiv.org/abs/1904.01032"
    ],

    "Data32": [
        "Interactive Naming for Explaining Deep Neural Networks: A Formative Study.",
        "Mandana Hamidi-Haines, Zhongang Qi, Alan Fern, Fuxin Li, Prasad Tadepalli. (2019). Interactive Naming for Explaining Deep Neural Networks: A Formative Study. IUI Workshop on EXplainable Smart Systems (EXSS).",
        "We consider the problem of explaining the decisions of deep neural networks for image recognition in terms of human-recognizable visual concepts. In particular, given a test set of images, we aim to explain each classification in terms of a small number of image regions, or activation maps, which have been associated with semantic concepts by a human annotator. This allows for generating summary views of the typical reasons for classifications, which can help build trust in a classifier and/or identify example types for which the classifier may not be trusted. For this purpose, we developed a user interface for 'interactive naming,' which allows a human annotator to manually cluster significant activation maps in a test set into meaningful groups called 'visual concepts'. The main contribution of this paper is a systematic study of the visual concepts produced by five human annotators using the interactive naming interface. In particular, we consider the adequacy of the concepts for explaining the classification of test-set images, correspondence of the concepts to activations of individual neurons, and the inter-annotator agreement of visual concepts. We find that a large fraction of the activation maps have recognizable visual concepts, and that there is significant agreement between the different annotators about their denotations. Our work is an exploratory study of the interplay between machine learning and human recognition mediated by visualizations of the results of learning.",
        "March",
        "2019",
        "http://ceur-ws.org/Vol-2327/IUI19WS-ExSS2019-14.pdf",
        "https://arxiv.org/abs/1812.07150"
    ],

    "Data31": [
        "Strategic Tasks for Explainable Reinforcement Learning.",
        "Rey Pocius, Lawrence Neal, and Alan Fern. (2019). Strategic Tasks for Explainable Reinforcement Learning. AAAI-2019 Student Abstract.",
        "Commonly used sequential decision making tasks such as the games in the Arcade Learning Environment (ALE) provide rich observation spaces suitable for deep reinforcement learning. However, they consist mostly of low-level control tasks which are of limited use for the development of explainable artificial intelligence(XAI) due to the fine temporal resolution of the tasks. Many of these domains also lack built-in high level abstractions and symbols. Existing tasks that provide for both strategic decision-making and rich observation spaces are either difficult to simulate or are intractable. We provide a set of new strategic decision-making tasks specialized for the development and evaluation of explainable AI methods, built as constrained mini-games within the StarCraft II Learning Environment.",
        "July",
        "2019",
        "https://www.aaai.org/ojs/index.php/AAAI/article/view/5140/5013",
        "https://www.aaai.org/ojs/index.php/AAAI/article/view/5140"
    ],

    "Data30": [
        "Explaining Models: An Empirical Study of How Explanations Impact Fairness Judgment.",
        "Jonathan Dodge, Q. Vera Liao, Yunfeng Zhang, Rachel Bellamy, Casey Dugan, and Bhanukiran Vinzamuri . (2019). Explaining Models: An Empirical Study of How Explanations Impact Fairness Judgment. International Conference on Intelligent User Interfaces (IUI)",
        "Ensuring fairness of machine learning systems is a human-in-the-loop process. It relies on developers, users, and the general public to identify fairness problems and make improvements. To facilitate the process we need effective, unbiased, and user-friendly explanations that people can confidently rely on. Towards that end, we conducted an empirical study with four types of programmatically generated explanations to understand how they impact people's fairness judgments of ML systems. With an experiment involving more than 160 Mechanical Turk workers, we show that: 1) Certain explanations are considered inherently less fair, while others can enhance people's confidence in the fairness of the algorithm; 2) Different fairness problems--such as model-wide fairness issues versus case-specific fairness discrepancies--may be more effectively exposed through different styles of explanation; 3) Individual differences, including prior positions and judgment criteria of algorithmic fairness, impact how people react to different styles of explanation. We conclude with a discussion on providing personalized and adaptive explanations to support fairness judgments of ML systems.",
        "March",
        "2019",
        "https://arxiv.org/pdf/1901.07694.pdf",
        "https://dl.acm.org/doi/10.1145/3301275.3302310"
    ],

    "Data29": [
        "Learning Finite State Representations of Recurrent Policy Networks.",
        "Anurag Koul, Sam Greydanus, and Alan Fern. (2019). Learning Finite State Representations of Recurrent Policy Networks. International Conference on Learning Representations (ICLR).",
        "Recurrent neural networks (RNNs) are an effective representation of control policies for a wide range of reinforcement and imitation learning problems. RNN policies, however, are particularly difficult to explain, understand, and analyze due to their use of continuous-valued memory vectors and observation features. In this paper, we introduce a new technique, Quantized Bottleneck Insertion, to learn finite representations of these vectors and features. The result is a quantized representation of the RNN that can be analyzed to improve our understanding of memory use and general behavior. We present results of this approach on synthetic environments and six Atari games. The resulting finite representations are surprisingly small in some cases, using as few as 3 discrete memory states and 10 observations for a perfect Pong policy. We also show that these finite policy representations lead to improved interpretability. ",
        " ",
        "2019",
        "https://openreview.net/pdf?id=S1gOpsCctm",
        "https://dl.acm.org/doi/10.1145/3301275.3302310"
    ],

    //
    "Data28": [
        "Ensemble Sequence Level Training for Multimodal MT: OSU-Baidu WMT18 Multimodal Machine Translation System Report",
        "Renjie Zheng, Yilin Yang, Mingbo Ma, and Liang Huang. (2018). Ensemble Sequence Level Training for Multimodal MT: OSU-Baidu WMT18 Multimodal Machine Translation System Report. In Proceedings of WMT 2018.",
        "This paper describes multimodal machine translation systems developed jointly by Oregon State University and Baidu Research for WMT 2018 Shared Task on multimodal translation. In this paper, we introduce a simple approach to incorporate image information by feeding image features to the decoder side. We also explore different sequence level training methods including scheduled sampling and reinforcement learning which lead to substantial improvements. Our systems ensemble several models using different architectures and training methods and achieve the best performance for three subtasks: En-De and En-Cs in task 1 and (En+De+Fr)-Cs task 1B.",
        "October",
        "2018",
        "https://www.aclweb.org/anthology/W18-6443.pdf",
        "https://www.aclweb.org/anthology/W18-6443/"
    ],

    //
    "Data27": [
        "Linear-Time Constituency Parsing with RNNs and Dynamic Programming.",
        "Juneki Hong and Liang Huang. (2018). Linear-Time Constituency Parsing with RNNs and Dynamic Programming. In Proceedings of ACL 2018.",
        "Recently, span-based constituency parsing has achieved competitive accuracies with extremely simple models by using bidirectional RNNs to model “spans”. However, the minimal span parser of Stern et al. (2017a) which holds the current state of the art accuracy is a chart parser running in cubic time, O(n3), which is too slow for longer sentences and for applications beyond sentence boundaries such as end-to-end discourse parsing and joint sentence boundary detection and parsing. We propose a linear-time constituency parser with RNNs and dynamic programming using graph-structured stack and beam search, which runs in time O(n b2) where b is the beam size. We further speed this up to O(n b log b) by integrating cube pruning. Compared with chart parsing baselines, this linear-time parser is substantially faster for long sentences on the Penn Treebank and orders of magnitude faster for discourse parsing, and achieves the highest F1 accuracy on the Penn Treebank among single model end-to-end systems.",
        "July",
        "2018",
        "https://www.aclweb.org/anthology/P18-2076.pdf",
        "https://www.aclweb.org/anthology/P18-2076/"
    ],

    "Data26": [
        "Interpreting Recurrent and Attention- Based Neural Models: A Case Study on Natural Language Inference.",
        "Reza Ghaeini, Xiaoli Z. Fern, Prasad Tadepalli. (2018). Interpreting Recurrent and Attention- Based Neural Models: A Case Study on Natural Language Inference. Conference on Empirical Methods in Natural Language Processing (EMNLP).",
        "Deep learning models have achieved remarkable success in natural language inference (NLI) tasks. While these models are widely explored, they are hard to interpret and it is often unclear how and why they actually work. In this paper, we take a step toward explaining such deep learning based models through a case study on a popular neural model for NLI. In particular, we propose to interpret the intermediate layers of NLI models by visualizing the saliency of attention and LSTM gating signals. We present several examples for which our methods are able to reveal interesting insights and identify the critical information contributing to the model decisions.",
        "October-November",
        "2018",
        "https://www.aclweb.org/anthology/D18-1537.pdf",
        "http://dx.doi.org/10.18653/v1/D18-1537"
    ],

    //
    "Data25": [
        "Breaking the Beam Search Curse for Neural Machine Translation.",
        "Yilin Yang, Liang Huang, Mingbo Ma. (2018). Breaking the Beam Search Curse for Neural Machine Translation. Conference on Empirical Methods in Natural Language Processing (EMNLP).",
        "Beam search is widely used in neural machine translation, and usually improves translation quality compared to greedy search. It has been widely observed that, however, beam sizes larger than 5 hurt translation quality. We explain why this happens, and propose several methods to address this problem. Furthermore, we discuss the optimal stopping criteria for these methods. Results show that our hyperparameter-free methods outperform the widely-used hyperparameter-free heuristic of length normalization by +2.0 BLEU, and achieve the best results among all methods on Chinese-to-English translation.",
        "October-November",
        "2018",
        "https://www.aclweb.org/anthology/D18-1342.pdf",
        "https://www.aclweb.org/anthology/D18-1342"
    ],

    //
    "Data24": [
        "Multiple reference training with generated pseudo references.",
        "Renjie Zheng, Mingbo Ma, Liang Huang. (2018). Multiple reference training with generated pseudo references. Conference on Empirical Methods in Natural Language Processing (EMNLP).",
        "Neural text generation, including neural machine translation, image captioning, and summarization, has been quite successful recently. However, during training time, typically only one reference is considered for each example, even though there are often multiple references available, e.g., 4 references in NIST MT evaluations, and 5 references in image captioning data. We first investigate several different ways of utilizing multiple human references during training. But more importantly, we then propose an algorithm to generate exponentially many pseudo-references by first compressing existing human references into lattices and then traversing them to generate new pseudo-references. These approaches lead to substantial improvements over strong baselines in both machine translation (+1.5 BLEU) and image captioning (+3.1 BLEU / +11.7 CIDEr).",
        "October-November",
        "2018",
        "https://www.aclweb.org/anthology/D18-1357.pdf",
        "https://www.aclweb.org/anthology/D18-1357"
    ],

    "Data23": [
        "Toward Learning Finite State Representations of Recurrent Policy Networks.",
        "Anurag Koul, Sam Greydanus, and Alan Fern. (2018). Toward Learning Finite State Representations of Recurrent Policy Networks. IJCAI Workshop on Explainable Artificial Intelligence.",
        "Recurrent neural networks (RNNs) are an effective representation of control policies for a wide range of reinforcement learning problems. RNN policies, however, are particularly difficult to explain and understand due to their use of continuous-valued internal memory. In this paper, we study an approach for bringing us closer to understanding these policies based on learning accurate finite-state representations of the continuous-valued memory. In particular, we learn policies represented as Moore Machine Networks (MMNs), where the memory is composed of binary variables that ideally provide a more interpretable view of how the memory is used. We describe a learning approach based on training Binary Bottleneck Networks (BBNs) to encode the continuous RNN state and then inserting the BBN directly in the RNN, which then serves as a compact binary form of memory. We present preliminary empirical results on several types of synthetic learning environments, which shows the potential for this approach to learn MMNs and provide insight into the memory usage of RNN policies.",
        " ",
        "2018",
        "https://www.researchgate.net/profile/Jose_Alonso3/publication/325870079_Hybrid_Data-Expert_Explainable_Beer_Style_Classifier/links/5b976bb7299bf147394865d2/Hybrid-Data-Expert-Explainable-Beer-Style-Classifier.pdf#page=78",
        "./templates/noLink.html"
    ],

    "Data22": [
        "Explaining Deep Adaptive Programs via Reward Decomposition.",
        "Martin Erwig, Alan Fern, Magesh Murali, and Anurag Koul. (2018). Explaining Deep Adaptive Programs via Reward Decomposition. IJCAI Workshop on Explainable Artificial Intelligence.",
        "Adaptation Based Programming (ABP) allows programmers to employ 'choice points' at program locations where they are uncertain about how to best code the program logic. Reinforcement learning (RL) is then used to automatically learn to make choice-point decisions to optimize the reward achieved by the program. In this paper, we consider a new approach to explaining the learned decisions of adaptive programs. The key idea is to include simple program annotations that define multiple semantically meaningful reward types, which compose to define the overall reward signal used for learning. Using these reward types we define the notion of reward difference explanations (RDXs), which aim to explain why at a choice point an alternative A was selected over another alternative B An RDX gives the difference in the predicted future reward of each type when selecting A versus B and then continuing to run the adaptive program. Significant differences can provide insight into why A was or was not preferred to B. We describe a SARSA-style learning algorithm for learning to optimize the choices at each choice point, while also learning side information for producing RDXs. We demonstrate this explanation approach through a case study in a synthetic domain, which shows the general promise of the approach and highlights future research questions.",
        "January",
        "2018",
        "https://par.nsf.gov/servlets/purl/10096985",
        "https://par.nsf.gov/biblio/10096985"
    ],

    //
    "Data21": [
        "Open Set Learning with Counterfactual Images.",
        "Lawrence Neal, Matthew Olson, Xiaoli Fern, Weng-Keen Wong, Fuxin Li. (2018). Open Set Learning with Counterfactual Images. European Conference on Computer Vision (ECCV).",
        "In open set recognition, a classifier must label instances of known classes while detecting instances of unknown classes not encountered during training. To detect unknown classes while still generalizing to new instances of existing classes, we introduce a dataset augmentation technique that we call counterfactual image generation. Our approach, based on generative adversarial networks, generates examples that are close to training set examples yet do not belong to any training category. By augmenting training with examples generated by this optimization, we can reformulate open set recognition as classification with one additional class, which includes the set of novel and unknown examples. Our approach outperforms existing open set recognition algorithms on a selection of image classification tasks.",
        "October",
        "2018",
        "http://web.engr.oregonstate.edu/~olsomatt/open_set_counterfactual.pdf",
        "https://openaccess.thecvf.com/content_ECCV_2018/html/Lawrence_Neal_Open_Set_Learning_ECCV_2018_paper.html"
    ],

    "Data20": [
        "Sequential Feature Explanations for Anomaly Detection.",
        "Md Amran Siddiqui, Alan Fern, Thomas Dietterich, and Weng-Keen Wong. (2018). Sequential Feature Explanations for Anomaly Detection. ACM Transactions on Knowledge Discovery from Data.",
        "In many applications, an anomaly detection system presents the most anomalous data instance to a human analyst, who then must determine whether the instance is truly of interest (e.g., a threat in a security setting). Unfortunately, most anomaly detectors provide no explanation about why an instance was considered anomalous, leaving the analyst with no guidance about where to begin the investigation. To address this issue, we study the problems of computing and evaluating sequential feature explanations (SFEs) for anomaly detectors. An SFE of an anomaly is a sequence of features, which are presented to the analyst one at a time (in order) until the information contained in the highlighted features is enough for the analyst to make a confident judgement about the anomaly. Since analyst effort is related to the amount of information that they consider in an investigation, an explanation’s quality is related to the number of features that must be revealed to attain confidence. In this article, we first formulate the problem of optimizing SFEs for a particular density-based anomaly detector. We then present both greedy algorithms and an optimal algorithm, based on branch-and-bound search, for optimizing SFEs. Finally, we provide a large scale quantitative evaluation of these algorithms using a novel framework for evaluating explanations. The results show that our algorithms are quite effective and that our best greedy algorithm is competitive with optimal solutions.",
        "January",
        "2019",
        "https://dl.acm.org/doi/pdf/10.1145/3230666",
        "https://dl.acm.org/doi/abs/10.1145/3230666"
    ],

    "Data19": [
        "Visualizing and Understanding Atari Agents.",
        "Sam Greydanus, Anurag Koul, Jonathan Dodge, and Alan Fern. (2018). Visualizing and Understanding Atari Agents. International Conference on Machine Learning.",
        "While deep reinforcement learning (deep RL) agents are effective at maximizing rewards, it is often unclear what strategies they use to do so. In this paper, we take a step toward explaining deep RL agents through a case study using Atari 2600 environments. In particular, we focus on using saliency maps to understand how an agent learns and executes a policy. We introduce a method for generating useful saliency maps and use it to show 1) what strong agents attend to, 2) whether agents are making decisions for the right or wrong reasons, and 3) how agents evolve during learning. We also test our method on non-expert human subjects and find that it improves their ability to reason about these agents. Overall, our results show that saliency information can provide significant insight into an RL agent’s decisions and learning behavior.",
        "October",
        "2017",
        "http://proceedings.mlr.press/v80/greydanus18a/greydanus18a.pdf",
        "http://proceedings.mlr.press/v80/greydanus18a.html"
    ],

    "Data18": [
        "What Should Be in an XAI Explanation? What IFT Reveals.",
        "Jonathan Dodge, Sean Penney, Andrew Anderson, and Margaret Burnett. (2018). What Should Be in an XAI Explanation? What IFT Reveals. IUI Workshop on Explainable Smart Systems.",
        "This workshop’s call for participation poses the question: What should be in an explanation? One route toward answering this question is to turn to theories of how humans try to obtain information they seek. Information Foraging Theory (IFT) is one such theory. In this paper, we present lessons we have learned about how IFT informs Explainable Artificial Intelligence (XAI), and also what XAI contributes back to IFT. ",
        "March",
        "2018",
        "http://ceur-ws.org/Vol-2068/exss9.pdf",
        "https://www.semanticscholar.org/paper/What-Should-Be-in-an-XAI-Explanation-What-IFT-Dodge-Penney/a8aa9f82c90c4aeabe721d8161cbf8ecdf6b97ee"
    ],

    "Data17": [
        "Embedding Deep Networks into Visual Explanations",
        "Zhongang Qi, Fuxin Li. (2018). Embedding Deep Networks into Visual Explanations. arXiv:1709.05360",
        "In this paper, we propose a novel explanation module to explain the predictions made by a deep network. The explanation module works by embedding a high-dimensional deep network layer nonlinearly into a low-dimensional explanation space while retaining faithfulness, so that the original deep learning predictions can be constructed from the few concepts extracted by the explanation module. We then visualize such concepts for human to learn about the high-level concepts that deep learning is using to make decisions. We propose an algorithm called Sparse Reconstruction Autoencoder (SRAE) for learning the embedding to the explanation space. SRAE aims to reconstruct part of the original feature space while retaining faithfulness. A pull-away term is applied to SRAE to make the explanation space more orthogonal. A visualization system is then introduced for human understanding of the features in the explanation space. The proposed method is applied to explain CNN models in image classification tasks, and several novel metrics are introduced to evaluate the performance of explanations quantitatively without human involvement. Experiments show that the proposed approach generates interesting explanations of the mechanisms CNN use for making predictions.",
        "April",
        "2018",
        "http://people.oregonstate.edu/~khorrams/files/Embedding%20Deep%20Networks%20into%20Visual%20Explanations.pdf",
        "https://arxiv.org/abs/1709.05360"
    ],

    //
    "Data16": [
        "Toward Theory-Based End-User Software Engineering.",
        "Margaret Burnett, Todd Kulesza, Alannah Oleson, Shannon Ernst, Laura Beckwith, Jill Cao, William Jernigan, Valentina Grigoreanu . (2017). Toward Theory-Based End-User Software Engineering. in New Perspectives in End-User Development (F. Paterno and V. Wulf, eds.), 2017.",
        "One area of research in the end-user development area is known as end-user software engineering (EUSE). Research in EUSE aims to invent new kinds of technologies that collaborate with end users to improve the quality of their software. EUSE has become an active research area since its birth in the early 2000s, with a large body of literature upon which EUSE researchers can build. However, building upon these works can be difficult when projects lack connections due to an absence of cross-cutting foundations to tie them together. In this chapter, we advocate for stronger theory foundations and show the advantages through three theory-oriented projects: (1) the Explanatory Debugging approach, to help end users debug their intelligent assistants; (2) the GenderMag method, which identifies problems with gender inclusiveness in EUSE tools and other software; and (3) the Idea Garden approach, to help end users to help themselves in overcoming programming barriers. In each of these examples, we show how having a theoretical foundation facilitated generalizing beyond individual tools to the production of general methods and principles for other researchers to directly draw upon in their own works.",
        "August",
        "2017",
        "https://alannaholeson.com/papers/EUDbook2-2ndEd-theory+EUSE-distrib.pdf",
        "https://link.springer.com/chapter/10.1007/978-3-319-60291-2_10"
    ],

    //
    "Data15": [
        "Multi-task Structured Prediction for Entity Analysis: Search-based Learning Algorithms.",
        "Chao Ma, Janardhan Rao Doppa, Prasad Tadepalli, Hamed Shahbazi, and Xiaoli Fern. (2017). Multi-task Structured Prediction for Entity Analysis: Search-based Learning Algorithms. The 9th Asian Conference on Machine Learning.",
        "Entity analysis in natural language processing involves solving multiple structured prediction problems such as mention detection, coreference resolution, and entity linking. We explore the space of search-based learning approaches to solve the problem of \em multi-task structured prediction (MTSP) in the context of entity analysis. In this paper, we study three different search architectures to solve MTSP problems that make different tradeoffs between speed and accuracy of training and inference. In all three architectures, we learn one or more scoring functions that employ both intra-task and inter-task features. In the “pipeline” architecture, which is the fastest, we solve different tasks one after another in a pipelined fashion. In the “joint” architecture, which is the most expensive, we formulate MTSP as a single-task structured prediction, and search the joint space of multi-task structured outputs. To improve the speed of joint architecture, we introduce two different pruning methods and associated learning techniques. In the intermediate “cyclic” architecture, we cycle through the tasks multiple times in sequence until there is no performance improvement. Results on two benchmark domains show that the joint architecture improves over the pipeline approach as well as the previous state-of-the-art approach based on graphical models. The cyclic architecture is faster than the joint approach and achieves competitive performance.",
        "November",
        "2017",
        "http://people.oregonstate.edu/~machao/homepage/acml17-mtsp/ma17.pdf",
        "http://proceedings.mlr.press/v77/ma17a.html"
    ],

    "Data14": [
        "How the Experts Do It: Assessing and Explaining Agent Behaviors in Real-Time Strategy Games.",
        "J. Dodge, S. Penney, C. Hilderbrand, A. Anderson, and M. Burnett. (2017). How the Experts Do It: Assessing and Explaining Agent Behaviors in Real-Time Strategy Games. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI ‘18). ACM.",
        "How should an AI-based explanation system explain an agent's complex behavior to ordinary end users who have no background in AI? Answering this question is an active research area, for if an AI-based explanation system could effectively explain intelligent agents' behavior, it could enable the end users to understand, assess, and appropriately trust (or distrust) the agents attempting to help them. To provide insights into this question, we turned to human expert explainers in the real-time strategy domain --'shoutcasters'-- to understand (1) how they foraged in an evolving strategy game in real time, (2) how they assessed the players' behaviors, and (3) how they constructed pertinent and timely explanations out of their insights and delivered them to their audience. The results provided insights into shoutcasters' foraging strategies for gleaning information necessary to assess and explain the players; a characterization of the types of implicit questions shoutcasters answered; and implications for creating explanations by using the patterns and abstraction levels these human experts revealed.",
        "April",
        "2018",
        "https://dl.acm.org/doi/abs/10.1145/3173574.3174136",
        "https://dl.acm.org/doi/pdf/10.1145/3173574.3174136"
    ],

    "Data13": [
        "Toward Foraging for Understanding of StarCraft Agents: An Empirical Study",
        "S. Penney, J. Dodge, C. Hilderbrand, A. Anderson, L. Simpson, and M. Burnett. (2017). Toward Foraging for Understanding of StarCraft Agents: An Empirical Study. In Proceedings of the 23rd International Conference on Intelligent User Interfaces (IUI ‘18). ACM.",
        "Assessing and understanding intelligent agents is a difficult task for users that lack an AI background. A relatively new area, called 'Explainable AI,' is emerging to help address this problem, but little is known about how users would forage through information an explanation system might offer. To inform the development of Explainable AI systems, we conducted a formative study, using the lens of Information Foraging Theory, into how experienced users foraged in the domain of StarCraft to assess an agent. Our results showed that participants faced difficult foraging problems. These foraging problems caused participants to entirely miss events that were important to them, reluctantly choose to ignore actions they did not want to ignore, and bear high cognitive, navigation, and information costs to access the information they needed.",
        "March",
        "2018",
        "https://dl.acm.org/doi/pdf/10.1145/3172944.3172946",
        "https://dl.acm.org/doi/10.1145/3172944.3172946"
    ],

    "Data12": [
        "Learning Explainable Embeddings for Deep Networks",
        "Zhongang Qi and Fuxi Li. Learning Explainable Embeddings for Deep Networks. (2017). NIPS Workshop on Interpreting, Explaining and Visualizing Deep Learning.",
        "We propose a novel explanation module to explain the predictions made by deep learning. Explanation module works by embedding a high-dimensional deep network layer nonlinearly into a low-dimensional explanation space while retaining faithfulness, so that the original deep learning predictions can be constructed from the few concepts extracted by the explanation module. We then visualize such concepts for human to learn about the high-level concepts that deep learning is using to make decisions. We propose Sparse Reconstruction Autoencoder (SRAE) for learning the embedding to the explanation space. SRAE aims to reconstruct part of the original feature space while retaining faithfulness. The proposed method is applied to explain CNN models in image classification tasks, and several novel metrics are introduced to evaluate the performance of explanations quantitatively without human involvement. Experiments show that the proposed approach could generate better explanations of the mechanisms CNN to use for making predictions in the task.",
        "December",
        "2017",
        "http://www.interpretable-ml.org/nips2017workshop/papers/04.pdf",
        "https://www.semanticscholar.org/paper/Learning-Explainable-Embeddings-for-Deep-Networks-Qi-Li/d9c08a77a72a18e131c80fddefcb04282bea8d4e"
    ],

    "Data11": [
        "Visualizing and Understanding Atari Agents.",
        "Sam Greydanus, Anurag Koul, Jonathan Dodge, and Alan Fern. (2017). Visualizing and Understanding Atari Agents. NIPS Workshop on Interpreting, Explaining and Visualizing Deep Learning.",
        "While deep reinforcement learning (deep RL) agents are effective at maximizing rewards, it is often unclear what strategies they use to do so. In this paper, we take a step toward explaining deep RL agents through a case study using Atari 2600 environments. In particular, we focus on using saliency maps to understand how an agent learns and executes a policy. We introduce a method for generating useful saliency maps and use it to show 1) what strong agents attend to, 2) whether agents are making decisions for the right or wrong reasons, and 3) how agents evolve during learning. We also test our method on non-expert human subjects and find that it improves their ability to reason about these agents. Overall, our results show that saliency information can provide significant insight into an RL agent's decisions and learning behavior.",
        "October",
        "2017",
        "http://proceedings.mlr.press/v80/greydanus18a/greydanus18a.pdf",
        "https://arxiv.org/abs/1711.00138"
    ],

    //
    "Data10": [
        "Adaptive Submodularity with Varying Query Sets: An Application to Active Multi-label Learning",
        "Mandana Hamidi-Haines, Robby Goetschalckx, Prasad Tadepalli, and Alan Fern. (2017). Adaptive Submodularity with Varying Query Sets: An Application to Active Multi-label Learning. International Conference on Algorithmic Learning Theory.",
        "Adaptive submodular optimization, where a sequence of items is selected adaptively to optimize a submodular function, has been found to have many applications from sensor placement to active learning. In the current paper, we extend this work to the setting of multiple queries at each time step, where the set of available queries is randomly constrained. A primary contribution of this paper is to prove the first near optimal approximation bound for a greedy policy in this setting. A natural application of this framework is to crowd-sourced active learning problem where the set of available experts and examples might vary randomly. We instantiate the new framework for multi-label learning and evaluate it in multiple benchmark domains with promising results.",
        " ",
        "2017",
        "http://proceedings.mlr.press/v76/fern17a/fern17a.pdf",
        "http://proceedings.mlr.press/v76/fern17a.html"
    ],

    //
    "Data9": [
        "OSU Multimodal Machine Translation System Report",
        "Mingbo Ma, Dapeng Li, Kai Zhao and Liang Huang. (2017). OSU Multimodal Machine Translation System Report. Proceedings of the Second Conference on Machine Translation.",
        "This paper describes Oregon State University's submissions to the shared WMT'17 task 'multimodal translation task I'. In this task, all the sentence pairs are image captions in different languages. The key difference between this task and conventional machine translation is that we have corresponding images as additional information for each sentence pair. In this paper, we introduce a simple but effective system which takes an image shared between different languages, feeding it into the both encoding and decoding side. We report our system's performance for English-French and English-German with Flickr30K (in-domain) and MSCOCO (out-of-domain) datasets. Our system achieves the best performance in TER for English-German for MSCOCO dataset.",
        "September",
        "2017",
        "https://www.aclweb.org/anthology/W17-4751.pdf",
        "https://www.aclweb.org/anthology/W17-4751"
    ],

    //
    "Data8": [
        "Fast(er) Exact Decoding and Global Training for Transition-based Dependency Parsing via a Minimal Feature Set",
        "Tianze Shi, Liang Huang, and Lillian Lee. (2017). Fast(er) Exact Decoding and Global Training for Transition-Based Dependency Parsing Via A Minimal Feature Set. Proceedings of EMNLP.",
        "We first present a minimal feature set for transition-based dependency parsing, continuing a recent trend started by Kiperwasser and Goldberg (2016a) and Cross and Huang (2016a) of using bi-directional LSTM features. We plug our minimal feature set into the dynamic-programming framework of Huang and Sagae (2010) and Kuhlmann et al. (2011) to produce the first implementation of worst-case O(n^3) exact decoders for arc-hybrid and arc-eager transition systems. With our minimal features, we also present O(n^3) global training methods. Finally, using ensembles including our new parsers, we achieve the best unlabeled attachment score reported (to our knowledge) on the Chinese Treebank and the 'second-best-in-class' result on the English Penn Treebank.",
        "September",
        "2017",
        "https://www.cs.cornell.edu/home/llee/papers/exact_decoding.pdf",
        "http://www.cs.cornell.edu/~tianze/publications/17-emnlp-transition-dp-parsing"
    ],

    //
    "Data7": [
        "Joint Syntacto-Discourse Parsing and the Syntacto-Discourse Treebank",
        "Kai Zhao and Liang Huang. Joint Syntacto-Discourse Parsing and the Syntacto-Discourse Treebank. In Proceedings of EMNLP 2017",
        "Discourse parsing has long been treated as a stand-alone problem independent from constituency or dependency parsing. Most attempts at this problem rely on annotated text segmentations (Elementary Discourse Units, EDUs) and sophisticated sparse or continuous features to extract syntactic information. In this paper we propose the first end-to-end discourse parser that jointly parses in both syntax and discourse levels, as well as the first syntacto-discourse treebank by integrating the Penn Treebank and the RST Treebank. Built upon our recent span-based constituency parser, this joint syntacto-discourse parser requires no preprocessing efforts such as segmentation or feature extraction, making discourse parsing more convenient. Empirically, our parser achieves the state-of-the-art end-to-end discourse parsing accuracy.",
        "September",
        "2017",
        "https://www.aclweb.org/anthology/D17-1225.pdf",
        "https://www.aclweb.org/anthology/D17-1225/"
    ],

    "Data6": [
        "Jointly Trained Sequential Labeling and Classification by Sparse Attention Neural Networks",
        "Mingbo Ma, Kai Zhao, Liang Huang, Bing Xiang, Bowen Zhou. (2017). Jointly Trained Sequential Labeling and Classification by Sparse Attention Neural Networks. Proceedings of Interspeech.",
        "Sentence-level classification and sequential labeling are two fundamental tasks in language understanding. While these two tasks are usually modeled separately, in reality, they are often correlated, for example in intent classification and slot filling, or in topic classification and named-entity recognition. In order to utilize the potential benefits from their correlations, we propose a jointly trained model for learning the two tasks simultaneously via Long Short-Term Memory (LSTM) networks. This model predicts the sentence-level category and the word-level label sequence from the stepwise output hidden representations of LSTM. We also introduce a novel mechanism of 'sparse attention' to weigh words differently based on their semantic relevance to sentence-level classification. The proposed method outperforms baseline models on ATIS and TREC datasets.",
        "August",
        "2017",
        "https://www.isca-speech.org/archive/Interspeech_2017/pdfs/1321.PDF",
        "https://arxiv.org/abs/1709.10191"
    ],

    "Data5": [
        "Group Sparse CNNs for Question Classification with Answer Sets.",
        "Mingbo Ma, Liang Huang, Bing Xiang, Bowen Zhou. (2017). Group Sparse CNNs for Question Classification with Answer Sets. Proceedings of ACL 2017.",
        "Question classification is an important task with wide applications. However, traditional techniques treat questions as general sentences, ignoring the corresponding answer data. In order to consider answer information into question modeling, we first introduce novel group sparse autoencoders which refine question representation by utilizing group information in the answer set. We then propose novel group sparse CNNs which naturally learn question representation with respect to their answers by implanting group sparse autoencoders into traditional CNNs. The proposed model significantly outperform strong baselines on four datasets.",
        "July",
        "2017",
        "https://www.aclweb.org/anthology/P17-2053.pdf",
        "https://www.aclweb.org/anthology/P17-2053/"
    ],

    "Data4": [
        "Foraging Goes Mobile: Foraging While Debugging on Mobile Devices.",
        "David Piorkowski, Sean Penney, Austin Henley, Marco Pistoia, Margaret Burnett, Omer Tripp and Pietro Ferrara. (2017). Foraging Goes Mobile: Foraging While Debugging on Mobile Devices. IEEE Symposium on Visual Languages and Human-Centric Computing.",
        "Although Information Foraging Theory (IFT) research for desktop environments has provided important insights into numerous information foraging tasks, we have been unable to locate IFT research for mobile environments. Despite the limits of mobile platforms, mobile apps are increasingly serving functions that were once exclusively the territory of desktops - and as the complexity of mobile apps increases, so does the need for foraging. In this paper we investigate, through a theory-based, dual replication study, whether and how foraging results from a desktop IDE generalize to a functionally similar mobile IDE. Our results show ways prior foraging research results from desktop IDEs generalize to mobile IDEs and ways they do not, and point to challenging open research questions for foraging on mobile environments.",
        "October",
        "2017",
        "http://web.eecs.utk.edu/~azh/pubs/Piorkowski2017VLHCC_MobileForaging.pdf",
        "https://ieeexplore.ieee.org/document/8103444/"
    ],

    "Data3": [
        "Budget-Aware Deep Semantic Video Segmentation.",
        "Behrooz Mahasseni, Sinisa Todorovic, and Alan Fern. (2017). Budget-Aware Deep Semantic Video Segmentation. IEEE Conference on Computer Vision and Pattern Recognition.",
        "In this work, we study a poorly understood trade-off between accuracy and runtime costs for deep semantic video segmentation. While recent work has demonstrated advantages of learning to speed-up deep activity detection, it is not clear if similar advantages will hold for our very different segmentation loss function, which is defined over individual pixels across the frames. In deep video segmentation, the most time consuming step represents the application of a CNN to every frame for assigning class labels to every pixel, typically taking 6-9 times of the video footage. This motivates our new budget-aware framework that learns to optimally select a small subset of frames for pixelwise labeling by a CNN, and then efficiently interpolates the obtained segmentations to yet unprocessed frames. This interpolation may use either a simple optical-flow guided mapping of pixel labels, or another significantly less complex and thus faster CNN. We formalize the frame selection as a Markov Decision Process, and specify a Long Short-Term Memory (LSTM) network to model a policy for selecting the frames. For training the LSTM, we develop a policy-gradient reinforcement-learning approach for approximating the gradient of our non-decomposable and non-differentiable objective. Evaluation on two benchmark video datasets show that our new framework is able to significantly reduce computation time, and maintain competitive video segmentation accuracy under varying budgets.",
        "July",
        "2017",
        "http://web.engr.oregonstate.edu/~sinisa/research/publications/cvpr17_budget.pdf",
        "https://ieeexplore.ieee.org/document/8099707"
    ],

    "Data2": [
        "When to Finish? Optimal Beam Search for Neural Text Generation (modulo beam size).",
        "Liang Huang, Kai Zhao and Mingbo Ma. (2017). When to Finish? Optimal Beam Search for Neural Text Generation (modulo beam size). Proceedings of EMNLP.",
        "In neural text generation such as neural machine translation, summarization, and image captioning, beam search is widely used to improve the output text quality. However, in the neural generation setting, hypotheses can finish in different steps, which makes it difficult to decide when to end beam search to ensure optimality. We propose a provably optimal beam search algorithm that will always return the optimal-score complete hypothesis (modulo beam size), and finish as soon as the optimality is established. To counter neural generation’s tendency for shorter hypotheses, we also introduce a bounded length reward mechanism which allows a modified version of our beam search algorithm to remain optimal. Experiments on neural machine translation demonstrate that our principled beam search algorithm leads to improvement in BLEU score over previously proposed alternatives.",
        "September",
        "2017",
        "https://www.aclweb.org/anthology/D17-1227.pdf",
        "https://www.aclweb.org/anthology/D17-1227"
    ],

    "Data1": [
        "Active Multi-Label Learning with Varying Query Sets.",
        "Mandana Hamidi-Haines, Robby Goetshalchx, Prasad Tadepalli, and Alan Fern. (2017). Active Multi-Label Learning with Varying Query Sets. Picky Learners Workshop at the International Conference on Machine Learning.",
        "We introduce the problem of active multi-label learning where the queries are restricted to come from randomly varying subsets. This setting captures crowd sourcing scenarios where there are multiple experts with different types of expertise, and not all experts are available at all times. We generalize the framework of adaptive submodularity and prove the first near optimal approximation bound for a greedy policy for this setting. We instantiate this framework for multi-label learning and evaluate it in multiple benchmark domains with promising results.",
        " ",
        "2017",
        "./templates/noLink.html",
        "https://www.semanticscholar.org/paper/Active-Multi-Label-Learning-with-Varying-Query-Sets-Hamidi-Haines-Goetschalckx/b10e8c9216d90d6a967813d0454f176021e8ec0a"
    ],
}

function populateAll(data) {
    clear();
    for (var pubItem in data) {
        createPublication(data, pubItem);
    }
}

function createPublication(data, pubItem) {
    var value = data[pubItem];
    var pub = new publication(value);
    pub.createPanel();
    pub.createList();
}

function clear() {
    var searchResults = document.getElementById("searchResults");
    var noResults = document.getElementById("noResults");
    var clearButton2 = document.getElementById("clearButton2");
    var panels = document.getElementById("panels");
    var lists = document.getElementById("ol");
    panels.innerHTML = " ";
    lists.innerHTML = " ";
    panels.style.marginTop = "";
    lists.style.marginTop = "";
    searchResults.innerHTML = " ";
    noResults.innerHTML = " ";
    clearButton2.style.display = "none";
}

function clearSearch(data){
    clear();
    populateAll(data);
    var searchBar = document.getElementById("searchBar");
    var searchBar2 = document.getElementById("searchBar2");
    searchBar.value = null;
    searchBar2.value = null;
}

function search(data, ID) {
    clear();
    var panels = document.getElementById("panels");
    var lists = document.getElementById("ol");
    var userInput = document.getElementById(ID).value;
    var input = document.getElementById(ID).value.toUpperCase();
    var searchResults = document.getElementById("searchResults");
    var noResults = document.getElementById("noResults");
    var clearButton2 = document.getElementById("clearButton2");
    if (ID == 'searchBar'){
        document.getElementById("searchBar2").value = userInput;
    }
    else {
        document.getElementById("searchBar").value = userInput;
    }
    
    if (!input) {
        window.location.reload();
    }
    else {
        panels.style.marginTop = "200px"; //adding spacing above panels so search message does not overlap
        lists.style.marginTop = "200px"; //adding spacing above lists so search message does not overlap
        clearButton2.style.display = "flex";
        var found = 0;
        searchResults.innerHTML = "Search results for '" + userInput + "' in Reference and Abstract View:";
        searchResults.style.display = "inline";
        window.location = 'index.html#titleDescription';
        for (var pubItem in data) {
            var value = data[pubItem];
            for (var i = 0; i < value.length; i++) {
                var uppercaseItem = value[i].toUpperCase();
                if (uppercaseItem.indexOf(input) > -1) {
                    found += 1;
                    createPublication(data, pubItem);
                }
            }
        }
        if (found == 0){
            noResults.innerHTML = "No Results Were Found";
        }
    }
}

populateAll(data);
