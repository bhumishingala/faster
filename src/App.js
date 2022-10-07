import logo from './logo.svg';
import './App.css';
import ThemeContext from './contextapi/ThemeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoute from './route/AppRoute';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext>
            <AppRoute />
          </ThemeContext>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;