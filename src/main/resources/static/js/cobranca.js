$(function() {
	// Exclusão de título
	$('#confirmacaoExclusaoModal').on('show.bs.modal', function(event) {
		var button = $(event.relatedTarget);
		var id = button.data('id');
		var descricao = button.data('descricao');
		
		var modal = $(this);
		var form = modal.find('form');
		var baseurl = form.data('baseurl');
		
		if(!baseurl.endsWith('/'))
			baseurl += '/';
		
		form.attr('action', baseurl + id);
		modal.find('.modal-body span').html('Tem certeza que deseja excluir o título <b>' + id + '</b> (<b>' + descricao + '</b>)?');
	});
	
	// Tooltip
	$('[rel="tooltip"]').tooltip();
	
	// MaskMoney
	$('.currency').maskMoney({
		decimal: ',',
		thousands: '.',
		allowzero: true
	});
	
	// Atualizar status
	$('.atualizar-status').click(function(event) {
		event.preventDefault();
		
		var botaoReceber = $(event.currentTarget);
		var urlReceber = botaoReceber.attr('href');

		var response = $.ajax({
			url: urlReceber,
			type: 'PUT'
		});
		
		response.done(function(e) {
			var id = botaoReceber.data('id');
			$('[data-role=' + id + ']').html('<span class="label label-success">' + e + '</span>');
			
			botaoReceber.hide();
			
		});
		
		response.fail(function(e) {
			alert('Erro no recebimento da cobrança.');
		});
	});
});