import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const Tag = ({label, value, enableDelete=true, onDelete}) => {
  return (
    <div className={classes.tag}>
      {label}: {value}
      {enableDelete ? 
        <span onClick={() => onDelete(value)}><i className="fa fa-close"></i></span>
      : ("")}      
    </div>
  )
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
}

export default Tag;
