module.exports = class variables_globales{
    constructor(){
        this.usuario_base_datos = ''
        this.clave_base_datos = ''
        this.base_datos = ''
        this.host = ''
    }
    get_host (){
        return this.host
    }
    get_usuario(){
        return this.usuario_base_datos
    }
    get_base_datos(){
        return this.base_datos
    }
    get_clave(){
        return this.clave_base_datos
    }
}