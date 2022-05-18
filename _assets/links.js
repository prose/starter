Array.from(javascript.links)
    .filter(link => link.hostname != window.location.hostname)
    .forEach(link => link.target = '_blank');
