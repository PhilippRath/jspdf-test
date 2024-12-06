import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

import './style.css'

const content = document.getElementById('stundenplanTablle')
const generatePDFButton = document.getElementById('generatePDFButton')
const generatePDFFromHTMLButton = document.getElementById('generatePDFFromHTMLButton')

function initialize() {
  generatePDFButton.addEventListener('click', generatePDF)
  generatePDFFromHTMLButton.addEventListener('click', generatePDFfromHTML)
}

function generatePDFfromHTML() {
  const pdf = new jsPDF('l', 'mm', 'a4')
  pdf.html(content, {
    callback: function (pdf) {
      pdf.save('download.pdf')
    },
    x: 10,
    y: 10,
    html2canvas: {
      scale: 0.5 // Adjust the scale to fit the content on one page
    }
  })
}

function generatePDF() {
  html2canvas(content).then((canvas) => {
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('l', 'mm', 'a4')
    const width = pdf.internal.pageSize.getWidth()
    const height = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgData, 'PNG', 0, 0, width, height)
    pdf.save('download.pdf')
  })
} 

initialize()
