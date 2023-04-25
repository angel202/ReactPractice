export const GetPlanet = (props) => {
  return (
    <div>
      {props.isGasPlanet ? <h1>{props.name}</h1> : <h1>{"nothing to see"}</h1>}
    </div>
  );
};
