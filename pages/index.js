import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div>
      <PageTitle title='Principal' />
      <p className='mt-12 text-center'>
        O restautante x sempre busca por melhor atender os seus cliente.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião
      </p>
      <div className='text-center font-bold text-white my-12 '>
        <Link href='/pesquisa'>
          <a className='bg-stone-900 px-4 py-2 rounded-lg hover:shadow shadow-lg '> Avaliar </a>
        </Link>
      </div>
      {!data && <p>carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='mt-12 text-center'>
          {data.message}
        </p>
      }
    </div>
  )
}
export default Index