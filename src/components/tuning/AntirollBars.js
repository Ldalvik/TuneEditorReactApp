import TuneSlider from "../TuneSlider"

const AntirollBars = ({ onSliderChange, tuneValues }) => {
    return (
            <section>
                <h1>Anti-roll Bars [Viewable]</h1>
                <TuneSlider
                    id="arbsFront"
                    title="Anti-roll Bars Front"
                    onSliderChange={onSliderChange}
                    min="1.0"
                    max="65.0"
                    tuneValue={tuneValues.arbsFront}
                    measurement=""
                />
                <TuneSlider
                    id="arbsRear"
                    title="Anti-roll Bars Rear"
                    onSliderChange={onSliderChange}
                    min="1.0"
                    max="65.0"
                    tuneValue={tuneValues.arbsRear}
                    measurement=""
                />
                <br/>
            </section>
    )
}

export default AntirollBars