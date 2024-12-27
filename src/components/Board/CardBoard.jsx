import { useState } from "react";
import BackCard from "../Card/BackCard";
import FrontCard from "../Card/FrontCard";

export default function CardBoard() {
  const [isCorrect, setIsCorrect] = useState("");

  const handleFlipCard = () => {
    setIsCorrect(false);
  }

  return (
    <div className="relative group perspective">
      <div
        onClick={handleFlipCard}
        className={`${isCorrect ? "animate-hflipCorrect" : "animate-hflipWrong"} w-full h-full preserve-3d`}
      >
        <FrontCard />
        <BackCard />
      </div>
    </div>
  )
}