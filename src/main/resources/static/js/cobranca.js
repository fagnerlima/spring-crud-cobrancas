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