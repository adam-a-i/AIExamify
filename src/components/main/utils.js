export function removeImageTags(inputString) {
    return inputString.replace(/<img[^>]*>/g, ''); // This removes all <img> tags and their contents
}