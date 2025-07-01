"use client";
import { useEffect } from "react";

export default function NavTracker() {
  useEffect(() => {
    const handleScroll = () => {
      const allWithId = document.querySelectorAll<HTMLElement>("[id]");
      const navLinks = document.querySelectorAll("nav a");

      allWithId.forEach((element) => {
        const id = element.getAttribute("id");
        const offset = element.offsetTop - 150;
        const height = element.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= offset && scrollY < offset + height && id) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
