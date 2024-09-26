# ULabel React Demo

Demonstration of using
[ULabel](https://github.com/SenteraLLC/ulabel)
in a
[React](https://react.dev/)
project.

## Usage

```bash
npm install
npm start
```

## Development

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

```bash
npm run lint-and-format
```

## Development Process

This project was bootstrapped with
[create-react-app](https://create-react-app.dev/):

```bash
npx create-react-app ulabel-react-demo
```

ULabel was installed with:

```bash
npm install ulabel
```

The ULabel component was added by taking existing "on load"
functionality from the ULabel demo and putting it in a single
[`useEffect` hook](https://react.dev/reference/react/useEffect).
