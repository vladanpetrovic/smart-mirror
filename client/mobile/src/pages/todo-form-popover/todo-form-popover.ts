import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavParams, ViewController} from 'ionic-angular';
import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@IonicPage()
@Component({
    selector: 'page-todo-form-popover',
    templateUrl: 'todo-form-popover.html',
})
export class ToDoFormPopoverPage implements OnInit {
    toDoForm: FormGroup;
    newDate: Date = new Date();
    toDoEdit: ToDo = null;
    isEdit: boolean = false;

    constructor(private navParams: NavParams,
                private viewController: ViewController,
                private loadingCtrl: LoadingController,
                private apiToDoService: ApiToDoService) {
    }

    ngOnInit(): void {
        let title = null;
        let category = null;
        let dateTime = null;

        this.toDoEdit = this.navParams.data;
        if (this.toDoEdit != null && this.toDoEdit.id != null) {
            this.isEdit = true;
            title = this.toDoEdit.title;
            category = this.toDoEdit.category;
            dateTime = this.toDoEdit.dateTime;
        }
        this.toDoForm = new FormGroup({
            'title': new FormControl(title, Validators.required),
            'category': new FormControl(category, Validators.required),
            'dateTime': new FormControl(dateTime, Validators.required)
        });
    }

    onSubmit() {
        const loading = this.loadingCtrl.create({
            content: (this.isEdit ? 'Editing to do...' : 'Creating to do...')
        });

        const title = this.toDoForm.value.title;
        const category = this.toDoForm.value.category;
        const dateTime = this.toDoForm.value.dateTime;
        const userId = '5a67f83460149b798047be46';

        const toDo = {
            title: title,
            category: category,
            dateTime: dateTime,
            userId: userId
        } as ToDo;

        let httpResponse;
        if(this.isEdit && this.toDoEdit != null) {
            toDo.id = this.toDoEdit.id;
            httpResponse = this.apiToDoService.update(toDo);
        } else {
            httpResponse = this.apiToDoService.create(toDo);
        }
        console.log(httpResponse);
        loading.dismiss();
        this.viewController.dismiss();
    }

}
