import { IReservationsData } from '../interfaces/IReservations';
import '../style/modalcar.css';
import { Alert } from './Alert';

interface Props {
    reservationsData: IReservationsData[];
    handleAddReservation: (id: number) => Promise<void>;
    handleReduceReservation: (id: number) => Promise<void>;
    alert: boolean;
}

export const ModalCar = ({ reservationsData, handleAddReservation, alert, handleReduceReservation }: Props) => {
    return (
        <>
            <div
                className="modal fade"
                id="modalCar"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalTitle">
                                Carrito de compras
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div style={{ display: alert ? 'block' : 'none' }}>
                                <Alert />
                            </div>

                            <div className="row">
                                {reservationsData &&
                                    reservationsData.map(({ id, name, qty, price, url_image, fk_car, total }) => (
                                        <>
                                            <div className="col-4">
                                                <div className='container-image-car'>
                                                    <img
                                                        src={url_image}
                                                        className="card-img"
                                                        alt="car"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <h5>{name}</h5>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <h6>Cant: {qty}</h6>
                                                    </div>
                                                    <div className="col-2">
                                                        <button
                                                            className='btn btn-primary btn-sm'
                                                            onClick={() => handleAddReservation(fk_car)}
                                                        >
                                                            +1
                                                        </button>
                                                    </div>
                                                    <div className="col-2">
                                                        <button
                                                            className='btn btn-secondary btn-sm'
                                                            onClick={() => handleReduceReservation(fk_car)}
                                                        >
                                                            -1
                                                        </button>
                                                    </div>
                                                </div>
                                                <h6>Precio: {price}</h6>
                                                <h6>Total: ${total}</h6>
                                            </div>
                                        </>
                                    ))}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
