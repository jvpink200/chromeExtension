let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("I was dbl clicked!");
    myLeads = [];
    localStorage.clear();
    renderLeads();
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
    listItems +=
      `<li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
      </li>`;
    }
    ulEl.innerHTML = listItems;
}
