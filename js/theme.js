(function () {
    var html = document.documentElement;
    var btn  = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-icon');

    function setTheme(theme) {
        html.classList.remove('dark', 'light');
        html.classList.add(theme);
        localStorage.setItem('theme', theme);
        if (icon) icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    }

    // Sync icon to whatever the anti-flash script already set
    if (icon) {
        var current = html.classList.contains('dark') ? 'dark' : 'light';
        icon.textContent = current === 'dark' ? 'light_mode' : 'dark_mode';
    }

    if (btn) {
        btn.addEventListener('click', function () {
            var next = html.classList.contains('dark') ? 'light' : 'dark';
            setTheme(next);
        });
    }
}());
