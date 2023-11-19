import React from 'react'

const ComputerIco = (props: { width: number, height: number, color?: string, strokeWidth?: number }) => {
    return (
        <svg width={props?.width} height={props?.height} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 11.6667C17.5833 11.6667 18.3333 10.9167 18.3333 10V1.66667C18.3333 0.75 17.5833 0 16.6667 0H3.33333C2.41667 0 1.66667 0.75 1.66667 1.66667V10C1.66667 10.9167 2.41667 11.6667 3.33333 11.6667H0.833333C0.375 11.6667 0 12.0417 0 12.5C0 12.9583 0.375 13.3333 0.833333 13.3333H19.1667C19.625 13.3333 20 12.9583 20 12.5C20 12.0417 19.625 11.6667 19.1667 11.6667H16.6667ZM4.16667 1.66667H15.8333C16.2917 1.66667 16.6667 2.04167 16.6667 2.5V9.16667C16.6667 9.625 16.2917 10 15.8333 10H4.16667C3.70833 10 3.33333 9.625 3.33333 9.16667V2.5C3.33333 2.04167 3.70833 1.66667 4.16667 1.66667Z" fill="black" />
        </svg>
    )
}

export default ComputerIco
