import TuneSlider from "../TuneSlider"

const TirePressure = ({ onSliderChange, tuneValues }) => {
    return (
            <section>
                <h1>Tire Pressure [Viewable]</h1>
                <TuneSlider
                    id="tirePressureFront"
                    title="Tire Pressure Front"
                    onSliderChange={onSliderChange}
                    min="15.0"
                    max="55.0"
                    tuneValue={tuneValues.tirePressureFront}
                    measurement=" psi"
                />
                <TuneSlider
                    id="tirePressureRear"
                    title="Tire Pressure Rear"
                    onSliderChange={onSliderChange}
                    min="15.0"
                    max="55.0"
                    tuneValue={tuneValues.tirePressureRear}
                    measurement=" psi"
                />
                <br/>
            </section>
    )
}

export default TirePressure