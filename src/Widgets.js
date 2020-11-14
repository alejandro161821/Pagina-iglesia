import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <div id="fb-root"></div>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FParroquiaSantaTeresaDeJesusHN&tabs=timeline&width=350&height=1800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="350" height="2000vh"  
             style={{ border:"none",overflow:"hidden" }} 
            scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}
export default Widgets
