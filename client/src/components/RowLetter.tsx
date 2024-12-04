import { useEffect, useState } from "react";
import "./RowLetter.css";

interface RowLetterProps {
    letter: string;
}

const RowLetter: React.FC<RowLetterProps> = ({ letter }) => {
    const [word] = useState(["", "", "", "", ""]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (letter != "del" && letter != "enter") {
            if (currentIndex === 5) {
                return;
            } else {
                word[currentIndex] = letter;
                setCurrentIndex(currentIndex + 1);
            }
        } else if (letter === "del") {
            word[currentIndex] = "";
            setCurrentIndex(currentIndex - 1);
        }
    }, [letter]);

    return (
        <div className="word-row">
            <div className="first-letter">{word[0]}</div>
            <div className="second-letter">{word[1]}</div>
            <div className="third-letter">{word[2]}</div>
            <div className="fourth-letter">{word[3]}</div>
            <div className="fifth-letter">{word[4]}</div>
        </div>
    );
};

export default RowLetter;
