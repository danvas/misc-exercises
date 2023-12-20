import React, { forwardRef } from "react"

const Overlay = forwardRef(({ scroll }: any, ref) => (
  <div
    ref={ref as any}
    onScroll={(e: any) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
    }}
    className="scroll">
    <div style={{ height: "400vh" }}>
      <div className="dot p-4 w-1/2">
        <h1>The A-7L Spacesuit</h1>
        The Apollo lunar spacesuit was designed to provide a life sustaining environment for the astronaut during periods of extravehicular activity or during unpressurized spacecraft operation.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot p-4 w-1/2">
        <h1>Materials</h1>
        were designed with a white, non-flammable material called beta cloth, a Teflon-coated fiberglass. They permitted maximum mobility and were designed to be worn with relative comfort for up to 115 hours in conjunction with the liquid cooling garment. If necessary, they were also capable of being worn for 14 days in an unpressurized mode.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot p-4 w-1/2">
        <h1>81 pounds</h1>
        is how much this type of suit weighted on Earth when the primary life support system (PLSS) was attached.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot p-4 w-1/2">
        <h1>-250°F to +230°F</h1>
        is the range of temperatures the suit protects against.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot p-4 w-1/2">
        <h1>EMU repair kit</h1>
        was a maintenance kit carried by the Apollo 11 astronauts to make minor repairs to their spacesuits. It contains cloth tape, exterior patches, sealant bladder repair material, optical surface cleaning and defogging pads, and replacement gaskets.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot p-4 w-1/2">
        <h1>25 layers</h1> of protective materials make up the suit.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot p-4 w-1/2">
        <h1>The overshoes</h1>  (worn only on the Moon) and portable life-support systems were left on the lunar surface to reduce launch weight.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot p-4 w-1/2">
        <h1>Iconic</h1>Apollo 11 made the A7L the most iconic suit of the program. It proved to be the primary pressure suit worn by NASA astronauts for Project Apollo.
      </div>
    </div>
  </div>
))

export default Overlay
