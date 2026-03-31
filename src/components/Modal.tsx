"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl pointer-events-auto border border-black/5"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-8 border-b border-black/5 bg-white/50 backdrop-blur-md sticky top-0 z-10">
                                {title && (
                                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                                        {title}
                                    </h2>
                                )}
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
