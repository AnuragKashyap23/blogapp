import { useEffect, useState } from "react"


const useTheme = () => {
    const [isDark, setIsDark] = useState(false)
    useEffect(()=> {
        if(isDark){
            console.log('apply dark mode')
        }
        else {
            console.log('apply light mode')
        }
    },[])

    const toggleTheme = () => {
        setIsDark(isDark?false:true)
    }
  return {isDark,toggleTheme}
}

export default useTheme