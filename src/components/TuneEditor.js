import React, { useState } from 'react'
import TirePressure from "./tuning/TirePressure"
import Gearing from "./tuning/Gearing"
import Alignment from "./tuning/Alignment"
import AntirollBars from './tuning/AntirollBars'
import Springs from './tuning/Springs'
import Damping from './tuning/Damping'

const TuneEditor = () => {
    const [tuneValues, setTuneValues] = useState({
        file: "", fileName: "", error: "",
        tirePressureFront: 35.0, tirePressureRear: 35.0,
        finalDrive:      4.2,
        firstGear:       3.3,
        secondGear:      3.3,
        thirdGear:       3.3,
        fourthGear:      3.3,
        fifthGear:       3.3,
        sixthGear:       3.3,
        seventhGear:     3.3,
        eighthGear:      3.3,
        ninthGear:       3.3,
        tenthGear:       3.3,
        camberFront:     0.0,  camberRear:     0.0,
        toeFront:        0.0,  toeRear:        0.0,
        caster:          4.0,
        arbsFront:       32.5, arbsRear:       32.5,
        springsFront:    50.0, springsRear:    50.0,
        rideHeightFront: 50.0, rideHeightRear: 50.0,
        reboundFront:    10.0, reboundRear:    10.0,
        bumpFront:       10.0, bumpRear:       10.0,
    })

    const onTuneFileUpload = async (e) => {
        const uploadedFile = e.target.files[0]
        let byteArray = await fileToByteArray(uploadedFile)
        if(byteArray.length === 378) {
            setTuneValues({
                ...tuneValues,
                file: byteArray, fileName: uploadedFile.name,
                
                //CANT HAVE THIS CODE SORRY LOL

            })
        } else {
            setTuneValues({...tuneValues, error: "File is not 378 bytes."})
        }
    }

    function downloadFile() {
        
        //CANT HAVE THIS CODE SORRY LOL

        let element = document.createElement('a')
        element.href = window.URL.createObjectURL(new Blob([new Uint8Array(tuneValues.file)], {type: 'application/octet-stream'}))
        element.download = tuneValues.fileName
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    const onSliderChange = (e) => setTuneValues({ ...tuneValues, [e.target.id]: e.target.value })

    function setValue(start, tuneValue, min, range) {
        const reversedValue = (tuneValue - min) / range
        const f = new Float32Array(1)
        f[0] = reversedValue
        const array = new Int8Array(f.buffer)
        const tuneArray = tuneValues.file
        //CANT HAVE THIS CODE SORRY LOL
        setTuneValues({ ...tuneValues, file: tuneArray })
    }

    function getValue(byteArray, start, min, range, round) {
        const arr = byteArray.slice(start, start + 4)
        const floatArr = new Float32Array(new Uint8Array(arr).buffer)[0]
        return Math.round((floatArr * range + min) * round) / round
    }

    function getOther(byteArray, start, other){
        const arr = byteArray.slice(start, start + 4)
        const floatArr = new Float32Array(new Uint8Array(arr).buffer)[0]
        return Math.round((floatArr * other) * 100) / 100
    }

    function getNegValue(byteArray, start) {
        const arr = byteArray.slice(start, start + 4)
        const floatArr = new Float32Array(new Uint8Array(arr).buffer)[0]
        const result = (floatArr * 10.0) + (-5.0)
        if(result < 0) {
            return (Math.round(result * -10.0) / -10.0);
        } else {
            return Math.round(result * 10.0) / 10.0;
        }
    }

    function fileToByteArray(file) {
        return new Promise((resolve, reject) => {
            try {
                let reader = new FileReader()
                let fileByteArray = []
                reader.readAsArrayBuffer(file)
                reader.onloadend = (evt) => {
                    if (evt.target.readyState === FileReader.DONE) {
                        let arrayBuffer = evt.target.result,
                            array = new Uint8Array(arrayBuffer)
                        for (let byte of array) {
                            fileByteArray.push(byte)
                        }
                    }
                    resolve(fileByteArray)
                }
            }
            catch (e) {
                reject(e)
            }
        })
    }

    return (
        <div>
            <section>
                <h1>Upload Tune File</h1>
                <p>All values will be saved when you click download.</p>

                <input onChange={onTuneFileUpload} type="file" />
                <p style={{color: "red"}}>{tuneValues.error}</p>
                
                <br/>
            </section>

            <TirePressure onSliderChange={onSliderChange} tuneValues={tuneValues} />
            <Gearing      onSliderChange={onSliderChange} tuneValues={tuneValues} />
            <Alignment    onSliderChange={onSliderChange} tuneValues={tuneValues} />
            <AntirollBars onSliderChange={onSliderChange} tuneValues={tuneValues} />
            <Springs      onSliderChange={onSliderChange} tuneValues={tuneValues} />
            <Damping      onSliderChange={onSliderChange} tuneValues={tuneValues} />


            <section>
                <h1>Finish</h1>
                <p>Replace the file you uploaded with the file downloaded here. Make sure the file name is exactly the same, 
                    remove any trailing text like `_1` or `(1)`. Microsoft tune files have NO extension, steam tune files will end in .Data
                </p>
                <input type="button" onClick={downloadFile} value="Download" />
                <br />
            </section>
        </div>
    )
}


export default TuneEditor