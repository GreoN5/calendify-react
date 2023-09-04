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

- `useCheckbox` (boolean): A flag to indicate whether to use a checkbox for each calendar date. When set to `true`, the
  checkbox will
  be displayed.
- `checkboxProps` (object): An object containing properties related to the checkbox.
    - `onChange` (function): A callback function to be executed when the checkbox's value changes. This function should
      accept
      an event of type ChangeEvent<HTMLInputElement>, allowing you to access the checkbox's new state.

### Example with `useCheckbox`:

```jsx
import React from 'react';
import { Calendar } from 'calendify-react';

function App() {
  return (
    <Calendar
      useCheckbox
      checkboxProps={{
        onChange: (e) => {
          console.log(e.target.value)
        },
      }}
    />
  );
}

export default App;
```

- `useModal` (boolean): A flag to indicate whether to use a modal for each calendar date. When set to `true`, a modal
  button
  will be
  displayed.
- `modalProps` (object): An object containing properties related to the modal.
    - `modalContent` (ReactNode): Ability to add custom modal content to be displayed instead of the default
      one.
    - `onSaveChanges` (function): A callback function to be executed when changes are saved within the modal.

### Example with `useModal`:

```jsx
import React from 'react';
import { Calendar } from 'calendify-react';

function App() {
  return (
    <Calendar
      useModal
      modalProps={{
        onSaveChanges: () => console.log('calendar modal'),
      }}
    />
  );
}

export default App;
```

### Example with custom `modalContent`:

```jsx
import React from 'react';
import { Box, TextField } from '@mui/material';
import { Calendar } from 'calendify-react';

function App() {
  return (
    <Calendar
      useModal
      modalProps={{
        modalContent: (
          <Box p={2}>
            <TextField />
          </Box>
        ),
      }}
    />
  );
}

export default App;
```

`dateActions` (ReactNode): A ReactNode that can be used to provide custom date-related actions or
elements.

### Example with custom `dateActions`:

```jsx
import React from 'react';
import { Switch } from '@mui/material';
import { Calendar } from 'calendify-react';

function App() {
  return <Calendar dateActions={<Switch />} />
}

export default App;
```

### Disclaimer

Please note that the `useCheckbox`, `checkboxProps`, `useModal`, `modalProps` and `dateActions` props are mutually
exclusive and should not be used together. Choose either `useCheckbox`, `checkboxProps` or `useModal`, `modalProps`
or `dateActions`
based on your component's functionality.

## Storybook

[Visit storybook](https://calendify-react-storybook.netlify.app/ "Visit Storybook")

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a
pull request.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).