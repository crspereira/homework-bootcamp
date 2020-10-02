package com.devsuperior.homework.services.exeception;

public class ServiceNotFoundExeception extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public ServiceNotFoundExeception(String msg) {
		super(msg);
	}
}
