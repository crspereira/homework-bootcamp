package com.devsuperior.homework.services;

import java.io.Serializable;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.homework.dto.ClientDTO;
import com.devsuperior.homework.entities.Client;
import com.devsuperior.homework.repositories.ClientRepository;
import com.devsuperior.homework.services.exeception.DatabaseException;
import com.devsuperior.homework.services.exeception.ServiceNotFoundExeception;

@Service
public class ClientService implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//dependecias
	@Autowired
	private ClientRepository repository;

	//metodos
	//sem paginação
	/*
	 * @Transactional(readOnly = true) public List<ClientDTO> findAll() {
	 * List<Client> list = repository.findAll(); return list.stream().map(x -> new
	 * ClientDTO(x)).collect(Collectors.toList()); }
	 */
	//com paginação
	@Transactional(readOnly = true)
	public Page<ClientDTO> findAllPaged(PageRequest pageRequest) {
		Page<Client> list = repository.findAll(pageRequest);
		return list.map(x -> new ClientDTO(x));
	}
	
	@Transactional(readOnly = true)
	public ClientDTO findById(Long id) {
		Optional<Client> obj = repository.findById(id);
		Client entity = obj.orElseThrow(() -> new ServiceNotFoundExeception("Client ID Not Found!"));
		return new ClientDTO(entity);
	}
	
	@Transactional
	public ClientDTO insert(ClientDTO dto) {
		Client entity = new Client();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ClientDTO(entity);
	}
	
	@Transactional
	public ClientDTO update(Long id, ClientDTO dto) {
		try {
			Client entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new ClientDTO(entity);
			
		} catch (EntityNotFoundException e) {
			throw new ServiceNotFoundExeception("Client Id Not Found " + id);
		}
	}
	
	// Sem @Transaction para possibilitar captura da excessão
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ServiceNotFoundExeception("Client Id Not Found! " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity Violation!");
		}
	}
	
	//metodos auxiliares
	private void copyDtoToEntity(ClientDTO dto, Client entity) {
		entity.setName(dto.getName());
		entity.setCpf(dto.getCpf());
		entity.setIncome(dto.getIncome());
		entity.setBirthDate(dto.getBirthDate());
		entity.setChildren(dto.getChildren());
	}
}
