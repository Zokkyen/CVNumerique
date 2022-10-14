    
    <footer>
        <div class="container-fluid myFooter bg-warning">
            <div class="row align-items-center h-100">
                <div class="col col-lg-2">
                    <a href="https://www.linkedin.com/in/st%C3%A9phane-swaenepoel-6a730197/" target="_blank">
                        <img class="sociaLogo" src="../public/assets/img/ico/linkedin.png" alt="LinkedIn"
                            title="Mon LinkedIn" />
                    </a>
                </div>

                <div class="col col-lg-2">
                    <a href="https://github.com/Zokkyen" target="_blank">
                        <img class="sociaLogo" src="../public/assets/img/ico/github.svg" alt="Github" title="Mon Github" />
                    </a>
                </div>

                <!-- Mobile version -->
                <div class="col-5 col-lg-6 fs-7 text-center mobileFooter">
                    <p class="m-0">
                        Stéphane Swaenepoel
                        <br />&copy; 2022
                        <br />Tous droits réservés.
                    </p>
                </div>

                <!-- Desktop version -->
                <div class="col-5 col-lg-4 fs-7 text-center desktopFooter">
                    <p class="m-0">
                        Stéphane Swaenepoel &copy; 2022 Tous droits réservés.
                    </p>
                </div>

                <div class="col col-lg-2">
                    <a href="mailto:stephane.swaenepoel@gmail.com">
                        <img class="sociaLogo" src="../public/assets/img/ico/gmail.png" alt="Mail"
                            title="Mon Mail Google" />
                    </a>
                </div>

                <div class="col col-lg-2">
                    <i onclick="window.open('../public/assets/files/cv.pdf')">
                        <img class="sociaLogo" src="../public/assets/img/ico/printer.png" alt="Mon CV"
                            title="Télécharger mon CV" />
                    </i>
                </div>
            </div>
        </div>
    </footer>

    <script src="../public/assets/js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="../public/assets/js/gsap/gsap.min.js"></script>
    <script src="../public/assets/js/gsap/ScrollTrigger.min.js"></script>
    <?=$jsSpecific??''?>
</body>

</html>