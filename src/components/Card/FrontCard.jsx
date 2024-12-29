
export default function FrontCard({ cardValue }) {
  return (
    <div className="absolute w-full h-full flex justify-center items-center border-4 border-black">
      <p className="scale-x-[-1] text-[40px] text-yellow-900">{cardValue}</p>
    </div>
  )
}