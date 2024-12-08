import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { useInView } from "react-intersection-observer";


const CardStacker = ({ data }) => {
    const { ref, inView } = useInView({
        rootMargin: window.innerWidth <= 768 ? "800px" : "-100px",
        threshold: 0.1,
    })


    return (
        <div className="px-2 flex flex-col md:flex-row items-center justify-center gap-4">
            {data.map((card) => (
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Card
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default CardStacker;
