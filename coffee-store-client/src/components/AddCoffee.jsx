import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffie = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffie);

        // Send to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* 1ts row */}
                <div className='md:flex gap-6 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffie Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffie Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Avilable Coffee Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Avilebale Coffie Cuantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 2nd row */}
                <div className='md:flex gap-6 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Coffie Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 3rd row */}
                <div className='md:flex gap-6 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Dwtails</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Dwtails" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 3rd row */}
                <div className=' mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block' />
            </form>
        </div>
    );
};

export default AddCoffee;