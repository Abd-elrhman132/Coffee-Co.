'use strict';

 AOS.init();
      const hamburger = document.querySelector(".hamburger");
      const mobileMenu = document.querySelector(".mobile-menu");
      const overlay = document.querySelector(".overlay");
      const mobileLinks = document.querySelectorAll(".mobile-nav-list a");

      function toggleMenu() {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.style.overflow = mobileMenu.classList.contains("active")
          ? "hidden"
          : "auto";
      }

      function closeMenu() {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
      }

      hamburger.addEventListener("click", toggleMenu);
      overlay.addEventListener("click", closeMenu);

      // Close menu when clicking on mobile links
      mobileLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
      });

      // Close menu on escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
          closeMenu();
        }
      });

      // Handle window resize
      window.addEventListener("resize", () => {
        if (
          window.innerWidth > 1200 &&
          mobileMenu.classList.contains("active")
        ) {
          // Changed from 768 to 1200
          closeMenu();
        }
      });

      // Example of potential JavaScript controlling timeline visibility
      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item) => {
        // Some logic to add 'visible' class on scroll or load
        item.classList.add("visible");
      });