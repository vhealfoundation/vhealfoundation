import React, { useState, useEffect } from "react";
import Layout from "../hoc/Layout";
import Banner from "../components/Banner";
import StatsCard from "../components/StatsCard";
import AboutCard from "../components/AboutCard";
import CardStacker from "../components/CardStacker";
import DynamicCardStacker from "../components/DynamicCardStacker";
import Slider from "../components/Slider";
import ContactCard from "../components/ContactCard";
import ContactLeft from "../components/ContactLeft";
import { data, aboutData, testimonials } from "../constants/data";
import AccoladesBanner from "../components/AccoladesBanner";
import Reviews from "../components/Reviews";
import PopUpCard from "../components/PopUpCard";
import { motion } from "framer-motion";
import LineSeperator from "../components/LineSeperator";
import SEO from "../components/SEO";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="pt-12 relative">
            <SEO
                title="Best Counselling & Mental Health Foundation in Chennai"
                description="V Heal Foundation - India's leading best counselling & mental health foundation. Expert psychological services, training, coaching & prisoner rehabilitation. Donate now for mental health support."
                keywords={[
                    'best counselling', 'mental health', 'best counselling services', 'mental health foundation', 'counselling center Chennai',
                    'best mental health foundation', 'psychological counselling', 'mental health support', 'counselling services India',
                    'best foundation', 'mental health counselling', 'psychological services', 'counselling training', 'mental health training',
                    'prisoner rehabilitation', 'rehabilitation for prisoners', 'counselling and coaching', 'psychological assessments',
                    'mental wellbeing', 'counselling foundation', 'social work foundation', 'V Heal Foundation', 'Chennai counselling',
                    'best counselling center', 'mental health center', 'psychological support', 'counselling therapy', 'mental health therapy',
                    'donate now', 'foundation services', 'rehabilitation services', 'new life', 'second chances', 'life transformation',
                    'counselling Chennai', 'mental health Chennai', 'best counselling India', 'mental health India', 'foundation Chennai',
                    'psychological counselling Chennai', 'mental health foundation India', 'counselling services Chennai', 'coaching services'
                ]}
                schemaData={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "V Heal Foundation",
                    "alternateName": "Best Counselling & Mental Health Foundation",
                    "description": "Leading best counselling, coaching, and impactful social work. Supporting underprivileged communities and prisoner rehabilitation.",
                    "url": "https://vhealfoundation.org",
                    "logo": "https://vhealfoundation.org/logo.png",
                    "foundingDate": "2020",
                    "founder": {
                        "@type": "Person",
                        "name": "Maria Nalini Xavier"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-9840050175",
                        "contactType": "customer service",
                        "availableLanguage": ["English", "Tamil"]
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Chennai",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                    },
                    "sameAs": [
                        "https://www.facebook.com/vhealfoundation",
                        "https://www.linkedin.com/company/vhealfoundation",
                        "https://www.instagram.com/vhealfoundation"
                    ],
                    "areaServed": ["India", "Tamil Nadu", "Chennai"],
                    "serviceType": ["Best Counselling Services", "Mental Health Support", "Psychological Assessments", "Counselling Training", "Coaching Services", "Prisoner Rehabilitation", "Mental Health Therapy"],
                    "keywords": "best counselling, mental health, counselling services, psychological services, mental health foundation, prisoner rehabilitation, counselling training, coaching, donate now",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Mental Health & Counselling Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Best Counselling Services",
                                    "description": "Professional psychological counselling and mental health support"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Prisoner Rehabilitation",
                                    "description": "Comprehensive rehabilitation programs for prisoners and ex-offenders"
                                }
                            }
                        ]
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "150",
                        "bestRating": "5"
                    }
                }}
            />
{/*             {showModal && <PopUpCard onClose={closeModal} />} */}
            <div className="relative z-0">
                <Banner />
            </div>
            <div className="">
                <StatsCard />
            </div>
            <div className="mt-5">
                 <div className="max-w-3xl mx-auto text-center px-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="inline-flex text-sm font-semibold py-1  m-2 rounded-full mb-4"
                          style={{ color: '#fd8917', backgroundColor: 'rgba(253, 137, 23, 0.15)' }}
                        >
                          Mental Health • Counselling • Training • Coaching • Rehabilitation
                        </motion.div>
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="mb-3 text-2xl font-bold text-primary"
                        >
                          Empowering Lives: Best Counselling & Social Work Foundation
                        </motion.h1>
                        <LineSeperator className="mb-4" />
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-xl text-primary mb-6"
                        >
                         V Heal Foundation is a fiduciary association of Mental Health and Social Work professionals passionate to promote mental health and wellbeing though counselling, training and coaching. The foundation also fosters to uplift the underprivileged and the underserved inside the prisons and after their release.
                        </motion.div>

                        {/* Donate Now CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="mt-6"
                        >
                          <a
                            href="/toconnect"
                            className="inline-flex items-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                          >
                            <span className="mr-2">💝</span>
                            Donate Now to Make a Difference
                          </a>
                        </motion.div>
                      </div>
                <AboutCard isMission={true} sections={aboutData} />
            </div>
            <div>
                <DynamicCardStacker data={data}></DynamicCardStacker>
            </div>
            <section className="" id='what-we-do'>
                <CardStacker />
            </section>
           {/*  <div className="mt-5">
                <Slider testimonials={testimonials} />
            </div> */}
            <div className="">
                <AccoladesBanner />
            </div>
            <div className="">
                <Reviews />
            </div>
            <div className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="">
                    <ContactLeft />
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <ContactCard />
                </div>
            </div>
        </div>
    );
};

export default Layout(Home);
