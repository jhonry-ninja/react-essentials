import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Vita's Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We cook the most delicious food ever.</p>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>It's unbelieavble.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
