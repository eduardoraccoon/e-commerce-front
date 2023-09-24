import { Dispatch, SetStateAction } from "react";
import { IData } from "../interfaces/IHome";

interface Props {
    modalTitle: string;
    form: IData
    setForm: Dispatch<SetStateAction<IData>>;
    handleSubmit: () => Promise<void>;
}

export const Modal = ({ modalTitle, form, setForm, handleSubmit }: Props) => {

    const handleChangeInput = ({ target }: any) => {
        const { value, name } = target;
        setForm({ ...form, [name]: value })
    }

    return (
        <>
            <div
                className="modal fade"
                id="modalEdit"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalTitle">
                                {modalTitle}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChangeInput}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="qty" className="form-label">
                                    Cantidad
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="qty"
                                    name="qty"
                                    value={form.qty}
                                    onChange={handleChangeInput}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Precio
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    value={form.price}
                                    onChange={handleChangeInput}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="url_image" className="form-label">
                                    URL Imagen
                                </label>
                                <input
                                    className="form-control"
                                    id="url_image"
                                    name="url_image"
                                    value={form.url_image}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={handleSubmit}
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
