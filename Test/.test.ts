import {HDMI} from "../Archivos/HDMI"
import {HDMIAdapter} from "../Archivos/HDMIAdapter"


test('01_Cuando_obtenerVideohd_deberia_convertirse_en_video_Analogico', () => {
    const HdmiToRca = new HDMIAdapter(new HDMI);
    expect(HdmiToRca.obtenerCanalVideo()).toBe("Convertir fuente de video HD a Video analógico");
});

test('02_Cuando_obtenerAudiohd_deberia_convertirse_en_video_Analogico', () => {
    const HdmiToRca = new HDMIAdapter(new HDMI);
    expect(HdmiToRca.obtenerCanalAudioDcho()).toBe("Convertir fuente de audio HD a Audio analógico Derecho");
    expect(HdmiToRca.obtenerCanalAudioIzdo()).toBe("Convertir fuente de audio HD a Audio analógico Izquierdo");
});