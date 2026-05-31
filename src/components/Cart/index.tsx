import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Button from '../Button'
import Tag from '../Tag'
import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem,
} from './styles'

import { close, remove } from '../../store/reducers/cart'
import { priceFormatter } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return (total += item.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.cover} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{priceFormatter(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total: {priceFormatter(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
