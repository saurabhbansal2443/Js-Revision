import React from 'react'

const Favourite = () => {
  return (
    <div className='my-5 mx-5 h-screen w-full '>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-4xl'>

              <th>Movie Name</th>
              <th>Popularity </th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody className='text-2xl'>
            {/* row 1 */}
            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-outline btn-error text-2xl"> Remove from Favourite </button>
              </th>
            </tr>

          </tbody>


        </table>
      </div>
    </div>
  )
}

export default Favourite