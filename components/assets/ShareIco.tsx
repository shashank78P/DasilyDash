import React from 'react'

const ShareIco = (props: { width: number, height: number, color?: string }) => {
    return (
        <svg fill={props?.color ? props?.color : "#202124"} width={props?.width} height={props?.height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" >
            <path d="M385 464Q357 464 339 445 320 426 320 399 320 390 321 388L171 303Q154 320 129 320 102 320 83 301 64 282 64 255 64 229 83 211 102 192 129 192 154 192 171 209L321 125Q320 122 320 111 320 85 339 67 357 48 384 48 410 48 429 67 447 85 448 111 448 138 429 157 410 176 384 176 361 176 341 159L191 244Q192 246 192 255 192 265 191 268L341 353Q361 336 385 336 415 336 431 355 447 374 447 400 447 426 431 445 415 464 385 464Z" />
        </svg>
    )
}

export default ShareIco