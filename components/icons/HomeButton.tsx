import Link from "next/link";
import React from "react";

const IconButton = ({ icon, label, onClick, className }: IconButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center  focus:outline-none ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

const HomeButton = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <Link href='/ai-assistant'>
        <div>
          <IconButton
            icon={
              <svg
                width='100'
                height='100'
                viewBox='0 0 80 80'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_d_1077_11514)'>
                  <rect
                    x='10'
                    y='10'
                    width='60'
                    height='60'
                    rx='30'
                    fill='black'
                  />
                  <rect
                    x='11'
                    y='11'
                    width='58'
                    height='58'
                    rx='29'
                    stroke='url(#paint0_linear_1077_11514)'
                    strokeWidth='2'
                  />
                  <path
                    d='M25.288 35.66V36.776H23.068V44H21.7V36.776H19.468V35.66H25.288ZM27.3694 36.512C27.1214 36.512 26.9134 36.428 26.7454 36.26C26.5774 36.092 26.4934 35.884 26.4934 35.636C26.4934 35.388 26.5774 35.18 26.7454 35.012C26.9134 34.844 27.1214 34.76 27.3694 34.76C27.6094 34.76 27.8134 34.844 27.9814 35.012C28.1494 35.18 28.2334 35.388 28.2334 35.636C28.2334 35.884 28.1494 36.092 27.9814 36.26C27.8134 36.428 27.6094 36.512 27.3694 36.512ZM28.0414 37.388V44H26.6734V37.388H28.0414ZM29.3815 40.688C29.3815 40.008 29.5175 39.412 29.7895 38.9C30.0695 38.38 30.4535 37.98 30.9415 37.7C31.4295 37.42 31.9895 37.28 32.6215 37.28C33.4215 37.28 34.0815 37.472 34.6015 37.856C35.1295 38.232 35.4855 38.772 35.6695 39.476H34.1935C34.0735 39.148 33.8815 38.892 33.6175 38.708C33.3535 38.524 33.0215 38.432 32.6215 38.432C32.0615 38.432 31.6135 38.632 31.2775 39.032C30.9495 39.424 30.7855 39.976 30.7855 40.688C30.7855 41.4 30.9495 41.956 31.2775 42.356C31.6135 42.756 32.0615 42.956 32.6215 42.956C33.4135 42.956 33.9375 42.608 34.1935 41.912H35.6695C35.4775 42.584 35.1175 43.12 34.5895 43.52C34.0615 43.912 33.4055 44.108 32.6215 44.108C31.9895 44.108 31.4295 43.968 30.9415 43.688C30.4535 43.4 30.0695 43 29.7895 42.488C29.5175 41.968 29.3815 41.368 29.3815 40.688ZM39.6488 40.7L42.6968 44H40.8488L38.4008 41.156V44H37.0328V35.12H38.4008V40.28L40.8008 37.388H42.6968L39.6488 40.7ZM45.0453 38.348C45.2453 38.012 45.5093 37.752 45.8373 37.568C46.1733 37.376 46.5693 37.28 47.0253 37.28V38.696H46.6773C46.1413 38.696 45.7333 38.832 45.4533 39.104C45.1813 39.376 45.0453 39.848 45.0453 40.52V44H43.6773V37.388H45.0453V38.348ZM50.944 40.664C50.944 40 51.08 39.412 51.352 38.9C51.632 38.388 52.008 37.992 52.48 37.712C52.96 37.424 53.488 37.28 54.064 37.28C54.584 37.28 55.036 37.384 55.42 37.592C55.812 37.792 56.124 38.044 56.356 38.348V37.388H57.736V44H56.356V43.016C56.124 43.328 55.808 43.588 55.408 43.796C55.008 44.004 54.552 44.108 54.04 44.108C53.472 44.108 52.952 43.964 52.48 43.676C52.008 43.38 51.632 42.972 51.352 42.452C51.08 41.924 50.944 41.328 50.944 40.664ZM56.356 40.688C56.356 40.232 56.26 39.836 56.068 39.5C55.884 39.164 55.64 38.908 55.336 38.732C55.032 38.556 54.704 38.468 54.352 38.468C54 38.468 53.672 38.556 53.368 38.732C53.064 38.9 52.816 39.152 52.624 39.488C52.44 39.816 52.348 40.208 52.348 40.664C52.348 41.12 52.44 41.52 52.624 41.864C52.816 42.208 53.064 42.472 53.368 42.656C53.68 42.832 54.008 42.92 54.352 42.92C54.704 42.92 55.032 42.832 55.336 42.656C55.64 42.48 55.884 42.224 56.068 41.888C56.26 41.544 56.356 41.144 56.356 40.688ZM60.2288 36.512C59.9808 36.512 59.7728 36.428 59.6048 36.26C59.4368 36.092 59.3528 35.884 59.3528 35.636C59.3528 35.388 59.4368 35.18 59.6048 35.012C59.7728 34.844 59.9808 34.76 60.2288 34.76C60.4688 34.76 60.6728 34.844 60.8408 35.012C61.0088 35.18 61.0928 35.388 61.0928 35.636C61.0928 35.884 61.0088 36.092 60.8408 36.26C60.6728 36.428 60.4688 36.512 60.2288 36.512ZM60.9008 37.388V44H59.5328V37.388H60.9008Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_d_1077_11514'
                    x='0'
                    y='0'
                    width='80'
                    height='80'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                  >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation='5' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0.593242 0 0 0 0 0.986303 0 0 0 0 0.692141 0 0 0 0.3 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow_1077_11514'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_dropShadow_1077_11514'
                      result='shape'
                    />
                  </filter>
                  <linearGradient
                    id='paint0_linear_1077_11514'
                    x1='10'
                    y1='39.434'
                    x2='70'
                    y2='39.434'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#96FA3F' />
                    <stop offset='1' stopColor='#29FACC' />
                  </linearGradient>
                </defs>
              </svg>
            }
            label='Home'
          />
        </div>
      </Link>
    </div>
  );
};

export default HomeButton;

// Optional: Define the IconButtonProps interface
interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
  className?: string;
}