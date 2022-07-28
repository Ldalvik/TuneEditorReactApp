import TuneSlider from "../TuneSlider"

const Alignment = ({ onSliderChange, tuneValues }) => {
    return (
        <section>
            <h1>Alignment</h1>
            <TuneSlider
                id="camberFront"
                title="Camber Front"
                onSliderChange={onSliderChange}
                min="-5"
                max="5"
                tuneValue={tuneValues.camberFront}
                measurement=" degrees"
            />
            <TuneSlider
                id="camberRear"
                title="Camber Rear"
                onSliderChange={onSliderChange}
                min="-5"
                max="5"
                tuneValue={tuneValues.camberRear}
                measurement=" degrees"
            />

            <TuneSlider
                id="toeFront"
                title="Toe Front"
                onSliderChange={onSliderChange}
                min="-5"
                max="5"
                tuneValue={tuneValues.toeFront}
                measurement=" degrees"
            />
            <TuneSlider
                id="toeRear"
                title="Toe Rear"
                onSliderChange={onSliderChange}
                min="-5"
                max="5"
                tuneValue={tuneValues.toeRear}
                measurement=" degrees"
            />
             <TuneSlider
                id="caster"
                title="Caster"
                onSliderChange={onSliderChange}
                min="1.0"
                max="7.0"
                tuneValue={tuneValues.caster}
                measurement=" degrees"
            />
            <br />
        </section>
    )

}

export default Alignment