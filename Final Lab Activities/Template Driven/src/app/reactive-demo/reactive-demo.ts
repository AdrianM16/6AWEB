import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css'
})
export class ReactiveDemo {
  roles = ['Admin', 'User', 'Guest'];

  form: FormGroup;
  submitted = false;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
          Validators.pattern(/^[a-zA-Z0-9_]+$/)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]],

      gender: ['', [Validators.required]],
      status: ['', [Validators.required]],
      comments: ['']
    });
  }

  isInvalid(name: string): boolean {
    const control = this.form.get(name);
    return !!(control && control.touched && control.invalid);
  }

  getError(name: string): string {
    const c = this.form.get(name);
    if (!c || !c.errors) return '';

    if (c.errors['required']) return 'This field is required.';
    if (c.errors['email']) return 'Please enter a valid email.';
    if (c.errors['minlength']) return `Minimum of ${c.errors['minlength'].requiredLength} characters.`;
    if (c.errors['maxlength']) return `Maximum of ${c.errors['maxlength'].requiredLength} characters.`;
    if (c.errors['pattern']) {
      if (name === 'username') return 'Only letters, numbers, and underscore (_) allowed.';
      return 'Invalid format.';
    }
    return 'Invalid input.';
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitted = false;
      return;
    }

    this.submitted = true;
    this.submittedData = this.form.value;

    this.form.reset();

    setTimeout(() => (this.submitted = false), 2500);
  }
}
