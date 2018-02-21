import {ToastController} from "ionic-angular";

export function showBottomToastMsg(toastCtrl: ToastController, message: string) {
    showBottomToastMsgForDuration(toastCtrl, message, 5000);
}

export function showBottomToastMsgForDuration(toastCtrl: ToastController, message: string, duration: number) {
    toastCtrl.create({
        message: message,
        duration: duration,
        position: 'bottom'
    }).present();
}