// client/src/components/ConsentForm.jsx
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function ConsentForm() {
  const [content, setContent] = useState("Yo, como propietario, autorizo el servicio de estética...");
  const sigCanvas = useRef();

  const handleClear = () => sigCanvas.current.clear();
  const handleSave = () => {
    const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    // Aquí puedes enviar `content` y `signatureImage` al backend
    console.log("Firma guardada:", signatureImage);
  };

  return (
    <div>
      <h3>Formato de consentimiento</h3>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={6} />
      <h4>Firma del propietario:</h4>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 400, height: 200, className: 'sigCanvas' }}
      />
      <button onClick={handleClear}>Limpiar firma</button>
      <button onClick={handleSave}>Guardar consentimiento</button>
    </div>
  );
}

export default ConsentForm;
