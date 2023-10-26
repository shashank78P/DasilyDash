import React from 'react'

const MessageIco = (props: { width: number, height: number, color?: string, strokeWidth?: number }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 18.29V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H5.961C5.66123 15 5.36531 15.0675 5.09511 15.1973C4.82491 15.3271 4.58735 15.516 4.4 15.75L2.069 18.664C1.99143 18.7612 1.88556 18.8319 1.76604 18.8664C1.64652 18.9008 1.51926 18.8972 1.40186 18.8561C1.28446 18.815 1.18273 18.7385 1.11073 18.6371C1.03874 18.5357 1.00005 18.4144 1 18.29Z" stroke={props?.color ? props?.color : "#F4F4F5"} stroke-width={props?.strokeWidth ? props?.strokeWidth : "1"} />
            </svg>
        </>
    )
}

export default MessageIco
