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
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Jammo" />
      <Main adjective="tremendous"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
