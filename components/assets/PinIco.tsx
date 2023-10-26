import React from 'react'

const PinIco = (props: { width: number, height: number, color?: string }) => {
    return (
        <svg width={props?.width} height={props?.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1965 1.14183e-06C12.2906 -0.000166873 12.3837 0.0182085 12.4707 0.0540769C12.5577 0.0899453 12.6367 0.142603 12.7033 0.20904L19.7904 7.29632C19.9246 7.43057 20 7.61263 20 7.80246C20 7.99228 19.9246 8.17434 19.7904 8.30859C19.1032 8.99584 18.2556 9.15047 17.6385 9.15047C17.3851 9.15047 17.1589 9.1247 16.9799 9.09463L12.4929 13.5818C12.611 14.0578 12.6876 14.543 12.7219 15.0322C12.7878 16.0373 12.6761 17.4476 11.6911 18.4327C11.5568 18.5669 11.3748 18.6423 11.185 18.6423C10.9951 18.6423 10.8131 18.5669 10.6788 18.4327L6.62847 14.3836L2.07269 18.9395C1.7935 19.2187 0.327407 20.231 0.0482183 19.9518C-0.23097 19.6726 0.781266 18.205 1.06045 17.9273L5.61623 13.3713L1.56729 9.32085C1.43308 9.18661 1.35769 9.00455 1.35769 8.81472C1.35769 8.62489 1.43308 8.44284 1.56729 8.30859C2.55232 7.32353 3.96258 7.21042 4.96766 7.27771C5.45682 7.31199 5.94209 7.38864 6.418 7.5068L10.9051 3.02105C10.8676 2.80301 10.8485 2.58223 10.8478 2.361C10.8478 1.74533 11.0024 0.897724 11.6911 0.20904C11.8252 0.0752137 12.007 4.14019e-05 12.1965 1.14183e-06ZM12.3712 3.02105V3.02391C12.4125 3.14986 12.4181 3.28482 12.3872 3.41375C12.3564 3.54268 12.2904 3.66051 12.1965 3.75411L7.1353 8.81401C7.04126 8.90765 6.92305 8.9733 6.79385 9.00364C6.66466 9.03398 6.52958 9.02781 6.40369 8.98582H6.40082L6.38078 8.98009C6.24457 8.93929 6.10705 8.903 5.96844 8.87128C5.60827 8.78726 5.24205 8.73173 4.87316 8.70519C4.26897 8.6651 3.67623 8.71665 3.19088 8.91996L11.0797 16.8076C11.2816 16.3208 11.3331 15.7295 11.2931 15.1253C11.2566 14.6137 11.1644 14.1077 11.0182 13.6162L11.0124 13.5976C10.9702 13.4715 10.9638 13.3347 10.9942 13.2052C11.0245 13.0757 11.0903 12.9572 11.1842 12.8631L16.2469 7.80174C16.3444 7.70365 16.4682 7.63591 16.6033 7.60669C16.7385 7.57747 16.8792 7.58803 17.0085 7.63709L17.146 7.66859C17.2706 7.69293 17.4438 7.71727 17.6385 7.71727C17.8017 7.71727 17.9678 7.70152 18.1296 7.66L12.3382 1.8699C12.2967 2.03169 12.281 2.19921 12.281 2.361C12.2817 2.58347 12.3115 2.80489 12.3697 3.01961L12.3712 3.02105Z" fill={ props?.color ? props?.color : "#F4F4F5"}  />
        </svg>

    )
}

export default PinIco
