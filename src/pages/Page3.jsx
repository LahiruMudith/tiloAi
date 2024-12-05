import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '/src/index.css'

const Page3 = () => {
    const [currentImage, setCurrentImage] = useState('/Hello.png');
    const [isInitialImage, setIsInitialImage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImage('/description.png');
            setIsInitialImage(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const imageVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 }
    };
  return (
    <motion.div
            className="wrapper animated-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >

        <div className={"wrapper"}>
            <div className={"center-element foote Tap-to-start-Tilo-aliment"}>Tap to start Tilo</div>
            <div className={"center-element logo-aliment"}>
                <motion.img
                    src='/logo.png'
                    height={120}
                    width={120}
                    initial={{scale: 0.7}}
                    animate={{scale: 1.0}}
                    transition={{duration: 3, ease: "easeInOut"}}
                />
            </div>
            <div className={"center-element foote-All-rights-reserved"}>@2024 TILO All rights reserved.</div>
        </div>
    </motion.div>
  )
}

export default Page3