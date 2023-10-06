export default class Tooltip {
  constructor() {
    this.button = document.querySelector('.glowing-btn');
    this.body = document.querySelector('body');
  }

  addTooltip() {
    this.button.insertAdjacentHTML(
      'beforeend',
      `
    <div class='tooltip'>
    <p class='tooltip-header'>${this.button.dataset.header}</p>
    <p class='tooltip-text'>${this.button.dataset.content}</p>
    </div>
    `,
    );
  }

  clickPopover() {
    this.button.addEventListener('click', () => {
      if (document.querySelector('.tooltip') === null) {
        this.addTooltip();
        document.querySelector('.tooltip').style.bottom = `${70}px`;
        document.querySelector('.tooltip').style.left = `${22}px`;
      } else if (document.querySelector('.tooltip') !== null) {
        document.querySelector('.tooltip').remove();
      }
    });
  }
}
