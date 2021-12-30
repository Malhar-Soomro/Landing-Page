import './index.css';
import { StylesProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Home from './Components/Home';

function App() {
  return (
    <StylesProvider injectFirst>
      <Home />
    </StylesProvider>
  );
}

export default App;
