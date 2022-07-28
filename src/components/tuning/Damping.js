import TuneSlider from "../TuneSlider"

const Damping = ({ onSliderChange, tuneValues }) => {
    return (
            <section>
                <h1>Damping</h1>
                <TuneSlider
                    id="reboundFront"
                    title="Rebound Stiffness Front"
                    onSliderChange={onSliderChange}
                    min="1.0"
                    max="20.0"
                    tuneValue={tuneValues.reboundFront}
                    measurement=""
                />
                <TuneSlider
                    id="reboundRear"
                    title="Rebound Stiffness Rear"
                    onSliderChange={onSliderChange}
                    min="1.0"
                    max="20.0"
                    tuneValue={tuneValues.reboundRear}
                    measurement=""
                />
                <TuneSlider
                    id="bumpFront"
                    title="Bump Stiffness Front"
                    onSliderChange={onSliderChange}
                    min="1.0"
                    max="20.0"
                    tuneValue={tuneValues.bumpFront}
                    measurement=""
                />
                <TuneSlider
                    id="bumpRear"
                    title="Bump Stiffness Rear"
                    onSliderChange={onSliderChange}
                    min="1.0"
                    max="20.0"
                    tuneValue={tuneValues.bumpRear}
                    measurement=""
                />
                <br/>
            </section>
    )
}

export default Damping