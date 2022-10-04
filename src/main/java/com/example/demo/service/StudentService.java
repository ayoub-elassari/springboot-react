package com.example.demo.service;

import com.example.demo.models.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);
    List<Student> getAll();
}
