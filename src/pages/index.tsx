import { useEffect, useState } from 'react'
import { getAllCars } from '../services/cars';
import Card from '../components/Card';
import { IData } from '../interfaces/IHome';
import { addReservation, getReservations, reduceReservation } from '../services/reservations';
import { ModalCar } from '../components/ModalCar';
import { IReservationsData } from '../interfaces/IReservations';
import { Alert } from '../components/Alert';

export default function HomePage() {
    const [data, setData] = useState<IData[]>();
    const [reservationsData, setReservationsData] = useState<IReservationsData[]>([]);
    const [alert, setAlert] = useState<boolean>(false);
    const [alertModal, setAlertModal] = useState<boolean>(false);

    const getData = async () => {
        const resp = await getAllCars();
        setData(resp)
    }

    const handleAddReservation = async (id: number) => {
        setAlert(true);
        await addReservation(id);
        setAlert(false);
    }

    const handleAddReservationModal = async (id: number) => {
        setAlertModal(true);
        await addReservation(id);
        getAllReservations();
        setAlertModal(false);
    }

    const handleReduceReservation = async (id: number) => {
        setAlertModal(true);
        await reduceReservation(id);
        getAllReservations();
        setAlertModal(false);
    }

    const getAllReservations = async () => {
        const resp = await getReservations();
        setReservationsData(resp);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='text-center'>
                <h1 className='title-header'>Autos disponibles para ti</h1>
                <h6>Encuentra el auto perfecto al mejor precio del mercado</h6>
            </div>

            <button
                className='btn btn-primary d-inline-flex align-items-center'
                data-bs-toggle="modal"
                data-bs-target="#modalCar"
                onClick={getAllReservations}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
            </button>

            <div style={{ display: alert ? 'block' : 'none' }}>
                <Alert />
            </div>

            <div className="row pt-5 justify-content-center">
                {
                    data &&
                    data.map(({ id, name, price, url_image }) => (
                        <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <Card
                                id={id}
                                title={name}
                                price={price}
                                urlImage={url_image}
                                handleAddReservation={handleAddReservation}
                            />
                        </div>
                    ))
                }
            </div>

            <ModalCar
                reservationsData={reservationsData}
                handleAddReservation={handleAddReservationModal}
                alert={alertModal}
                handleReduceReservation={handleReduceReservation}
            />
        </>
    )
}
