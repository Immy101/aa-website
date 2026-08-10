
import './App.css'
import {motion} from "motion/react"
{/*importing the motion package for animating the required elements in my website */}
function App() {
 
  return (
    <>
    {/*motion commands are called props aka properties */}
    {/**easeIn and easeOut are the standard for smooth motions */}
    {/*transition property controls the timing and the ease property controls the the tempo with which the animation flows */}
    {/*creating my first motion animation which is a fade in*/}
      <motion.div 
      initial={{ opacity:0, x:-50}} 
      animate={{ opacity:1, x:0}} 
      transition={{ duration:0.8, ease:"easeInOut" }}
      >
        <h1>Hello World</h1>
      </motion.div>
    </>
  )
}

export default App
