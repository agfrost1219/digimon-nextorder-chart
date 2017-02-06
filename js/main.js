$.views.converters("getStat", function(val, stat) {
  var filtered = StatLookup.filter(function (evo) {
    return  evo.Evolution == val ;
    });
  if(filtered.length > 0)
  return filtered[0][stat]
    else
  return val
});



var digTmpl = $.templates("#newTemplate");
var html = digTmpl.render(DigimonEvolutions);
$("#digimon").html(html);


$(".search").change(function(e) {
  var filtered = DigimonEvolutions.filter(function (el) {
    return el.Name.indexOf($(e.target).val()) > -1 ||
           el.Evolution.indexOf($(e.target).val()) > -1 ;
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

$(".collapseBtn").click(function() {
  if($(this).val() == "Collapse All"){
    $(".panel-heading").parents('.panel').find('.tablePanel').slideUp();
		$(".panel-heading").addClass('panel-collapsed');
    $(".panel-heading").find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    $(this).val("Expand All");
  }else{
    $(".panel-heading").parents('.panel').find('.tablePanel').slideDown();
		$(".panel-heading").removeClass('panel-collapsed');
		$(".panel-heading").find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up'); 
    $(this).val("Collapse All");
  }
});