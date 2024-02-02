import {defineStore} from 'pinia'
// 
export const infoGlobal = defineStore('infoGlobal', () => {
    const fetchData = async(url) => {
        let infoUrl = ``
        try {
            const res = await fetch(``)
            const data = await res.json()
            return data;                    
        } catch (error) {
            console.log(error);
        }
    }
    const fetchEstados = async() => {
        try {
            const res = await fetch(``);
            const data = await res.json()
            return data;                    
        } catch (error) {
            console.log(error);
        }
    }
    return{ fetchData, fetchEstados }
});