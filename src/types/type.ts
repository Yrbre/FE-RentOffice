export interface Office{
    id: number;
    price: number;
    duration: number;
    name: string;
    slug: string;
    city: City;
    thumbnail: string;
    photos: photo[];
    benefits: benefit[];
    about: string;
    is_open: boolean;
}

interface photo
{
    id: number;
    photo: string;
}

interface benefit
{
    id: number;
    name: string;
}

export interface City{
    id: number;
    name: string;
    slug: string;
    photo: string;
    officeSpace_count: number;
    officeSpaces: Office[]; 
}

export interface BookingDetails{
    id: number;
    name: string;
    phone_number: string;
    booking_trx_id: string;
    is_paid: boolean;
    duration: number;
    total_amount: number;
    started_at: string;
    ended_at: string;
    office: Office;
}