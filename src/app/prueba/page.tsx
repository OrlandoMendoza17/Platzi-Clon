import { createClient } from "@/supabase/server"

const PruebaPage = async () => {

  const supabase = await createClient()

  const { data: user } = await supabase.auth.getUser()
  console.log('user', user)

  return (
    <div>
      <a href="kfc://coupons/63204?service=pickup">Abrir cupón en app KFC</a>
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <h2 className="bg-cyan-500 sticky top-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto!</h2>
      <hr className="py-10 block" />
      <h2 className="bg-red-500 sticky top-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto!</h2>
      <hr className="py-10 block" />
      <h2 className="bg-yellow-500 sticky top-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto!</h2>
      <hr className="py-10 block" />
      <h2 className="bg-lime-500 sticky top-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto!</h2>
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
      <hr className="py-10 block" />
    </div>
  )
}

export default PruebaPage