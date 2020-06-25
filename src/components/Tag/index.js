import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const Tag = ({title, enableDelete=true, onDelete}) => {
  return (
    <div className={classes.tag}>
      {title}
      {enableDelete ? 
        <span onClick={() => onDelete(title)}><i className="fa fa-close"></i></span>
      : ("")}      
    </div>
  )
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
}

export default Tag;
