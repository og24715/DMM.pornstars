import React, { createContext } from 'react';

const FavoritesContext = createContext();

export class FavoritesProvider extends React.Component {
  state = {
    favorites: [],
  };

  _setFavorites = (favorites) => {
    this.setState({ favorites });
  }

  render() {
    const { children } = this.props;
    const { favorites } = this.state;

    return (
      <FavoritesContext.Provider
        favorites={favorites}
        setFavorites={this._setFavorites}
      >
        {children}
      </FavoritesContext.Provider>
    );
  }
}

export const FavoritesConsumer = FavoritesContext.Consumer;
