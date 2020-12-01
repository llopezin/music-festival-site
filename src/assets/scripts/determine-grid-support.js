export default function addGridSupportClass() {
  if (browserSupportsGrid()) return;
  document.querySelector("body").classList.add("no-grid-support");
}

function browserSupportsGrid() {
  // create a div (could also reuse a known element)
  let el = document.createElement("div");
  // detect support
  return typeof el.style.grid === "string";
}
