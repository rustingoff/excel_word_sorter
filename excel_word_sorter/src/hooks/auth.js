import { writable } from 'svelte/store';

const user = 'admin.svelte'
const pass = 'admin123'

export const store = writable(null);

let sessions = []

export const getUserDetails = async ( username, password ) => {
    if ( username === user && password === pass )
        return 1
}