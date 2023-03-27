import './App.css';
function App() {
  console.log(process.env.REACT_APP_IMAGE_SRC)
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.REACT_APP_IMAGE_SRC} className="App-logo" alt="logo" />
        <p>
          Congrats you just deployed me.
        </p>
      </header>
    </div>
  );
}

export default App;
