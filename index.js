const unitData = [
  {
    id: 1,
    unit: "1",
    text: "Standard Price",
    currentPrice: "$10.00 USD",
    originalPrice: "$24.00 USD",
    discount: "10% Off"
  },
  {
    id: 2,
    unit: "2",
    text: "",
    currentPrice: "$18.00 USD",
    originalPrice: "$24.00 USD",
    discount: "20% Off"
  },
  {
    id: 3,
    unit: "3",
    text: "",
    currentPrice: "$24.00 USD",
    originalPrice: "$24.00 USD",
    discount: "30% Off"
  }
];

function renderList(unitData) {
  const containerDiv = document.getElementsByClassName("unit-container")[0];
  containerDiv.innerHTML = "";

  unitData.forEach(e => {
    let dropdownsHTML = "";
    for (let i = 1; i <= e.unit; i++) {
      dropdownsHTML += `
            <tr>
              <td><label class="size">#${i}</label></td>
                  <td>
                <select id="size-${i}" class="dropdown">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
                  </td>
                  <td>
           
            <select id="color-${i}" class="dropdown">
              <option value="colour">Colour</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
            </select></td>
                </tr>`;
    }

    let unitHTML = `
        <div class="product-option">
          <label class="product-label">
            <input type="radio" name="product" value="${e.unit}">
            <span class="outer-circle"><span class="radio-btn"></span></span>
            <div class="product-details">
              <div class="price-description">
                <p class="unit-info">
                  ${e.unit} Unit
                  <span class="discount-badge">${e.discount}</span>
                </p>
                <p>${e.text}</p>
              </div>
              <div class="pricing-info">
                <p class="current-price">${e.currentPrice}</p>
                <p class="original-price">${e.originalPrice}</p>
              </div>
            </div>
          </label>
        <div class=" accordion-content accordion-${e.unit}">
        <table>   
              <tr>
                  <th></th>
                  <th>Size</th>
                  <th>Colour</th>
                </tr>           
            ${dropdownsHTML}
              </table>    
          </div>
           </div>  
        `;

    containerDiv.innerHTML += unitHTML;
  });
}

renderList(unitData);

const selection = Array.from(document.getElementsByClassName("product-option"))
const accordionItems = document.querySelectorAll(".accordion-content");



selection.forEach((e, i) => {
  e.addEventListener("click", (event) => {
    if (event.target.tagName === "SELECT" || event.target.tagName === "OPTION") {
      return;
    }
    const totalPrice = document.querySelector(".total")
    totalPrice.innerText = `Total : ${e.children[0].children[2].children[1].children[0].innerHTML} `
    accordionItems.forEach((item, index) => {
      if (index === i) {
        item.classList.toggle("open");
        e.classList.toggle("remove");
      } else {
        item.classList.remove("open");
        selection[index].classList.remove("remove");
      }
    });
  });
});

