import assets from "@/assets"

const TrackControl = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#1A67B3] rounded-sm"
    style={{ backgroundImage: `url(${assets.gridLayers})` }}>
        <h2 className="text-white text-4xl w-[70%] capitalize traffic-light font-semibold px-5">track & control</h2>
        <div className="flex items-center justify-end">
            <img src={assets.direction} className="object-contain" alt="direction" />
        </div>
    </div>
  )
}

export default TrackControl