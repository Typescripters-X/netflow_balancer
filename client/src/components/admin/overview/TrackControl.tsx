import assets from "@/assets"
// import { Button } from "@/components/UI/button"

const TrackControl = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-3 bg-[#1A67B3] rounded-sm w-1/2"
    style={{ backgroundImage: `url(${assets.gridLayers})` }}>
        <h2 className="text-white text-4xl w-[70%] capitalize traffic-light font-semibold px-5 text-center">track & control</h2>
        <div className="flex items-center justify-end w-1/3 ">
            <img src={assets.direction} className="object-contain" alt="direction" />
        </div>
        {/* <Button className="bg-[#FFC300] text-[#1A67B3] w-[70%]">Track</Button> */}
    </div>
  )
}

export default TrackControl