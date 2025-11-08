import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserAuth } from '../context/AuthContext';
import { ChevronDown, LogOut, UserCircle, FileText, Briefcase, Users, Mail } from 'lucide-react';

// --- Logo Component ---
const Logo = () => (
    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
         <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.6"/>
                <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="currentColor" fillOpacity="0.6"/>
                <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        <span>SmartTechSuite</span>
    </Link>
);


// --- Mega Menu Component ---
const MegaMenu = ({ menuData, parentHovering }) => {
    return (
        <AnimatePresence>
            {parentHovering && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-2 w-auto bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-lg shadow-2xl"
                >
                    <div className="p-6 flex gap-10">
                        {menuData.columns.map((column, colIndex) => (
                            <div key={colIndex} className="w-64">
                                <h3 className="text-sm font-semibold text-white mb-4 px-2">{column.heading}</h3>
                                <ul>
                                    {column.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link
                                                to={item.path}
                                                className="flex items-start p-2 rounded-md hover:bg-slate-700 transition-colors group"
                                            >
                                                {item.icon && <div className="mr-3 mt-1 text-slate-400 group-hover:text-indigo-400">{item.icon}</div>}
                                                <div>
                                                    <p className="text-slate-200 group-hover:text-white font-medium">{item.name}</p>
                                                    <p className="text-xs text-slate-400">{item.description}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// --- Simple Dropdown Component ---
const SimpleDropdown = ({ items, parentHovering }) => {
    return (
        <AnimatePresence>
            {parentHovering && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[240px] bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-lg shadow-2xl"
                >
                    <div className="p-2">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center px-4 py-3 text-sm text-slate-300 cursor-default">
                                {item.icon && <div className="mr-3 text-slate-400">{item.icon}</div>}
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// --- Main Header Component ---
const Header = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const [hovering, setHovering] = useState({ products: false, docs: false, contact: false, account: false });

    const handleMouseEnter = (menu) => setHovering({ products: false, docs: false, contact: false, account: false, [menu]: true });
    const handleMouseLeave = () => setHovering({ products: false, docs: false, contact: false, account: false });

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (e) {
            console.error(e.message);
        }
    };

    const navItems = {
        products: {
            columns: [
                {
                    heading: 'Featured Products',
                    items: [
                        { name: 'Batch File Renamer', description: 'Rename thousands of files.', path: '/products/batch-file-renamer', icon: <FileText size={16}/> },
                    ]
                },
                {
                    heading: 'Shop For',
                    items: [
                        { name: 'Individuals', description: 'Powerful tools for one.', path: '/pricing/individual', icon: <UserCircle size={16}/> },
                        { name: 'Businesses', description: 'Solutions for your team.', path: '/pricing/business', icon: <Briefcase size={16}/> },
                    ]
                }
            ]
        },
        docs: {
            columns: [
                {
                    heading: 'User Guides',
                    items: [
                        { name: 'Batch File Renamer', description: 'Get started and master.', path: '/docs/batch-file-renamer', icon: <FileText size={16}/> },
                    ]
                },
                {
                    heading: 'Developer',
                    items: [
                        { name: 'API Reference', description: 'Integrate with our services.', path: '/docs/api', icon: <Users size={16}/> },
                    ]
                }
            ]
        },
        contact: [
            { name: 'support@smarttechsuite.com', icon: <Mail size={16}/> },
        ],
        account: [
            { name: 'My Account', path: '/account', icon: <UserCircle size={16} className="mr-2" /> },
            { name: 'Log Out', action: handleLogout, icon: <LogOut size={16} className="mr-2" /> },
        ]
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700">
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left Side: Logo and Navigation */}
                <div className="flex items-center gap-10">
                    <Logo />
                    <div className="hidden md:flex items-center gap-6">
                        {/* Products Dropdown */}
                        <div onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave} className="relative">
                            <button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                                Products <ChevronDown size={16} />
                            </button>
                            <MegaMenu menuData={navItems.products} parentHovering={hovering.products} />
                        </div>
                        {/* Documentation Dropdown */}
                        <div onMouseEnter={() => handleMouseEnter('docs')} onMouseLeave={handleMouseLeave} className="relative">
                            <button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                                Documentation <ChevronDown size={16} />
                            </button>
                            <MegaMenu menuData={navItems.docs} parentHovering={hovering.docs} />
                        </div>
                         {/* Contact Dropdown */}
                        <div onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave} className="relative">
                            <button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
                                Contact
                            </button>
                            <SimpleDropdown items={navItems.contact} parentHovering={hovering.contact} />
                        </div>
                    </div>
                </div>

                {/* Right Side: Sign In / Account */}
                <div className="flex items-center">
                    {user ? (
                         <div onMouseEnter={() => handleMouseEnter('account')} onMouseLeave={handleMouseLeave} className="relative">
                            <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                                <img src={user.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`} alt="avatar" className="w-8 h-8 rounded-full bg-slate-700" />
                                <ChevronDown size={16} />
                            </button>
                            <AnimatePresence>
                                {hovering.account && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                        className="absolute top-full right-0 mt-2 w-56 bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-lg shadow-2xl"
                                    >
                                        <div className="p-2">
                                            <div className="px-4 py-2 border-b border-slate-700 mb-2">
                                                <p className="text-sm font-semibold text-white truncate">{user.displayName || user.email}</p>
                                                <p className="text-xs text-slate-400">Personal Account</p>
                                            </div>
                                            {navItems.account.map((item, index) => (
                                                item.path ? (
                                                    <Link key={index} to={item.path} className="flex items-center w-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors">{item.icon}{item.name}</Link>
                                                ) : (
                                                    <button key={index} onClick={item.action} className="flex items-center w-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors">{item.icon}{item.name}</button>
                                                )
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <Link to="/signin" className="bg-slate-100 text-slate-900 font-semibold hover:bg-white px-5 py-2 rounded-lg text-sm transition-colors">
                            Sign In
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;