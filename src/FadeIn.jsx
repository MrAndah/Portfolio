"use client";

import { useEffect, useRef, useState } from "react";
import "./FadeIn.css"; // Import the CSS file

export default function FadeIn({ children, duration = 0, className = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    timeoutRef.current = setTimeout(() => setIsVisible(true), duration);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px 50px 0px" }
        );

        if (elementRef.current) observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [duration, isVisible]);

    return (
        <div
            ref={elementRef}
            className={`fade-in ${isVisible ? "visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
