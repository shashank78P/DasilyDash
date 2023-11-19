import React from 'react'

const MobileChromeIco = (props: { width: number, height: number, color?: string, strokeWidth?: number }) => {
    return (
        <svg width={props?.width} height={props?.height} viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.25C10.3315 1.25 10.6495 1.3817 10.8839 1.61612C11.1183 1.85054 11.25 2.16848 11.25 2.5V17.5C11.25 17.8315 11.1183 18.1495 10.8839 18.3839C10.6495 18.6183 10.3315 18.75 10 18.75H2.5C2.16848 18.75 1.85054 18.6183 1.61612 18.3839C1.3817 18.1495 1.25 17.8315 1.25 17.5V2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H10ZM2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H10C10.663 20 11.2989 19.7366 11.7678 19.2678C12.2366 18.7989 12.5 18.163 12.5 17.5V2.5C12.5 1.83696 12.2366 1.20107 11.7678 0.732233C11.2989 0.263392 10.663 0 10 0L2.5 0Z" fill="black" />
            <path d="M6.25 17.5C6.58152 17.5 6.89946 17.3683 7.13388 17.1339C7.3683 16.8995 7.5 16.5815 7.5 16.25C7.5 15.9185 7.3683 15.6005 7.13388 15.3661C6.89946 15.1317 6.58152 15 6.25 15C5.91848 15 5.60054 15.1317 5.36612 15.3661C5.1317 15.6005 5 15.9185 5 16.25C5 16.5815 5.1317 16.8995 5.36612 17.1339C5.60054 17.3683 5.91848 17.5 6.25 17.5Z" fill="black" />
            <g clip-path="url(#clip0_31_186)">
                <path d="M6.50006 10.8909C7.26833 10.8909 7.8911 10.2681 7.8911 9.49984C7.8911 8.73158 7.26833 8.10876 6.50006 8.10876C5.7318 8.10876 5.10901 8.73158 5.10901 9.49984C5.10901 10.2681 5.7318 10.8909 6.50006 10.8909Z" fill="white" />
                <path d="M4.70107 8.81632C4.5973 8.63658 4.47533 8.44792 4.33513 8.25037C4.11567 8.63039 4.00013 9.0615 4.00012 9.50034C4.00011 9.93919 4.11564 10.3703 4.33509 10.7503C4.55453 11.1304 4.87016 11.4459 5.25025 11.6653C5.63033 11.8847 6.06146 12.0001 6.50031 12C6.73038 11.6773 6.88663 11.4446 6.96898 11.3019C7.12716 11.028 7.33173 10.6357 7.58271 10.1252V10.1249C7.47306 10.315 7.3153 10.4729 7.12527 10.5826C6.93525 10.6924 6.71967 10.7502 6.50022 10.7503C6.28076 10.7503 6.06516 10.6926 5.87511 10.5828C5.68505 10.4731 5.52724 10.3153 5.41753 10.1252C5.07665 9.48951 4.83785 9.0532 4.70107 8.81632Z" fill="#229342" />
                <path d="M6.50014 11.9999C6.82845 11.9999 7.15356 11.9353 7.45689 11.8097C7.76021 11.6841 8.03582 11.4999 8.26796 11.2678C8.50011 11.0356 8.68424 10.76 8.80984 10.4566C8.93545 10.1533 9.00006 9.8282 8.99999 9.49989C8.99991 9.06104 8.8843 8.62995 8.66477 8.24995C8.19118 8.20327 7.84167 8.17993 7.61622 8.17993C7.36059 8.17993 6.9885 8.20327 6.49997 8.24995L6.49969 8.25015C6.71915 8.25004 6.93477 8.30773 7.12486 8.4174C7.31496 8.52707 7.47282 8.68485 7.58259 8.87489C7.69234 9.06494 7.75013 9.28053 7.75012 9.49999C7.75012 9.71945 7.69233 9.93505 7.58257 10.1251L6.50014 11.9999Z" fill="#FBC116" />
                <path d="M6.50009 10.4898C7.04665 10.4898 7.48971 10.0467 7.48971 9.50015C7.48971 8.95355 7.04665 8.5105 6.50007 8.5105C5.95352 8.5105 5.51044 8.95358 5.51044 9.50015C5.51044 10.0467 5.95352 10.4898 6.50009 10.4898Z" fill="#1A73E8" />
                <path d="M6.50008 8.25008H8.66487C8.44551 7.87 8.12994 7.55436 7.7499 7.33492C7.36986 7.11548 6.93874 6.99997 6.49989 7C6.06105 7.00003 5.62994 7.1156 5.24993 7.33509C4.86992 7.55459 4.55439 7.87026 4.33508 8.25038L5.41749 10.1252L5.41778 10.1253C5.30796 9.93533 5.25012 9.71976 5.25005 9.5003C5.24999 9.28084 5.30771 9.06523 5.41741 8.87516C5.52711 8.68508 5.68493 8.52724 5.87499 8.41751C6.06504 8.30778 6.28064 8.25003 6.5001 8.25007L6.50006 8.25008H6.50008Z" fill="#E33B2E" />
            </g>
            <defs>
                <clipPath id="clip0_31_186">
                    <rect width="5" height="5" fill="white" transform="translate(4 7)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default MobileChromeIco
