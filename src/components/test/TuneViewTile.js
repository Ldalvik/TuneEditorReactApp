import React, { useState } from 'react'

const TuneViewTile = () => {

    return (
        <section>
            <input onChange={onTuneFileUpload} type="file" />
            <p value={tuneValues.fileName}></p>

            <h5>Final Drive</h5>        
            <span>{tuneValues.finalDrive}</span>
            <br />

            <h5>Tire Pressure Front</h5>
            <span>{tuneValues.tirePressureFront}</span> psi
            <br />

            <h5>Tire Pressure Rear</h5>
            <span>{tuneValues.tirePressureRear}</span> psi
            <br />
     </section>
    )
}

export default TuneViewTile