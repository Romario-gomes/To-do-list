import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { DashBoard } from './components/Dashboard';

function App() {

  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle></GlobalStyle>
    </>
    
  )
}

export default App
