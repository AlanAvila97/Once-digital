<template>
    <footer class="footer" >
        <div class="container-footer">
            <div class="title-footer">
                    <p>
                        El Once es la primera televisora pública de México y una de las primeras aliadas de la diversidad y la Inclusión. 
                        Consulta los horarios de nuestras producciones y conéctate a los contenidos que tenemos para ti en TV, redes sociales y ONCE +
                    </p>
                    <hr>
            </div><!-- End Title Footer --> 
            <div class="images-footer">
                <nuxt-link to="/#" class="once-logo">
                    <picture >
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" alt="Logo Once" loading="lazy" title="Logo Once" width="250" height="81">
                    </picture>
                </nuxt-link><!-- End Image Footer --> 
                <nuxt-link to="/e5cinco">
                    <picture>
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/e5Logo.png" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/e5Logo.png" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canalonce.mx/REST/data/images/e5Logo.png" alt="Logo Once" loading="lazy" title="Logo Once" width="88" height="61">
                    </picture>
                </nuxt-link><!-- End Image Footer --> 
                <nuxt-link href="https://www.ipn.mx/">
                    <picture>
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/IpnLogo.png" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/IpnLogo.png" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canalonce.mx/REST/data/images/IpnLogo.png" alt="Logo Once" loading="lazy" title="Logo Once" width="88" height="61">
                    </picture>
                </nuxt-link><!-- End Image Footer --> 
                <nuxt-link href="http://portaltransparencia.gob.mx/buscador/search/search.do?method=begin&searchBy=0&idDependenciaZoom=11215">
                    <picture>
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/INAI.png" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/INAI.png" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canalonce.mx/REST/data/images/INAI.png" alt="Logo Once" loading="lazy" title="Logo Once" width="88" height="61">
                    </picture>
                </nuxt-link><!-- End Image Footer --> 
                <nuxt-link href="https://www.mexicoescultura.com/">
                    <picture>
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/CulturaLogo.png" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/CulturaLogo.png" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canalonce.mx/REST/data/images/CulturaLogo.png" alt="Logo Once" loading="lazy" title="Logo Once" width="88" height="61">
                    </picture>
                </nuxt-link><!-- End Image Footer --> 
                <nuxt-link href="http://atei.mx/">
                    <picture>
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/ATEILogo.png" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/ATEILogo.png" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canalonce.mx/REST/data/images/ATEILogo.png" alt="Logo Once" loading="lazy" title="Logo Once" width="88" height="61">
                    </picture>
                </nuxt-link><!-- End Image Footer --> 
                <nuxt-link href="https://www.tal.tv/">
                    <picture>
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/TALLogo.png" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/TALLogo.png" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canalonce.mx/REST/data/images/TALLogo.png" alt="Logo Once" loading="lazy" title="Logo Once" width="88" height="61">
                    </picture>
                </nuxt-link><!-- End Image Footer --> 
            </div><!-- End Images Footer --> 
            <div class="info-footer">
                    <div class="contact-canal-once">
                        <h2>Instituto Politécnico Nacional</h2>
                        <p>Prolongación Carpio 475, col. Casco de Sto. Tomás, C.P. 11340,</p>
                        <p>Ciudad de México</p>
                        <p>Contacto con la Audiencia: 55 51 66 40 00.</p>
                        <p>Conmutador: 5553561111</p>                
                        <p>
                            DR © XEIPN Canal Once, Ciudad de México, <span class="year"></span>.
                            Todos los derechos reservados.
                        </p>
                    </div><!-- End Contact Canal Once -->
                    <div class="about-canal-once">
                        <hr>
                        <nuxt-link to="/sobre-canal-once/privacidad"><p>Política de Privacidad</p></nuxt-link>
                        <nuxt-link to="/sobre-canal-once"><p>Acerca de Nosotros</p></nuxt-link>
                        <nuxt-link to="/funcionamiento"><p>Funcionamiento</p></nuxt-link>
                        <nuxt-link to="/transparencia"><p>Transparencia</p></nuxt-link>
                        <nuxt-link to="/sobre-canal-once/colabora"><p>Colabora con Nosotros</p></nuxt-link>
                        <nuxt-link to="/sobre-canal-once/patrocinios"><p>Patrocinios</p></nuxt-link>
                        <nuxt-link to="/sobre-canal-once/contacto"><p>Contacto</p></nuxt-link>
                    </div><!-- End About Canal Once -->
                    <div class="sites-canal-once">
                        <hr>
                        <a href="https://oncenoticias.digital/"><p>Once Noticias</p></a>
                        <nuxt-link to="/once-ninos"><p>Once Niñas y Niños</p></nuxt-link>
                        <nuxt-link to="/mexico"><p>Once México Internacional</p></nuxt-link>
                        <nuxt-link to="/digital"><p>Once Digital</p></nuxt-link>
                        <nuxt-link to="/once"><p>El Once</p></nuxt-link>
                    </div><!-- End Sites Canal Once --> 
            </div><!-- End Info Footer -->
            <div class="download-apps">
                <h3>Descarga la app</h3>
                <nuxt-link to="/" class="once-logo">
                    <picture >
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" alt="Logo Once" loading="lazy" title="Logo Once" width="250" height="81">
                    </picture>
                </nuxt-link><!-- End Image Footer --> 
                <nuxt-link href="https://play.google.com/store/apps/details?id=com.canalonce.oncevodphone" class="redirect-download" target="_blank">
                    <picture class="icon-download">
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/google-play-badge.webp" type="image/webp" alt="Play Store" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/google-play-badge.png" type="image/png" alt="Play Store" loading="lazy"> 
                        <img class="lazy img-fluid" src="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/google-play-badge.webp" alt="Play Store" loading="lazy" title="Play Store" width="88" height="61">
                    </picture>
                </nuxt-link>
                <nuxt-link href="https://apps.apple.com/us/app/canal-once-vod/id1068244062?itsct=apps_box_link&itscg=30200" class="redirect-download app-store" target="_blank">
                    <picture class="icon-download">
                        <source class="lazy img-fluid" srcset="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-mx?size=187x72&amp;releaseDate=1450828800?h=04aa8d27fa10797bd46701f9a089748e" type="image/webp" alt="App Store" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-mx?size=187x72&amp;releaseDate=1450828800?h=04aa8d27fa10797bd46701f9a089748e" type="image/png" alt="App Store" loading="lazy"> 
                        <img class="lazy" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-mx?size=187x72&amp;releaseDate=1450828800?h=04aa8d27fa10797bd46701f9a089748e" alt="App Store" loading="lazy" title="Play Store" width="187" height="63">
                    </picture>
                </nuxt-link>
            </div><!-- End Container Download Apps -->
        </div><!-- End Container Footer -->
    </footer> 
</template>

<script setup>

</script>