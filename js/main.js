
var categorias = ["Accion", "Ciencia-Ficción", "Suspenso", "Terror", "Comedia", "Romantica", "Familiar", "Infantil" ]
$(document).ready(function(){
	
	$(".flyer").click(function(){
		$(this).appendTo(".img");
	});

	categorias.forEach(function (element, index, array) {
	 	$("select").append("<option>"+ array[index] + "</option>");
	 });
});

/*
	$(".menu").click(function () {
		 var valor = "#" + $("#menu").val();
		$("#all").children().not(valor+", .menu").hide()
	});
});
	
*/
/*
	$("#menu").change(function () {
		var valor = $("#menu").val();

		$(".col-md-12").not()
	}) */
//sirve para menu!
	$("#accion").click(function () {

		$("div").hide();
	   	$("#accion").show();
	});
	$("#ciencia-ficcion").click(function () {
	   	$("div").hide();
	   	$("#ciencia-ficcion" ).show();
	});
	$("#suspenso").click(function () {
	   	$("div").hide();
	   	$("#suspenso").show();
	});	
	$("#terror").click(function () {
	   	$("div").hide();
	   	$("#terror").show();
	});
   $("#comedia").click(function () {
	   	$("div").hide();
	   	$("#comedia").show();
	});
   $("#romantica").click(function () {
	   	$("div").hide();
	   	$("#romantica").show();
	});
   $("#familiar").click(function () {
	   	$("div").hide();
	   	$("#familiar").show();
	});
   $("#infantil").click(function () {
	   	$("div").hide();
	   	$("#infantil").show();
	});
});
//sirve para menu!

/*   /*$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	});*/


