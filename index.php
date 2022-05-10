<?php require './includes/header.php'; ?>

    <main id="home-page">
        <div class="main-wrapper">
            <section class="main-dashboard">
                <aside class="aside-menu">
                    <ul class="breadcrumbs">
                        <li class="breadcrumbs__item">
                            <i class="fas fa-globe"></i> <a class="breadcrumbs__link" href="/">Home</a>
                        </li>

                        <!-- <li class="breadcrumbs__item">
                            <i class="fas fa-globe"></i> <a class="breadcrumbs__link" href="/">Home</a>
                        </li> -->
                    </ul>

                    <div class="heading">
                        <h1><strong>Nicolás, qué deseas hacer?</strong></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et beatae quisquam excepturi dolores quod ad porro error atque ab, ratione architecto sint veritatis voluptatum!</p>
                    </div>

                    <div class="options-menu">
                        <div class="options-menu__item">
                            <a href="./buscar_cliente.php" class="options-menu__link">
                                <div class="options-menu__icon">
                                    <img src="./img/icons/icon_search.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Buscar cliente</h2>
                                    <p>Busca, edita y eliminar clientes del sistema.</p>
                                </div>
                            </a>
                        </div>

                        <div class="options-menu__item">
                            <a href="./nuevo_cliente.php" class="options-menu__link">
                                <div class="options-menu__icon">
                                    <img src="./img/icons/icon_target.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Nuevo cliente</h2>
                                    <p>Crear y configura un nuevo cliente de Inadaptado.</p>
                                </div>
                            </a>
                        </div>

                        <div class="options-menu__item">
                            <a href="./centro_de_correos.php" class="options-menu__link">
                                <div class="options-menu__icon">
                                    <img src="./img/icons/icon_message.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Centro de correos</h2>
                                    <p>Envia templates de emails a tus clientes potenciales.</p>
                                </div>
                            </a>
                        </div>

                        <div class="options-menu__item disabled">
                            <a class="options-menu__link">
                                <div class="options-menu__icon">
                                    <img src="./img/icons/icon_information.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Configuración</h2>
                                    <p>Configura el dashboard segun de tus necesidades.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </aside>

                <section class="half-content">
                    <div class="heading">
                        <h1><strong>Enlaces interesantes</strong></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et beatae quisquam excepturi dolores quod ad porro error atque ab, ratione architecto sint veritatis voluptatum!</p>
                    </div>

                    <div class="options-menu">
                        <div class="options-menu__item">
                            <a href="https://inadaptado.cl" class="options-menu__link" target="_blank">
                                <div class="options-menu__icon">
                                    <img src="https://mail.inadaptado.cl/assets/icon_webpage.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Inadaptado.cl</h2>
                                </div>
                            </a>
                        </div>

                        <div class="options-menu__item">
                            <a href="https://inadaptado.cl/webmail" class="options-menu__link" target="_blank">
                                <div class="options-menu__icon">
                                    <img src="https://mail.inadaptado.cl/assets/icon_webmail.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Webmail</h2>
                                </div>
                            </a>
                        </div>

                        <div class="options-menu__item">
                            <a href="https://inadaptado.cl/cpanel" class="options-menu__link" target="_blank">
                                <div class="options-menu__icon">
                                    <img src="https://mail.inadaptado.cl/assets/icon_cpanel.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Cpanel</h2>
                                </div>
                            </a>
                        </div>

                        <div class="options-menu__item">
                            <a href="https://icloud.inadaptado.cl/" class="options-menu__link" target="_blank">
                                <div class="options-menu__icon">
                                    <img src="https://mail.inadaptado.cl/assets/icon_ftp.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Icloud</h2>
                                </div>
                            </a>
                        </div>

                        <div class="options-menu__item">
                            <a href="https://lab.inadaptado.cl/" class="options-menu__link" target="_blank">
                                <div class="options-menu__icon">
                                    <img src="https://mail.inadaptado.cl/assets/icon_mouse.png" alt="">
                                </div>

                                <div class="options-menu__info">
                                    <h2>Laboratorio</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </main>

    <?php require './includes/footer.php'; ?>