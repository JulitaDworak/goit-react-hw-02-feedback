import { Component } from "react";
import css from "./Feedback.module.css";

const Button = ({ changeValue }) => (
    <button type="button" onClick={changeValue}>Set value</button>
)

export class Counter extends Component {
    static defaultProps = { 
        step: 1,
    }


    state = {
        good: 0,
        neutral: 0,
        bad: 0, 
        total:0,
        positivePercentage:0,
    }

    goodIncrement = () => {
        this.setState((state, props) => ({
            good: state.good + props.step
        }))

    }

    neutralIncrement = () => {
        this.setState((state, props) => ({
           neutral: state.neutral + props.step
        }))

    }
    badIncrement = () => {
        this.setState((state, props) => ({
           bad: state.bad + props.step
        }))
    }

    countTotalFeedback = () => {
        this.setState((state,props) => ({
            total: state.good + state.neutral + state.bad
        }))
    }

countPositiveFeedbackPercentage = () => ({
    positivePercentage: Math.round(this.state.good/this.state.total)

})


    handleChangeValue = event => {
        console.log(event)
        this.setState({
        good: 0,
        neutral: 0,
        bad: 0
        })
    }


    
    render() {

        return (
            <div className={css.statistics}>
            <h2>Please leave the feedback</h2>
            <div className={css.responseBtn}>   
                <button type="button" onClick={this.goodIncrement}>GOOD: </button>
                <button type="button" onClick={this.neutralIncrement}>NEUTRAL </button>                 
                <button type="button" onClick={this.badIncrement}>BAD </button>                  
            </div>
            <div className={css.response}>
                <h2>Statistics</h2>
            <p>Good : <span>{this.state.good}</span></p>
            <p>Neutral: <span>{this.state.neutral}</span></p>
            <p>Bad: <span>{this.state.bad}</span></p>
            </div>
            <div>
            <p>Total: <span>{this.state.good + this.state.neutral+this.state.bad}</span></p>
            <p data-percent="0%">Positive feedback: <span>{this.state.good/(this.state.good + this.state.neutral+this.state.bad)}</span></p>
            <p data-percent="0%">{this.state.positivePercentage}</p>
            </div>
            <div>
            <Button changeValue={this.handleChangeValue} />
                
            </div>
            </div>
        )
    }
}

export default Counter