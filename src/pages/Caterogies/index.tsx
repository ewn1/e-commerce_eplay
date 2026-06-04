import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightingGames, isLoading: isLoadingFighting } =
    useGetFightingGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRPGGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={fightingGames}
        title="Luta"
        background="black"
        id="fighting"
        isLoading={isLoadingFighting}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
