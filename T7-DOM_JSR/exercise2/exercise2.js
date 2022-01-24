
    let ocultarMostra = function(idParrafo, idEnlace) {
       
        let estado = document.getElementById(idEnlace).innerHTML;
        //Si texto de idEnlace == Ocultar
        if(estado == "Ocultar"){
            //El parrado se muestra
            document.getElementById(idParrafo).className = "ocult"
            //Yse cambia el texto de idEnlace a "Mostrar"
            document.getElementById(idEnlace).innerHTML = "Mostrar"
            
        }else if(estado == "Mostrar"){
            document.getElementById(idParrafo).className = "visible"
            document.getElementById(idEnlace).innerHTML = "Ocultar"

        }
        

    }
