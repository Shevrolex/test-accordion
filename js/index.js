$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
});

// const element = document.querySelectorAll('.select-custom');
//   const choices = new Choices(element, {
//     searchEnabled: false,
//     itemSelectText: ""
//   });

const multySelect = () => {
  const elements = document.querySelectorAll('.select-custom');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ""
    });
  })
}
multySelect();