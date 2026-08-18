import {motion} from "motion/react";

const container = {
    hidden:{opacity: 0},
    visible:{opacity:1, transition:{staggerChildren: 1}},
};
export function collectionslist(){
    const collections = ["New In", "Fall", "Swimwear", "Accessories"];

    return (
        <motion.ul variants={container}
        initial="hidden"
        animate="visible"
        >
            {collections.map(
                (collection)=>(
                <motion.li key={collection}
                initial={{ opacity:0, x:10}}
                animate={{opacity:1, x:0}}
                transition={{duration:10}}
                >
                    {collection}
                </motion.li>
                )
                )}
        </motion.ul>

    );
}