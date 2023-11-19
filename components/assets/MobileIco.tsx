import React from 'react'

const MobileIco = (props: { width: number, height: number, color?: string, strokeWidth?: number }) => {
    return (
        <svg width={props?.width} height={props?.height} viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.25C10.3315 1.25 10.6495 1.3817 10.8839 1.61612C11.1183 1.85054 11.25 2.16848 11.25 2.5V17.5C11.25 17.8315 11.1183 18.1495 10.8839 18.3839C10.6495 18.6183 10.3315 18.75 10 18.75H2.5C2.16848 18.75 1.85054 18.6183 1.61612 18.3839C1.3817 18.1495 1.25 17.8315 1.25 17.5V2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H10ZM2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H10C10.663 20 11.2989 19.7366 11.7678 19.2678C12.2366 18.7989 12.5 18.163 12.5 17.5V2.5C12.5 1.83696 12.2366 1.20107 11.7678 0.732233C11.2989 0.263392 10.663 0 10 0L2.5 0Z" fill="black" />
            <path d="M6.25 17.5C6.58152 17.5 6.89946 17.3683 7.13388 17.1339C7.3683 16.8995 7.5 16.5815 7.5 16.25C7.5 15.9185 7.3683 15.6005 7.13388 15.3661C6.89946 15.1317 6.58152 15 6.25 15C5.91848 15 5.60054 15.1317 5.36612 15.3661C5.1317 15.6005 5 15.9185 5 16.25C5 16.5815 5.1317 16.8995 5.36612 17.1339C5.60054 17.3683 5.91848 17.5 6.25 17.5Z" fill="black" />
        </svg>
    )
}

export default MobileIco
