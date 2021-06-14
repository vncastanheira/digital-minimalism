(function() {
    let currentDomain = document.domain;
    if(currentDomain.includes('americanas.com.br'))
    document.getElementsByTagName("html")[0].innerHTML = 'Para de comprar porcaria';

    if(currentDomain.includes('youtube.com'))
        document.getElementById('primary').innerHTML = '<div></div>'
})();