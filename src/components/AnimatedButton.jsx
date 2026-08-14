import {motion} from "motion/react";

export default function AnimatedButton({
    children,
    stiffness = 100,
    damping = 15,
}) 
{
    return (
        <motion.button
            whileHover={{ scale:1.05, y:-8 }}
            whileTap={{ scale:0.90, y:-8 }}
            transition={{ type:"spring", stiffness, damping }}
        >
            {children}
        </motion.button>
    );
}