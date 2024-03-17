import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="left">Apna Grocery app</div>
          <div className="right">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
      
      <main>
       
        <div className="grocery-products">
          <h2>Grocery Products</h2>
         
          <div className="product">
           
            <p>Product Name 1</p>
            
          </div>
          <div className="product">
           
            <p>Product Name 2</p>
            
          </div>
        
        </div>
      </main>
      
      <footer>
        <div className="foot-panel1">
            Back to Top
        </div>

        <div className="foot-panel2">
            <ul>
                <li><p>Get to Know Us</p></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Apna Grocery app</a></li>
                <li><a href="#">Investor Relations</a></li>
            </ul>

            <ul>
                <li><p>Connect with Us</p></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>

            <ul>
                <li><p> Make Money with Us</p></li>
                <li><a href="#">Sell under our Accelerator</a></li>
                <li><a href="#">Protect and Build Your Brand</a></li>
                <li><a href="#">Grocery Selling</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Advertise Your Products</a></li>
                <li><a href="#">Sell on Apna Grocery</a></li>
            </ul>

            <ul>
                <li><p>Let Us Help You</p></li>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns Centre</a></li>
                <li><a href="#">100% Purchase Protection</a></li>
                <li><a href="#">Apna Grocery App Download</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </div>

        <div className="foot-panel3">
            <div className="logo">
              
            </div>
        </div>

        <div className="foot-panel4">
            <div className="pages">
                <a href="#">Condition of Use & sale</a>
                <span><a href="#">Privacy Notice</a></span>
                <a href="#">Interest-Based Ads</a>
            </div>
            <div className="copyright">
                &copy;2024. Apna Grocery.com, Inc. or its affiliates.
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
