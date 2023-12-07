import React from 'react'

const SinglePerson = ({avatar_url,login,organizations_url}) => {
  return (
    <>
    <div className="col-md-3">
                    <div className="card p-3 m-2 text-capitalize rounded-3">
                         <img  src={avatar_url} alt="" />
                         <h4>{login}</h4>
                         <h4>{organizations_url}</h4>

                    </div>
    </div>
    </>
  )
}

export default SinglePerson