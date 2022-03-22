import { Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container } from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";


const App =() => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container >
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/' exact>
            <HomeScreen />
          </Route>
        </Container>
      </main>
      <Footer />
      </>
  );
}

export default App;
