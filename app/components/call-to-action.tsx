"use client";

import React from "react";
import { motion } from "framer-motion";
import Partners from "./Partners";

export function CallToAction() {
    return (
        <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="h-[50%] my-8 bg-gradient-to-br uppercase from-slate-100 to-slate-50 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
            Powered By
            <Partners />

        </motion.div>
    );
}
