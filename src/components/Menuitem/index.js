import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const Menuitem = ({value, onClick}) => {
  const handleClick = () => {
    onClick(value);
  }

  return (
    <li className={classes.menuitem}>
      <div onClick={handleClick}>{value}</div>
    </li>
  )
};

Menuitem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Menuitem;
