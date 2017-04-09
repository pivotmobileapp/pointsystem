ons.bootstrap();
/*________________________________Sign Up_________________________________________________________*/
function signup() {

	$.validate({
		form: '#frm-signup',
		borderColorOnError: "#FF0000",
		onError: function () {},
		onSuccess: function () {

			if ($('.iagree-wrap').is(':visible')) {
				var iagree = $(".iagree:checked").val();
				if (empty(iagree)) {
					onsenAlert(getTrans("You must agree to terms & conditions", 'agree_terms'));
					return;
				}
			}

			var params = $("#frm-signup").serialize();

			$.ajax({
				url: "http://fellybellyapp.com/mobileapp/api/signup?"+params+"",
				data: "&lang_id=&api_key=fed7b441b349bae8f146711fbd215e90",
				type: 'post',
				async: false,
				dataType: 'jsonp',
				timeout: 6000,
				crossDomain: true,

				success: function (dataa) {
					console.log(dataa)
				}
			})
			return false;
		}
	});
}
/*________________________________Phone Plugin_________________________________________________________*/
function initIntelInputs() {


	myNavigator.pushPage('create.html', {
		animation: 'slide'
	}).then(function () {
		$(".mobile_inputss").intlTelInput({
			autoPlaceholder: false,
			autoHideDialCode: true,
			nationalMode: false,
			autoFormat: false,
			utilsScript: "lib/utils.js"
		});

	})


}
/*________________________________table_________________________________________________________*/
function lookUp() {
	myNavigator.pushPage('lookup.html', { animation : 'slide' } ).then(function(){
		$('#table_lis').DataTable();
		var params=$("#frm_table").serialize();
		var axajurl = "fellybellyapp.com/pointsprogram/ajax/";
		$.ajax({
			url: axajurl+ $("#action").val()+"/?currentController=admin&"+params,
			data: "&lang_id=&api_key=fed7b441b349bae8f146711fbd215e90",
			type: 'post',
			async: false,
			dataType: 'jsonp',
			timeout: 6000,
			crossDomain: true,

			success: function (dataa) {
				console.log(dataa)
			}
		})
	})
}
function addPoint() {
	var addcast = $('#addcast').val();
	var addpoints = $('#addpoints').val();
	console.log(addcast);
	console.log(addpoints);
 	$.ajax({
		url:'http://fellybellyapp.com/mobileapp/api/addpoint',
		data: {'addcast':addcast,addpoints:addpoints},
		type: 'get',
		dataType: 'jsonp',
		crossDomain: true,
		success: function (data) {
			if(data.details.error){
				$('.sucPoint').css({'color':'red'})
				$('.sucPoint').html(data.details.error)
			}else{
				$('.sucPoint').css({'color':'green'})
				$('.sucPoint').html(data.details.success)
			}
		}
	})
}
 function addPointexp(){

	var addcast = $('#redeemcast').val();
	var addpoints = $('#redeempoints').val();
	$.ajax({
		url:'http://fellybellyapp.com/mobileapp/api/Addpointexp',
		data: {'addcast':addcast,addpoints:addpoints},
		type: 'get',
		dataType: 'jsonp',
		crossDomain: true,
		success: function (data) {
			 if(data.details.error){
				 $('.sucPointexp').css({'color':'red'})
				 $('.sucPointexp').html(data.details.error)
			 }else{
				 $('.sucPointexp').css({'color':'green'})
				 $('.sucPointexp').html(data.details.success)
			 }
		}
	})
}
