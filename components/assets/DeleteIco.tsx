import React from 'react'

const DeleteIco = (props: { width: number, height: number, color?: string }) => {
    return (
        <svg width={props?.width} height={props?.height} viewBox="0 0 1024 1024" >
            <path fill={props?.color ? props?.color : "#202124"} d="M160 256H96a32 32 0 010-64h256V95.936a32 32 0 0132-32h256a32 32 0 0132 32V192h256a32 32 0 110 64h-64v672a32 32 0 01-32 32H192a32 32 0 01-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32zm192 0a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32z" />
        </svg>
    )
}

export default DeleteIco