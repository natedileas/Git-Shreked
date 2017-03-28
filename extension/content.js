// content.js
//alert("Hello from your Chrome extension!")

//.header.style.backgroundColor = '#75F514'

var ele = document.getElementsByClassName("header")[0]

ele.style.backgroundColor = "#0acb0f"

var ele = document.getElementsByClassName("header-logo-invertocat")[0]

new_element = document.createElement("a");
new_element.href = "http://github.com";
new_element.className = "header-logo-invertocat";
new_element.aria_label = "Homepage"

var image = document.createElement("img");
image.src =  chrome.extension.getURL("shrek_outline2.png");
image.className = "octicon octicon-mark-github"
image.viewBox = "0 0 16 16"
image.aria_hidden = "true"
image.height = 30
image.width = 30
new_element.appendChild(image);

ele.replaceWith(new_element);
