import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Quizinstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz-App</title></Helmet>
        <div className="instructions conatiner">
            <h1> How to Play the Game</h1>
            <p> Please Ensure you read this guide from start to finish carefully.</p>
            <ul className='browser-default' id='main-list'>
                <li>
                The quizzes consists of questions carefully designed to help you
                 self-assess your comprehension of the
                 information presented on the topics covered in the module.
                </li>
                <li>
                No data will be collected on the website 
                regarding your responses or how many times you take the quiz.
                </li>
                <li>
                Each question in the quiz is of multiple-choice or "true or false" format.
                 Read each question carefully, and click on the button next to your response
                  that 
                is based on the information covered on the topic in the module.
                </li>
                <li>
                After responding to a question, click on the "Next Question"
                 button at the bottom to go to the next questino. 
                 After responding to the last question,
                 click on "Close" on the top of the window to exit the quiz.
                </li>
                <li>
                If you select an incorrect response for a question, you can try again
                until you get the correct response. If you retake the quiz, 
                the questions and their respective responses will be randomized.
                </li>
                <li>
                The total score for the quiz is based on your responses to all questions. 
                If you respond incorrectly to a question or retake a question again and 
                get the correct response, 
                your quiz score will reflect it appropriately.
                </li>
            </ul>

            <div>
                <span className='left'><Link to="/">No take me back</Link></span>
                <span className='right'><Link to="/play/Quiz">Okay, Let's do this!</Link></span>
            </div>


        </div>
    </Fragment>

  
  
);

export default Quizinstructions;
