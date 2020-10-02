package com.devsuperior.homework.services;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.homework.dto.ClientDTO;
import com.devsuperior.homework.entities.Client;
import com.devsuperior.homework.repositories.ClientRepository;
import com.devsuperior.homework.services.exeception.ServiceNotFoundExeception;

@Service
public class ClientService implements Serializable {
	private static final long serialVersionUID = 1L;
	
	// dependecias
	@Autowired
	private ClientRepository repository;

	// metodos
	@Transactional(readOnly = true)
	public List<ClientDTO> findAll() {
		List<Client> list = repository.findAll();
		return list.stream().map(x -> new ClientDTO(x)).collect(Collectors.toList());
	}
	@Transactional(readOnly = true)
	public ClientDTO findById(Long id) {
		Optional<Client> obj = repository.findById(id);
		Client entity = obj.orElseThrow(() -> new ServiceNotFoundExeception("Client Entity ID Not Found!"));
		return new ClientDTO(entity);
	}
}
