export function getToDoIconName(category: String) {
    switch (category) {
        case 'HOME':
            return 'home';
        case 'WORK':
            return 'briefcase';
        case 'SHOPPING':
            return 'basket';
        case 'MAINTENANCE':
            return 'build';
        default:
            return 'home';
    }
}
