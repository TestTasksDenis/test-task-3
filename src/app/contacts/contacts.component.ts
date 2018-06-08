import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactForm: FormGroup;
  isSuccess = true;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        comment: new FormControl(),
      }
    );
  }

  onSubmit() {
    this.contactService.setContacts(this.contactForm.value).subscribe(item => {
      console.log(item);
    });

    this.onSuccess();
  }

  onSuccess() {
    this.isSuccess = false;
    this.contactForm.reset();

    setTimeout(() => {
      this.isSuccess = true;
    }, 3000);
  }
}
