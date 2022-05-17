//Adaptee: La clase que se va a adaptar para que funcione bajo una nueva interfaz

export class HDMI{

    public HDMI(){
        console.log("Nuevo Conector de HDMI creado");
    }

    public obtenerVideoHd(){
        console.log("Video obtenido desde fuente HD")
    }

    public obtenerAudioHD(){
        console.log("Audio obtenido desde fuente HD")
    }
}