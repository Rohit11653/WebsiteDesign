
        let currentSlide = 0;
        const track = document.querySelector('.testimonials-track');
        const cards = document.querySelectorAll('.testimonial-card');
        const cardWidth = cards[0].offsetWidth + 20; // Include margin
        const maxSlides = Math.max(0, cards.length - Math.floor(track.offsetWidth / cardWidth));

        function moveSlider(direction) {
            currentSlide = Math.max(0, Math.min(currentSlide + direction, maxSlides));
            track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
            
            // Update button states
            document.querySelector('.prev').disabled = currentSlide === 0;
            document.querySelector('.next').disabled = currentSlide === maxSlides;
        }

        // Initialize button states
        moveSlider(0);

        // Handle window resize
        window.addEventListener('resize', () => {
            // Recalculate maxSlides and reset position if needed
            const newMaxSlides = Math.max(0, cards.length - Math.floor(track.offsetWidth / cardWidth));
            currentSlide = Math.min(currentSlide, newMaxSlides);
            moveSlider(0);
        });
  



        