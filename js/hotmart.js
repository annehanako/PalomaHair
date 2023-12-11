function importHotmart() {
    var imported = document.createElement('script');
    imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
    document.head.appendChild(imported);
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
}
importHotmart(); 