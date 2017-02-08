$.views.converters("getStat", function(val, stat) {
  var filtered = StatLookup.filter(function (evo) {
    return  evo.Evolution == val ;
  });
  if(filtered.length > 0)
    return filtered[0][stat];
  else
    return "";
});

$.views.helpers({
    getStat: getStat
  });


$("form").submit(function(e) {
  e.preventDefault();
  var searchText = $(".search").val();
  var filtered = [];
  //Check for , to be able to display specific digimon
  if(searchText.indexOf(',') > -1){
    var splitText = searchText.split(',');
    for(i=0;i<splitText.length;i++){
      filtered.push(DigimonEvolutions.filter(function (el) {
        return el.Name.toUpperCase() == splitText[i].toUpperCase();
      }));
    }
  }else{
  filtered = DigimonEvolutions.filter(function (el) {
    return el.Name.toUpperCase().indexOf(searchText.toUpperCase()) > -1 ||
           el.Evolution.indexOf($(".search").val()) > -1 ;
    });
  }
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
    return el.Name.toUpperCase() == name.toUpperCase();
    });
  var tmpl = $.templates("#newTemplate");
  var html = tmpl.render(filtered);
  $("#digimon").html(html);
  $(".search").val(name);
}


function getStat(val, stat){
  var filtered = StatLookup.filter(function (evo) {
    return  evo.Evolution == val ;
  });
  if(filtered.length > 0)
    return filtered[0][stat];
  else
    return "";
}