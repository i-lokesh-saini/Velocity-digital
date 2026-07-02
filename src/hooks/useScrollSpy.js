import { useEffect } from "react";

const sections = [
    "home",
    "about",
    "services",
    "workflow",
    "work",
    "field",
    "team",
];

export default function useScrollSpy() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);

                if (!visible) return;

                window.history.replaceState(
                    {},
                    "",
                    `/#${visible.target.id}`
                );
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);
}