$('.card-figure').hover(
    function() {
      var image = $(this).find('.card-image');
      var newImg = image.attr('data-hoverimage');
      var currentImg = image.attr('src');
        if (newImg && newImg != '') image.attr('src', newImg);
   }, function() {
      var image = $(this).find('.card-image');
      var newImg = image.attr('data-src');
      var currentImg = image.attr('src');
        if (newImg && newImg != '') image.attr('src', newImg);
    }
);