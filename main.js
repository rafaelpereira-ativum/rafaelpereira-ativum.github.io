document.addEventListener("DOMContentLoaded", function () {
    const faviconTag = document.getElementById('favicon-tag');
    if (faviconTag) {
        const matcher = window.matchMedia('(prefers-color-scheme: dark)');
        
        function updateFavicon() {
            if (matcher.matches) {
                faviconTag.href = 'imagens/faviconW.png?v=' + Date.now();
            } else {
                faviconTag.href = 'imagens/faviconB.png?v=' + Date.now();
            }
        }
        
        updateFavicon();
        matcher.addEventListener('change', updateFavicon);
    }
});
