package com.devsuperior.homework.resources.exeception;

import java.time.Instant;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.devsuperior.homework.services.exeception.ServiceNotFoundExeception;

@ControllerAdvice
public class ResourceExeceptionHandler {
	
	@ExceptionHandler(ServiceNotFoundExeception.class)
	public ResponseEntity<StandardError> entityNotFound(ServiceNotFoundExeception e, HttpServletRequest request) {
		HttpStatus status = HttpStatus.NOT_FOUND;
		StandardError error = new StandardError();
		error.setTimestamp(Instant.now());
		error.setStatus(status.value());
		error.setError("Resource Not Found!");
		error.setMessage(e.getMessage());
		error.setPath(request.getRequestURI());
		return ResponseEntity.status(status).body(error);		
	}
}
