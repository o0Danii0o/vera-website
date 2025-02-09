// Replace Text In Header   
const checkReplace = document.querySelector('.replace-me');

if(checkReplace != null){
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed : 2500,
        separator: ',',
        loopCount : 'infinite',
        autoRun: true,
    });
}