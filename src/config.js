export const APIURL =
    window.location.hostname === 'localhost'
        ? 'http://localhost:8000'
        : 'https://secret-hamlet-76734.herokuapp.com';

export const FRONTURL =
    window.location.hostname === 'localhost'
        ? 'http://localhost:3000'
        : 'replace this with the deployed app url';