import React from 'react'
import { COMPETITION_LIST } from '../../utils/helper'

const Competition = () => {
  return (
    <div className='competition-section d-flex justify-content-center align-items-center'>
      <div className='competition-container'>
        <div className='row d-flex justify-content-between'>
          <div className='col-12 col-lg-6'>
            <h1 className='competition-heading'>Competition</h1>
            <p className='m-0 competition-description'>
              Given our best in class offering, we need to cut through by opting
              for penetration pricing.
            </p>
            <p className='m-0 mt-2 competition-description'>
              This will allow us to disrupt an established market by introducing
              our product and service at a lower price to entice new customers
              to purchase or subscribe. This strategy will help us capture the
              attention of this very large audience in need of a good solution.
            </p>
            <p className='m-0 mt-2 competition-description'>
              The current return and refund process centres around either
              traditional advice or software. By combining both together for an
              aggressively affordable fee, we think we can capture much of the
              demand for those people that feel competent in managing their own
              refunds / returns.
            </p>
            <p className='m-0 mt-2 competition-description'>
              As well as being the cheapest in market, our product offers
              everything a sole trader needs in one place, whilst pricing
              innovation of zero commission rather than a commission, will drive
              customers that are particularly price sensitive.
            </p>
          </div>
          <div className='col-12 col-lg-6 pt-32'>
            <div className='d-flex align-items-center justify-content-center sm-py-xl border-xl overflow-hidden w-100'>
              <div className=''>
                <div className='table-responsive border-xl'>
                  <table className='custom-table-bg py-5'>
                    <thead>
                      <tr className='text-center'>
                        <th class=''></th>
                        <th className='bg-white table-heading border-radius-top'>
                          Rift
                        </th>
                        <th className='bg-white table-heading border-radius-top'>
                          Taxscout
                        </th>
                        <th className='bg-white table-heading border-radius-top'>
                          Coconut
                        </th>
                        <th className='bg-aqua table-heading border-radius-top'>
                          Pie
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPETITION_LIST.map((item, i) => (
                        <tr key={i}>
                          <td
                            className={`text-white Competition-td bg-transparent border-b-none ${
                              i === 3 ? 'max-w-sm' : ''
                            }`}
                          >
                            {item.item}
                          </td>
                          <td
                            className={`bg-white Competition-td border-b-none text-center fee-heading ${
                              i === 5 ? 'border-radius-bottom ' : ''
                            } `}
                          >
                            {item.rift}
                          </td>
                          <td
                            className={`bg-white Competition-td border-b-none text-center fee-heading ${
                              i === 5 ? 'border-radius-bottom ' : ''
                            } `}
                          >
                            {item.taxscout}
                          </td>
                          <td
                            className={`bg-white Competition-td border-b-none text-center fee-heading ${
                              i === 5 ? 'border-radius-bottom ' : ''
                            }`}
                          >
                            {item.coconut}
                          </td>
                          <td
                            className={`bg-aqua Competition-td border-b-none text-center fee-heading ${
                              i === 5 ? 'border-radius-bottom px-sm' : ''
                            }`}
                          >
                            {item.pie}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competition