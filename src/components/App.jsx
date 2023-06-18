// import { Counter} from './Feedback/Feedback';
// import {LoginForm} from './learn/Learn';
// import { SignUpForm } from './learn/SignUp';
import {Component} from 'react'
import {Statistics} from './Statistics/Statistics'
import {Section} from './Section/Section.'
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Notification} from './Notification/Notification'
import css from 'index.css'


export class App extends Component {
  static defaultProps = { 
      step: 1,
  }

  state = {
      good: 0,
      neutral: 0,
      bad: 0, 
  }
  
showFeedbackValue =(name) => {
  this.setState(prevState => ({
    [name] : prevState[name] +1
  }))
}
  
countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad
      };

countPositiveFeedbackPercentage = () => {
  const {good} = this.state;
  const total = this.countTotalFeedback();

return Math.round((good/total) *100) ||0;


};

  render(){
    return (
      <div className={css.feedbackItem}> 
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.showFeedbackValue}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      </div>
    );
  }
}
  


export default App