import React from 'react';

const Users2 = () => {

    const handleUserDelete = id => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    // delete data
                    fetch(`http://localhost:5000/users/${id}`, {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
    
                            // // update the loaded coffee state
                            // const remainingUsers = users.filter(user => user._id !== id);
                            // setUsers(remainingUsers);
                        }
                        
                    })
    
                }
            });
        }

    return (
        <div>
            
        </div>
    );
};

export default Users2;