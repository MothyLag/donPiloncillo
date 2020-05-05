export interface IAddRequisicion{
	idProveedor: string;
	descripcion: string;
	unidad: string;
	cantidad: string;
	partida: string;
	fechaPedido: string;
	linea?: string;
	responsableArea: string;
	departamento: string;
}