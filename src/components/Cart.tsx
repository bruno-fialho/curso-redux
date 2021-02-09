import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Cart: React.FC = () => {
  const newState = useSelector(state => state);

  console.log(newState);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>{/* <tr></tr> */}</tbody>
    </table>
  );
};

export default Cart;
