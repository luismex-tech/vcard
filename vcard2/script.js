document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDAD PARA GUARDAR CONTACTO (vCard .vcf) ---
    const saveContactBtn = document.getElementById('save-contact-btn');
    saveContactBtn.addEventListener('click', () => {
        // Datos actualizados para Pollos La Familia
        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Pollos La Familia
ORG:Pollos La Familia
TITLE:Ejecutivo de ventas
TEL;TYPE=WORK,VOICE:+5214776772422
EMAIL:galloradar@gmail.com
END:VCARD`;

        const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Pollos_La_Familia.vcf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // --- FUNCIONALIDAD PARA COMPARTIR LA TARJETA ---
    const shareBtn = document.getElementById('share-vcard-btn');
    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: 'Contacto de Pollos La Familia',
            text: 'Te comparto la tarjeta de contacto de Pollos La Familia.',
            url: window.location.href
        };

        // Usamos la API nativa para compartir si está disponible (mejor en móviles)
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                console.log('Tarjeta compartida exitosamente');
            } catch (err) {
                console.log('Error al compartir:', err);
            }
        } else {
            // Si no, mostramos un mensaje para que copien el enlace manualmente
            prompt('Copia este enlace para compartir:', window.location.href);
        }
    });

});
