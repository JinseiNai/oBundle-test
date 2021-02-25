$('.card-figure').hover(
  function () {
    const image = $(this).find('.card-image');
    const newImg = image.attr('data-hoverimage');
    const currentImg = image.attr('src');
    if (newImg && newImg !== '') image.attr('src', newImg);
  },
  function () {
    const image = $(this).find('.card-image');
    const newImg = image.attr('data-src');
    const currentImg = image.attr('src');
    if (newImg && newImg !== '') image.attr('src', newImg);
  }
);