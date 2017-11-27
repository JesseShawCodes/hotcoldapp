import React from 'react';

export default class Board extends React.Component {
    render() {
        return (
            <div className="game">
            
            <h2 id="feedback">Make your Guess!</h2>
    
            
              <p>Guess #<span id="count">0</span>!</p>
            
            <ul id="guessList" class="guessBox clearfix"></ul>
            </div>
        )
    }
}