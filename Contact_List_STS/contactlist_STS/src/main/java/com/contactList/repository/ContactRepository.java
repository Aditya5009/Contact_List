package com.contactList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.contactList.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}