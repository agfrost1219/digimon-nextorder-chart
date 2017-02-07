$.views.converters("getStat", function(val, stat) {
  var filtered = StatLookup.filter(function (evo) {
    return  evo.Evolution == val ;
    });
  if(filtered.length > 0)
  return filtered[0][stat]
    else
  return val
});

$("form").submit(function(e) {
  e.preventDefault();
  var filtered = DigimonEvolutions.filter(function (el) {
    return el.Name.toUpperCase().indexOf($(".search").val().toUpperCase()) > -1 ||
           el.Evolution.indexOf($(".search").val()) > -1 ;
    });
  var tmpl = $.templates("#newTemplate");
  var html = tmpl.render(filtered);
  $("#digimon").html(html);
});


$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.tablePanel').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.tablePanel').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})


function goToEvolution(name){
  var filtered = DigimonEvolutions.filter(function (el) {
    return el.Name.toUpperCase() == name.toUpperCase()
    });
  var tmpl = $.templates("#newTemplate");
  var html = tmpl.render(filtered);
  $("#digimon").html(html);
  $(".search").val(name);
}