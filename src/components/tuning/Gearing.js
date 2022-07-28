import TuneSlider from "../TuneSlider"

const Gearing = ({onSliderChange, tuneValues}) => {
    return (
        <section>
            <h1>Gearing</h1>
            <TuneSlider
                id="finalDrive"
                title="Final Drive"
                onSliderChange={onSliderChange}
                min="2.2"
                max="6.1"
                tuneValue={tuneValues.finalDrive}
                measurement=""
            />
           <TuneSlider
                id="firstGear"
                title="First Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.firstGear}
                measurement=""
            />
            <TuneSlider
                id="secondGear"
                title="Second Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.secondGear}
                measurement=""
            />
            <TuneSlider
                id="thirdGear"
                title="Third Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.thirdGear}
                measurement=""
            />
            <TuneSlider
                id="fourthGear"
                title="Fourth Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.fourthGear}
                measurement=""
            />
            <TuneSlider
                id="fifthGear"
                title="Fifth Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.fifthGear}
                measurement=""
            />
            <TuneSlider
                id="sixthGear"
                title="Sixth Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.sixthGear}
                measurement=""
            />
            <TuneSlider
                id="seventhGear"
                title="Seventh Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.seventhGear}
                measurement=""
            />
            <TuneSlider
                id="eighthGear"
                title="Eighth Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.eighthGear}
                measurement=""
            />
            <TuneSlider
                id="ninthGear"
                title="Ninth Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.ninthGear}
                measurement=""
            />
            <TuneSlider
                id="tenthGear"
                title="Tenth Gear"
                onSliderChange={onSliderChange}
                min="0.48"
                max="6.0"
                tuneValue={tuneValues.tenthGear}
                measurement=""
            />
            <br/>
        </section>
    )
}

export default Gearing