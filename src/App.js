import React from 'react';
import './App.css';

function Header(props) {
  console.log(props);
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
        <li>{dish}</li>
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

function App() {
  return (
    <div className="App">
      <Header name="Jammo" />
      <Main adjective="tremendous" dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
