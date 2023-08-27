# calendify-react

**calendify-react** is a comprehensive calendar UI library with the aim for different way of display and interaction
with dates

## Installation

**You can install Calendify React using npm:**

```bash
npm install calendify-react
```

**Or using yarn:**

```bash
yarn add calendify-react
```

## Getting started with calendify-react

Here is an example of a basic app using calendify-react's `Calendar` component:

```jsx
import React from 'react';
import { Calendar } from 'calendify-react';

function App() {
  return <Calendar />;
}

export default App;
```

## Props

`Calendar` component accepts the following props:

- `dateActions`: A custom React component to be rendered within each calendar cell. This should be a `ReactNode` and can
  be used for adding additional content or functionality to the calendar cells.

### dateActions disclaimer

Please be mindful when using the dateActions prop. Adding complex or resource-intensive components might impact the
rendering performance of your calendar. It's recommended to thoroughly test and optimize any custom components you
provide to maintain a smooth user experience.

It is recommended to use simple elements/components similar to `<button>` or `<input type="checkbox">`.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a
pull request.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).