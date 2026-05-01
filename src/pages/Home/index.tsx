import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import RE4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import metroid4 from '../../assets/images/metroid4.png'
import gta6 from '../../assets/images/gta6.png'
import first_light_007 from '../../assets/images/first_light_007.png'
import gears_of_war_eday from '../../assets/images/gears_of_war_eday.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Terror, Ação',
    description:
      'The Legend of Zelda: Tears of the Kingdom é uma aventura épica de mundo aberto para Nintendo Switch, sequência direta de Breath of the Wild.',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    system: 'Nintendo Switch 2',
    infos: ['-10%', 'R$ 349,00'],
    image: zelda,
  },
  {
    id: 2,
    category: 'Terror, Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror desenvolvido e publicado pela Capcom.',
    title: 'Resident Evil 4 - Remake',
    system: 'PS4, Xbox One, Switch',
    infos: ['-5%', 'R$ 290,00'],
    image: RE4,
  },
  {
    id: 3,
    category: 'Ação, Aventura',
    description:
      'Star Wars Jedi: Survivor é um jogo de ação-aventura em terceira pessoa que continua a jornada de Cal Kestis, cinco anos após os eventos de Fallen Order.',
    title: 'Star Wars Jedi: Survivor',
    system: 'Windows',
    infos: ['-5%', 'R$ 299,00'],
    image: star_wars,
  },
  {
    id: 4,
    category: 'RPG, Fantasia',
    description:
      'Diablo IV é um RPG de ação (ARPG) de fantasia sombria, focado em combate rápido, exploração de masmorras e progressão de personagem, desenvolvido pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'PS4, Xbox One, Switch',
    infos: ['-5%', 'R$ 249,00'],
    image: diablo,
  },
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação, Aventura',
    description:
      'Metroid Prime 4: Beyond (2025) é um jogo de ação-aventura em primeira pessoa da Retro Studios para Nintendo Switch, onde Samus Aran explora o planeta alienígena hostil Viewros.',
    title: 'Metroid Prime 4: Beyond',
    system: 'Nintendo Switch 2',
    infos: ['Em Breve'],
    image: metroid4,
  },
  {
    id: 6,
    category: 'Ação, Aventura',
    description:
      'Grand Theft Auto VI (GTA 6) é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar Games. Situado no estado de Leonida (baseado na Flórida) e na icônica Vice City, o jogo foca na história de Lucia e Jason.',
    title: 'GTA VI',
    system: 'PS5, Xbox Series X/S',
    infos: ['Em Breve'],
    image: gta6,
  },
  {
    id: 7,
    category: 'Ação, Espionagem',
    description:
      'First Light 007 é um jogo de ação e espionagem em terceira pessoa, desenvolvido pela IO Interactive, a mesma criadora da franquia Hitman.',
    title: 'First Light 007',
    system: 'PS5, Xbox Series X/S',
    infos: ['Em Breve'],
    image: first_light_007,
  },
  {
    id: 8,
    category: 'Ação, Aventura',
    description:
      'Gears of War: E-Day é uma prequela de tiro em terceira pessoa (Unreal Engine 5) que narra o início da guerra contra a Horda Locust, 14 anos antes do primeiro jogo.',
    title: 'Gears of War: E-Day',
    system: 'Xbox Series X/S',
    infos: ['Em Breve'],
    image: gears_of_war_eday,
  },
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
