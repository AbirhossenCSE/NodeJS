import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <h2>Add Coffee</h2>
            <form>
                <div className='flex w-8/12 mx-auto gap-5'>
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
                            <span className="label-text">Avilable Coffee</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Avilebale Coffie" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;