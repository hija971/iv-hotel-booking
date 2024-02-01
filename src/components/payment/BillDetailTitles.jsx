import React from 'react'

function BillDetailTitles({ title, children, mustFill }) {
  return (
    <div>
        <h6 className="font-[montserrat] text-xs font-semibold my-3">{title}{mustFill ? <span className='text-red-600'> *</span> : ""}</h6>
        <div className="w-full border-2 border-slate-300 p-1">{children}</div>
    </div>
  )
}

export default BillDetailTitles