const TuneSlider = ({id, title, onSliderChange, min, max, tuneValue, measurement}) => {
    return (
        <div>
            <h5 className="value-title">{title}</h5>
            <input
                id={id}
                onChange={onSliderChange} type="range" step="0.001"
                min={min}
                max={max}
                value={tuneValue}
            />
            <span className="slider-value">{tuneValue}</span>{measurement}<br />
        </div>
    )
}

export default TuneSlider