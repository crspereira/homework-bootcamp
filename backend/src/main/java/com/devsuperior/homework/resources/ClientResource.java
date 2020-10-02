package com.devsuperior.homework.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.homework.entities.Client;

@RestController
@RequestMapping(value = "/clients")
public class ClientResource {

	// dependencias
	//@Autowired
	//private ClientService service;

	/* endpoints (CRUD) deste recurso */
	// sem paginação
	@GetMapping
	public ResponseEntity<List<Client>> findAll() {
		// lista mocada
		List<Client> list = new ArrayList<>();
		list.add(new Client(1L, "Clayton Pereira", "12345678901", 6000.00, null, 2));
		list.add(new Client(2L, "José Silva", "12345678902", 4000.00, null, 3));
		return ResponseEntity.ok().body(list);
	}
}
