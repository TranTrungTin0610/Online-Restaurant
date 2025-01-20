"use client"
import React from 'react'
import Box from './box'
import { cn } from '@/lib/utils'
interface FilterContainerProps{ 
    children: React.ReactNode, 
    clasName?:string
}


const FilterContainer = ({clasName, children}: FilterContainerProps) => {
  return (
   <Box className={cn("flex-col gap-4", clasName)}>
            {children}
   </Box>
  )
}

export default FilterContainer
