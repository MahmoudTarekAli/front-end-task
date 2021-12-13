import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  control: any;
  // @ts-ignore
  userForm: FormGroup;
  user: any;
  // @ts-ignore
  isUpdate: boolean;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(60)]],
      last_name: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      sex: ['', [Validators.required]],
      personal_id: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      profile_img: ['https://via.placeholder.com/350x150'],
      phone: ['', [Validators.required]],
      accounts: this.fb.array([], [Validators.required]),
      address: this.fb.group({
        country: [''],
        city: [''],
        street: [''],
        zip_code: [''],
      }),
    });
    if (this.activatedRoute.snapshot.params.id) {
      this.isUpdate = true;
      this.userService.getUser(this.activatedRoute.snapshot.params.id).subscribe(data => {
        this.user = data;
        this.addAccounts();
        this.userForm.patchValue(data.body);
        console.log(data)
      })
    } else {
      this.isUpdate = false
    }
  }


  getAccounts() {
    return (this.userForm.get('accounts') as FormArray).controls
  }

  addAccounts() {
    this.control = this.userForm.get('accounts') as FormArray
    this.control.push(this.fb.group({
      account_number: [''],
    }));
    return this.control
  }

  submit() {
    if (!this.isUpdate) {
      this.userService.addUser(this.userForm.value).subscribe(data => {
        this.router.navigateByUrl('/users');
        window.alert('user added successfully')
      }, error => {
        window.alert(error)
      });
    } else {
      this.userService.updateUser(this.userForm.value, this.activatedRoute.snapshot.params.id).subscribe(data => {
        this.router.navigateByUrl('/users');
        window.alert('user updated successfully')
      }, error => {
        window.alert(error)
      });
    }
  }

}
