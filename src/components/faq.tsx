import React from 'react'

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        id: 1,
        question: "What is TruthCheck?",
        answer: "TruthCheck is a decentralized fact-checking platform where the community verifies claims using collective evidence, transparent voting, and web3 technology. It's designed to combat misinformation by empowering users to validate facts together" ,
    }, 
    {
        id: 2,
        question: "How does TruthCheck work?",
        answer: "This app works ... "


    },
    {
        id: 3,
        question: "What makes this different from traditional fact-checking platforms?",
        answer: "Traditional platforms rely on centralized authorities, while TruthCheck uses decentralized community verification."
    }, 
    {
        id: 4,
        question: "Who can participate in validating claims",
        answer: "Anybody that tries"

    }
]
  


