import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {ApiToDoService, ApiUserService, ToDo} from 'neatlicity-api-client-core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {showBottomToastMsg} from "../../shared/message.util";

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
                private toastCtrl: ToastController,
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
            user => {
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
                    userId: user.id
                } as ToDo;

                if (this.isEdit && this.toDoEditData != null) {
                    toDo.id = this.toDoEditData.id;
                    this.apiToDoService
                        .update(toDo)
                        .subscribe(
                            response => {
                                showBottomToastMsg(this.toastCtrl, 'ToDo \'' + toDo.title + '\' updated.');
                            }, err => {
                                if(err.error != undefined && err.error.cause != undefined) {
                                    showBottomToastMsg(this.toastCtrl, err.error.cause.message);
                                }
                            }
                        );
                } else {
                    this.apiToDoService
                        .create(toDo)
                        .subscribe(
                            response => {
                                showBottomToastMsg(this.toastCtrl, 'ToDo \'' + toDo.title + '\' created.');
                            }, err => {
                                if(err.error != undefined && err.error.cause != undefined) {
                                    showBottomToastMsg(this.toastCtrl, err.error.cause.message);
                                }
                            }
                        );
                }
                loading.dismiss();
            }
        );
        this.viewController.dismiss();
    }

}
