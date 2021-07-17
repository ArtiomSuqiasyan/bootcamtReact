import "./Countries.css"

export default function CountriesItems({ countryName, countryFlag }) {
  return (
    <div>
      <img src={countryFlag} alt={countryName}></img>
    </div>
  );
}
