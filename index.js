let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function() {
    //console.log(tabs[0].url)
    //query only available once deployed
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) { 
    // });
    chrome.tabs.query({ active: true, currentWindow: true } ,function (tabs)  {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads); //calls the render function to display the new tab on the page
    })
})

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
    //console.log("I was dbl clicked!");
    myLeads = [];
    localStorage.clear();
    render(myLeads);
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  
  //console.log(localStorage.getItem("myLeads"));
});


