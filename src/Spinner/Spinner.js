import React from "react";
import PropTypes from 'prop-types';

import './Spinner.css';

/**
 * Spinner Component
 */
export const Spinner = ({size}) => <div className={['spinner', `spinner--${size}`].join(' ')}></div>;

Spinner.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Spinner.defaultProps = {
    size: 'medium',
}
