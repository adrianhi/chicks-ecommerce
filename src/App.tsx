import "./styles/App.css";
import Header from "@components/Header/Header.tsx";
function App() {
  return (
    <>
      <Header />
      <div className="app">
        <main className="main-content">
          <h1>Vite + React</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
