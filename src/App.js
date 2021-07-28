import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Routes from './components/Routes/Routes'

import duke from './static/duke.jpg'
import tubby from './static/tubby.jpg'
import perry from './static/perry.jpg'
import whiskey from './static/whiskey.jpg'

const App = () => (
  <div>
    <BrowserRouter>
      <Nav dogs={dogs} />
      <div className="container">
        <Routes dogs={dogs} />
      </div>
    </BrowserRouter>
  </div>
)

export const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
]

App.defaultProps = { dogs }

export default App
