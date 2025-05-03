import { useEffect, useRef } from 'react';
import { getDocument } from 'pdfjs-dist';

const CVViewer = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const loadingTask = getDocument('/cv.pdf');
        loadingTask.promise.then(pdf => {
            pdf.getPage(1).then(page => {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = canvasRef.current;
                if (canvas) {
                    const context = canvas.getContext('2d');
                    if (context) {
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        page.render({ canvasContext: context, viewport });
                    }
                }
            });
        });
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default CVViewer;
