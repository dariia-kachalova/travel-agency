import PropTypes from 'prop-types';
import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({
  values,
  required,
  currentValue,
  setOptionValue,
}) => (
  <div className={styles.component}>
    {required ? (
      ''
    ) : (
      <div className={styles.icon} onClick={() => setOptionValue('')}>
        <Icon name="times-circle" />
        none
      </div>
    )}
    {values.map((value) => {
      return (
        <div
          key={value.id}
          className={
            value.id === currentValue ? styles.iconActive : styles.icon
          }
          onClick={() => setOptionValue(value.id)}
        >
          <Icon name={value.icon} />
          {value.name} ({formatPrice(value.price)})
        </div>
      );
    })}
  </div>
);

OrderOptionIcons.propTypes = {
  currentValue: PropTypes.string,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};
export default OrderOptionIcons;