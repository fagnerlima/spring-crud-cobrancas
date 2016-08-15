package br.pro.fagnerlima.cobranca.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import br.pro.fagnerlima.cobranca.model.StatusTitulo;
import br.pro.fagnerlima.cobranca.model.Titulo;
import br.pro.fagnerlima.cobranca.repository.Titulos;
import br.pro.fagnerlima.cobranca.repository.filter.TituloFilter;

@Service
public class CadastroTituloService {
	
	@Autowired
	private Titulos titulos;
	
	public void salvar(Titulo titulo) {
		try {
			titulos.save(titulo);
		} catch (DataIntegrityViolationException e) {
			throw new IllegalArgumentException("Formato de data inválido.");
		}
	}
	
	public void excluir(Long id) {
		titulos.delete(id);
	}
	
	public String receber(Long id) {
		Titulo titulo = titulos.findOne(id);
		titulo.setStatus(StatusTitulo.RECEBIDO);
		titulos.save(titulo);
		
		return StatusTitulo.RECEBIDO.getDescricao();
	}
	
	public List<Titulo> filtrar(TituloFilter filtro) {
		String descricao = filtro.getDescricao() == null ? "%" : filtro.getDescricao();
		
		return titulos.findByDescricaoContainingOrderByIdAsc(descricao);
	}
	
}
