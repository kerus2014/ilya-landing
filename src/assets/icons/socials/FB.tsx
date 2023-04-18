import { ContainerSocials } from "./containerSocials"

interface Href{
  href:string
}

export const FB = (props:Href) => {
  return(
    <ContainerSocials href={props.href}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_2618)">
        <rect width="48" height="48" fill="#4FB5FF"/>
        <path d="M37 24.0796C37 16.8558 31.18 11 24.0016 11C16.82 11.0016 11 16.8558 11 24.0812C11 30.608 15.7542 36.0186 21.9674 37V27.8605H18.669V24.0812H21.9706V21.1972C21.9706 17.92 23.9123 16.11 26.8808 16.11C28.3041 16.11 29.7908 16.3651 29.7908 16.3651V19.5822H28.1514C26.5379 19.5822 26.0342 20.5912 26.0342 21.6262V24.0796H29.638L29.0629 27.8589H26.0326V36.9984C32.2458 36.017 37 30.6064 37 24.0796Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_2618">
        <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </ContainerSocials>
  )
}