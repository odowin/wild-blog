import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

export class LoginFormComponent {
  loginForm: FormGroup;
  formMessage: string = '';
  isSuccess: boolean = false; // Initialisez isSuccess avec false

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Check if the field is invalid and touched
  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return !!(control?.invalid) && (control?.dirty || control?.touched); // Utilisation de "!!" pour convertir undefined en boolean
  }
  
  

  // Handle form submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.formMessage = 'Login validé';
      this.isSuccess = true;
    } else {
      this.formMessage = 'Veuillez corriger les erreurs.';
      this.isSuccess = false;
    }
  }
}


