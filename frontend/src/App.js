import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './index.css'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a href="/" className="brand">Comtrya</a>
                    </div>
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/signin">Sign In</a>
                    </div>
                </header>

                <main>
                    <Switch>
                        <Route exact path="/product/:id" component={ProductScreen}></Route>
                        <Route exact path="/" component={HomeScreen}></Route>
                    </Switch>
                </main>

                <footer className="row center">
                    Copyright protected 2022
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default App;
