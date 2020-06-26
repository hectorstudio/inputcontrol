import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './styles.module.scss';

import Tag from '../Tag/';
import HelperModal from '../HelperModal';
import Menuitem from '../Menuitem';

const InputControl = ({data, placeholder, helper}) => {
  const [hidden, setHidden] = useState(true);
  const [category, setCategory] = useState('');
  const [options, setOptions] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [isOpen, setOpenModal] = useState(false);
  const [values, setValues] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    let tempData = [...data];
    values.forEach(el => {
      tempData = tempData.filter(item => item[el.category] === el.value);
    });
    setTableData(tempData);
  }, [data, values]);

  useEffect(() => {
    if (category === '') {
      let categories = [];
      if (data && data.length > 0) {
        Object.keys(data[0]).forEach(el => {
          categories.push({label: el});
        });
      }
      setOptions(categories);
    } else {
      let categories = [];
      if (data && data.length > 0) {
        data.forEach(el => {
          if (!categories.some(item => item.label === el[category])) {
            categories.push({label: el[category]});
          }
        })
      }
      setOptions(categories)
    }
  }, [data, category])

  const interceptEvent = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  const handleClickInput = async (event) => {
    interceptEvent(event)
    await setHidden(false);
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
        setValues([...values, {category: category, value: item}]);
        setHidden(true);
        setCategory('');
      }
    }
  }
  
  const deleteSelectedValue = (item) => {
    setValues(values.filter(el => el.value !== item));
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
              <Tag key={`value-${index}`} label={el.category} value={el.value} onDelete={deleteSelectedValue}/>
            ))}
          </div>
          <input type="text" placeholder={category !== '' ? `${category}:` : placeholder} onClick={handleClickInput}/>
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
      <table className={classes.datatable}>
        <thead>
          { tableData && tableData.length > 0 && Object.keys(tableData[0]).map((el, index) => (
            <th key={`header-${index}`}>{el}</th>
          )) }          
        </thead>
        <tbody>
          { tableData && tableData.length > 0 && tableData.map((el, index) => (
            <tr key={`row-${index}`}>
              { el && Object.values(el).map(item => (
                <td key={item}>{item}</td>
              )) }
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

InputControl.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  helper: PropTypes.node,
}

export default InputControl;
