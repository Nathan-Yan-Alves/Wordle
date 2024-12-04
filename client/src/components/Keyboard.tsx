import { BsBackspace } from "react-icons/bs";
import "./Keyboard.css";

interface KeyProps {
    setLetter: React.Dispatch<React.SetStateAction<string>>;
}

const Keyboard: React.FC<KeyProps> = ({ setLetter }) => {
    const firstRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const secondRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const thirdRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKey = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        if (event) {
            setLetter((event.target as HTMLButtonElement).value);
        }
    };

    return (
        <div className="keyboard-container">
            <div className="keyboard-row">
                {firstRowKeys.map((key, index) => (
                    <button
                        key={index}
                        className="keyboard-button"
                        value={key}
                        onClick={(e) => handleKey(e)}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className="keyboard-row">
                {secondRowKeys.map((key, index) => (
                    <button
                        key={index}
                        className="keyboard-button"
                        value={key}
                        onClick={(e) => handleKey(e)}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className="keyboard-row">
                <button
                    className="keyboard-button long"
                    value={"del"}
                    onClick={(e) => handleKey(e)}
                >
                    <BsBackspace />
                </button>
                {thirdRowKeys.map((key, index) => (
                    <button
                        key={index}
                        className="keyboard-button"
                        value={key}
                        onClick={(e) => handleKey(e)}
                    >
                        {key}
                    </button>
                ))}
                <button
                    className="keyboard-button long"
                    value={"enter"}
                    onClick={(e) => handleKey(e)}
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

export default Keyboard;
