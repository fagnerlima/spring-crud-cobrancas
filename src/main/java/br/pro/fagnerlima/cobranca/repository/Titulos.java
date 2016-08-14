package br.pro.fagnerlima.cobranca.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.pro.fagnerlima.cobranca.model.Titulo;

public interface Titulos extends JpaRepository<Titulo, Long> {

}