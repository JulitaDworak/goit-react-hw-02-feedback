import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
        <section className= {css.feedbackItem}>
            <h1>{title}</h1>
            {children}
        </section>
    )
    
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
  };