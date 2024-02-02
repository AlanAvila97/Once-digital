export default defineEventHandler(async (event) => {

    const {url} = event.context.params;
    // const path = `https://icsem.mx/Admin/admin/assets/php/json/${url}.json`
    const manejarRespuesta = (respuesta) => {
        return respuesta.data;
    };
    try {
        const dataJson  = await $fetch(path);        
        return dataJson        
    } catch (error) {
        console.log(error);
        throw new Error(JSON.stringify(error));
    }
});