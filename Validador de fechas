form.clearMessages();
/*VALIDADOR DE FECHAS*/
if(form.getValue("FechaInicioAusente") != "")
{
	form.clearMessages();
	
	/*Crear variables con fecha de hoy y con fecha de hoy hora 00:00:00*/
	
	var today = new Date();
	var fActual = new Date(today.getFullYear(),today.getMonth(),today.getDate(),0,0,0);
	
	/*Crear Variable con fecha actual + 7 días, con el fin de condicionar la solicitud. No
	se puede realizar solicitud si la temporalidad se iniciará despues de 7 días de la solicitud  */
	
	var fechaMax = new Date(today.getFullYear(),today.getMonth(),today.getDate()+7,0,0,0);
	
	/*Se capturan las fecha de inicio y finalizacíon del formulario para convertir en datos tipo DATE.
	Al dato retornado del formulario se realiza un substring para acomodar la fecha en MM/DD/YYYY por
	defecto al crear la nueva fecha está tomara hora 00:00:00	*/
	
	var fechaInicio = new Date(form.getValue("FechaInicioAusente").substring(4,6) +"/"+form.getValue("FechaInicioAusente").substring(6,8) + "/"  + form.getValue("FechaInicioAusente").substring(0,4));
	var fechaFin = new Date(form.getValue("FechaFinAusente").substring(4,6) +"/"+form.getValue("FechaFinAusente").substring(6,8) + "/"  + form.getValue("FechaFinAusente").substring(0,4));
	
	/*Condición para validar Fecha de inicio no sea inferior a la de hoy*/
	
	if(fechaInicio<fActual){
		form.alert("La fecha de inicio ingresada no puede ser inferior al día de hoy");
		form.setValues("FechaInicioAusente", "");		
	}
	
	/*Condición para validar Fecha de inicio no sea mayor a fecha fin*/
	
	else if(fechaInicio>fechaFin){
		form.alert("La fecha de inicio ingresada no puede ser superior a la fecha fin");
		form.setValues("FechaFinAusente", "");
	}
	
	/*Condición para validar Fecha de inicio no mayor a 7 dias de la actual*/
	
	else if(fechaInicio>fechaMax){
		form.alert("La fecha en que se hace la solicitud, no debe tener más de 7 días del inicio de la temporalidad.");
		form.setValues("FechaInicioAusente", "");
		}
form.clearMessages();
	form.setValues("Fechatext", form.getValue("FechaInicioAusente"));
}
