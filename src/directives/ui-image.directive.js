export function uiImage() {
  "ngInject";

  const loadImage = (image) => {
    return require(`@images/${image}`);
  };

  const link = (scope, element, attr) => {
    const src = attr.uiImage || attr.src;

    element.attr("src", loadImage(src));
  };

  return {
    restrict: "A",
    link,
  };
}
