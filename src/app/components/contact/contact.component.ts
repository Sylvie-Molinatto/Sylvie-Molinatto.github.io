import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateService, LangChangeEvent, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  formData: any;
  private langChangeSubscription: Subscription | null = null; 

  constructor(private builder: UntypedFormBuilder, private translate: TranslateService) { }

  ngOnInit() {
    this.formData = this.builder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(25)]]
    });

    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updatePlaceholders();
    });

    this.updatePlaceholders();
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private updatePlaceholders() {
    this.translate.get(['CONTACT_SECTION.ENTER_FULL_NAME', 'CONTACT_SECTION.ENTER_EMAIL', 'CONTACT_SECTION.ENTER_MESSAGE']).subscribe(translations => {
      const nameInput = document.getElementById('fullname') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const messageInput = document.getElementById('message') as HTMLTextAreaElement;

      if (nameInput) {
        nameInput.placeholder = translations['CONTACT_SECTION.ENTER_FULL_NAME'];
      }
      if (emailInput) {
        emailInput.placeholder = translations['CONTACT_SECTION.ENTER_EMAIL'];
      }
      if (messageInput) {
        messageInput.placeholder = translations['CONTACT_SECTION.ENTER_MESSAGE'];
      }
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      const templateParams = {
        from_name: this.formData.value.name,
        from_email: this.formData.value.email,
        message: this.formData.value.message
      };

      emailjs.send('service_2y5ki45', 'template_9ia1x9s', templateParams, '_aNWTqGLxpTMZsqeR')
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully', response.status, response.text);
          this.formData.reset();
        }, (error) => {
          console.error('Error sending email', error);
        });
    }
  }
}