//Cree un programa que puede adaptar la señal de un cable hdmi a un RCA y un programa que ocupa dos proveedores de correos distintos

import {HDMI} from "../Hdmi/HDMI"
import {HDMIAdapter} from "../HDMI/HDMIAdapter"
import { EmailProvider } from "../emailer/Target";
import { EmailProvider2 } from "../emailer/Adaptee";
import {EmailProvider2Adapter} from "../emailer/Adapter"


test('01_Cuando_obtenerVideohd_deberia_convertirse_en_video_Analogico', () => {
    const HdmiToRca = new HDMIAdapter(new HDMI);
    expect(HdmiToRca.obtenerCanalVideo()).toBe("Convertir fuente de video HD a Video analógico");
});

test('02_Cuando_obtenerAudiohd_deberia_convertirse_en_Audio_Analogico', () => {
    const HdmiToRca = new HDMIAdapter(new HDMI);
    expect(HdmiToRca.obtenerCanalAudioDcho()).toBe("Convertir fuente de audio HD a Audio analógico Derecho");
    expect(HdmiToRca.obtenerCanalAudioIzdo()).toBe("Convertir fuente de audio HD a Audio analógico Izquierdo");
});



test('03_Cuando_enviar_se_ejecuta_En_EmailProvider_Funciona', () => {
    const emailer = new EmailProvider();
    expect(emailer.enviar()).toBe("Enviar un mail por EmailProvider");
});

//Gracias al adapter ahora se puede usar el nuevo proveedor de correos con la interfaz deseada.
test('04_Cuando_enviar_se_ejecuta_En_EmailProvider2Adapter_Funciona', () => {
    const emailer = new EmailProvider2Adapter(new EmailProvider2);
    expect(emailer.enviar()).toBe("Enviar un mail por EmailProvider2");
});
