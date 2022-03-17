import './css/App.css';
import Header from './components/Header.js';
import Cardo from './components/CardsLayout.js';


function App() {
    return (

        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <Cardo/>
        </div>
    );
}

export default App;
