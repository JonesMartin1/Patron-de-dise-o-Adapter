import {HDMI} from "../Archivos/HDMI"
import {HDMIAdapter} from "../Archivos/HDMIAdapter"


test('01_Cuando_obtenerVideohd_deberia_convertirse_en_Analogico', () => {
    const HdmiToRga = new HDMIAdapter(new HDMI);
    expect(HdmiToRga.obtenerCanalVideo()).toBe("Convertir fuente de video HD a Video analógico")
});