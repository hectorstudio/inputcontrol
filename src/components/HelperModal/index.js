import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const HelperModal = ({children, setOpenModal}) => {
  const onClose = () => {
    setOpenModal(false);
  }

  return (
    <div className={classes.container}>
      <div className={classes.modalHeader}>
        <span><i className="fa fa-question-circle"></i> Help</span>
        <span className={classes.close} onClick={onClose}><i className="fa fa-close"></i></span>
      </div>
      <div className={classes.modalBody}>
        {children}
      </div>
    </div>
  )
}

HelperModal.propTypes = {
  children: PropTypes.node,
  setOpenModal: PropTypes.func,
}

export default HelperModal;
