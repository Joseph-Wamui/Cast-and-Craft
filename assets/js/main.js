// Cast & Craft Ventures - Main JavaScript

// ==========================================
// NAVIGATION & HEADER
// ==========================================

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Active navigation highlighting
  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add form validation/submission logic here
      alert("Thank you for your message. We will get back to you soon!");
      this.reset();
    });
  }

  // Delivery Plan Accordion (Mobile)
  const phaseHeaders = document.querySelectorAll('.phase-header');
  
  if (phaseHeaders.length > 0) {
    phaseHeaders.forEach(header => {
      header.addEventListener('click', () => {
        // Toggle active class mostly for mobile where content is hidden
        const parent = header.parentElement;
        const isActive = parent.classList.contains('active');
        
        // Close all others (Accordion behavior)
        document.querySelectorAll('.delivery-phase').forEach(phase => {
          phase.classList.remove('active');
        });
        
        // If it wasn't active, make it active
        if (!isActive) {
          parent.classList.add('active');
        }
      });
    });
  }

  // Service Card Accordion (Mobile only)
  const serviceCards = document.querySelectorAll('.service-card');
  
  if (serviceCards.length > 0) {
    serviceCards.forEach(card => {
      // Cards with expandable content: ul, or p after h4/h3
      const hasContent = card.querySelector('ul') || card.querySelector('p');
      
      if (hasContent) {
        card.addEventListener('click', function(e) {
          // Only accordion on mobile
          if (window.innerWidth > 768) return;
          
          const wasActive = this.classList.contains('active');
          
          // Close others in the same grid if opened
          const parentGrid = this.closest('.services-grid');
          if (parentGrid) {
            parentGrid.querySelectorAll('.service-card').forEach(c => {
              if (c !== this) c.classList.remove('active');
            });
          }
          
          // Toggle current
          if (wasActive) {
            this.classList.remove('active');
          } else {
            this.classList.add('active');
          }
        });
      }
    });
  }
});
