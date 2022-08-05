const generateButton = document.getElementById("generate");

generateButton.onclick = () => {
  const domain = 'https://cloud-nihonio-uploads/media/';
  const author = document.getElementById("author").value.replace("\n", "\\n");
  const title = document.getElementById("title").value.replace("\n", "\\n");
  const description = document
    .getElementById("description")
    .value.replace("\n", "\\n");
  const color = document.getElementById("color").value;
 
  const params = new URLSearchParams();
  if (author) params.set("author", encodeURIComponent(author));
  if (title) params.set("title", encodeURIComponent(title));
  if (description) params.set("description", encodeURIComponent(description));
  if (color !== "#000000") params.set("color", color.slice(1));

  const finalURLText = document.getElementById("finalURLText");
  finalURLText.innerText = `${domain}?${params.toString()}`;
  const finalURL = document.getElementById("finalURL");
  finalURL.hidden = false;
};
