import Tag from '../Tag'
import Button from '../Button'

import { priceFormatter } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3 className="container">Loading...</h3>
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{priceFormatter(game.prices.old)}</span> <br />
            Por apenas {priceFormatter(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          title="Clique aqui para aproveitar esta oferta"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
