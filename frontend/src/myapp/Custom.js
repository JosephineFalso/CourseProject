import React, {useEffect, useRef, useState} from 'react';


const items = [
    {
        name: 'textretrieval',
        label: 'Text Retrieval',
        titleitems: [
            {
                name: '1.1 Natural Language Content Analysis.mp4',
                label: '1.1 Natural Language Content Analysis'
            },
            {name: '1.2 Text Access.mp4', label: '1.2 Text Access'},
            {name: '1.3 Text Retrieval Problem.mp4', label: '1.3 Text Retrieval Problem'},
            {
                name: '1.4 Overview of Text Retrieval Methods.mp4',
                label: '1.4 Overview of Text Retrieval Methods'
            },
            {
                name: '1.5 Vector Space Model - Basic Idea.mp4',
                label: '1.5 Vector Space Model - Basic Idea'
            },
            {
                name: '1.6 Vector Space Retrieval Model - Simplest Instantiation.mp4',
                label: '1.6 Vector Space Retrieval Model - Simplest Instantiation'
            },
            {
                name: '2.1 Vector Space Model - Improved Instantiation.mp4',
                label: '2.1 Vector Space Model - Improved Instantiation'
            },
            {name: '2.2 TF Transformation.mp4', label: '2.2 TF Transformation'},
            {name: '2.3 Doc Length Normalization.mp4', label: '2.3 Doc Length Normalization'},
            {name: '2.4 Implementation of TR Systems.mp4', label: '2.4 Implementation of TR Systems'},
            {
                name: '2.5 System Implementation - Inverted Index Construction.mp4',
                label: '2.5 System Implementation - Inverted Index Construction'
            },
            {
                name: '2.6 System Implementation - Fast Search.mp4',
                label: '2.6 System Implementation - Fast Search'
            },
            {name: '3.1 Evaluation of TR Systems.mp4', label: '3.1 Evaluation of TR Systems'},
            {
                name: '3.2 Evaluation of TR Systems - Basic Measures.mp4',
                label: '3.2 Evaluation of TR Systems - Basic Measures'
            },
            {
                name: '3.3 Evaluation of TR Systems - Evaluating Ranked Lists - Part 1.mp4',
                label: '3.3 Evaluation of TR Systems - Evaluating Ranked Lists - Part 1'
            },
            {
                name: '3.4 Evaluation of TR Systems - Evaluating Ranked Lists - Part 2.mp4',
                label: '3.4 Evaluation of TR Systems - Evaluating Ranked Lists - Part 2'
            },
            {
                name: '3.5 Evaluation of TR Systems - Multi-Level Judgements.mp4',
                label: '3.5 Evaluation of TR Systems - Multi-Level Judgements'
            },
            {
                name: '3.6 Evaluation of TR Systems - Practical Issues.mp4',
                label: '3.6 Evaluation of TR Systems - Practical Issues'
            },
            {
                name: '4.1 Probabilistic Retrieval Model - Basic Idea.mp4',
                label: '4.1 Probabilistic Retrieval Model - Basic Idea'
            },
            {name: '4.2 Statistical Language Model.mp4', label: '4.2 Statistical Language Model'},
            {
                name: '4.3 Query Likelihood Retrieval Function.mp4',
                label: '4.3 Query Likelihood Retrieval Function'
            },
            {
                name: '4.4 Statistical Language Model - Part 1.mp4',
                label: '4.4 Statistical Language Model - Part 1'
            },
            {
                name: '4.5 Statistical Language Model - Part 2.mp4',
                label: '4.5 Statistical Language Model - Part 2'
            },
            {name: '4.6 Smoothing Methods - Part 1.mp4', label: '4.6 Smoothing Methods - Part 1'},
            {name: '4.7 Smoothing Methods - Part 2.mp4', label: '4.7 Smoothing Methods - Part 2'},
            {name: '5.1 Feedback in Text Retrieval.mp4', label: '5.1 Feedback in Text Retrieval'},
            {
                name: '5.2 Feedback in Vector Space Model - Rocchio.mp4',
                label: '5.2 Feedback in Vector Space Model - Rocchio'
            },
            {
                name: '5.3 Feedback in Text Retrieval - Feedback in LM.mp4',
                label: '5.3 Feedback in Text Retrieval - Feedback in LM'
            },
            {
                name: '5.4 Web Search - Introduction & Web Crawler.mp4',
                label: '5.4 Web Search - Introduction & Web Crawler'
            },
            {name: '5.5 Web Indexing.mp4', label: '5.5 Web Indexing'},
            {name: '5.6 Link Analysis - Part 1.mp4', label: '5.6 Link Analysis - Part 1'},
            {name: '5.7 Link Analysis - Part 2.mp4', label: '5.7 Link Analysis - Part 2'},
            {
                name: '5.8 Link Analysis - Part 3 (OPTIONAL).mp4',
                label: '5.8 Link Analysis - Part 3 (OPTIONAL)'
            },
            {
                name: '6.1 Learning to Rank - Part 1 (OPTIONAL).mp4',
                label: '6.1 Learning to Rank - Part 1 (OPTIONAL)'
            },
            {name: '6.10 Summary for Exam 1.mp4', label: '6.10 Summary for Exam 1'},
            {
                name: '6.2 Learning to Rank - Part 2 (OPTIONAL).mp4',
                label: '6.2 Learning to Rank - Part 2 (OPTIONAL)'
            },
            {
                name: '6.3 Learning to Rank - Part 3 (OPTIONAL).mp4',
                label: '6.3 Learning to Rank - Part 3 (OPTIONAL)'
            },
            {name: '6.4 Future of Web Search.mp4', label: '6.4 Future of Web Search'},
            {
                name: '6.5 Recommender Systems - Content-Based Filtering - Part 1.mp4',
                label: '6.5 Recommender Systems - Content-Based Filtering - Part 1'
            },
            {
                name: '6.6 Recommender Systems - Content-Based Filtering - Part 2.mp4',
                label: '6.6 Recommender Systems - Content-Based Filtering - Part 2'
            },
            {
                name: '6.7 Recommender Systems - Collaborative Filtering - Part 1.mp4',
                label: '6.7 Recommender Systems - Collaborative Filtering - Part 1'
            },
            {
                name: '6.8 Recommender Systems - Collaborative Filtering - Part 2.mp4',
                label: '6.8 Recommender Systems - Collaborative Filtering - Part 2'
            },
            {
                name: '6.9 Recommender Systems - Collaborative Filtering - Part 3.mp4',
                label: '6.9 Recommender Systems - Collaborative Filtering - Part 3'
            }
        ],
    },
    {
        name: 'textanalytics',
        label: 'Text Analytics',
        titleitems: [
            {
                name: '7.1 Overview Text Mining and Analytics - Part 1.mp4',
                label: '7.1 Overview Text Mining and Analytics - Part 1'
            },
            {
                name: '7.2 Overview Text Mining and Analytics - Part 2.mp4',
                label: '7.2 Overview Text Mining and Analytics - Part 2'
            },
            {
                name: '7.3 Natural Language Content Analysis - Part 1.mp4',
                label: '7.3 Natural Language Content Analysis - Part 1'
            },
            {
                name: '7.4 Natural Language Content Analysis - Part 2.mp4',
                label: '7.4 Natural Language Content Analysis - Part 2'
            },
            {name: '7.5 Text Representation - Part 1.mp4', label: '7.5 Text Representation - Part 1'},
            {name: '7.6 Text Representation - Part 2.mp4', label: '7.6 Text Representation - Part 2'},
            {name: '7.7 Word Association Mining and Analysis.mp4', label: '7.7 Word Association Mining and Analysis'},
            {
                name: '7.8 Paradigmatic Relation Discovery Part 1.mp4',
                label: '7.8 Paradigmatic Relation Discovery Part 1'
            },
            {
                name: '7.9 Paradigmatic Relation Discovery Part 2.mp4',
                label: '7.9 Paradigmatic Relation Discovery Part 2'
            },
            {
                name: '8.1 Syntagmatic Relation Discovery - Entropy.mp4',
                label: '8.1 Syntagmatic Relation Discovery - Entropy'
            },
            {
                name: '8.10 Probabilistic Topic Models - Mining One Topic.mp4',
                label: '8.10 Probabilistic Topic Models - Mining One Topic'
            },
            {
                name: '8.2 Syntagmatic Relation Discovery - Conditional Entropy.mp4',
                label: '8.2 Syntagmatic Relation Discovery - Conditional Entropy'
            },
            {
                name: '8.3 Syntagmatic Relation Discovery - Mutual Information Part 1.mp4',
                label: '8.3 Syntagmatic Relation Discovery - Mutual Information Part 1'
            },
            {
                name: '8.4 Syntagmatic Relation Discovery - Mutual Information Part 2.mp4',
                label: '8.4 Syntagmatic Relation Discovery - Mutual Information Part 2'
            },
            {
                name: '8.5 Topic Mining and Analysis - Motivation and Task Definition.mp4',
                label: '8.5 Topic Mining and Analysis - Motivation and Task Definition'
            },
            {
                name: '8.6 Topic Mining and Analysis - Term as Topic.mp4',
                label: '8.6 Topic Mining and Analysis - Term as Topic'
            },
            {
                name: '8.7 Topic Mining and Analysis - Probabilistic Topic Models.mp4',
                label: '8.7 Topic Mining and Analysis - Probabilistic Topic Models'
            },
            {
                name: '8.8 Probabilistic Topic Models - Overview of Statistical Language Models Part 1.mp4',
                label: '8.8 Probabilistic Topic Models - Overview of Statistical Language Models Part 1'
            },
            {
                name: '8.9 Probabilistic Topic Models - Overview of Statistical Language Models Part 2.mp4',
                label: '8.9 Probabilistic Topic Models - Overview of Statistical Language Models Part 2'
            },
            {
                name: '9.1 Probabilistic Topic Models - Mixture of Unigram Language Models.mp4',
                label: '9.1 Probabilistic Topic Models - Mixture of Unigram Language Models'
            },
            {
                name: '9.10 Latent Dirichlet Allocation (LDA) Part 2.mp4',
                label: '9.10 Latent Dirichlet Allocation (LDA) Part 2'
            },
            {
                name: '9.2 Probabilistic Topic Models - Mixture Model Estimation Part 1.mp4',
                label: '9.2 Probabilistic Topic Models - Mixture Model Estimation Part 1'
            },
            {
                name: '9.3 Probabilistic Topic Models - Mixture Model Estimation Part 2.mp4',
                label: '9.3 Probabilistic Topic Models - Mixture Model Estimation Part 2'
            },
            {
                name: '9.4 Probabilistic Topic Models - Expectation-Maximization Algorithm Part 1.mp4',
                label: '9.4 Probabilistic Topic Models - Expectation-Maximization Algorithm Part 1'
            },
            {
                name: '9.5 Probabilistic Topic Models - Expectation-Maximization Algorithm Part 2.mp4',
                label: '9.5 Probabilistic Topic Models - Expectation-Maximization Algorithm Part 2'
            },
            {
                name: '9.6 Probabilistic Topic Models - Expectation-Maximization Algorithm Part 3.mp4',
                label: '9.6 Probabilistic Topic Models - Expectation-Maximization Algorithm Part 3'
            },
            {
                name: '9.7 Probabilistic Latent Semantic Analysis (PLSA) Part 1.mp4',
                label: '9.7 Probabilistic Latent Semantic Analysis (PLSA) Part 1'
            },
            {
                name: '9.8 Probabilistic Latent Semantic Analysis (PLSA) Part 2.mp4',
                label: '9.8 Probabilistic Latent Semantic Analysis (PLSA) Part 2'
            },
            {
                name: '9.9 Latent Dirichlet Allocation (LDA) Part 1.mp4',
                label: '9.9 Latent Dirichlet Allocation (LDA) Part 1'
            },
            {name: '10.1 Text Clustering - Motivation.mp4', label: '10.1 Text Clustering - Motivation'},
            {
                name: '10.2 Text Clustering - Generative Probabilistic Models Part 1 (OPTIONAL).mp4',
                label: '10.2 Text Clustering - Generative Probabilistic Models Part 1 (OPTIONAL)'
            },
            {
                name: '10.3 Text Clustering - Generative Probabilistic Models Part 2 (OPTIONAL).mp4',
                label: '10.3 Text Clustering - Generative Probabilistic Models Part 2 (OPTIONAL)'
            },
            {
                name: '10.4 Text Clustering - Generative Probabilistic Models Part 3 (OPTIONAL).mp4',
                label: '10.4 Text Clustering - Generative Probabilistic Models Part 3 (OPTIONAL)'
            },
            {
                name: '10.5 Text Clustering - Similarity-based Approaches.mp4',
                label: '10.5 Text Clustering - Similarity-based Approaches'
            },
            {name: '10.6 Text Clustering - Evaluation.mp4', label: '10.6 Text Clustering - Evaluation'},
            {name: '10.7 Text Categorization - Motivation.mp4', label: '10.7 Text Categorization - Motivation'},
            {name: '10.8 Text Categorization - Methods.mp4', label: '10.8 Text Categorization - Methods'},
            {
                name: '10.9 Text Categorization - Generative Probabilistic Models.mp4',
                label: '10.9 Text Categorization - Generative Probabilistic Models'
            },
            {
                name: '11.1 Text Categorization - Discriminative Classifier Part 1.mp4',
                label: '11.1 Text Categorization - Discriminative Classifier Part 1'
            },
            {
                name: '11.2 Text Categorization - Discriminative Classifier Part 2 (OPTIONAL).mp4',
                label: '11.2 Text Categorization - Discriminative Classifier Part 2 (OPTIONAL)'
            },
            {
                name: '11.3 Text Categorization - Evaluation Part 1.mp4',
                label: '11.3 Text Categorization - Evaluation Part 1'
            },
            {
                name: '11.4 Text Categorization - Evaluation Part 2.mp4',
                label: '11.4 Text Categorization - Evaluation Part 2'
            },
            {
                name: '11.5 Opinion Mining and Sentiment Analysis - Motivation.mp4',
                label: '11.5 Opinion Mining and Sentiment Analysis - Motivation'
            },
            {
                name: '11.6 Opinion Mining and Sentiment Analysis - Sentiment Classification.mp4',
                label: '11.6 Opinion Mining and Sentiment Analysis - Sentiment Classification'
            },
            {
                name: '11.7 Opinion Mining and Sentiment Analysis - Ordinal Logistic Regression (OPTIONAL).mp4',
                label: '11.7 Opinion Mining and Sentiment Analysis - Ordinal Logistic Regression (OPTIONAL)'
            },
            {
                name: '12.1 Opinion Mining and Sentiment Analysis - Latent Aspect Rating Analysis Part 1 (OPTIONAL).mp4',
                label: '12.1 Opinion Mining and Sentiment Analysis - Latent Aspect Rating Analysis Part 1 (OPTIONAL)'
            },
            {
                name: '12.2 Opinion Mining and Sentiment Analysis - Latent Aspect Rating Analysis Part 2 (OPTIONAL).mp4',
                label: '12.2 Opinion Mining and Sentiment Analysis - Latent Aspect Rating Analysis Part 2 (OPTIONAL)'
            },
            {name: '12.3 Text-Based Prediction.mp4', label: '12.3 Text-Based Prediction'},
            {name: '12.4 Contextual Text Mining - Motivation.mp4', label: '12.4 Contextual Text Mining - Motivation'},
            {
                name: '12.5 Contextual Text Mining - Contextual Probabilistic Latent Semantic Analysis.mp4',
                label: '12.5 Contextual Text Mining - Contextual Probabilistic Latent Semantic Analysis'
            },
            {
                name: '12.6 Contextual Text Mining - Mining Topics with Social Network Context.mp4',
                label: '12.6 Contextual Text Mining - Mining Topics with Social Network Context'
            },
            {
                name: '12.7 Contextual Text Mining - Mining Casual Topics with Time Series Supervision.mp4',
                label: '12.7 Contextual Text Mining - Mining Casual Topics with Time Series Supervision'
            },
            {name: '12.8 Summary for Exam 2.mp4', label: '12.8 Summary for Exam 2'}
        ],
    },
]
const textAnalytics = items[1]
const textRetrieval = items[0]

const _ = {
    "map": require("lodash/map")
}

function getTranscript(subject,transcriptFile) {
    let courses = []
    let transcript = ''
    let transcriptIndex = ''
    console.log("Subject: ",transcriptFile)
    if (subject == items[0].name) {
        courses = items[0].titleitems
    } else {
        courses = items[1].titleitems
    }
    for (const courseName of courses) {
        if (courseName.name == transcriptFile) {
            transcriptIndex = courses.indexOf(courseName)
            if (transcriptIndex != -1) {
                transcriptIndex = transcriptIndex + 1
            } else {
                return transcriptIndex
            }
            if (subject== items[0].name) {
                transcript = `tr-lec${transcriptIndex}-transcription-english.vtt`
            } else {
                transcript = `tm-lec${transcriptIndex}-transcription-english.vtt`
            }
            return transcript
        }
    }
}

function Custom(props) {
    const myRefname= useRef(null);

    let modifiedSoruce = `lecture_videos/${props.lectureName[1]}/${props.lectureName[0]}`
    let transcript = `transcripts/${props.lectureName[1]}/${props.transcript}`
    transcript = transcript.replace('.mp4', '.vtt').trim()
    console.log("transcript ", transcript)
    const [videoTranscript, setVideoTranscript] = useState([]);

    // document.getElementById('transcript').load();
    console.log(document.querySelector("*"))


    useEffect(() => {
        console.log("inside use effect")
        if (props.current === props) {
            return;
        }
        if (myRefname.current) {
            console.log("button click")
            myRefname.current.click()
        }
    }, [props]);

    if (props.lectureName === "") {
        console.log("Please Select a video from the course catalog")
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'flex-start'}}>
            <div style={{width: '540px',border: '5px solid black', backgroundColor: 'black', visibility: `${props.lectureName==="" ? "visible" : "hidden"}`}}>
                <h1 style={{color: '#1c87c9'}} className="blink_me">Please select a video from the topic list !!!</h1>
            </div>
            <div className="able-playlist" data-player="video1" style={{visibility: 'hidden'}}>
                <li className="videolist" data-width="200" data-height="360">
                        <span className="able-source"
                              data-type="video/mp4"
                              data-src={modifiedSoruce}/>
                                <span className="able-track"
                                      data-kind="captions"
                                      data-src={transcript}
                                      data-srclang="en"
                                      data-label="English"/>
                                <button type="button" ref={myRefname} style={{'display': 'none'}}
                                        value={transcript}>
                                    {modifiedSoruce}
                                </button>
                </li>
            </div>
            <div id="player" style={{visibility: `${props.lectureName==="" ? "hidden" : "visible"}`}}>
                <video id="video1" preload="auto" data-able-player data-transcript-div="transcript" data-skin="2020"
                       playsInline loop/>
            </div>
            <div id="transcript" style={{visibility: `${props.lectureName==="" ? "hidden" : "visible"}`}}></div>
        </div>
    );
}

export default Custom;