import { useEffect, useState } from "react";
import BackCard from "../Card/BackCard";
import FrontCard from "../Card/FrontCard";

export default function CardBoard({ cardValue, clickedCardArray, changeClickedCardArray, isClickAble, setIsClickAble }) {
  const [isFlip, setIsFlip] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFlip(false);
    }, 3000);
  }, [])

  const handleClickCard = () => {
    if (!isClickAble) {
      return;
    }

    const cardArray = [...clickedCardArray, {
      cardValue,
      setIsFlip,
    }];

    if (cardArray.length > 2 || isFlip) {
      return;
    }

    if (cardArray.length <= 2) {
      changeClickedCardArray(cardArray);
      setIsFlip(true);
    }

    if (cardArray.length === 2) {
      if (cardArray[0].cardValue === cardArray[1].cardValue) {
        cardArray[0].setIsFlip(true);
        cardArray[1].setIsFlip(true);
      } else {
        setIsClickAble(false);
        setTimeout(() => {
          cardArray[0].setIsFlip(false);
          cardArray[1].setIsFlip(false);
          setIsClickAble(true);
        }, 700);
      }

      changeClickedCardArray([]);
    }
  }

  return (
    <div
      className={`${isFlip ? "cursor-not-allowed" : "cursor-pointer"} relative group perspective`}
      onClick={handleClickCard}
    >
      <div
        className={`${isFlip && "animate-hflipForward"} w-full h-full preserve-3d`}>
          <FrontCard
            cardValue={cardValue}
          />
          <BackCard />
      </div>
    </div>
  )
}