console.log("Consola...")

const llamarApi = async () => {
    try {
        const resultado = await fetch('https://picsum.photos/list');
        const respuesta = await resultado.json();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
};

const listarContactos = (contactos) => { 

    contactos.forEach((datosContacto, index) => {
        const { nombre, apellidos, edad, estadocivil, contacto } = datosContacto;
        const listadoContactos = document.querySelector('#listado-contactos');
        if(listadoContactos){
            listadoContactos.innerHTML += `
                                <tr>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <p class="text-gray-600 font-bold"> ${nombre} </p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                        <p class="text-gray-600">${apellidos}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                        <p class="text-gray-600">${edad}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                        <p class="text-gray-600">${estadocivil}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                        <p class="text-gray-600">${contacto[0].personal}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                        <p class="text-gray-600">${contacto[1].correo}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                        <p class="text-gray-600">${contacto[2].laboral}</p>
                                    </td>
                                </tr>
                            `;
        };
    });

} ;

const llamarJson = async () => {
    try {
        const resultado1 = await fetch('contactos.json');
        const contactos = await resultado1.json();
        console.log(contactos);

        listarContactos(contactos.contactos);   

    } catch (error) {
        console.log(error);
    }
};

const listarBlogs = (blogs) => { 
    console.log(blogs)
    blogs.forEach((blog,) => {
        const { titulo, resumen, imagen } = blog;
        const { url } = imagen;

        const listadoBlog = document.querySelector('#listado-blogs');
        if(listadoBlog){
            listadoBlog.innerHTML += `
                                <tr>
                                <div id="miniStrapi">
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                        <img src="${url}" alt="${titulo}">
                                    </td>
                                    <td class="tituloStrapi">
                                        <p class="tituloStrapi">${titulo}</p>
                                    </td>
                                    <td class="resumenStrapi">    
                                        <p class="resumenStrapi">${resumen}</p>
                                    </td>
                                </div>
                                </tr>
                            `;
        };
    });

} ;

const strapli = async () => {
    try {
        const resultado = await fetch('http://localhost:1337/Blogs');
        const respuesta = await resultado.json();
        listarBlogs(respuesta)
    } catch (error) {
        console.log(error);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    //llamarApi()
    //llamarJson()
    strapli()
})


