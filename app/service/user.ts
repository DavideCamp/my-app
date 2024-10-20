import { supabase } from "../lib/supabase-service";

export async function getUser() {

    await supabase.auth.updateUser({
        data: { name: 'davide111' }
      })

}