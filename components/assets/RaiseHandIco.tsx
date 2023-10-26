import React from 'react'

const RaiseHandIco = (props: { width: number, height: number, color?: string, strokeWidth?: number }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.3 4.075C7.3 3.86817 7.25926 3.66336 7.18011 3.47227C7.10096 3.28119 6.98495 3.10756 6.83869 2.96131C6.69244 2.81505 6.51881 2.69904 6.32773 2.61989C6.13664 2.54074 5.93183 2.5 5.725 2.5C5.51817 2.5 5.31336 2.54074 5.12227 2.61989C4.93119 2.69904 4.75756 2.81505 4.61131 2.96131C4.46505 3.10756 4.34904 3.28119 4.26989 3.47227C4.19074 3.66336 4.15 3.86817 4.15 4.075V7.075M7.3 4.075V2.575C7.3 2.15728 7.46594 1.75668 7.76131 1.46131C8.05668 1.16594 8.45728 1 8.875 1C9.29272 1 9.69332 1.16594 9.98869 1.46131C10.2841 1.75668 10.45 2.15728 10.45 2.575V4.075M7.3 4.075L7.375 10M4.15 7.075C4.15 6.65728 3.98406 6.25668 3.68869 5.96131C3.39332 5.66594 2.99272 5.5 2.575 5.5C2.15728 5.5 1.75668 5.66594 1.46131 5.96131C1.16594 6.25668 1 6.65728 1 7.075V15.25C1 17.0402 1.71116 18.7571 2.97703 20.023C4.2429 21.2888 5.95979 22 7.75 22H9.768C11.1603 21.9998 12.4956 21.4466 13.48 20.462L15.212 18.73C16.1966 17.7456 16.7498 16.4103 16.75 15.018L16.753 12.994C16.754 12.817 16.8252 12.6476 16.951 12.523C17.0973 12.3767 17.2133 12.203 17.2925 12.0119C17.3717 11.8208 17.4124 11.6159 17.4124 11.409C17.4124 11.2021 17.3717 10.9972 17.2925 10.8061C17.2133 10.615 17.0973 10.4413 16.951 10.295C16.8047 10.1487 16.631 10.0327 16.4399 9.95349C16.2488 9.87432 16.0439 9.83357 15.837 9.83357C15.6301 9.83357 15.4252 9.87432 15.2341 9.95349C15.043 10.0327 14.8693 10.1487 14.723 10.295C14.0095 11.0076 13.6068 11.9736 13.603 12.982M4.15 7.075V11.5M10.45 4.075V10.75M10.45 4.075C10.45 3.65728 10.6159 3.25668 10.9113 2.96131C11.2067 2.66594 11.6073 2.5 12.025 2.5C12.4427 2.5 12.8433 2.66594 13.1387 2.96131C13.4341 3.25668 13.6 3.65728 13.6 4.075V14.5M13.6 14.5C13.0093 14.4997 12.4244 14.616 11.8787 14.8421C11.333 15.0683 10.8373 15.3999 10.42 15.818M13.6 14.5H13.602" stroke={props?.color ? props?.color : "#F4F4F5"} stroke-width={props?.strokeWidth ? props?.strokeWidth : "1"} stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </>
    )
}

export default RaiseHandIco
