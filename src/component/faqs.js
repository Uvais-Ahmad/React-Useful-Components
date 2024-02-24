import React, { useState } from 'react'

export default function Faqs() {
    const questions = [
        {
            id:1,
            question: 'What is an ecommerce FAQ page?',
            answer : 'An FAQ page is a list of common questions about your store, such as delivery time or product details.You can have different FAQ sections for different pages of your website.'
        },
        {
            id:1,
            question: 'What are some common questions that might be included in an FAQ page?',
            answer : 'Common questions include service hours, shipping and handling, product details, and return policies.'
        },
        {
            id:1,
            question: 'How can I choose an ecommerce platform?',
            answer : 'When choosing an ecommerce platform, consider whether you\'ll be handling the website yourself or with a website building platform'
        }
    ]
  return (
    <>
        <div style={{backgroundColor:"lightgrey",margin : '10px', height:'91vh',borderRadius: '10px', padding: '20px'}}>
            <h1>Frequently Asked Questions</h1>
            {
                questions.map(question => (
                    <Question key={question?.id} question={question?.question} answer={question?.answer} />
                ))
            }
        </div>
    </>
  )
}

function Question (props) {
    const {key, question, answer} = props;
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div key={key}>
                <div style={{border: '5px', margin:'10px auto', width : '80%', backgroundColor:'white', boxShadow : '1px 1px 5px 1px lightgrey',padding:'10px', borderRadius:'10px'}}>
                    <div style={{display:'flex', justifyContent : 'space-between'}}>
                        <h4>{question}</h4>
                        <button style={{cursor:'pointer', backgroundColor:'lightblue', border : '0px', height : '20px',boxShadow : '1px 1px 10px 1px grey', borderRadius:'4px', fontWeight:'bolder',marginTop:'20px'}}
                        onClick={() => setToggle(prev => !prev)}>{toggle ? '-' : '+'}</button>
                    </div>
                    {toggle && <p style={{textAlign: 'start', marginTop: '5px', color:'grey'}}>{answer}</p>}
                </div>
            </div>
        </>
    )
}