import { motion } from "framer-motion";

const Transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent/>
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            />
            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            />
        </>
    )
}

export default Transition;