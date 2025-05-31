"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, BookOpen, Puzzle, Globe, Server } from "lucide-react";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Accueil", icon: Home },
        { href: "/guides", label: "Guides", icon: BookOpen },
        { href: "/mods", label: "Mods", icon: Puzzle },
        { href: "/nations", label: "Nations", icon: Globe },
        { href: "/serveur", label: "Serveur", icon: Server },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                            <img 
                                src="/icons/politicraft_icon.png" 
                                alt="Politicraft Logo" 
                                className="w-10 h-10 rounded-lg"
                            />
                        </div>
                        <span className="text-xl font-bold gradient-text hidden sm:block">
                            Politicraft
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition-all duration-200 group"
                                >
                                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span>{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-t border-slate-700">
                        <div className="px-4 py-6 space-y-2">
                            {links.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition-all duration-200"
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{link.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
