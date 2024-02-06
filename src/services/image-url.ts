// the images(images of games) downloaded to render on home page are quite big
// we need to alter the url of the image to download the cropped version

const getCroppedImageUrl = (url: String) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    // retrieving index of the word "media/",
    // using indexOf, we get the starting index of the word "media/" but we want to add the crop parameter
    // after "media/" hence we add index to the length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
//     url.slice(0, index): This part takes a substring of the original URL from the beginning
//      (index 0) up to the index calculated based on the position of the string 'media/' in the URL.
// 'crop/600/400': This part adds the crop parameter to the URL. In this case, it's set to
//  'crop/600/400', indicating that the image should be cropped to a size of 600 pixels in
//   width and 400 pixels in height.
// url.slice(index): This part takes the remaining substring of the original URL starting
//  from the index calculated based on the position of 'media/'.
// So, url.slice(index) takes a substring of the original URL starting from the position calculated
//  by index and includes all characters from that position to the end of the string.

}

export default getCroppedImageUrl;