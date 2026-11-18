/* Shared site layout: one place to edit the navbar and footer for every page.
   Usage:  <script src="js/layout.js" data-part="nav"></script>
           <script src="js/layout.js" data-part="footer"></script>
   Pages with <body data-shared> also get the shared behaviours (menu, scroll-top, newsletter). */
(function () {
    var NAV = `<nav class="navbar" id="navbar">
        <div class="container">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <i class="fas fa-heartbeat"></i> Codry
            </a>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li class="dropdown" id="departmentsDropdown">
                    <a href="#">
                        Departments <i class="fas fa-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="doctors.html"><i class="fas fa-user-md"></i> Doctors</a></li>
                        <li><a href="lab.html"><i class="fas fa-flask"></i> Lab Tests</a></li>
                        <li><a href="radiology.html"><i class="fas fa-x-ray"></i> Radiology</a></li>
                        <li><a href="pharmacy.html"><i class="fas fa-prescription-bottle"></i> Pharmacy</a></li>
                        <li><a href="room.html"><i class="fas fa-bed"></i> Rooms</a></li>
                        <li><a href="emergency.html"><i class="fas fa-ambulance"></i> Emergency</a></li>
                    </ul>
                </li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="payment.html">Payment</a></li>
                <li><a href="booking.html" class="nav-cta">Book Now</a></li>
            </ul>
            <button class="nav-toggle" id="navToggle">
                <i class="fas fa-bars"></i>
            </button>
        </div></div>
    </nav>`;
    var FOOTER = `<footer class="footer">
        <div class="container">
        <div class="footer-container">
            <!-- Column 1: Brand -->
            <div class="footer-col">
                <div class="footer-logo">
                    <i class="fas fa-heartbeat"></i> Codry
                </div>
                <p class="footer-desc">
                    Precision healthcare with a human touch. Your health is our mission —
                    we're here to guide you every step of the way.
                </p>
                <div class="footer-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <!-- Column 2: Quick Links -->
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.html"><i class="fas fa-chevron-right"></i> Home</a></li>
                    <li><a href="about.html"><i class="fas fa-chevron-right"></i> About Us</a></li>
                    <li><a href="services.html"><i class="fas fa-chevron-right"></i> Services</a></li>
                    <li><a href="doctors.html"><i class="fas fa-chevron-right"></i> Doctors</a></li>
                    <li><a href="blog.html"><i class="fas fa-chevron-right"></i> Blog</a></li>
                    <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact</a></li>
                    <li><a href="emergency.html"><i class="fas fa-chevron-right"></i> Emergency</a></li>
                    <li><a href="payment.html"><i class="fas fa-chevron-right"></i> Payment</a></li>
                </ul>
            </div>
            <!-- Column 3: Services -->
            <div class="footer-col">
                <h4>Our Services</h4>
                <ul class="footer-links">
                    <li><a href="services.html"><i class="fas fa-chevron-right"></i> Internal Medicine</a></li>
                    <li><a href="services.html"><i class="fas fa-chevron-right"></i> Pediatrics</a></li>
                    <li><a href="services.html"><i class="fas fa-chevron-right"></i> Orthopedics</a></li>
                    <li><a href="services.html"><i class="fas fa-chevron-right"></i> Gynecology</a></li>
                    <li><a href="services.html"><i class="fas fa-chevron-right"></i> Dermatology</a></li>
                    <li><a href="services.html"><i class="fas fa-chevron-right"></i> Cardiology</a></li>
                    <li><a href="lab.html"><i class="fas fa-chevron-right"></i> Lab Tests</a></li>
                    <li><a href="radiology.html"><i class="fas fa-chevron-right"></i> Radiology</a></li>
                    <li><a href="pharmacy.html"><i class="fas fa-chevron-right"></i> Pharmacy</a></li>
                    <li><a href="room.html"><i class="fas fa-chevron-right"></i> Patient Rooms</a></li>
                </ul>
            </div>
            <!-- Column 4: Newsletter + Contact + Developer -->
            <div class="footer-col">
                <h4>Newsletter</h4>
                <p class="newsletter-text">Subscribe to get the latest health tips and medical updates.</p>
                <form class="newsletter-form" id="newsletterForm">
                    <div class="newsletter-group">
                        <input type="email" placeholder="Your email address" required />
                        <button type="submit"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </form>
                <div class="footer-contact">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+123 456 7890</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>info@codry.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Main Street, City</span>
                    </div>
                </div>
                <!-- Developer Info -->
            </div>
        </div>
        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <div class="footer-dev">
                <!-- <div class="dev-divider"></div> -->
                <div class="dev-info">
                    <i class="fas fa-code"></i>
                    <span>Developed by <strong>Yaseen Muhammad Saeed Al-Bakour</strong></span>
                </div>
                <div class="dev-contact">
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+963982057497">+963 982 057 497</a>
                </div>
            </div>
            <div class="footer-bottom-container">
                <p><span>&copy;</span> __YEAR__ <span>Codry Medical Center</span>. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div></div>
    </footer>`;

    var el = document.currentScript;
    var part = el.getAttribute('data-part');
    var shared = document.body.hasAttribute('data-shared');
    var page = location.pathname.split('/').pop() || 'index.html';

    if (part === 'nav') {
        el.insertAdjacentHTML('beforebegin', NAV);
        var current = document.querySelector('.nav-links a[href="' + page + '"]');
        if (current) {
            current.setAttribute('aria-current', 'page');
            var dd = current.closest('.dropdown');
            if (dd) dd.querySelector(':scope > a').setAttribute('aria-current', 'true');
        }
        if (shared) {
            document.getElementById('navToggle').addEventListener('click', function () {
                document.getElementById('navLinks').classList.toggle('active');
            });
            var dropdown = document.getElementById('departmentsDropdown');
            dropdown.addEventListener('click', function (e) {
                if (window.innerWidth <= 992) { e.preventDefault(); this.classList.toggle('active'); }
            });
            var navbar = document.getElementById('navbar');
            var onScroll = function () { navbar.classList.toggle('scrolled', window.scrollY > 50); };
            window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
        }
    }

    if (part === 'footer') {
        el.insertAdjacentHTML('beforebegin', FOOTER.replace('__YEAR__', new Date().getFullYear()));
        if (shared) {
            el.insertAdjacentHTML('beforebegin', '<button class="scroll-top" id="scrollTop" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button>');
            var top = document.getElementById('scrollTop');
            window.addEventListener('scroll', function () { top.classList.toggle('show', window.scrollY > 300); }, { passive: true });
            top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
            document.getElementById('newsletterForm').addEventListener('submit', function (e) {
                e.preventDefault(); alert('Thank you for subscribing to our newsletter!'); this.reset();
            });
        }
    }
})();
