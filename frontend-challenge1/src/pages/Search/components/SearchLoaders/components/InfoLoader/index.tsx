import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={1250}
    height={390}
    viewBox="0 0 1250 390"
    backgroundColor="#f3f3f3"
    foregroundColor="#dbdbdb"
  >
    <rect x="20" y="20" rx="0" ry="16" width="285" height="280" /> 
    <rect x="349" y="58" rx="5" ry="16" width="861" height="240" /> 
    <rect x="352" y="20" rx="5" ry="5" width="175" height="23" /> 
    <rect x="537" y="20" rx="5" ry="5" width="125" height="23" /> 
    <rect x="670" y="20" rx="5" ry="5" width="115" height="23" /> 
    <rect x="20" y="323" rx="5" ry="5" width="101" height="40" />
  </ContentLoader>
)

export default InfoLoader;