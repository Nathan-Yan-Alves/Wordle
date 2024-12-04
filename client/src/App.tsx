import "./App.css";
import Game from "./components/Game";
// import getRandomWord from "../api/handleWordle";
import { useState } from "react";

function App() {
    // const [word, setWord] = useState("");
    const [isGameInit, setIsGameInit] = useState(false);

    return (
        <>
            <div className="container">
                <div className="game-title">
                    <span className="title">Wordle</span>
                    <span className="subtitle">Adivinhe a palavra secreta</span>
                </div>

                {isGameInit ? (
                    <div className="game-container">
                        <Game />
                    </div>
                ) : (
                    <button
                        onClick={() => setIsGameInit(true)}
                        className="btn-start-game"
                    >
                        Começar o jogo
                    </button>
                )}
            </div>
        </>
    );
}

export default App;
