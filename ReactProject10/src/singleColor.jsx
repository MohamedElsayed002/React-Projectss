import {useState,useEffect} from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
const [alert,setAlert] = useState(false)
const bcg = rgb.join(',')

const hex = rgbToHex(...rgb)

useEffect(() => {
    const timeout = setTimeout(() => {
        setAlert(false)
    },1000)
    return () => clearTimeout(timeout)
},[alert])

    return (
        <article onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(`#${hexColor}`)
            
        }}
                 className={`color ${index > 10 && 'color-light'}`}  
                 style={{ backgroundColor: `rgb(${bcg})` 
              }}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hexColor}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    )
}

export default SingleColor