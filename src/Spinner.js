import React from "react";
import PropTypes from 'prop-types';

import './Spinner.css';

export const Spinner = ({size}) => <div className={['spinner', `spinner--${size}`].join(' ')}></div>;

Spinner.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Spinner.defaultProps = {
    size: 'medium',
}
