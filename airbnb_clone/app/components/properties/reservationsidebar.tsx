const ReservationSidebar = ()=>{
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
        <h2 className="mb-5 text-2xl">propertyprice_per_nigh per night</h2>
        
        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-bold text-xs">Guests
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </select></label>
        </div>
        <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">book</div>
        <div className="mb-4 flex justify-between align-center">
                <p>$property.price_per_night * nights</p>

                <p>$propertyprice_per_night * nights</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Django Airbnb fee</p>

                <p>$fee</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>

                <p>$totalPrice</p>
            </div>
        </aside>
    )
}
export default ReservationSidebar;