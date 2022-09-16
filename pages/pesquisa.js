import Link from "next/link";
import React, { useState } from "react";
import PageTitle from "../components/PageTitle";

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
    } catch (err) {
    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (

    <div className="pt-6">
      <PageTitle title='Pesquisa' />
      <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
      <p className=' text-center my-4 mb-6'>
        O restautante x sempre busca por melhor atender os seus cliente.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião
      </p>
      {!sucess && <div className="w-1/6 mx-auto">
        <label className="font-bold mx-auto">Seu nome:</label>
        <input type='text' className="mx-auto p-4 block shadow bg-slate-200 rounded-full my-2" placeholder="Nome" onChange={onChange} name='Nome' value={form.Nome} />
        <label className="font-bold mx-auto">E-mail:</label>
        <input type='text' className="mx-auto p-4 block shadow bg-slate-200 rounded-full my-2" placeholder="Email" onChange={onChange} name='Email' value={form.Email} />
        <label className="font-bold mx-auto">Whatsapp:</label>
        <input type='text' className="mx-auto p-4 block shadow bg-slate-200 rounded-full my-2" placeholder="Whatsapp" onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className="font-bold mx-auto">Nota:</label>
        <div className="flex py-6">
          {notas.map(nota => {
            return (
              <label className="block w-1/6 text-gray-900 text-center">
                {nota} <br />
                <input type='radio' name='Nota' value={nota} onChange={onChange} />
              </label>
            )
          })
          }
        </div>
        <div className="text-center font-bold text-white my-12">
          <button className="bg-stone-900 px-4 py-2 rounded-lg hover:shadow shadow-lg" onClick={save}>Salvar</button>      </div>

      </div>}

      {sucess && <div className="w-1/5 mx-auto ">
        <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">Obrigado por contribuir com a sua sugestão e/ou crítica</p>
        {
          retorno.showCoupon && <div className="text-center border p-4 mb-4">
            Seu cupom: <br />
            <span className="font-bold text-2xl">{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className="text-center border p-4 mb-4">
            <span className="font-bold block mb-2">{retorno.Promo}</span>
            <br />
            <span className="italic"> Tire um print ou foto dessa tela e aprensente ao garçon</span>

          </div>
        }
        {/* Cupom:{JSON.stringify(retorno)} */}
      </div>}
    </div>
  )
}

export default Pesquisa