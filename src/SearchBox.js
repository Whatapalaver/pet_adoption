import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.search();
  }
  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location{" "}
                <input
                  onChange={context.handleLocationChange}
                  id="location"
                  value={context.location}
                  placeholder="Location"
                />
              </label>
              <label htmlFor="animal">
                Animal
                <select
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                  id="animal"
                  value={context.animal}
                >
                  <option />
                  {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="breed">
                breed
                <select
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  id="breed"
                  value={context.breed}
                  disabled={!context.breeds.length}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <button>Submit</button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
