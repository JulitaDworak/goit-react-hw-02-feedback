import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({message}) => {
    return <p className={css.noti}>{message}</p>
}
Notification.propTypes = {
    title: PropTypes.string.isRequired,
  };