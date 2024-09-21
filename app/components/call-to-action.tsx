"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Partners from "./Partners";

export function CallToAction() {
    return (
        <LampContainer>
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="flex flex-col justify-center items-center mt-8 bg-gradient-to-br from-slate-100 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Featured by
                <Partners />

            </motion.div>
        </LampContainer>
    );
}
