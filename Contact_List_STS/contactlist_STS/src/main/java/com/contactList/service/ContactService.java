package com.contactList.service;

import com.contactList.entity.Contact;
import com.contactList.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
	@Autowired
	private ContactRepository repository;

	public List<Contact> getAllContacts() {
		return repository.findAll();
	}

	public Contact saveContact(Contact contact) {
		return repository.save(contact);
	}

	public void deleteContact(Long id) {
		repository.deleteById(id);
	}
}