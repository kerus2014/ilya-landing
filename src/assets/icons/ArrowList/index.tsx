import { ClassName } from "../../../types"

export const ArrowList = (props:ClassName) => {
  return(
    <div className={props.className}>
      <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.5L8 7.5L15 0.5" stroke="#232323"/>
      </svg>
    </div>
  )
}