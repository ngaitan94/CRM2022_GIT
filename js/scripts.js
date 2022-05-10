//███████████████████████████████████████████
//████████████     VARIABLES     ████████████
//███████████████████████████████████████████

//░░░░░░░░░░░░ CENTRO DE CORREOS ░░░░░░░░░░░░

// COMPONENTES
const emailFormData = document.querySelector("#form-email-data");

const emailInputs = document.querySelectorAll(".form-input");
const emailNameInput = document.querySelector("#form-email-data__name");
const emailFromInput = document.querySelector("#form-email-data__emisor");
const emailToInput = document.querySelector("#form-email-data__email");
const emailSubjectInput = document.querySelector("#form-email-data__subject");
const emailPreheaderInput = document.querySelector("#form-email-data__preheader");
const emailUserInput = document.querySelector("#form-email-data__user");
const emailPassInput = document.querySelector("#form-email-data__pass");
const emailUrlInput = document.querySelector("#form-email-data__url");
const emailMsgInput = document.querySelector("#form-email-data__msg");

const emailPreviewBox = document.querySelector("#email-preview__box");
const emailSubjectPreview = document.querySelector("#email-subject");
const emailPreheaderPreview = document.querySelector("#email-preheader");
const emailToPreview = document.querySelector("#email-receptor");
const emailPreviewSubmitBtn = document.querySelector("#form-email-data__btn");
const emailPreviewResetBtn = document.querySelector("#form-email-data__resetbtn");
kj 
//░░░░░░░░░░░░ TOAST NOTIFICATION ░░░░░░░░░░░░
const notification = document.getElementById("notification");
const msgEmptyInput = "Hay campos vacios";
const msgSendEmail = "📫 Mensaje enviado con exito!";
const msgErrSendEmail = "No se pudo enviar el mensaje";
const msgErrValidForm = "Formulario invalido";



//███████████████████████████████████████████
//████████████  EVENT LISTENERS  ████████████
//███████████████████████████████████████████

//░░░░░░░░░░░░     START APP     ░░░░░░░░░░░░
//document.addEventListener('DOMContentLoaded', startApp);

//░░░░░░░░░░░░    FORM INPUTS    ░░░░░░░░░░░░
emailNameInput.addEventListener('blur', validFormData);
emailToInput.addEventListener('blur', validFormData);
emailSubjectInput.addEventListener('blur', validFormData);
emailPreheaderInput.addEventListener('blur', validFormData);
emailUserInput.addEventListener('blur', validFormData);
emailPassInput.addEventListener('blur', validFormData);
emailUrlInput.addEventListener('blur', validFormData);
emailMsgInput.addEventListener('blur', validFormData);
emailPreviewResetBtn.addEventListener('click', resetFormData);

//░░░░░░░░░░░░ CENTRO DE CORREOS ░░░░░░░░░░░░

// INPUT TEXT REPLACE

//Subject
emailSubjectInput.addEventListener("keyup", ()=> {
    let contenidoInput = emailSubjectInput.value;
    emailSubjectPreview.innerHTML = contenidoInput;
});

//Preheader
emailPreheaderInput.addEventListener("keyup", ()=> {
    let contenidoInput = emailPreheaderInput.value;
    emailPreheaderPreview.innerHTML = contenidoInput;
});

//Receptor
emailToInput.addEventListener("keyup", ()=> {
    let contenidoInput = emailToInput.value;
    emailToPreview.innerHTML = contenidoInput;
});

//Name
emailNameInput.addEventListener("keyup", ()=> {
    let contenidoInput = emailNameInput.value;
    let contenidoIframe = emailPreviewBox.contentWindow.document.querySelector("#email-nombre");
    contenidoIframe.innerHTML = contenidoInput;
});

//User
emailUserInput.addEventListener("keyup", ()=> {
    let contenidoInput = emailUserInput.value;
    let contenidoIframe = emailPreviewBox.contentWindow.document.querySelector("#email-user");
    contenidoIframe.innerHTML = contenidoInput;
});

//Pass
emailPassInput.addEventListener("keyup", ()=> {
    let contenidoInput = emailPassInput.value;
    let contenidoIframe = emailPreviewBox.contentWindow.document.querySelector("#email-pass");
    contenidoIframe.innerHTML = contenidoInput;
});

//Msg
emailMsgInput.addEventListener("keyup", ()=> {
    let contenidoInput = emailMsgInput.value;
    let contenidoIframe = emailPreviewBox.contentWindow.document.querySelector("#email-msg");
    contenidoIframe.innerHTML = contenidoInput;
});

//Url
emailUrlInput.addEventListener("keyup", ()=> {
    let contenidoInput = emailUrlInput.value;
    let contenidoIframe = emailPreviewBox.contentWindow.document.querySelector("#email-url");
    contenidoIframe.setAttribute("href", contenidoInput);
});


//███████████████████████████████████████████
//████████████     FUNCTIONS     ████████████
//███████████████████████████████████████████

//░░░░░░░░░░░░ CENTRO DE CORREOS ░░░░░░░░░░░░

// SWITCH EMAIL PREVIEW
function switchEmailPreview(emailType) {
    switch(emailType) {
        case 'emailType__BienvenidaCliente':
            emailPreviewBox.setAttribute("src", "./email/Bienvenida_Cliente/index.html");
            emailSubjectInput.value = "Bienvenido a la familia Inadaptado 🤘";
            var contenidoInput = emailSubjectInput.value;
            emailSubjectPreview.innerHTML = contenidoInput;
            emailPreheaderInput.value = "Todo comienzo tiene su encanto.";
            var contenidoInput = emailPreheaderInput.value;
            emailPreheaderPreview.innerHTML = contenidoInput;

            emailUrlInput.parentElement.classList.remove('hide');
            emailPassInput.parentElement.classList.remove('hide');
            emailUserInput.parentElement.classList.remove('hide');
            emailMsgInput.parentElement.classList.add('hide');
            break;

        case 'emailType__BienvenidaEquipo':
            emailPreviewBox.setAttribute("src", "./email/Bienvenida_Equipo/index.html");
            emailUrlInput.parentElement.classList.remove('hide');
            emailPassInput.parentElement.classList.remove('hide');
            emailUserInput.parentElement.classList.remove('hide');
            emailMsgInput.parentElement.classList.add('hide');
            break;

        case 'emailType__CredencialesCliente':
            emailPreviewBox.setAttribute("src", "./email/Credenciales_Cliente/index.html");
            emailUrlInput.parentElement.classList.remove('hide');
            emailPassInput.parentElement.classList.remove('hide');
            emailUserInput.parentElement.classList.remove('hide');
            emailMsgInput.parentElement.classList.add('hide');
            emailUrlInput.parentElement.classList.add('hide');
            break;

        case 'emailType__CotizacionCliente':
            emailPreviewBox.setAttribute("src", "./email/Cotizacion_Cliente/index.html");
            emailUrlInput.parentElement.classList.remove('hide');
            emailPassInput.parentElement.classList.remove('hide');
            emailUserInput.parentElement.classList.remove('hide');
            emailMsgInput.parentElement.classList.add('hide');
            break;

        default:
            emailPreviewBox.setAttribute("src", "./email/Base/index.html");
            emailUrlInput.parentElement.classList.add('hide');
            emailPassInput.parentElement.classList.add('hide');
            emailUserInput.parentElement.classList.add('hide');
            break;
    }
}

// VALID FORM DATA
function validFormData(e) {
    //Reset Styles
    e.target.style.border = "none";
    e.target.style.borderBottom = "1px solid #000000";

    //Valid empty inputs
    if(e.target.value.length > 0) {
        e.target.style.border = "1px solid green";
        var checkEmptyInputs = true;
    } else {
        createNotification(msgEmptyInput);
        e.target.style.border = "1px solid red";
        var checkEmptyInputs = false;
    }

    //Valid email format
    if(e.target.type === 'email') {
        var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regEx.test(e.target.value)) {
            e.target.style.border = "1px solid red";
            createNotification("ERROR: Formato email");
            var checkEmailFormat = false;
        } else {
            e.target.style.border = "1px solid green";
            var checkEmailFormat = true;
        }
    }

    //Valid subject length
    if(e.target.id == "form-email-data__subject") {
        if(e.target.value.length > 50) {
            e.target.style.border = "1px solid red";
            createNotification("Excede el maximo de caracteres");
            var checkSubjectLength = false;
        } else {
            e.target.style.border = "1px solid green";
            var checkSubjectLength = true;
        }
    }

    //Valid preheader length
    if(e.target.id == "form-email-data__preheader") {
        if(e.target.value.length > 100) {
            e.target.style.border = "1px solid red";
            createNotification("Excede el maximo de caracteres");
            var checkPreheaderLength = false;
        } else {
            e.target.style.border = "1px solid green";
            var checkPreheaderLength = true;
        }
    }

    if(checkEmptyInputs === true && checkEmailFormat === true && checkSubjectLength === true && checkPreheaderLength === true){
        var subject = emailSubjectInput.value;
        var preheader = emailSubjectInput.value;
        var to = emailSubjectInput.value;
        var from = emailSubjectInput.value;

        var text = subject + preheader + to + from;
        console.log(text);
        emailPreviewSubmitBtn.disabled = false;
        // sendEmail();
    }
}

// RESET FORM DATA
function resetFormData(e) {
    e.preventDefault();
    emailFormData.reset();
    for(i=0;i<emailInputs.length;i++) {
        emailInputs[i].style.border = "none";
        emailInputs[i].style.borderBottom = "1px solid #000000";
    }
}

// SEND EMAIL
function sendEmail(to, from, subject, body) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nico.gaitangomez@gmail.com",
        Password : "308D9249FA1454B946B211BE5C087AF0CFDA",
        To : 'nico_7760@hotmail.com',
        From : "nico.gaitangomez@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
}

//░░░░░░░░░░░░ TOAST NOTIFICATION ░░░░░░░░░░░░
function createNotification(mensaje) {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notification.appendChild(notif);

    notif.innerText = mensaje;

    setTimeout(() => {
        notif.remove();
    }, 3000);
}
