import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Page2 = () => {
    const [imgSrc, setImgSrc] = useState('public/mainLogo.png');
    const handleClick = () => {
        if (imgSrc === 'public/mainLogo.png') {
            setImgSrc('public/Property 1=Variant3.png');
        } else {
            setImgSrc('public/mainLogo.png');
        }
    };
    return (
        <motion.div
            className="wrapper animated-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <div className="wrapper">
                <div>
                    <img
                        src='/Time%20Machine.png'
                        height={120}
                        width={120}
                        className={"history-btn"}
                    />
                </div>
                <div>
                    <img
                        src='/profile.png'
                        className={"profile-btn"}
                    />
                </div>
                <div className={"v-box"}>
                    <img
                        src='/1.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                    <img
                        src='/2.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                    <img
                        src='/3.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                    <img
                        src='/4.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                </div>
                <div>
                    <img
                        src='/Ellipse%204.png'

                        className={"black-mask-3"}
                    />
                </div>
                <div>
                    <img
                        src='/Rectangle%207.png'
                        className={"black-mask-2"}
                    />
                </div>
                <div>
                    <img
                        src={imgSrc}
                        onClick={handleClick}
                        height={120}
                        width={120}
                        className={"main-logo"}
                    />
                </div>
                <div className={"center-element foote-All-rights-reserved"}>@2024 TILO All rights reserved.</div>
            </div>
        </motion.div>
    )
}

export default Page2