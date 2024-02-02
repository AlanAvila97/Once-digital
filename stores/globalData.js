import {defineStore} from 'pinia'
// 
export const dataGlobal = defineStore('dataGlobal', () => {
    const fetchInfoIcsem = async (type) => {
        let json = '';
        switch (type) {
            case 'Channels':
                return '/api/';
                break;
            case 'Carruceles':
                return '/api/sliders';
                break;
            case 'Episodios':
                return '/api/';
                break;
            case 'Textos':
                return '/api/';
                break;
            case 'Pais':
                return '/api/';
                break;
        }
    }
    /**
    * @description Funcion que obtiene un elemento html
    */   
    const getElement = (element) => {
        return document.querySelector(element);
    }  
    /**
     * @description Función agrega una clase varios elementos html
    */   
    const getAllElement = (element) => {
        return document.querySelectorAll(element);
    }
    /**
     * @description Función 
    */ 
    const addClassElement = (element, typeClass) => {
        element.classList.add(typeClass);
    }
    /**
     * @description Función que remueve una clase de varios elementos html
    */ 
    const addAllClass = (elements, typeClass) => {
        elements.forEach(div => {
            div.classList.add(typeClass);
        });
    }
    /**
     * @description Función remueve una clase de un elemento html
    */ 
    const removeClass = (element, typeClass) => {
        element.classList.remove(typeClass);
    }
    /**
     * @description Función que remueve una clase de varios elementos html
    */ 
    const removeAllClass = (elements, typeClass) => {
        elements.forEach(div => {
            div.classList.remove(typeClass);
        });
    }
    /**
     * @description Función para hace un scroll a una seccion del index (Contacta, Experiencias)
    */ 
    const scrollSection = (element, numTop) => {
        let scrollElement =  element.offsetTop;
        let posicionElement = String(scrollElement - numTop);
            window.scroll({
                            top: posicionElement,
                            behavior: 'smooth'
                            });
    }
    /**
     * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
     * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
     * @return {textParser} Retorna la cadena parseada
    */
    const parseoTexto = (cadena) => {
        let txt = String(cadena);
        let textParser = txt.replaceAll(' ', '-');
              textParser = textParser.toLowerCase();
              textParser = eliminarAcentos(textParser);
        return eliminarCaracteres(textParser);
    }
    /**
     * @description Función que parsea una cadena eliminando acentos
     * @param cadena Contiene la cadena con caracteres acentos
     * @return {res} Retorna la cadena parseada
    */
    const eliminarAcentos = (cadena) => {
        var chars={
            "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
            "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u",
            "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
            "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U"}
        var expr = /[áàéèíìóòúùñ]/ig;
        var res = cadena?.replace(expr,function(e){return chars[e]});
        return res; 
    }
    /**
     * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
     * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
     * @return {textParser} Retorna la cadena parseada
    */ 
    const eliminarCaracteres = (cadena) => {
        var outString = cadena.replace(/[`~!¡´@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
        return outString;
    }
    return{
        getElement,
        addAllClass,
        removeClass,
        parseoTexto,
        scrollSection,
        getAllElement,
        removeAllClass,
        addClassElement,
        eliminarCaracteres,
    }
});