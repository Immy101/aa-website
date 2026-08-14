import {motion} from "motion/react";

const container = {
    hidden:{opacity: 0},
    visible:{opacity:1, transition:{staggerChildren: 1}},
};
export function collections(){
    const collection = ["New In", "Fall", "Swimwear", "Accessories"];

    return (
        <motion.ul
        initial={{ x:-20}}
        animate={{ x:0}}
        transition={{duration:1}}
        >
            {collection.map(
                (item)=>(
                <motion.li key={item}
                initial={{ opacity:0, x:10}}
                animate={{opacity:1, x:0}}
                transition={{duration:10}}
                >
                    {item}
                </motion.li>
                )
                )}
        </motion.ul>

    );
}