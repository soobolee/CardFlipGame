import backCard from "../../assets/backCard.png";

export default function BackCard() {
  return (
    <div className="absolute w-full h-full backface-hidden">
      <img
        className="w-full h-full"
        src={backCard}
        alt="카드 뒷면"
      />
    </div>
  )
}