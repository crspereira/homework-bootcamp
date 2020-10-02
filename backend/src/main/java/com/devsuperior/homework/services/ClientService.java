package com.devsuperior.homework.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.homework.dto.ClientDTO;
import com.devsuperior.homework.entities.Client;
import com.devsuperior.homework.repositories.ClientRepository;

@Service
public class ClientService {

	// dependecias
	@Autowired
	private ClientRepository repository;

	// metodos
	@Transactional(readOnly = true)
	public List<ClientDTO> findAll() {
		List<Client> list = repository.findAll();
		return list.stream().map(x -> new ClientDTO(x)).collect(Collectors.toList());
	}
}
