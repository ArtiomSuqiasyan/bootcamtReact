import React from "react";
import CountriesItems from "./Countries";
import Input from "./Input/Input";

class CountriesData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: [],
      showCountries: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    this.setState({ countriesData: data });
  }

  searchCountries = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const searchCountries = this.state.countriesData.filter(
      (el) => el.name.toLowerCase().search(searchValue) > -1
    );
    this.setState({ showCountries: searchCountries });
    if (!searchValue) {
      this.setState({ showCountries: [] });
    }
  };

  render() {
    return (
      <div>
        <Input type="text" placeholder="Country" onChange={this.searchCountries} />
        <CountriesItems showCountries={this.state.showCountries} />
      </div>
    );
  }
}

export default CountriesData;
