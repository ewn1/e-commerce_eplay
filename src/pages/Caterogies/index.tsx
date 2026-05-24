import { Game } from '../Home'
import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightingGames } = useGetFightingGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  if (
    actionGames &&
    sportsGames &&
    simulationGames &&
    fightingGames &&
    rpgGames
  ) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportsGames} title="Esportes" background="gray" />
        <ProductsList games={fightingGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
