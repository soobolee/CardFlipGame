import { useState } from "react";
import CardBoard from "./CardBoard"

export default function GameBoard() {
  const TOTAL_CARD_COUNT = 20;
  const [clickedCardArray, setClickedCardArray] = useState([]);
  const [cardList, setCardList] = useState(() => {
    const cardValueArray = [];
    let cardValue = 0;
    Array(TOTAL_CARD_COUNT).fill(null).map(() => {
      if (cardValue === TOTAL_CARD_COUNT / 2) {
        cardValue = 0;
      }

      cardValueArray.push(cardValue++);
    })

    return cardValueArray.sort(() => Math.random() - 0.5);
  })



  const changeClickedCardArray = (cardArray) => {
    setClickedCardArray(cardArray);
  }

  return (
    <section className="w-[600px] h-[700px] grid grid-cols-5 gap-6">
      {
        cardList.map((value, index) => <CardBoard
          key={index}
          cardValue={value}
          clickedCardArray={clickedCardArray}
          changeClickedCardArray={changeClickedCardArray}
        />
        )
      }
    </section>
  )
}