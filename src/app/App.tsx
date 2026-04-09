import { RouterProvider } from 'react-router';
import { router } from './routes';
import { InstallPrompt } from './components/pwa/InstallPrompt';
import '../styles/theme.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <InstallPrompt />
    </>
  );
}

export default App;