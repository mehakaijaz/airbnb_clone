import Image from "next/image";

const MyReservationsPage=()=>{
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <h1 className="pt-6 pb-7 text-2xl">MyReservationsPage</h1>

        <div>
      <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
        <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                fill
                src='/beach_1.jpg'
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="Beach house"
            />
            </div>
        </div>
        <div className="col-span-1 md:col-span-3">
                                <h2 className="mb-4 text-xl">reservation.property.title</h2>

                                <p className="mb-2"><strong>Check in date:</strong> eservation.start_date</p>
                                <p className="mb-2"><strong>Check out date:</strong> reservation.end_date</p>

                                <p className="mb-2"><strong>Number of nights:</strong> reservation.number_of_nights</p>
                                <p className="mb-2"><strong>Total price:</strong> reservation.total_price</p>

                               </div>
      </div></div>
      
      
    </main>
  );
}
export default MyReservationsPage;
