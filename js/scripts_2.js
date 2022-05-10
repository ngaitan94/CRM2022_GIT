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

const checkEmptyInputs = false;
const checkEmailFormat = false;
const checkSubjectLength = false;
const checkPreheaderLength = false;

//░░░░░░░░░░░░ TOAST NOTIFICATION ░░░░░░░░░░░░
const notification = document.getElementById("notification");
const msgEmptyInput = "Hay campos vacios";
const msgSendEmail = "📫 Mensaje enviado con exito!";
const msgErrSendEmail = "No se pudo enviar el mensaje";
const msgErrValidForm = "Formulario invalido";


//███████████████████████████████████████████
//████████████  EVENT LISTENERS  ████████████
//███████████████████████████████████████████

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

//███████████████████████████████████████████
//████████████      FUCTIONS     ████████████
//███████████████████████████████████████████

//░░░░░░░░░░░░ CENTRO DE CORREOS ░░░░░░░░░░░░

function validFormData(e) {
    //Reset Styles
    e.target.style.border = "none";
    e.target.style.borderBottom = "1px solid #000000";

    if(e.target.type === 'email') {
        var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regEx.test(e.target.value)) {
            e.target.style.border = "1px solid red";
            createNotification("ERROR: Formato email");
        } else {
            e.target.style.border = "1px solid green";
            const checkEmailFormat = true;

        }
    }

    //Valid subject length
    if(e.target.id == "form-email-data__subject") {
        if(e.target.value.length > 50) {
            e.target.style.border = "1px solid red";
            createNotification("Excede el maximo de caracteres");
        } else {
            e.target.style.border = "1px solid green";
            const checkSubjectLength = true;
        }
    }

    //Valid preheader length
    if(e.target.id == "form-email-data__preheader") {
        if(e.target.value.length > 100) {
            e.target.style.border = "1px solid red";
            createNotification("Excede el maximo de caracteres");
        } else {
            e.target.style.border = "1px solid green";
            const checkPreheaderLength = true;
        }
    }

    //Valid empty inputs
    if(e.target.value.length > 0) {
        e.target.style.border = "1px solid green";
        const checkEmptyInputs = true;
    } else {
        createNotification(msgEmptyInput);
        e.target.style.border = "1px solid red";
    }

    if(checkEmptyInputs == true && checkEmailFormat == true && checkSubjectLength == true && checkPreheaderLength == true){
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

// SWITCH EMAIL PREVIEW
function switchEmailPreview(emailType) {
    switch(emailType) {
        case 'emailType__BienvenidaCliente':
            emailPreviewBox.setAttribute("src", "./email/Bienvenida_Cliente/index.html");
            break;
        
        case 'emailType__BienvenidaEquipo':
            emailPreviewBox.setAttribute("src", "./email/Bienvenida_Equipo/index.html");
            break;

        case 'emailType__CredencialesCliente':
            emailPreviewBox.setAttribute("src", "./email/Credenciales_Cliente/index.html");
            break;

        case 'emailType__CotizacionCliente':
            emailPreviewBox.setAttribute("src", "./email/Cotizacion_Cliente/index.html");
            break;

        default:
            emailPreviewBox.setAttribute("src", "./email/Base/index.html");
            break;
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
