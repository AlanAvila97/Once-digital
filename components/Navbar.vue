<template>
    <!-- Header -->
    <header class="header fixed-top header-once">
        <div class="container-header">
            <div class="content-menu-hamburguer">
                <input type="checkbox" class="menu-btn" id="openSidebarMenu">
                <div id="sidebarMenu">
                    <div class="container-menu scroll-menu">
                        <a id="MenuInicio" href="./" class="items Seccion-Menu">Inicio</a>
                        <a id="MenuHorarios" href="./horarios" class="items Seccion-Menu">Horarios</a>
                        <hr>
                        <a class="items Seccion-Menu onceplus" href="./once">
                            <picture>
                                <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" type="image/webp" alt="Logo Once" loading="lazy">
                                <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.png" type="image/png" alt="Logo Once" loading="lazy"> 
                                <img class="img-fluid lazy" src="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" alt="Logo Once" width="139" height="30">
                            </picture>
                        </a>
                        <a class="items Seccion-Menu" href="https://oncenoticias.digital/">Once Noticias</a>
                        <a class="items Seccion-Menu" href="https://onceninasyninos.tv/">Once Niñas y Niños</a>
                        <a class="items Seccion-Menu" href="./mexico">Once México</a>
                        <a class="items Seccion-Menu" href="./digital">Once Digital</a>
                        <hr>
                        <!-- <a class="items">Institucional</a> -->
                        <a class="items Seccion-Menu" href="./sobre-canal-once"> Acerca de El Once </a>
                        <a class="items Seccion-Menu" href="./transparencia"> Transparencia </a>
                        <a id="MenuAvisoPrivacidad" class="items Seccion-Menu" href="./sobre-canal-once/privacidad"> Aviso de Privacidad </a>
                        <a id="MenuColaboraNosotros" class="items Seccion-Menu" href="./sobre-canal-once/colabora"> Colabora con Nosotros </a>
                        <a id="MenuHistorico" class="items Seccion-Menu" href="./archivo-historico"> Archivo Histórico </a>
                        <a id="MenuContacto" class="items Seccion-Menu" href="./sobre-canal-once/contacto"> Contacto </a>                         
                        <hr>
                        <div class="container-social-networks">
                            <p id="MenuTWCanalOnceTv" class="social-icons icon-social-network Seccion-Menu" data-href="https://twitter.com/CanalOnceTV">
                                <!-- <i class="fab fa-twitter"></i> -->
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
                <a href="/">                    
                    <picture>
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" type="image/webp" alt="Logo Once" loading="lazy">
                        <source class="lazy img-fluid" srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.png" type="image/png" alt="Logo Once" loading="lazy"> 
                        <img class="img-fluid lazy" src="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-menu.webp" alt="Logo Once" width="139" height="45">
                    </picture>
                </a>
            </div><!-- End div logo -->
            <div class="sections-nav">
                <ul class="elements-nav">
                    <li class="live"> 
                        <a href="./en-vivo">
                            <i class="fa fa-circle"></i>&nbsp;en vivo 
                        </a>
                    </li>
                    <li class="programation">
                        <a href="./horarios"> Horarios 
                        </a>
                    </li>                
                    <li class="onceplus">
                        <a href="./once"> 
                            <picture>
                                <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" type="image/webp" alt="Logo Once" loading="lazy">
                                <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.png" type="image/png" alt="Logo Once" loading="lazy"> 
                                <img class="img-fluid lazy" src="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" alt="Logo Once" width="139" height="30">
                            </picture>
                        </a>                    
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
                                    <a href="./en-vivo" class="drop-live en-vivo"> <i class="fa fa-circle"></i> &nbsp; En vivo </a>                                    
                                    <a href="./horarios" class="horario"> Horarios </a>                                    
                                    <a href="./once" class="once"> Once+ </a>                                    
                                    <p class="redirect-list podcast clic-scroll" data-element="podcast"> Podcast </p>                                    
                                    <p class="redirect-list blogs clic-scroll" data-element="blogs"> Blogs </p>                                    
                                </div>
                                <div class="lists-down list-site">
                                    <a class="onceplus" href="./once"> 
                                        <picture>
                                            <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" type="image/webp" alt="Logo Once" loading="lazy">
                                            <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.png" type="image/png" alt="Logo Once" loading="lazy"> 
                                            <img class="img-fluid lazy" src="https://canalonce.mx/REST/data/images/logo_oncemas_154x50.webp" alt="Logo Once" width="139" height="30">
                                        </picture>
                                    </a>                                        
                                    <a href="https://oncenoticias.digital/"> Once Noticias</a>
                                    <a href="https://onceninasyninos.tv/"> Once Niñas y Niños </a>
                                    <a href="./mexico"> Once México </a>
                                    <a href="./digital"> Once Digital </a>
                                </div>
                                <div class="lists-down list-about">
                                    <h2>Institucional</h2>
                                    <a href="./sobre-canal-once"> Acerca de El Once </a>
                                    <a href="./transparencia"> Transparencia </a>
                                    <a href="./sobre-canal-once/privacidad"> Aviso de Privacidad </a>
                                    <a href="./sobre-canal-once/colabora"> Colabora con Nosotros </a>
                                    <a href="./archivo-historico"> Archivo Histórico </a>
                                    <a href="./sobre-canal-once/contacto"> Contacto </a>                                    
                                    <!-- <a class="contacto" href="./sobre-canal-once/contacto"> Contáctanos </a>                                     -->
                                </div>
                                <div class="lists-down list-sites">      
                                    <h2>SÍGUENOS</h2>
                                    <a href="https://www.facebook.com/CanalOnceTV" target="_blank" aria-label="Redirección a facebook"> 
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="https://twitter.com/CanalOnceTV" target="_blank" aria-label="Redirección a twitter">
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fa-brands fa-x-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="https://www.instagram.com/canaloncetv/" target="_blank" aria-label="Redirección a instagram"> 
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="https://www.youtube.com/user/CanalOnceIPN" target="_blank" aria-label="Redirección a youtube"> 
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fab fa-youtube fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                    <a href="https://www.tiktok.com/@canaloncetv" target="_blank" aria-label="Redirección a tiktok"> 
                                        <span class="fa-stack">
                                            <i class="far fa-square fa-stack-2x"></i>
                                            <i class="fab fa-tiktok fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
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
                    <a href="./buscador?type=general&q=Ingresa tu Busqueda">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
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