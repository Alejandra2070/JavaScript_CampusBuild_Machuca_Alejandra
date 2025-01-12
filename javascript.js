let proyectos = [];
let gastos = [];
let recursos = [];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let events = {};

document.getElementById('iniciarBtn').addEventListener('click', function() {
    document.getElementById('pantallaBienvenida').style.display = 'none';

    document.getElementById('pantallaPrincipal').style.display = 'block';
});

// Gestión de Proyectos
document.getElementById('formProyecto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreProyecto').value;
    const descripcion = document.getElementById('descripcionProyecto').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;

    if (nombre && descripcion && fechaInicio && fechaFin) {
        const nuevoProyecto = {
            nombre: nombre,
            descripcion: descripcion,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
        };

        proyectos.push(nuevoProyecto);
        const li = document.createElement('li');
        li.textContent = `${nuevoProyecto.nombre} - Inicio: ${nuevoProyecto.fechaInicio} - Fin: ${nuevoProyecto.fechaFin}`;
        document.getElementById('listaProyectos').appendChild(li);

        document.getElementById('formProyecto').reset();
    }
});

// Seguimiento de Presupuesto
document.getElementById('formPresupuesto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreGasto = document.getElementById('nombreGasto').value;
    const montoGasto = parseFloat(document.getElementById('montoGasto').value);

    if (nombreGasto && !isNaN(montoGasto)) {
        const nuevoGasto = {
            nombre: nombreGasto,
            monto: montoGasto
        };

        gastos.push(nuevoGasto);
        const li = document.createElement('li');
        li.textContent = `${nuevoGasto.nombre}: $${nuevoGasto.monto}`;
        document.getElementById('listaGastos').appendChild(li);

        document.getElementById('formPresupuesto').reset();
    }
});

// Gestión de Recursos
document.getElementById('formRecursos').addEventListener('submit', function(event) {
    event.preventDefault();

    const tipoRecurso = document.getElementById('tipoRecurso').value;
    const nombreRecurso = document.getElementById('nombreRecurso').value;

    if (nombreRecurso) {
        const nuevoRecurso = {
            tipo: tipoRecurso,
            nombre: nombreRecurso
        };

        recursos.push(nuevoRecurso);
        const li = document.createElement('li');
        li.textContent = `${nuevoRecurso.tipo}: ${nuevoRecurso.nombre}`;
        document.getElementById('listaRecursos').appendChild(li);

        document.getElementById('formRecursos').reset();
    }
});

// Comunicación y Colaboración
document.getElementById('enviarMensaje').addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje').value;

    if (mensaje) {
        const li = document.createElement('li');
        li.textContent = mensaje;
        document.getElementById('listaMensajes').appendChild(li);

        document.getElementById('mensaje').value = '';
    }
});

// Generar Informe y Análisis
document.getElementById('generarInforme').addEventListener('click', function() {

    let informe = "Informe del Proyecto:\n\n";

    if (proyectos.length > 0) {
        informe += `Nombre: ${proyectos[proyectos.length - 1].nombre}\n`;
        informe += `Descripción: ${proyectos[proyectos.length - 1].descripcion}\n`;
        informe += `Fecha de Inicio: ${proyectos[proyectos.length - 1].fechaInicio}\n`;
        informe += `Fecha de Fin: ${proyectos[proyectos.length - 1].fechaFin}\n\n`;
    } else {
        informe += "Aún no se ha registrado ningún proyecto.\n\n";
    }

    if (gastos.length > 0) {
        informe += "Gastos:\n";
        gastos.forEach(gasto => {
            informe += `${gasto.nombre}: $${gasto.monto}\n`;
        });
        informe += "\n";
    } else {
        informe += "Aún no se ha registrado ningún gasto.\n\n";
    }

    if (recursos.length > 0) {
        informe += "Recursos:\n";
        recursos.forEach(recurso => {
            informe += `${recurso.tipo}: ${recurso.nombre}\n`;
        });
        informe += "\n";
    } else {
        informe += "Aún no se ha regitrado ningún recurso.\n\n";
    }

    document.getElementById('detalleInforme').textContent = informe;
});

// Función para agregar un evento
document.getElementById('formProgramacion').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('tituloEvento').value;
    const fecha = document.getElementById('fechaEvento').value;
    const descripcion = document.getElementById('descripcionEvento').value;

    if (titulo && fecha) {
        const fechaEvento = new Date(fecha).getDate();

        if (!events[fechaEvento]) {
            events[fechaEvento] = [];
        }
        events[fechaEvento].push({ titulo, descripcion });

        const li = document.createElement('li');
        li.textContent = `${titulo} - ${fecha}`;
        document.getElementById('listaEventos').appendChild(li);

        document.getElementById('formProgramacion').reset();
    }
});