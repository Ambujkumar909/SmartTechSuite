import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
    const headline = "Your Digital Toolbox for Smarter Work.".split("  ");

    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-slate-900">
            <ParticleBackground />
            <div className="relative z-10 container mx-auto px-6">
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    {headline.map((word, index) => (
                        <motion.span key={index} className="inline-block" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            {word === 'Perfected.' ? <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Perfected.</span> : `${word} `}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p 
                    className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    Discover a suite of powerful, intuitive software designed to streamline your workflow and manage your digital life.
                </motion.p>
                <motion.div 
                    className="mt-10 flex justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                >
                    <a href="#products" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-600/30">
                        Explore Products
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
