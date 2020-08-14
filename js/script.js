
if(window.SimpleAnime) {
new SimpleAnime();
} 

if(window.SimpleForm) {
    new SimpleForm({
        form: ".formphp",
        button: "#enviar",
        erro:"<div id='form-erro'> <h2> Um erro ocorreu, tente enviar um e-mail para bikcraft@bikcraft.com </h2> </div>",
        sucesso: "<div id='form-sucesso'> <p> <h2> E-mail enviado com sucesso! Em breve entraremos em contato</h2> </div> " 
    })
} 