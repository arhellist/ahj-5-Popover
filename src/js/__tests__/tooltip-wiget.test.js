import Tooltip from '../tooltip/tooltip-wiget';

test('tooltip-wiget', () => {
  const tooltip = document.querySelector('body').insertAdjacentHTML(
    'beforeend',
    `
      <div class='tooltip'>
      <p class='tooltip-header'>Заголовок поповера</p>
      <p class='tooltip-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam perspiciatis error libero obcaecati nemo natus assumenda facilis quae quod veritatis! Sapiente accusantium quibusdam vitae blanditiis id aspernatur vero similique facilis.</p>
      </div>
      `,
  );
  const addTooltip = new Tooltip();

  expect(tooltip).toEqual(addTooltip.addTooltip());
});
