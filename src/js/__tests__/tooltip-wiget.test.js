import Tooltip from "../tooltip/tooltip-wiget";

test("tooltip-wiget", () => {
  const tooltip = document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `
    <button
      class="glowing-btn"
      data-header="Заголовок поповера"
      data-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam perspiciatis error libero obcaecati nemo natus assumenda facilis quae quod veritatis! Sapiente accusantium quibusdam vitae blanditiis id aspernatur vero similique facilis."
    >
      <span class="glowing-txt"
        >PO<span class="faulty-letter">PO</span>VER</span
      >
    </button>
      <div class='tooltip'>
      <p class='tooltip-header'>Заголовок поповера</p>
      <p class='tooltip-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam perspiciatis error libero obcaecati nemo natus assumenda facilis quae quod veritatis! Sapiente accusantium quibusdam vitae blanditiis id aspernatur vero similique facilis.</p>
      </div>
      `
  );
  console.log(document.querySelector("body").innerHTML);
  const button = document.querySelector(".glowing-btn");
  const body = document.querySelector("body");
  const addTooltip = new Tooltip(button, body);

  expect(tooltip).toEqual(addTooltip.addTooltip());
});
