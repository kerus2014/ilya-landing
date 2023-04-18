import { ContainerSocials } from "./containerSocials"

interface Href{
  href:string
}

export const TG = (props:Href) => {
  return(
    <ContainerSocials href={props.href}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_2621)">
        <rect width="48" height="48" fill="#4FB5FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1838 12.1642C34.5292 12.0188 34.9073 11.9687 35.2787 12.019C35.6501 12.0693 36.0012 12.2182 36.2954 12.4503C36.5897 12.6824 36.8164 12.989 36.9519 13.3384C37.0875 13.6879 37.1269 14.0672 37.066 14.437L33.8959 33.6664C33.5883 35.5212 31.5532 36.585 29.8521 35.661C28.4291 34.888 26.3157 33.6971 24.4147 32.4545C23.4642 31.8325 20.5526 29.8406 20.9104 28.4233C21.2179 27.2114 26.1102 22.6574 28.9058 19.9499C30.003 18.8862 29.5026 18.2725 28.2069 19.251C24.9878 21.6803 19.8229 25.3747 18.1148 26.4147C16.608 27.3316 15.8225 27.4882 14.8831 27.3316C13.1694 27.0465 11.5802 26.6048 10.283 26.0666C8.53019 25.3398 8.61545 22.93 10.2816 22.2283L34.1838 12.1642Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_2621">
        <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </ContainerSocials>
  )
}