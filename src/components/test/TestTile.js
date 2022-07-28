import React, { useState } from 'react'

const TestTile = () => {
    const [tuneValues, setTuneValues] = useState({
        file: "", fileName: "",
        tirePressureFront: 15.0, tirePressureRear: 15.0,
        finalDrive: 2.2,
    })

    const onTuneFileUpload = async (e) => {
        const uploadedFile = e.target.files[0]
        let byteArray = await fileToByteArray(uploadedFile)
        setTuneValues({...tuneValues, file: byteArray})
    }

    function downloadFile() {
        let byteData
        await postData('/tunes/edit', 
        {
            file: tuneValues.file,
            tirePressureFront: tuneValues.tirePressureFront,
            tirePressureRear: tuneValues.tirePressureRear,
            finalDrive: tuneValues.finalDrive
        }).then(data => {
            console.log(data)
            byteData = data
        })

        let element = document.createElement('a')
        element.href = window.URL.createObjectURL(new Blob([new Uint8Array(byteData)],{type:'application/octet-stream'}))
        element.download = tuneValues.fileName
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    const onSliderChange = (e) => setTuneValues({...tuneValues, [e.target.id]: e.target.value})
    
    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
          method: 'POST', 
          mode: 'same-origin',         // no-cors, *cors, same-origin
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        return response.text
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
        <section>
            <form onSubmit={handleFileSubmit} />
            <input onChange={onTuneFileUpload} type="file" />
            <p value={tuneValues.name}></p>

            <h5 className="value-title">Final Drive</h5>
            <input
                id="finalDrive"
                onChange={onSliderChange}
                type="range"
                min="2.2"
                max="3.9"
                value={tuneValues.finalDrive}
                step="0.001"
            />
            <span className="slider-value">{tuneValues.finalDrive}</span>
            <br />

            <h5 className="value-title">Tire Pressure Front</h5>
            <input
                id="tirePressureFront"
                onChange={onSliderChange}
                type="range"
                min="15.0"
                max="55.0"
                value={tuneValues.tirePressureFront}
                step="0.001"
            />
            <span className="slider-value">{tuneValues.tirePressureFront}</span> psi
            <br />

            <h5 className="value-title">Tire Pressure Rear</h5>
            <input
                id="tirePressureRear"
                onChange={onSliderChange}
                type="range"
                min="15.0"
                max="55.0"
                value={tuneValues.tirePressureRear}
                step="0.001"
            />

            <span className="slider-value">{tuneValues.tirePressureRear}</span> psi
            <br />
            
            <input type="button" onClick={downloadFile} value="Get" />
            <form/>
        </section>
    )
}

export default TestTile