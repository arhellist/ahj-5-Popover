export default class Tooltip {
  constructor() {
    this.button = document.querySelector('.glowing-btn');
    this.body = document.querySelector('body');
  }

  addTooltip() {
    this.body.insertAdjacentHTML(
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
        const { left, top } = document
          .querySelector('.tooltip')
          .getBoundingClientRect(); // находим коордираны всплывающего окна
        document.querySelector('.tooltip').style.left = `${left}px`; // позиционируем левую сторону относительно левого края страницы
        document.querySelector('.tooltip').style.bottom = `${top + 140}px`; // позиционируем нижнюю сторону относительно верхнего края края всплывающего окна (исходного полложения)
      } else if (document.querySelector('.tooltip') !== null) {
        document.querySelector('.tooltip').remove();
      }
    });
  }
}
