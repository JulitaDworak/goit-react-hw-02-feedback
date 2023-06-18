import css from './Statistics.module.css'

export const Statistics = ({
    good,
    neutral,
    bad,
    total, 
    positivePercentage,
}) => {
    return (
<div>
      
    <h2>Statistics</h2>
      <div className={css.response}>
    <p>Good : <span>{good}</span></p>
    <p>Neutral: <span>{neutral}</span></p>
    <p>Bad: <span>{bad}</span></p>
    <p>Total: <span>{total}</span></p>
    <p >Positive feedback: <span>{positivePercentage}%</span></p>
    </div>

    </div>
    )
}
