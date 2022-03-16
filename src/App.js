import './css/App.css';
import Header from './components/Header.js';
import Cardo from './components/Card.js';


function App() {
    return (

        <div className="App">
            <header className="App-header">
                <Header/>
                <Cardo/>
            </header>
        </div>
    );
}

export default App;
