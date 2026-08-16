export const VehicleGallerySection = () => {
    return (
        <section className='mt-16'>
            <div className='mx-auto grid max-w-[1380px] grid-cols-1 gap-3 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8'>
                <div className='aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto'>
                    <img
                        src='/images/cars/vehicle-1.webp'
                        alt='Mercedes-Benz dashboard'
                        className='h-full w-full object-cover'
                    />
                </div>

                <div className='grid grid-cols-1 gap-3'>
                    <div className='aspect-[16/10] overflow-hidden rounded-md'>
                        <img
                            src='/images/cars/vehicle-2.jpg'
                            alt='Mercedes-Benz exterior front'
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='aspect-[16/10] overflow-hidden rounded-md'>
                        <img
                            src='/images/cars/vehicle-3.jpg'
                            alt='Mercedes-Benz exterior side'
                            className='h-full w-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
