import "./App.css";
import { GetPlanet } from "./Planetary.js";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        return (
          <GetPlanet name={planet.name} isGasPlanet={planet.isGasPlanet} />
        );
      })}
    </div>
  );
}

export default App;
