import { Kitchen } from "@/type-db"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/kitchens`

const getkitchens = async (): Promise<Kitchen[]> => {
  const res = await fetch(URL)
  return res.json(); 
}

export default getkitchens
