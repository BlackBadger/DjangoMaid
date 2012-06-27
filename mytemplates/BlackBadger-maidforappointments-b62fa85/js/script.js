$(document).ready(function() {
	$('#alertBox').delay(5000).slideUp('slow');
});

$('.apptPop').mouseover().popover('show');
$('.apptPop').mouseleave().popover('hide');

$(document).ready(function() {
	$('.dropdown-toggle').dropdown();
});

$(function() {
	$( "#from" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 3,
		onSelect: function( selectedDate ) {
			$( "#to" ).datepicker( "option", "minDate", selectedDate );
		}
	});
	$( "#to" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 3,
		onSelect: function( selectedDate ) {
			$( "#from" ).datepicker( "option", "maxDate", selectedDate );
		}
	});
});

$("#dropper").click(function(){
	$("#drop").slideToggle();
	$("#dropper").html("<i class='icon-chevron-up icon-white' id='iconSwitch'></i> Finish Now");
});