<?php require './includes/header.php'; ?>


<main id="email-page">
    <div class="main-wrapper">
        <section class="main-dashboard">
            <aside class="aside-menu">
                <ul class="breadcrumbs">
                    <li class="breadcrumbs__item">
                        <i class="fas fa-globe"></i> <a class="breadcrumbs__link" href="/">Home</a>
                    </li>

                    <li class="breadcrumbs__item">
                        > <a class="breadcrumbs__link" href="/">Centro de Correos</a>
                    </li>
                </ul>

                <div class="heading">
                    <h1><strong>Crea un email</strong></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et beatae quisquam excepturi dolores quod ad porro error atque ab, ratione architecto sint veritatis voluptatum!</p>
                </div>

                <form class="form" id="form-email-data" action="#" method="post">
                    <label for="form-email-data__name">Nombre Cliente
                        <input class="form-input" type="text" name="form-email-data__name" id="form-email-data__name" placeholder="Juan">
                    </label>

                    <label for="form-email-data__email">Email Cliente
                        <input class="form-input" type="email" name="form-email-data__email" id="form-email-data__email" placeholder="Email@servidor.cl">
                    </label>

                    <label for="form-email-data__subject">Subject
                        <input class="form-input" type="text" name="form-email-data__subject" id="form-email-data__subject" placeholder="Agrega Subject">
                    </label>

                    <label for="form-email-data__preheader">Preheader
                        <input class="form-input" type="text" name="form-email-data__preheader" id="form-email-data__preheader" placeholder="Agrega Preheader">
                    </label>

                    <label class="hide" for="form-email-data__user">Usuario Cliente
                        <input class="form-input" type="text" name="form-email-data__user" id="form-email-data__user" placeholder="Usuario Cliente">
                    </label>

                    <label class="hide" for="form-email-data__pass">Clave Cliente
                        <input class="form-input" type="text" name="form-email-data__pass" id="form-email-data__pass" placeholder="Contraseña Cliente">
                    </label>

                    <label class="hide" for="form-email-data__url">URL Cliente
                        <input class="form-input" type="text" name="form-email-data__url" id="form-email-data__url" placeholder="URL Cliente">
                    </label>

                    <label class="full" for="form-email-data__msg">Mensaje
                        <textarea class="form-input" name="form-email-data__msg" id="form-email-data__msg" cols="30" rows="10"></textarea>
                    </label>

                    <label for="form-email-data__emisor">Emisor
                        <select name="form-email-data__emisor" id="form-email-data__emisor">
                            <option value="1">nicolas@inadaptado.cl</option>
                            <option value="2">hola@inadaptado.cl</option>
                        </select>
                    </label>

                    <label for="form-email-data__type">Tipo Email
                        <select name="form-email-data__type" id="form-email-data__type" onChange="switchEmailPreview(this.options[this.selectedIndex].value)">
                            <option value="emailType__BienvenidaCliente">Bienvenida Cliente</option>
                            <option value="emailType__BienvenidaEquipo">Bienvenida Equipo</option>
                            <option value="emailType__CredencialesCliente">Credenciales Cliente</option>
                            <option selected value="emailType__EmailBase">Email base</option>
                            <option disabled value="emailType__CotizacionCliente">Cotizacion Cliente</option>
                        </select>
                    </label>

                    <button id="form-email-data__resetbtn" type="submit">Reset</button>
                    <button id="form-email-data__btn" type="submit" disabled>Enviar</button>
                </form>

                <div id="notification"></div>
            </aside>

            <section class="half-content">
                    <div class="heading">
                        <h1><strong>Previsualización</strong></h1>
                        <p><strong>Subject:</strong> <span id="email-subject">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></p>
                        <p><strong>Preheader:</strong> <span id="email-preheader">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></p>
                        <p><strong>Email Cliente:</strong> <span id="email-receptor">email@servidor.cl</span></p>
                    </div>

                    <div class="email-preview">
                        <iframe id="email-preview__box" src="./email/Base/index.html" frameborder="0"></iframe>
                    </div>
            </section>
        </section>
    </div>
</main>

<?php require './includes/footer.php'; ?>