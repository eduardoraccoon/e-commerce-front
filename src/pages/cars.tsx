import { useEffect, useState } from "react";
import { IData } from "../interfaces/IHome";
import { addCar, deleteCar, getAllCars, getCar, updateCar } from "../services/cars";
import { Modal } from "../components/Modal";
import { ModalDelete } from "../components/ModalDelete";

const initialDataForm = {
    id: 0,
    name: "",
    price: 0,
    qty: 0,
    url_image: ""
}

export const CarsPage = () => {
    const [rows, setRows] = useState<IData[]>();
    const [modalTitle, setModalTitle] = useState<string>("");
    const [form, setForm] = useState<IData>(initialDataForm);
    const [id, setId] = useState<number>(0);

    const getData = async () => {
        const resp = await getAllCars();
        setRows(resp)
    }

    useEffect(() => {
        getData();
    }, []);

    const handleAdd = () => {
        setModalTitle("Agregar");
        setForm(initialDataForm);
    }

    const handleEdit = async (id: number) => {
        setModalTitle("Editar");

        const resp = await getCar(id);
        setForm(resp)
    }

    const handleDelete = (id: number) => {
        setId(id)
    }

    const handleSubmit = async () => {
         modalTitle == "Agregar" ? await addCar(form) : await updateCar(form);
        getData();
    }

    const handleSubmitDelete = async () => {
        await deleteCar(id);
        getData();
    }

    return (
        <>
            <button
                data-bs-toggle="modal"
                data-bs-target="#modalEdit"
                type="button"
                className="btn btn-primary btn-sm mt-5"
                onClick={handleAdd}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                Agregar
            </button>

            <table className="table">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows &&
                        rows.map(({ id, name, qty, price, url_image }) => (
                            <tr key={id}>
                                <th scope="row">{id}</th>
                                <td>{name}</td>
                                <td>{qty}</td>
                                <td>{price}</td>
                                <td>
                                    <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalEdit"
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        onClick={() => handleEdit(id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg>
                                    </button>
                                    <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalDelete"
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal
                modalTitle={modalTitle}
                form={form}
                setForm={setForm}
                handleSubmit={handleSubmit}
            />

            <ModalDelete
                handleSubmitDelete={handleSubmitDelete}
            />
        </>
    )
}
