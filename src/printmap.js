import jspdf from 'jspdf';
import layers from './layers.js';

const printmap = {

  setPixelRatio(dpi) {
    this.actualPixelRatio = window.devicePixelRatio;
    Object.defineProperty(window, 'devicePixelRatio', {
      get: () => dpi / 96
    });
  },

  resetPixelRatio() {
    Object.defineProperty(window, 'devicePixelRatio', {
      get: () => this.actualPixelRatio
    });
  },

  generatePDF(map, options, progressfn) {
    // Calculate pixel ratio
    this.setPixelRatio(options.dpi);

    console.time("PDF generation");

    // initialise pdf. delete first page to simplify addImage-loop
    const pdf = new jspdf({compress: true});
    pdf.setFontSize(9);
    pdf.deletePage(1);

    // generate functions
    const loadMapImage = loadMap(map, options.format, options.margin);
    const addMapImage = addMap(pdf);

    let count = 0;
    const totalMaps = map.cutouts.features.length;
    progressfn(count, totalMaps);

    map.cutouts.features.reduce(
      (sequence, feature) => {
        return sequence
          .then(() => loadMapImage(feature))
          .then((image) => {
          console.time("Load map image " + count);
          addMapImage(image);
          console.timeEnd("Load map image " + count);
          progressfn(count++, totalMaps);
        });
      }, Promise.resolve())
      .then(() => {
        pdf.save(map.name + ".pdf");
        progressfn(totalMaps, totalMaps);
        map.remove();
        console.timeEnd("PDF generation");
        this.resetPixelRatio();
      });
  }
};

function loadMap(map, format, margin) {
  return (feature) => map.cutoutMap(feature, format, margin);
}

function addMap(pdf) {
  var count = 0;
  const factor = pdf.internal.getFontSize() / pdf.internal.scaleFactor;
  return (img) => {
    pdf.addPage(img.format, img.orientation);
    pdf.addImage({
      imageData: img.data,
      x: img.margin,
      y: img.margin,
      w: img.width,
      h: img.height,
      compression: 'FAST',
      alias: "map" + count++  // setting alias improves speed ~2x
    });
    pdf.text(img.details(count), img.margin, img.margin + img.height + factor);
  };
}

export default printmap;

