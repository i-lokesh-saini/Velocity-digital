import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds) {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries.filter(
                    (entry) => entry.isIntersecting
                );

                if (visibleSections.length === 0) return;

                const currentSection = visibleSections.reduce(
                    (previous, current) =>
                        current.intersectionRatio > previous.intersectionRatio
                            ? current
                            : previous
                );

                setActiveSection(currentSection.target.id);
            },
            {
                root: null,
                rootMargin: "-80px 0px -50% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            }
        );

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);

            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
}