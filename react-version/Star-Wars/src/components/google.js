import React from "react";

class Google extends React.Component {
  constructor() {
    super();
    this.state = {
      characterAdded: false,
      name: null,
      height: null,
      homeworld: null,
      // films: [], // Removed: No longer tracking films
      image: null,
      error: null,
    };
  }

  getNewCharacter = () => {
    console.log("Get new character from a button");
    const randomNumber = Math.floor(Math.random() * 83) + 1; // Generates 1 to 83
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} for ID ${randomNumber}`);
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld ? data.homeworld.name : 'Unknown',
          // films: data.films ? data.films.map(film => film.title) : [], // Removed: No longer setting films state
          image: data.image,
          characterAdded: true,
          error: null,
        });
      })
      .catch(error => {
        console.error("There was a problem fetching the character:", error);
        this.setState({
          error: `Failed to load character. ${error.message || 'Please try again.'}`,
          characterAdded: false,
          name: null,
          height: null,
          homeworld: null,
          // films: [], // Removed: No longer resetting films state on error
          image: null,
        });
      });
  };

  render() {
    return (
      <div className="card">
        <h1>Star War Character Generator</h1>
        <p>Click the button to generate a new character:</p>

        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}

        {this.state.characterAdded && (
          <div>
            {this.state.image && (
              <div className="character-image-container">
                <img 
                  src={this.state.image} 
                  alt={this.state.name || 'Star War Character'} 
                  className="character-image" //image take time if your internet is slow, so wait for it to load
                />
              </div>
            )}

            <h2>{this.state.name}</h2>
            <p>Height: {this.state.height} cm</p>
            <p>Homeworld: {this.state.homeworld}</p>
            
          </div>
        )}

        <button
          type="button"
          className="btn"
          onClick={this.getNewCharacter}
        >
          Generate Character
        </button>
      </div>
    );
  }
}

export default Google;