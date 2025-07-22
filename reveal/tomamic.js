(async () => {
    await import('./reveal.js');
    await import('../plugin/zoom/zoom.js');
    await import('../plugin/notes/notes.js');
    await import('../plugin/search/search.js');
    await import('../plugin/markdown/markdown.js');
    await import('../plugin/highlight/highlight.js');
    await import('../plugin/math/math.js');

    var name = location.href.split('?').pop().split('/').pop().replace(/\.[^\.]+$/, '');
    var ico = '<link rel="icon" href="/images/logo.svg" />';
    var css = '<link rel="stylesheet" href="reveal/tomamic.css" />';
    var tar = '<base target="_blank" />';  /* open all links in a new tab. */
    var logo = '<aside><img src="/images/logo.svg" /></aside>';
    var slides = `
        <div class="reveal">
            <div class="slides">
                <section data-markdown="mdp/`+name+`.md" data-separator="^---\n">
                </section>
            </div>
            <div id="fondinfo"><a href="./" target="_self">fondinfo.github.io</a></div>
        </div>`;
    document.head.insertAdjacentHTML('beforeend', ico);
    document.head.insertAdjacentHTML('beforeend', css);
    document.head.insertAdjacentHTML('beforeend', tar);
    document.body.insertAdjacentHTML('afterbegin', slides);
    Reveal.initialize({
        slideNumber: 'c/t',
        controls: true,
        progress: true,
        center: true,
        hash: true,
        plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight, RevealMath]
    }).then(() => {
        document.title = document.querySelector('h1').innerHTML;
        for (var elem of document.querySelectorAll('h1:last-child, h2:last-child')) {
            elem.parentNode.classList.add('title-slide');
            elem.parentNode.querySelector('h1').insertAdjacentHTML('beforebegin', logo);
        }
        for (var elem of document.querySelectorAll('pre code')) {
            var lang = elem.classList[0];
            if (lang == 'cpp') lang = 'c++';
            if (lang && !['hljs', 'text'].includes(lang)) {
                elem.setAttribute('data-lang', lang);
            }
        }
    });
})();
