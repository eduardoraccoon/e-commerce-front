interface Props {
    handleSubmitDelete: () => Promise<void>;
}
export const ModalDelete = ({ handleSubmitDelete }: Props) => {
    return (
        <>
            <div
                className="modal fade"
                id="modalDelete"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalTitle">
                                Eliminar
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3>¿Desea eliminar el elemento?</h3>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={handleSubmitDelete}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
