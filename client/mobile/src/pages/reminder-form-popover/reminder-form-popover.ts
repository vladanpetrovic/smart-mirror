import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavParams, ViewController} from 'ionic-angular';
import {ApiReminderService, ApiUserService, Reminder} from 'neatlicity-api-client-core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@IonicPage()
@Component({
    selector: 'page-reminder-form-popover',
    templateUrl: 'reminder-form-popover.html',
})
export class ReminderFormPopoverPage {
    reminderForm: FormGroup;
    reminderEditData: Reminder = null;
    isEdit: boolean = false;
    submitBtnText: string = 'Create';

    constructor(public navParams: NavParams,
                private viewController: ViewController,
                private loadingCtrl: LoadingController,
                private apiUserService: ApiUserService,
                private apiReminderService: ApiReminderService) {
    }

    ngOnInit(): void {
        let title = null;
        let category = null;
        let dateTime = null;

        this.reminderEditData = this.navParams.data;
        if (this.reminderEditData != null && this.reminderEditData.id != null) {
            this.isEdit = true;
            this.submitBtnText = 'Edit';
            title = this.reminderEditData.title;
            category = this.reminderEditData.category;
            dateTime = this.reminderEditData.dateTime;
        }
        this.reminderForm = new FormGroup({
            'title': new FormControl(title, Validators.required),
            'category': new FormControl(category, Validators.required),
            'dateTime': new FormControl(dateTime, Validators.required)
        });
    }

    onSubmit() {
        this.apiUserService.userState().subscribe(
            userState => {

                const loading = this.loadingCtrl.create({
                    content: (this.isEdit ? 'Editing reminder...' : 'Creating reminder...')
                });

                const title = this.reminderForm.value.title;
                const category = this.reminderForm.value.category;
                const dateTime = this.reminderForm.value.dateTime;

                const reminder = {
                    title: title,
                    category: category,
                    dateTime: dateTime,
                    userId: userState.user.id
                } as Reminder;

                let httpResponse;
                if (this.isEdit && this.reminderEditData != null) {
                    reminder.id = this.reminderEditData.id;
                    httpResponse = this.apiReminderService.update(reminder);
                } else {
                    httpResponse = this.apiReminderService.create(reminder);
                }
                console.log(httpResponse);
                loading.dismiss();
            }
        );
        this.viewController.dismiss();
    }

}
