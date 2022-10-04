package com.example.demo.controller;

import com.example.demo.models.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping("/add")
    public Student save(@Valid @RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @GetMapping("/getall")
    public List<Student> getAll() {
        return studentService.getAll();
    }
}
