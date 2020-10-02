package com.devsuperior.homework.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.homework.dto.ClientDTO;
import com.devsuperior.homework.services.ClientService;

@RestController
@RequestMapping(value = "/clients")
public class ClientResource {

	// dependencias
	@Autowired
	private ClientService service;

	/* endpoints (CRUD) deste recurso */
	@GetMapping
	public ResponseEntity<List<ClientDTO>> findAll() {
		List<ClientDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
