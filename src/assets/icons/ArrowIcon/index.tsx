import { ClassName } from "../../../types"

export const ArrowIcon = (props:ClassName) => {
  return(
    <div className={props.className}>
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 16L16 1M16 1V16M16 1H1" stroke="#4FB5FF"/>
      </svg>
    </div>
  )
}