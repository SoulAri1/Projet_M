import React from 'react'
import { useForm } from 'react-hook-form'

export default function ContactForm(){
  const { register, handleSubmit, formState:{errors, isSubmitSuccessful} } = useForm()
  const onSubmit = (data) => {
    // mock submit
    console.log('contact submit', data)
    alert('Message envoyé — merci ! (mock)')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-xl shadow-soft">
      <div>
        <label className="block text-sm font-medium">Nom</label>
        <input {...register('name',{required:true})} className="mt-2 w-full p-3 border rounded-xl" />
        {errors.name && <div className="text-red-600 text-sm">Champ requis</div>}
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input {...register('email',{required:true})} className="mt-2 w-full p-3 border rounded-xl" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea {...register('message',{required:true})} className="mt-2 w-full p-3 border rounded-xl" rows={5} />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-[var(--brand)] text-white px-5 py-3 rounded-xl">Envoyer</button>
      </div>
    </form>
  )
}
