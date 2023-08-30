const AdminHome = () => {
    return (
        <div>
            <div className="md:flex justify-between gap-20 mt-5">
                <div className="bg-[#9181D9] w-full rounded-md flex justify-center items-center flex-col gap-1 py-5">
                    <h5 className="text-3xl font-bold text-white">Total Sales</h5>
                    <h3 className="text-4xl font-bold text-white">$123654</h3>
                </div>
                <div className="bg-[#FF2941] w-full rounded-md flex justify-center items-center flex-col gap-1 py-5">
                <h5 className="text-3xl font-bold text-white">Total Orders</h5>
                    <h3 className="text-4xl font-bold text-white">123</h3>
                </div>
                <div className="bg-[#2EB9E4] w-full rounded-md flex justify-center items-center flex-col gap-1 py-5">
                <h5 className="text-3xl font-bold text-white">Total Users</h5>
                    <h3 className="text-4xl font-bold text-white">123</h3>
                </div>
                <div className="bg-[#55D447] w-full rounded-md flex justify-center items-center flex-col gap-1 py-5">
                <h5 className="text-3xl font-bold text-white">Today Sales</h5>
                    <h3 className="text-4xl font-bold text-white">$123</h3>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;