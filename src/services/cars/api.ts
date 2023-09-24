import { api } from '../../helpers';
import { IData } from '../../interfaces/IHome';

export const getAllCars = async () => {
    try {
        const { data } = await api.get('/cars');
        return data;
    } catch (error) {
        console.warn(error)
    }

    return null;
}

export const getCar = async (id: number) => {
    try {
        const { data } = await api.get(`/cars/${id}`);
        return data;
    } catch (error) {
        console.warn(error)
    }

    return null;
}

export const addCar = async (form: IData) => {
    try {
        const { data } = await api.post(`/cars`, form);
        return data;
    } catch (error) {
        console.warn(error)
    }

    return null;
}

export const updateCar = async (form: IData) => {
    try {
        const { data } = await api.put(`/cars/${form.id}`, form);
        return data;
    } catch (error) {
        console.warn(error)
    }

    return null;
}

export const deleteCar = async (id: number) => {
    try {
        const { data } = await api.delete(`/cars/${id}`);
        return data;
    } catch (error) {
        console.warn(error)
    }

    return null;
}