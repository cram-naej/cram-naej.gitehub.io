const request = new XMLHttpRequest();

try {
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://canaux.bretagne.bzh/actualites/consulter-les-horaires-de-lecluse-du-chatelier/");
req.send();

} catch (error) {
  console.error(`Erreur XHR ${request.status}`);
}
