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

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src="https://placehold.co/80x80" alt="Nome do jogo" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 235,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src="https://placehold.co/80x80" alt="Nome do jogo" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 235,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total: R$ 235,00<span>Em até 6x sem juros</span>
      </Prices>
      <Button title="Continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
