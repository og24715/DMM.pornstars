module.exports = {
  "extends": "airbnb",
  "plugins": [
    "babel"
  ],
  "parser": "babel-eslint",
  "rules": {
    "no-underscore-dangle": [
      2, {
        "allowAfterThis": true
      }
    ],
    "arrow-body-style": [1, "as-needed"],
    "react/prop-types": [0],
    "react/sort-comp": [0],
    "react/jsx-tag-spacing": [0],
    "react/prefer-stateless-function": [1],
    "react/jsx-filename-extension": [0]
  },
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
};
