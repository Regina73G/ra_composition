import './App.css'
import Card from './components/Card/Card'
import CardBody from './components/CardBody/CardBody'
import cat from "./assets/cat.jpg";
import cat2 from "./assets/cat2.jpg";

const cards = [
  {
    id: 1,
    body: {
      title: "Кот в коробке",
      text: "Это пример текста карточки. Здесь можно разместить описание или любую другую информацию.",
      link: "Посмотреть на кота?",
    },
    image: cat,
  },
  {
    id: 2,
    body: {
      title: "Скучная текстовая карточка",
      text: "Пример карточки без изображения, содержащей только текстовое содержимое.",
      link: "Подробнее",
    }
  },
  {
    id: 3,
    body: {
      title: "Кот в коробке лежит",
      text: "Это пример текста карточки. Здесь можно разместить описание или любую другую информацию.",
      link: "Скорее посмотри на кота, а то убежит!",
    },
    image: cat2,
  },
]

function App() {
  return (
    <div className='card-list'>
      {cards.map((card => (
        <Card image={card.image} key={card.id}>
          <CardBody {...card.body} />
        </Card>
      )))}
    </div>
  )
}

export default App