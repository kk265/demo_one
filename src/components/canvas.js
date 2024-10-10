import React, { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';


function CanvasWithImage() {

    const handleDownload = () => {
        html2canvas(canvasRef.current).then(canvas => {
          const link = document.createElement('a');
          link.download = 'example.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const scale = window.devicePixelRatio;
    const width = window.innerWidth;

    canvas.width = width * scale;
    canvas.height = canvas.width * 0.75;

    // Rest of the drawing code goes here
  }, []);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
    
    img.src = '../images/bg-3.jpg';
  }, []); 

  return<>
  <canvas ref={canvasRef} className="canvas"/> 
   <button onClick={handleDownload}>Download</button>
  </> 
  ;
}

export default CanvasWithImage;