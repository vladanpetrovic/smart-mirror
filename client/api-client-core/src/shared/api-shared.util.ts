export function getIdFromHateoasLink(hateoasLink: string) {
    const urlParts = hateoasLink.split('/');
    return urlParts.pop();
}