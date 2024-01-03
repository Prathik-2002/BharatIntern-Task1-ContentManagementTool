var c = 0;
function submitForm() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var image = document.getElementById("image").files[0];
  var video = document.getElementById("video").files[0];

  var dataSection = document.getElementById("dataSection");
  if (image || video) {
    var newData =
      "<div class='card'>" +
      "<div class='card-header'>" +
      "<h3 class='card-title'><b>Title: </b>" +
      title +
      "</h3>" +
      "</div>" +
      "<div class='card-body'>" +
      "<p><b>Content: </b>" +
      content +
      "</p>";
    if (image) {
      newData += "<div><p><b>Image:</b></p>";
      newData +=
        "<div class='card-body-image'>" +
        "<img class='preview' src='" +
        URL.createObjectURL(image) +
        "' alt='Selected Image'>" +
        "</div></div>";
    }
    if (video) {
      newData += "<div><p><b>Video:</b></p>";
      newData +=
        "<div class='card-body-video'>" +
        "<video class='video-preview' src='" +
        URL.createObjectURL(video) +
        "' controls></video>" +
        "</div></div>";
    }
    newData += "</div></div>";
    c += 1;
    if (c == 1) {
      dataSection.innerHTML = newData;
    } else {
      dataSection.innerHTML += newData;
    }
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("image").value = "";
    document.getElementById("video").value = "";
  }
}
