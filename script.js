function ChangeBlackColor1(){
  document.getElementsByClassName("button1").style.backgroundColor = "#000000"
  document.getElementsByClassName("button1").textContent = "#ffffff"
}
function ChangeBlackColor2(){
  document.getElementsByClassName("button2").style.backgroundColor = "#000000"
  document.getElementsByClassName("button2").textContent = "#ffffff"
}
function ChangeBlackColor3(){
  document.getElementsByClassName("button3").style.backgroundColor = "#000000"
  document.getElementsByClassName("button3").textContent = "#ffffff"
}
function cardContainer(){
  // Define the API URL
const apiUrl = ' https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}
