import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Reusable Product Card Component
const ProductCard = ({ icon, title, description, delay }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
                hidden: { opacity: 0, y: 50 }
            }}
            className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/20"
        >
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-6 shadow-lg shadow-indigo-600/30">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="mt-3 text-slate-400">{description}</p>
            <a href="#!" className="mt-6 inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold group">
                Learn More
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
        </motion.div>
    );
};


const ProductSection = () => {
    // --- Your Product Data Goes Here ---
    // To add a new product, just add a new object to this array.
    const productData = [
        { 
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.4a2 2 0 0 0-.6-1.4Z"/><path d="m20 6-8.4 8.4a2 2 0 0 0-.6 1.4V18h2.8a2 2 0 0 0 1.4-.6L20 14Z"/><path d="M18 8h-1a1 1 0 0 0-1 1v1"/></svg>, 
            title: "Batch File Renamer", 
            description: "Rename thousands of files in seconds with custom rules, patterns, and counters. A huge time-saver." 
        },
        // { 
        //     icon: <YourNextProductIcon />, 
        //     title: "Your Next Product", 
        //     description: "A description of your awesome new product." 
        // },
    ];

    return (
        <section id="products" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">Our Flagship Products</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Tools crafted with precision to solve your everyday challenges.</p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productData.map((product, i) => (
                        <ProductCard key={product.title} {...product} delay={i * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
