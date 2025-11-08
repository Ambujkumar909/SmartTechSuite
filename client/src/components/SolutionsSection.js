import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const SolutionsSection = () => (
    <section id="solutions" className="py-24 bg-slate-900/70">
        <div className="container mx-auto px-6">
             <AnimatedSection className="text-center">
                 <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">Built for Developers</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                    Powerful APIs and solutions to integrate our technology directly into your business and applications. Coming soon.
                </p>
                <div className="mt-8">
                    <a href="#!" className="bg-slate-700/50 border border-slate-600 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-300">
                        Explore Documentation
                    </a>
                </div>
            </AnimatedSection>
        </div>
    </section>
);

export default SolutionsSection;
