import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';

function PizzaBlock({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount }) {
  
  const availableTypes = ['thin', 'traditional'];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activePrice, setActivePrice] = React.useState(price);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index, size) => {
    setActiveSize(index);
    console.log(typeof activePrice)

    switch (size) {
      case 26:
        return setActivePrice(price);
      case 30:
        return setActivePrice(Math.round(price * 1.2));
      case 40:
        return setActivePrice(price * 1.5);
      default:
        return price;
    }
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price: activePrice,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };

    console.log(obj)
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index, size)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}>
              {size} сm
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{activePrice} &euro;</div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <span>Add to the Cart</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onClickAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
