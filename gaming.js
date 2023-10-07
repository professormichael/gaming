document.getElementById('button').addEventListener('click', function(){
    const a  = document.createElement('a');
    a.href = 'https://www.playmods.net/download/version/25122?scheme=file';
    a.click()
    document.getElementById('button').appendChild('a');

})