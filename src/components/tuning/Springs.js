import TuneSlider from "../TuneSlider"

const Springs = ({ onSliderChange, tuneValues }) => {
    return (
            <section>
                <h1>Springs [Viewable]</h1>
                <p>Due to the nature of how dynamic springs and ride height is, calculations are shown as 0-100%.</p>
                <TuneSlider
                    id="springsFront"
                    title="Springs Front"
                    onSliderChange={onSliderChange}
                    min="0.0"
                    max="100.0"
                    tuneValue={tuneValues.springsFront}
                    measurement="%"
                />
                <TuneSlider
                    id="springsRear"
                    title="Springs Rear"
                    onSliderChange={onSliderChange}
                    min="0.0"
                    max="100.0"
                    tuneValue={tuneValues.springsRear}
                    measurement="%"
                />
                <TuneSlider
                    id="rideHeightFront"
                    title="Ride Height Front"
                    onSliderChange={onSliderChange}
                    min="0.0"
                    max="100.0"
                    tuneValue={tuneValues.rideHeightFront}
                    measurement="%"
                />
                <TuneSlider
                    id="rideHeightRear"
                    title="Ride Height Rear"
                    onSliderChange={onSliderChange}
                    min="0.0"
                    max="100.0"
                    tuneValue={tuneValues.rideHeightRear}
                    measurement="%"
                />
                <br/>
            </section>
    )
}

export default Springs