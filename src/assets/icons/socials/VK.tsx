import { ContainerSocials } from "./containerSocials"

interface Href{
  href:string
}

export const VK = (props:Href) => {
  return(
    <ContainerSocials href={props.href}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_2612)">
        <rect width="48" height="48" fill="#4FB5FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.2467 15.3333C39.484 14.5813 39.2467 14.0347 38.1967 14.0347H34.7054C33.8247 14.0347 33.418 14.5133 33.1807 15.0253C33.1807 15.0253 31.3847 19.3987 28.8767 22.234C28.0634 23.054 27.6907 23.3273 27.25 23.3273C27.0127 23.3273 26.7074 23.054 26.7074 22.3027V15.298C26.7074 14.41 26.4367 14 25.6907 14H20.2C19.6573 14 19.3187 14.41 19.3187 14.82C19.3187 15.674 20.5727 15.8793 20.708 18.2707V23.4667C20.708 24.594 20.508 24.8 20.064 24.8C18.878 24.8 15.9973 20.3927 14.2693 15.3707C13.9333 14.376 13.592 14 12.7107 14H9.186C8.16933 14 8 14.478 8 14.9907C8 15.9133 9.186 20.5593 13.524 26.7087C16.4047 30.9087 20.5053 33.166 24.1994 33.166C26.4367 33.166 26.7074 32.6534 26.7074 31.7994V28.622C26.7074 27.5973 26.9107 27.4267 27.6227 27.4267C28.1307 27.4267 29.046 27.6994 31.1134 29.7154C33.4854 32.1067 33.892 33.2 35.214 33.2H38.7047C39.7214 33.2 40.196 32.6874 39.9247 31.6967C39.62 30.706 38.4674 29.2714 36.976 27.5634C36.1627 26.6074 34.9427 25.548 34.57 25.0353C34.062 24.352 34.1974 24.0787 34.57 23.464C34.536 23.464 38.8067 17.3827 39.2467 15.3307" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_2612">
        <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </ContainerSocials>
  )
}