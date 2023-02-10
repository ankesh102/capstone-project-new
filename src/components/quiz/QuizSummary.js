import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0
        };
    }

    componentDidMount () {
        const {state} = this.props;
        this.setState({
            // score: (state.score / state.numberOfQuestions) * 100 ,
            // numberOfQuestions: state.numberOfQuestions,
            // numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
            // correctAnswers: state.correctAnswers,
            // wrongAnswers: state.wrongAnswers
        })
    }

    // componentDidMount () {
    //     const {state} = this.props;
    //     this.setState({
    //         state: (this.props.score / this.props.numberOfQuestions) * 100,

    //     })
    // }

  render() { 
    console.log(this.props)
    // const { state, score } = this.props.location;
    let stats, remark;
    
    // if(score <= 30) {
    //     remark = "You need more Practice";
    // } else if (score > 30 && score <= 50 ){
    //     remark = 'better luck next time';
    // } else {
    //     remark = "Good";
    // }

    if( this.state !== undefined) {
        stats = (
            <Fragment>

            <div>
                <span className='mdi mdi-check-circle-outline sucsess-icon'></span>
            </div>
            <h1>Quix has Ended !</h1>
        <div className='container'>
            <h4> {remark}</h4>
            <h2> Your Score : {this.state.score.toFixed(0)}&#37;</h2>
            <span className='stat left'> Total number of Question L </span>
            <span className='right'>{this.state.numberOfQuestions}</span>
            <br /> <br />
            <span className='stat left'> Total number of Question L </span>
            <span className='right'>{this.state.numberOfQuestions}</span>
            <br /> <br />
            <span className='stat left'> Total number of Question L </span>
            <span className='right'>{this.state.numberOfQuestions}</span>
            <br /> <br />
            <span className='stat left'> Total number of Question L </span>
            <span className='right'>{this.state.numberOfQuestions}</span>
            <br /> <br />
            <span className='stat left'> Total number of Question L </span>
            <span className='right'>{this.state.numberOfQuestions}</span>
            <br /> <br />
            <span className='stat left'> Total number of Question L </span>
            <span className='right'>{this.state.numberOfQuestions}</span>
        </div>
        <section>
            <ul>
                <li>
                    <Link to="/">Back to home</Link>
                </li>
                <li>
                    <Link to="/play/quiz"> Play Again !</Link>
                </li>
            </ul>
        </section>
            </Fragment>
        );
    } else {
        stats = (
            <section>

            <h1 className='no-stats'>No statictics Available.</h1>
            <ul>
                <li>
                    <Link to="/">Back to home</Link>
                </li>
                <li>
                    <Link to="/play/quiz"> Play Again !</Link>
                </li>
            </ul>
            </section>

        );
    }
    return (
      <Fragment>
            <Helmet><title> Quiz App - Summary</title></Helmet>
            {stats}
      </Fragment>
    )
  }
}

export default QuizSummary;
