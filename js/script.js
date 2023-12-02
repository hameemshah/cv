["h1", "h2", "h3", "span:first"].forEach(function hoverEffect(item) {
  $(item).mouseenter(function () {
      $(this).css("color", "#11999E");
      if (!item.startsWith('h')) {
        $(this).css("backgroundColor", "#66BFBF");
      }
  });
});