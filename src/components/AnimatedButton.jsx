import {motion} from "motion/react";

export default function AnimatedButton({
    children,
    stiffness = 300,
    damping = 15,
}) 
{
    return (
        <motion.button
            whileHover={{ scale:1.05, x:-50 }}
            whileTap={{ scale:0.90, x:-50 }}
            transition={{ type:"spring", stiffness, damping }}
        >
            {children}
        </motion.button>
    );
}