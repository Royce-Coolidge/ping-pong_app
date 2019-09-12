import React from "react";
import Header from '../Header';
import Settings from '../Settings';
import GamePlay from '../GamePlay';


const App = ( {settings} ) => (
    <React.Fragment>
        <Header />
        { settings ? <GamePlay /> : <Settings /> } 
    </React.Fragment>
);

export default App;
