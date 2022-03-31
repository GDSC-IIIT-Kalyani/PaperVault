
document.querySelector(".contact-form").addEventListener("submit",submitform)

function submitform(e){
	e.preventDefault();
	let name = document.querySelector(".name").value;
	let email = document.querySelector(".email").value;
	let message = document.querySelector(".message").value;

    document.querySelector(".contact-form").reset();
    sendEmail(name, email, message);
}


function sendEmail(name, email,message)
{
	Email.send({
		Host: "smtp.gmail.com",
        Username: 'papervault.IIITK@gmail.com',
        Password: "Paper_Vault@15",
        To: 'papervault.IIITK@gmail.com',
        From: 'papervault.IIITK@gmail.com',
        Subject: `${name} sent you a Request(PaperVault)`,
        Body: `Name: ${name}<br/> Email: ${email} <br/> Request: <br/> ${message}`,
	}).then((message)=> alert("Your Request has been sent successfully"))
}