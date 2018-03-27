import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Game from './components/Game';
import MiniRamps from './components/MiniRamps';
import Contact from './components/Contact';
import TradingCards from './components/TradingCards';

ReactDOM.render((
<BrowserRouter>
    <Switch>
        <Route exact path="/" name="DO U EVEN FLIP?" component={Main}/>
        <Route exact path="/thegame" name="DUEF" component={Game}/>
        <Route exact path="/miniramps" name="Fingerboarding" component={MiniRamps}/>
        <Route exact path="/cards" name="Trading Cards" component={TradingCards}/>>
        <Route exact path="/contact" name="Contact" component={Contact}/>
    </Switch>
</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
