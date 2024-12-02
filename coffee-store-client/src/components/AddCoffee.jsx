import React from 'react';

const AddCoffee = () => {
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add Coffee</h2>
            <form>
                <div className='flex'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffie Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffie Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Avilable Coffee Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Avilebale Coffie Cuantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;