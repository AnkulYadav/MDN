// Promises in javascript 
/**
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * 
 * A Promise is in one of these states:
 * 1. pending: initial state, neither fulfilled nor rejected.
 * 2. fulfilled: meaning that the operation completed successfully.
 * 3. rejected: meaning that the operation failed.
 * 
 * 
 * A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
 * 
 * 
 * Example:
 */
function successCallback(result){
    console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error){
    console.error(`Error generating audio file: ${error}`);
}

// createAudioFileAsync(audioSettings, successCallback, failureCallback);
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);