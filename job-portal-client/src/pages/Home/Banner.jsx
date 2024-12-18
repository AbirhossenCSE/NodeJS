import React from 'react';
import { motion } from "framer-motion";
import team1 from '../../assets/Team/team-1.jpg'
import team2 from '../../assets/Team/team-2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [50, 100, 50]}}
                        transition={{duration: 10, repeat: Infinity}}
                        src={team1}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-blue-400 border-l-4 border-b-4 shadow-2xl" />
                    <motion.img
                        animate={{ x: [100, 150, 100]}}
                        transition={{duration: 10, delay: 5, repeat: Infinity}}
                        src={team2}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-blue-400 border-l-4 border-b-4 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: [0, 50, 0] }}
                        transition={{ duration: 3, delay: 1, ease: "linear", repeat:Infinity }}
                        className="text-5xl font-bold">Latest <motion.span animate={{color: ['#ecff33', '#333fe3', '#ff6133']}} transition={{duration: 2, repeat: Infinity}} >Job</motion.span> for You</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;