import { useState } from "react";
import CardBoard from "./CardBoard"
const TOTAL_CARD_COUNT = 20;

export default function GameBoard() {
  const [clickedCardArray, setClickedCardArray] = useState([]);
  const [isClickAble, setIsClickAble] = useState(true);
  const [cardList, setCardList] = useState(() => makeCardList())

  const changeClickedCardArray = (cardArray) => {
    setClickedCardArray(cardArray);
  }

  return (
    <section className="w-[600px] h-[700px] grid grid-cols-5 gap-6">
      {
        cardList.map((value, index) => <CardBoard
          key={`${value}${index}`}
          cardValue={value}
          clickedCardArray={clickedCardArray}
          changeClickedCardArray={changeClickedCardArray}
          isClickAble={isClickAble}
          setIsClickAble={setIsClickAble}
        />
        )
      }
      <button
        className="absolute top-10 w-[130px] h-14 hover:bg-slate-400 border-gray-600 border-2"
        onClick={() => {
          setCardList([]);
          setClickedCardArray([]);
          setIsClickAble(true);

          setTimeout(() => {
            setCardList(makeCardList());
          })
        }}
      >
        다시하기
      </button>

    </section>
  )
}

function makeCardList() {
  const cardValueArray = [];
  let cardValue = 0;
  Array(TOTAL_CARD_COUNT).fill(null).map(() => {
    if (cardValue === TOTAL_CARD_COUNT / 2) {
      cardValue = 0;
    }

    cardValueArray.push(cardValue++);
  })

  return cardValueArray.sort(() => Math.random() - 0.5);
}