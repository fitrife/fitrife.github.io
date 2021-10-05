window.onload = function () {
  document.getElementById("download").addEventListener("click", () => {
    const page = this.document.getElementById("page");
    console.log(page);
    console.log(window);
    var opt = {
      margin: 1,
      filename: "fitri febriani_resume.pdf",
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(page).set(opt).save();
  });
};
