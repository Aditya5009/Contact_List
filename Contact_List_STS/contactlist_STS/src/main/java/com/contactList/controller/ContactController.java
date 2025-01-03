package com.contactList.controller;

import com.contactList.entity.Contact;
import com.contactList.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/contact")
public class ContactController {

	@Autowired
	private ContactService service;

	@GetMapping
	public List<Contact> getContacts() {
		return service.getAllContacts();
	}

	@PostMapping
	public Contact addContact(@RequestBody Contact contact) {
		return service.saveContact(contact);
	}

	@PutMapping("/{id}")
	public Contact updateContact(@PathVariable Long id, @RequestBody Contact contact) {
		contact.setId(id);
		return service.saveContact(contact);
	}

	@DeleteMapping("/{id}")
	public void deleteContact(@PathVariable Long id) {
		service.deleteContact(id);
	}
}