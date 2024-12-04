import { useState } from "react";
import RowLetter from "./RowLetter";
import Keyboard from "./Keyboard";

const Game: React.FC = () => {
    const [letter, setLetter] = useState("");
    return (
        <>
            <RowLetter letter={letter} />
            <Keyboard setLetter={setLetter} />
        </>
    );
};

export default Game;
