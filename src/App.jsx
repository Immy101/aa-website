
import './App.css';
import {motion} from "motion/react";
import AnimatedButton from "./components/AnimatedButton";
{/*importing the motion package for animating the required elements in my website */}
function App() {
 
  return (
    <>

    {/*motion commands are called props aka properties */}
    {/**easeIn and easeOut are the standard for smooth motions */}
    {/*transition property controls the timing and the ease property controls the the tempo with which the animation flows */}
    {/*creating my first motion animation which is a fade in*/}
    {/**button grows bigger with scale */}
    {/*transition has type which gives the buttons a kind of effect*/}
    {/** */}
      <motion.div 
      initial={{ opacity:0, x:-50}} 
      animate={{ opacity:1, x:0}} 
      transition={{ duration:0.8, ease:"easeInOut" }}
      >
        <h1>AppleFrame</h1>
      </motion.div> 
      <motion.div
      initial={{ opacity:0, x:-50}}
      animate={{ opacity:1, x:0}}
      transition={{ duration:0.8, ease:"easeInOut"}}
      >
        <p>In all of the famous cities of ruin, we have had a thousand burn and fall for this collection created by the one and only
          Donatello Versace and none can curate such famous looks with the carefree essence he so desperately wanted. Not everyone can create such an essence.
          However, forgiving as he is, he made sure to release the collection for the world to see and share in his spoil, thus creating new collections.

        </p>

        <motion.button
      whileHover={{ scale:1.05, y:-5 }} 
      whileTap={{ scale:1, y:5}}
      transition={{ type:"spring", stiffness:100}}
      >
        Let's start
      </motion.button>
      <AnimatedButton>What would you like today?</AnimatedButton>
      <collections/>
    
      </motion.div>
      
    {/**creating a hover motion */}
    </>
  );
}

export default App;
