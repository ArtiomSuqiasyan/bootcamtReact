import CountriesItem from "./CountriesItem";

export default function Countries({ showCountries }) {
  return (
    <>
      {showCountries.map((el) => (
        <CountriesItem countryName={el.name} countryFlag={el.flag} key={el.name}/>
      ))}
    </>
  );
}
