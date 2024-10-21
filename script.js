const receiverName = document.querySelector("#receiver");
receiverName.innerText = new URLSearchParams(location.search).get("receiver");

