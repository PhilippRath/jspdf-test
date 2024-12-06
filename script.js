'use strict';

const downloadBtn = document.querySelector('#downloadButton');
const { jsPDF } = window.jspdf;
 
function generatePDF() {

    html2canvas(document.querySelector(".content")).then(canvas => {
        let imgData = canvas.toDataURL('image/png');
        let pdf = new jsPDF('l', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save(pdfname);
    });
}

function generatePdfFromHTML() {
    
    let pdf = new jsPDF('l', 'mm', 'a4');
    
    pdf.html(document.querySelector(".content"), {
        callback: function (doc) {
          doc.save();
        },
        x: 10,
        y: 10,
        html2canvas: {
          scale: 0.2
        }
     });
}
