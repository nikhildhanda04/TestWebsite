import React from 'react'

const InsTable = () => {
  return (
    <>
    <table className='border border-slate-600 font-[inter] text-lg'>
        <thead>
            <tr className=''>
                <th className='border  border-slate-600 mx-4 p-3'>Section</th>
                <th className='border border-slate-600 mx-4 p-3 '>Section Name</th>
                <th className='border border-slate-600 mx-4 p-3'>Total Number of Question</th>
                <th className='border border-slate-600 mx-4 p-3'>Max Score</th>
                <th className='border border-slate-600 mx-4 p-3'>Time(minutes)</th>
                <th className='border border-slate-600 mx-4 p-3 '>Language</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border border-slate-600 mx-4 p-3 font-light'>1</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>English</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>30</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>90</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>30</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>English</td>
            </tr>
            <tr>
                <td className='border border-slate-600 mx-4 p-3 font-light'>1</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>English</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>30</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>90</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>30</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>English</td>
            </tr>
            <tr>
                <td className='border border-slate-600 mx-4 p-3 font-light'>1</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>English</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>30</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>90</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>30</td>
                <td className='border border-slate-600 mx-4 p-3 font-light'>English</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default InsTable
