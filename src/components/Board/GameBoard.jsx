import CardBoard from "./CardBoard"

export default function GameBoard() {

  return (
    <section className="w-[600px] h-[700px] grid grid-cols-5 gap-6">
      {
        Array(20).fill(null).map(() => <CardBoard />)
      }
    </section>
  )
}