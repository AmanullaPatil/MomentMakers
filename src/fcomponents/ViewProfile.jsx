import React from 'react'

const ViewProfile = () => {
  return (
    <>

      <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
        View
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Message</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Please <a href="/login">Login</a> OR <a href="/signup">Create your account</a> to view details of the Vendor
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default ViewProfile