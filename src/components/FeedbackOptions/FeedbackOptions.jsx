import css from './FeedBackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.btnBox}>
{options.map((buttonName, index)=> (
            <button className={css.btnCount} key = {index}
            onClick = {() => onLeaveFeedback (buttonName)
            }>
                {buttonName}
            </button>
))}
    </div>
    
    )

}