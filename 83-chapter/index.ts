type BaseVehicle = {
    make: string
    model: string
}

type MotoBike = BaseVehicle & {
    type: 'motobike';
    fuel: 'petrol'
}

type Car = BaseVehicle & {
    type: 'car';
    fuel: 'diesel' | 'petrol';
    doors: number;
}

type Vehicle = Car | MotoBike;

const myBike: Vehicle = {
    type: 'motobike',
    fuel: 'petrol',
    make: 'jj',
    model: 'a'
}