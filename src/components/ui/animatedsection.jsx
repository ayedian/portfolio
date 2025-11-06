import React from "react"
import { motion } from "framer-motion"

export default function AnimatedSection({ children, className, id }) {
  return (
    <motion.section
      id={id} // important: attach the id to the motion element for anchor links
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
