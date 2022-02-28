import React from 'react';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We cook the most {props.adjective} food ever.</p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Tacos", 
  "BBQ", 
  "Sushi", 
  "Lumpia"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Jammo" />
      <Main adjective="tremendous" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
