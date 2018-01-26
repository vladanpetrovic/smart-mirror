export function getReminderIconName(category: String) {
    switch (category) {
        case 'MEETING':
            return 'people';
        case 'BIRTHDAY':
            return 'calendar';
        case 'HOLIDAY':
            return 'calendar';
        case 'ANNIVERSARY':
            return 'calendar';
        case 'NOTICE':
            return 'alert';
        default:
            return 'home';
    }
}
