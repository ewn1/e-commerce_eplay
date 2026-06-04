import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import { Imagem, Titulo, Precos } from './styles'
import Tag from '../Tag'
import Button from '../Button'

import { priceFormatter } from '../ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3 className="container">Loading...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{priceFormatter(game.prices.old)}</span> <br />
            Por apenas {priceFormatter(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          title="Clique aqui para aproveitar esta oferta"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
