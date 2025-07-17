export const getFileIcon = (filename) => {
  const ext = filename.split('.').pop().toLowerCase();

  const icons = {
    pdf: '/imgs/pdf.png',
    doc: '/imgs/doc.png',
    docx: '/imgs/doc.png',
    xls: '/imgs/xls.png',
    xlsx: '/imgs/xls.png',
    ppt: '/imgs/ppt.png',
    pptx: '/imgs/ppt.png',
    jpg: '/imgs/image.png',
    jpeg: '/imgs/image.png',
    png: '/imgs/image.png',
    gif: '/imgs/image.png',
    txt: '/imgs/txt.png',
    zip: '/imgs/pdf.png',
    rar: '/imgs/pdf.png',
    mp4: '/imgs/pdf.png',
    mp3: '/imgs/pdf.png',
    wav: '/imgs/pdf.png',
    csv: '/imgs/pdf.png',
  };

  return icons[ext] || '/file-icons/pdf.png';
};
