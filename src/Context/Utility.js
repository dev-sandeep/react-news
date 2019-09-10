import React from 'react'

export const restrictText = (str, limit)=>(
        str.length > limit? str.slice(0, limit)+'...':str
)