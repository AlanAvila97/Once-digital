<template>
    <!-- Header -->
    <header class="header fixed-top header-once">
        <div class="container-header">
            <div class="content-menu-hamburguer">
                <input type="checkbox" class="menu-btn" id="openSidebarMenu">
                <div id="sidebarMenu">
                    <div class="container-menu scroll-menu">
                        <nuxt-link id="MenuInicio" to="./" class="items Seccion-Menu">Inicio</nuxt-link>
                        <nuxt-link id="MenuHorarios" to="./horarios" class="items Seccion-Menu">Horarios</nuxt-link>
                        <hr>
                        <nuxt-link class="items Seccion-Menu onceplus" to="./once">
                            <picture>
                                <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" type="image/webp" alt="Logo Once" loading="lazy">
                                <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.png" type="image/png" alt="Logo Once" loading="lazy"> 
                                <img class="img-fluid lazy" src="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" alt="Logo Once" width="139" height="30">
                            </picture>
                        </nuxt-link>
                        <nuxt-link class="items Seccion-Menu" to="https://oncenoticias.digital/">Once Noticias</nuxt-link>
                        <nuxt-link class="items Seccion-Menu" to="https://onceninasyninos.tv/">Once Niñas y Niños</nuxt-link>
                        <nuxt-link class="items Seccion-Menu" to="./mexico">Once México</nuxt-link>
                        <nuxt-link class="items Seccion-Menu" to="./digital">Once Digital</nuxt-link>
                        <hr>
                        <nuxt-link class="items Seccion-Menu" to="./sobre-canal-once"> Acerca de El Once </nuxt-link>
                        <nuxt-link class="items Seccion-Menu" to="./transparencia"> Transparencia </nuxt-link>
                        <nuxt-link id="MenuAvisoPrivacidad" class="items Seccion-Menu" to="./sobre-canal-once/privacidad"> Aviso de Privacidad </nuxt-link>
                        <nuxt-link id="MenuColaboraNosotros" class="items Seccion-Menu" to="./sobre-canal-once/colabora"> Colabora con Nosotros </nuxt-link>
                        <nuxt-link id="MenuHistorico" class="items Seccion-Menu" to="./archivo-historico"> Archivo Histórico </nuxt-link>
                        <nuxt-link id="MenuContacto" class="items Seccion-Menu" to="./sobre-canal-once/contacto"> Contacto </nuxt-link>                         
                        <hr>
                        <div class="container-social-networks">
                            <p id="MenuTWCanalOnceTv" class="social-icons icon-social-network Seccion-Menu" data-href="https://twitter.com/CanalOnceTV">
                                <i class="fa-brands fa-x-twitter"></i>
                            </p>
                            <p id="MenuFCCanalOnceTv" class="social-icons icon-social-network Seccion-Menu" data-href="https://www.facebook.com/CANALONCETV/">
                                <i class="fab fa-facebook-square"></i>
                            </p>
                            <p id="MenuIGCanalOnceTv" class="social-icons icon-social-network Seccion-Menu" data-href="https://www.instagram.com/canaloncetv/">
                                <i class="fab fa-instagram"></i>
                            </p>
                            <p id="MenuYTCanalOnceTv" class="social-icons icon-social-network Seccion-Menu" data-href="https://www.youtube.com/user/CanalOnceIPN">
                                <i class="fab fa-youtube"></i>
                            </p>
                            <p id="MenuTKCanalOnceTv" class="social-icons icon-social-network Seccion-Menu" data-href="https://www.tiktok.com/@canaloncetv">
                                <i class="fab fa-tiktok"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logo">
                <nuxt-link to="/">                    
                    <picture>
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.png" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="img-fluid lazy" src="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" alt="Logo Once" width="139" height="45">
                    </picture>
                </nuxt-link>
            </div><!-- End div logo -->
            <div class="sections-nav">
                <ul class="elements-nav">
                    <li class="live"> 
                        <nuxt-link to="./en-vivo">
                            <i class="fa fa-circle"></i>&nbsp;en vivo 
                        </nuxt-link>
                    </li>
                    <li class="programation">
                        <nuxt-link to="./horarios"> Horarios 
                        </nuxt-link>
                    </li>                
                    <li class="onceplus">
                        <nuxt-link to="./once"> 
                            <picture>
                                <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" type="image/webp" alt="Logo Once" loading="lazy">
                                <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.png" type="image/png" alt="Logo Once" loading="lazy"> 
                                <img class="img-fluid lazy" src="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" alt="Logo Once" width="139" height="30">
                            </picture>
                        </nuxt-link>                    
                    </li>
                    <li class="podcast">
                        <p class="clic-scroll" data-element="podcast"> Podcasts  </p>
                    </li>
                    <li class="blogs">
                        <p class="clic-scroll" data-element="blogs"> Blogs  </p>
                    </li>
                    <li class="more">
                        <button id="btn-more" data-status="0">
                            más &nbsp;
                            <i id="arrow-down" class="fas fa-angle-down"></i>
                            <i id="arrow-up" class="fas fa-angle-up"></i>
                        </button>
                        <div class="list-more">
                            <div class="container-list-down">
                                <div class="lists-down list-navigation">
                                    <nuxt-link to="./en-vivo" class="drop-live en-vivo"> <i class="fa fa-circle"></i> &nbsp; En vivo </nuxt-link>                                    
                                    <nuxt-link to="./horarios" class="horario"> Horarios </nuxt-link>                                    
                                    <nuxt-link to="./once" class="once"> Once+ </nuxt-link>                                    
                                    <p class="redirect-list podcast clic-scroll" data-element="podcast"> Podcast </p>                                    
                                    <p class="redirect-list blogs clic-scroll" data-element="blogs"> Blogs </p>                                    
                                </div>
                                <div class="lists-down list-site">
                                    <nuxt-link class="onceplus" to="./once"> 
                                        <picture>
                                            <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" type="image/webp" alt="Logo Once" loading="lazy">
                                            <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.png" type="image/png" alt="Logo Once" loading="lazy"> 
                                            <img class="img-fluid lazy" src="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" alt="Logo Once" width="139" height="30">
                                        </picture>
                                    </nuxt-link>                                        
                                    <nuxt-link to="https://oncenoticias.digital/"> Once Noticias</nuxt-link>
                                    <nuxt-link to="https://onceninasyninos.tv/"> Once Niñas y Niños </nuxt-link>
                                    <nuxt-link to="./mexico"> Once México </nuxt-link>
                                    <nuxt-link to="./digital"> Once Digital </nuxt-link>
                                </div>
                                <div class="lists-down list-about">
                                    <h2>Institucional</h2>
                                    <nuxt-link to="./sobre-canal-once"> Acerca de El Once </nuxt-link>
                                    <nuxt-link to="./transparencia"> Transparencia </nuxt-link>
                                    <nuxt-link to="./sobre-canal-once/privacidad"> Aviso de Privacidad </nuxt-link>
                                    <nuxt-link to="./sobre-canal-once/colabora"> Colabora con Nosotros </nuxt-link>
                                    <nuxt-link to="./archivo-historico"> Archivo Histórico </nuxt-link>
                                    <nuxt-link to="./sobre-canal-once/contacto"> Contacto </nuxt-link>                                    
                                </div>
                                <div class="lists-down list-sites">      
                                    <h2>SÍGUENOS</h2>
                                    <nuxt-link to="https://www.facebook.com/CanalOnceTV" target="_blank" aria-label="Redirección a facebook"> 
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </nuxt-link>
                                    <nuxt-link to="https://twitter.com/CanalOnceTV" target="_blank" aria-label="Redirección a twitter">
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fa-brands fa-x-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </nuxt-link>
                                    <nuxt-link to="https://www.instagram.com/canaloncetv/" target="_blank" aria-label="Redirección a instagram"> 
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </nuxt-link>
                                    <nuxt-link to="https://www.youtube.com/user/CanalOnceIPN" target="_blank" aria-label="Redirección a youtube"> 
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fab fa-youtube fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </nuxt-link>
                                    <nuxt-link to="https://www.tiktok.com/@canaloncetv" target="_blank" aria-label="Redirección a tiktok"> 
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fab fa-tiktok fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul><!-- End ul elements nav -->
            </div><!-- End div seccion nav -->
            <div class="container-searcher">
                <div class="input-search">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input id="input-search" name="input-search" class="search" type="search" placeholder="Buscador">
                </div><!-- End div input search -->
                <div class="button-search d-none">
                    <nuxt-link to="./buscador?type=general&q=Ingresa tu Busqueda">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </nuxt-link>
                </div><!-- End div button search -->
            </div><!-- End div container searcher -->
        </div> <!-- End div container header -->
    </header>
    <!-- End header -->
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>