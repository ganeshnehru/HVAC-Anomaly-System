import React, {useRef,useEffect} from "react";

const {tableau} = window;

function TableauEmbed(){
  const ref = useRef(null)
  // const url = "https://public.tableau.com/views/HVAC272/MainDash"
  const url = "https://public.tableau.com/views/HVAC272fix/MainDash?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"

  function initViz(){
    new tableau.Viz(ref.current, url)
  }

  useEffect(()=>{
    initViz();
  },[])

  return (
  <div>
    <p>Dashboard</p>
    <div ref={ref}></div>
  </div>
    
  )
}

export default TableauEmbed;
