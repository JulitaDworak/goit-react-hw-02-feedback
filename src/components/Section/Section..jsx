import css from './Section.module.css'

export const Section = ({title, children}) => {
    return (
        <section className= {css.feedbackItem}>
            <h1>{title}</h1>
            {children}
        </section>
    )
    
}