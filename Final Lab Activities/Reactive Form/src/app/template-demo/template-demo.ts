import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type SubmittedData = {
  username: string;
  email: string;
  password: string;
  role: string;
  gender: string;
  status: string;
  comments: string;
};

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemo {
  title = 'Template Driven Demo';

  username = '';
  email = '';
  password = '';
  role = '';

  gender = '';
  status = '';
  comments = '';

  submitted = false;
  lastSubmitted: SubmittedData | null = null;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.lastSubmitted = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments
    };

    this.submitted = true;

    form.resetForm();

    setTimeout(() => (this.submitted = false), 2500);
  }
}
