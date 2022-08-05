function previewFile() {
  const preview = document.querySelector('#preview');
  const files = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {
      const reader = new FileReader();
      if (/\.(jpe?g|png|gif|mp4)$/i.test(file.name))
      reader.addEventListener("load", () => {
        const video = new Video();
        video.height = 100;
        video.title = file.name;
        video.src = this.result;
        preview.appendChild(video);
      }, false);

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}
