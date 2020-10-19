package com.devsuperior.homework.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.homework.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
