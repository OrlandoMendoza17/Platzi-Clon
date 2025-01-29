import LandingHeader from '@/components/(Home)/LandingHeader'
import { User } from '@supabase/supabase-js'
import HomeHeader from '../HomeHeader'
import { createClient } from '@/supabase/server'

type Props = {
  children: React.ReactNode
}

const LoggedHeader = async ({ children }: Props) => {

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    user ?
      <HomeHeader>
        {children}
      </HomeHeader>
      :
      <>
        <LandingHeader />
        {children}
      </>
  )
}

export default LoggedHeader