import "../../styles/card.css";
import restaurants from "../../DATA.json";

class Card extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  dataCard(data) {
    let card = "";
    for (let item of data.restaurants) {
      card += `
        <div class="card" data-label="${item.city}">
          <div class="card-container">
            <div class="card-img">
                <img src="${item.pictureId}" alt="content-img-1">
            </div>
            <div class="card-text">
                <div class="card-star">
                ${item.rating}
                </div>
                <div class="card-title">
                ${item.name}
                </div>
                <div class="card-desc">
                ${item.description}
                </div>
            </div>
          </div>
        </div>`;
    }
    return card;
  }

  render() {
    this.innerHTML = `
    <div class="container-card content">
    ${this.dataCard(restaurants)}
    </div>
          `;
  }
}
customElements.define("card-item", Card);
