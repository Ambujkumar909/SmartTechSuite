import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const Logo = () => (
        <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-white">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.6"/>
                <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="currentColor" fillOpacity="0.6"/>
                <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">SmartTechSuite</span>
        </Link>
    );

    const footerLinks = {
        products: [ { name: 'Batch File Renamer', path: '/products/batch-file-renamer' }, { name: 'Pricing', path: '/pricing' } ],
        documentation: [ { name: 'User Guides', path: '/docs' }, { name: 'API Reference', path: '/docs/api' } ],
        company: [ { name: 'About Us', path: '/about' }, { name: 'Contact', path: '/contact' } ]
    };

    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-full lg:col-span-2 mb-8 lg:mb-0">
                        <Logo />
                        <p className="mt-4 text-slate-400 max-w-xs">Powerful, intuitive software designed to streamline your workflow and accelerate your productivity.</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Products</h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.products.map(link => (<li key={link.name}><Link to={link.path} className="text-base text-slate-400 hover:text-white transition-colors">{link.name}</Link></li>))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Documentation</h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.documentation.map(link => (<li key={link.name}><Link to={link.path} className="text-base text-slate-400 hover:text-white transition-colors">{link.name}</Link></li>))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-3">
                             {footerLinks.company.map(link => (<li key={link.name}><Link to={link.path} className="text-base text-slate-400 hover:text-white transition-colors">{link.name}</Link></li>))}
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} SmartTechSuite Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
