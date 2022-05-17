import { HDMI } from "./HDMI";

//Adaptador de clase (Adapter)
export class HDMIAdapter implements RCA{
    constructor(
        private RCA: HDMI
    ){}
    public obtenerCanalVideo(): string{
        this.RCA.obtenerVideoHd();
        return "Convertir fuente de video HD a Video analógico";
    }
    public obtenerCanalAudioDcho(): string{
        this.RCA.obtenerAudioHD();
        return "Convertir fuente de audio HD a Audio analógico Derecho";
    }
    public obtenerCanalAudioIzdo(): string {
        this.RCA.obtenerAudioHD();
        return "Convertir fuente de audio HD a Audio analógico Izquierdo";
    }
}