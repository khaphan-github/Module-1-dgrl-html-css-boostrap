// Tick handler

// Upload image handler
const openFileDialog = () => {
    const acceptFormat = 'image/png, image/jpeg, image/jpg';

    let chooseFileDialog = document.createElement('input');
    chooseFileDialog.type = 'file';
    chooseFileDialog.accept = acceptFormat;

    chooseFileDialog.onchange = _ => {
        let files = Array.from(chooseFileDialog.files);
        // TODO: Handle this file in there
        console.log(files);
    };

    chooseFileDialog.click();
}
// Global Variable
let totalScore = 0;
// Process bar handler
const handlePopup = (popubId, type) => {
    const isEmptyArguments = popubId === null || type === null;
    if (isEmptyArguments) {
        throw new Error('pupubId or type is empty');
    }

    const popupElement = document.getElementById(popubId);

    if (type === 'hide') {
        popupElement.style.display = 'none';
        return;
    }
    if (type === 'show') {
        popupElement.style.display = 'block';
        return;
    }

    throw new Error('Unknown type (Type: hide or show)');
}

const jumbToServeyIndex = (currentPopupIndex, destinationPopupIndex) => {
    const pupubIdBase = 'servey-popup-part-';

    const currentPupubId = pupubIdBase + currentPopupIndex;
    const destinationPopubId = pupubIdBase + destinationPopupIndex;

    handlePopup(currentPupubId, 'hide');
    handlePopup(destinationPopubId, 'show');
}
  
handleCheckRatio();
const handlcheckBoxClick = () => {

}