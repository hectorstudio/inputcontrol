import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './styles.module.scss';

import Tag from '../Tag/';
import HelperModal from '../HelperModal';
import Menuitem from '../Menuitem';

const InputControl = ({categories, placeholder, helper}) => {
  const [hidden, setHidden] = useState(true);
  const [category, setCategory] = useState('');
  const [options, setOptions] = useState([]);
  const [isOpen, setOpenModal] = useState(false);
  const [values, setValues] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    if (category === '') {
      setOptions(categories);
    } else {
      setOptions(categories.find(el => el.label === category).demo)
    }
  }, [categories, category])

  const interceptEvent = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  const handleClickInput = (event) => {
    interceptEvent(event)
    setHidden(false);
    menuRef.current.focus();
  }

  const hideDrop = () => {
    setHidden(true);
    setCategory('');
  }

  const handleClickItem = (item) => {
    if (category === '') {
      setCategory(item)
    } else {
      if (!values.some(el => el === item)) {
        setValues([...values, item]);
        setHidden(true);
        setCategory('');
      }
    }
  }
  
  const deleteSelectedValue = (item) => {
    setValues(values.filter(el => el !== item));
  }

  const showModalHelper = () => {
    setOpenModal(true);
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <div className={classes.input}>
          <span className={classes.searchIcon}><i className="fa fa-search"></i></span>
          <div className={classes.values}>
            {values.length > 0 && values.map((el, index) => (
              <Tag key={`value-${index}`} title={el} onDelete={deleteSelectedValue}/>
            ))}
          </div>
          <input type="text" placeholder={category !== '' ? category : placeholder} onClick={handleClickInput}/>
          <span className={classes.helper} onClick={showModalHelper}><i className="fa fa-question-circle"></i></span>
        </div>
      </div>
      { isOpen && 
        <HelperModal setOpenModal={setOpenModal}>{helper}</HelperModal>
      }
      <div tabIndex={0} className={classNames(classes.dropDown, {[classes.active]: !hidden})} onBlur={hideDrop} ref={menuRef}>
        <ul>
          {
            options.length > 0 && options.map((el, index) => (
              <Menuitem key={`item-${index}`} onClick={handleClickItem} value={el.label}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

InputControl.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  helper: PropTypes.node,
}

export default InputControl;
