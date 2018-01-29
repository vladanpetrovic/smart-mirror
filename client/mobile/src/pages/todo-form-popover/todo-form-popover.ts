import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavParams, ViewController} from 'ionic-angular';
import {ApiToDoService, ApiUserService, ToDo} from 'neatlicity-api-client-core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@IonicPage()
@Component({
    selector: 'page-todo-form-popover',
    templateUrl: 'todo-form-popover.html',
})
export class ToDoFormPopoverPage implements OnInit {
    toDoForm: FormGroup;
    toDoEditData: ToDo = null;
    isEdit: boolean = false;
    submitBtnText: string = 'Create';

    constructor(private navParams: NavParams,
                private viewController: ViewController,
                private loadingCtrl: LoadingController,
                private apiUserService: ApiUserService,
                private apiToDoService: ApiToDoService) {
    }

    ngOnInit(): void {
        let title = null;
        let category = null;
        let dateTime = null;

        this.toDoEditData = this.navParams.data;
        if (this.toDoEditData != null && this.toDoEditData.id != null) {
            this.isEdit = true;
            this.submitBtnText = 'Edit';
            title = this.toDoEditData.title;
            category = this.toDoEditData.category;
            dateTime = this.toDoEditData.dateTime;
        }
        this.toDoForm = new FormGroup({
            'title': new FormControl(title, Validators.required),
            'category': new FormControl(category, Validators.required),
            'dateTime': new FormControl(dateTime, Validators.required)
        });
    }

    onSubmit() {
        this.apiUserService.userState().subscribe(
            userState => {
                const loading = this.loadingCtrl.create({
                    content: (this.isEdit ? 'Editing to do...' : 'Creating to do...')
                });

                const title = this.toDoForm.value.title;
                const category = this.toDoForm.value.category;
                const dateTime = this.toDoForm.value.dateTime;

                const toDo = {
                    title: title,
                    category: category,
                    dateTime: dateTime,
                    userId: userState.user.id
                } as ToDo;

                let httpResponse;
                if (this.isEdit && this.toDoEditData != null) {
                    toDo.id = this.toDoEditData.id;
                    httpResponse = this.apiToDoService.update(toDo);
                } else {
                    httpResponse = this.apiToDoService.create(toDo);
                }
                console.log(httpResponse);
                loading.dismiss();
            }
        );
        this.viewController.dismiss();
    }

}
