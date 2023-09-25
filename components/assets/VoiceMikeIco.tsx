import React from 'react'

const VoiceMikeIco = (props: { width: number, height: number, color?: string }) => {
    return (
        <svg fill={props?.color ? props?.color : "#202124"} width={props?.width} height={props?.height} viewBox="0 0 35 35" data-name="Layer 2" id="ba478da7-82f9-4590-be73-88c84eac2ace" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,24.9a7.326,7.326,0,0,1-7.318-7.318V7.568a7.318,7.318,0,0,1,14.636,0V17.577A7.326,7.326,0,0,1,17.5,24.9Zm0-22.145a4.823,4.823,0,0,0-4.818,4.818V17.577a4.818,4.818,0,1,0,9.636,0V7.568A4.823,4.823,0,0,0,17.5,2.75Z" /><path d="M17.5,34.75a1.25,1.25,0,0,1-1.25-1.25V30.582a1.25,1.25,0,0,1,2.5,0V33.5A1.249,1.249,0,0,1,17.5,34.75Z" /><path d="M17.5,30.7A12.361,12.361,0,0,1,5.153,18.355V13.1A1.25,1.25,0,0,1,6.4,11.85h5.029a1.25,1.25,0,0,1,0,2.5H7.653v4.005a9.847,9.847,0,0,0,19.694,0,1.25,1.25,0,1,1,2.5,0A12.361,12.361,0,0,1,17.5,30.7Z" /></svg>
    )
}

export default VoiceMikeIco