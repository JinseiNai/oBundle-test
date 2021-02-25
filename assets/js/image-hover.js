$('.card-figure').hover(
    function () {
      let image = $(this).find('.card-image');
      let newImg = image.attr('data-hoverimage');
      let currentImg = image.attr('src');
        if (newImg && newImg !== '') image.attr('src', newImg);
   }, function() {
      let image = $(this).find('.card-image');
      let newImg = image.attr('data-src');
      let currentImg = image.attr('src');
        if (newImg && newImg !== '') image.attr('src', newImg);
    }
);