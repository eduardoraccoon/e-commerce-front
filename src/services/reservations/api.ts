import { api } from '../../helpers';

export const getReservations = async () => {
    try {
        const { data } = await api.get(`/reservations`);
        return data;
    } catch (error) {
        console.warn(error)
    }

    return null;
}

export const reduceReservation = async (id: number) => {
    try {
        const { data } = await api.delete(`/reservations/${id}`);
        return data;
    } catch (error) {
        console.warn(error)
    }

    return null;
}

export const addReservation = async (id: number) => {
    try {
        const { data } = await api.put(`/reservations/${id}`);
        return data;
    } catch (error) {
        console.warn(error)
    }

    return null;
}