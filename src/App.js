import Footer from './components/common/footer.js'
import Header from './components/common/header'
import Nav from './components/common/nav'
import About from './components/pages/about'
import Home from './components/pages/home'
import Newsletter from './components/pages/newsletter'
import ProductList from './components/products/productList'
import Product from './components/products/product'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // this is a named export
import lamps from './data/lamps.json'
import candles from './data/candles.json'


const allProducts = lamps.concat(candles)

function App() {
  return (
    <div className="App">
       <Router>
      <Header />
      <div className="wrapper">
       
      <Nav />
      <main> // only content in our main tag that's going to switch depending on which route we are viewing
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/products/*" element={<ProductList products={allProducts} type={"Lamps and Candles"} />} />
         <Route path="/newsletter" element={<Newsletter />} />
        {/* <Home/>
        <About/> */}
        {/* <Newsletter />
        <ProductList products={lamps} type={'Lamps'}/>
        <ProductList products={candles} type={'Candles'}/> */} 
        </Routes>
        
      </main>
    </div>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
